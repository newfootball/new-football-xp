import { comparePassword } from "@/lib/password";
import { prisma } from "@/lib/prisma";

const getUserLogin = async (email: string, password: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { name: email }],
      },
    });

    if (!user) {
      return null;
    }

    const isPasswordValid = await comparePassword(
      password,
      user?.password ?? ""
    );

    if (!isPasswordValid) {
      return null;
    }

    // Ne pas renvoyer le mot de passe
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export { getUserLogin };
