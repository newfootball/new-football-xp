"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  title: z
    .string()
    .min(1, "Le titre est requis")
    .max(100, "Le titre ne doit pas dépasser 100 caractères"),
  medias: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Au moins un fichier est requis")
    .refine(
      (files) => files.length <= 5,
      "Vous ne pouvez pas télécharger plus de 5 fichiers"
    )
    .refine(
      (files) =>
        Array.from(files).every((file) => file.size <= 5 * 1024 * 1024),
      "Chaque fichier doit être inférieur à 5 Mo"
    ),
});

type FormValues = z.infer<typeof formSchema>;

const NewPostForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Ici, vous pouvez ajouter la logique pour envoyer les données au serveur
  };

  return (
    <Card className="p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titre</FormLabel>
                <FormControl>
                  <Input placeholder="Saisissez le titre" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="medias"
            render={({ field: { onChange, value, ...rest } }) => (
              <FormItem>
                <FormLabel>Médias</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    multiple
                    onChange={(e) => onChange(e.target.files)}
                    {...rest}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Enregistrer</Button>
        </form>
      </Form>
    </Card>
  );
};

export default NewPostForm;
