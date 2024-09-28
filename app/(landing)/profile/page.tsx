import { auth } from "@/auth/auth";
import { Container } from "@/components/container";
import Image from "next/image";
import { notFound } from "next/navigation";
import { RulesLinks } from "./RulesLinks";
import ProfileInfo from "./ProfileInfo";
import { Prisma } from "@prisma/client";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    return notFound();
  }

  console.log(session.user);

  return (
    <>
      <Container>
        <ProfileInfo user={session.user as Prisma.UserCreateInput} />

        <RulesLinks />
      </Container>
    </>
  );
}
