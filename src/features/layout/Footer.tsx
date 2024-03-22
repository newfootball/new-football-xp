import { auth } from "@/auth/auth";
import { Layout } from "@/components/layout";
import { ImagePlus, User } from "lucide-react";
import Link from "next/link";
import { SignInButton } from "../auth/SignInButton";

export const Footer = async () => {
  const session = await auth();

  return (
    <footer className="fixed inset-x-0 bottom-0 m-auto border-t border-accent bg-background py-2">
      <Layout className=" flex items-center gap-2">
        <div className="flex-1"></div>
        <div className="flex-1">
          {session?.user ? (
            <Link href="/post/new">
              <ImagePlus size={32} />
            </Link>
          ) : (
            <SignInButton />
          )}
        </div>
        <div>
          <Link href="/profile" className="text-xs">
            <User size={32} />
          </Link>
        </div>
      </Layout>
    </footer>
  );
};
