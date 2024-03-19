import { auth } from "@/auth/auth";
import { Container } from "@/components/container";
import { notFound } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    return notFound();
  }

  return <Container>{JSON.stringify(session.user)}</Container>;
}
