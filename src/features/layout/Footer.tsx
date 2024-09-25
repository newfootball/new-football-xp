import { auth } from "@/auth/auth";
import { Button } from "@/components/ui/button";
import { House, MessageCircle, PlusCircle, Search, User } from "lucide-react";
import Link from "next/link";
import { SignInButton } from "../auth/SignInButton";

export async function Footer() {
  const session = await auth();

  return (
    <footer className="fixed inset-x-0 bottom-0 border-t bg-background px-4 py-2">
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between">
        <Button variant="ghost" className="flex flex-col items-center">
          <House className="size-6 text-primary" />
          <span className="mt-1 text-xs font-medium text-primary">Home</span>
        </Button>

        <Button variant="ghost" className="flex flex-col items-center">
          <Search className="size-6" />
          <span className="mt-1 text-xs text-muted-foreground">Explore</span>
        </Button>

        <Link href="/post/new">
          <Button variant="ghost" className="flex flex-col items-center">
            <PlusCircle className="size-6 text-muted-foreground" />
            <span className="mt-1 text-xs text-muted-foreground">Create</span>
          </Button>
        </Link>

        <Button variant="ghost" className="flex flex-col items-center">
          <MessageCircle className="size-6 text-muted-foreground" />
          <span className="mt-1 text-xs text-muted-foreground">Chats</span>
        </Button>

        <Button variant="ghost" className="flex flex-col items-center">
          {session?.user ? (
            <Link href="/profile" className="text-xs">
              <User className="size-6 text-muted-foreground" />
              <span className="mt-1 text-xs text-muted-foreground">
                Profile
              </span>
            </Link>
          ) : (
            <SignInButton />
          )}
        </Button>
      </nav>
    </footer>
  );
}
