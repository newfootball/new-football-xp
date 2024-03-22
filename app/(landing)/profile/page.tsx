import { auth } from "@/auth/auth";
import { Container } from "@/components/container";
import Image from "next/image";
import { notFound } from "next/navigation";
import { RulesLinks } from "./RulesLinks";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    return notFound();
  }

  return (
    <>
      <Container>
        <div className="mt-5 flex items-center gap-4">
          {session.user.image ? (
            <Image
              className="rounded-full"
              src={session.user.image}
              alt={`${session.user.name ?? "-"}'s profile picture`}
              width={96}
              height={96}
            />
          ) : null}
        </div>
        <div className="mx-auto mt-5 flex items-center gap-4">
          <h1 className="flex-col uppercase">
            {session.user.name ?? "Anonymous"}
          </h1>
        </div>

        {JSON.stringify(session.user)}

        <RulesLinks />
      </Container>
    </>
  );
}
