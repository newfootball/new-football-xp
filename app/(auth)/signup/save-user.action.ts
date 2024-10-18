"use server";

import { hashPassword } from "@/lib/password";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const signUpSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;

export const saveUser = async (data: SignUpFormData) => {
  const validatedData = signUpSchema.parse(data);

  // Hacher le mot de passe
  const hashedPassword = await hashPassword(validatedData.password);

  // Créer l'utilisateur
  const user = await prisma.user.create({
    data: {
      name: validatedData.username,
      email: validatedData.email,
      password: hashedPassword,
    },
  });

  // Ne pas renvoyer le mot de passe
  const { password: _, ...userWithoutPassword } = user;

  return userWithoutPassword;
};
