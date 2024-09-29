import { auth } from "@/auth/auth";
import { cn } from "@/lib/utils";
import { Home, LogIn, MessageSquare, Plus, Search, User } from "lucide-react";
import Link from "next/link";

const NavItem = ({
  href,
  children,
  className,
  text,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  text: string;
}) => (
  <Link
    href={href}
    className={cn(
      "flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-indigo-600",
      className
    )}
  >
    {children}
    <span className="text-xs mt-1 hidden sm:inline">{text}</span>
  </Link>
);

export async function Footer() {
  const session = await auth();

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-4">
      <nav className="flex justify-around items-center h-16">
        <NavItem href="/" text="Home">
          <Home size={24} />
        </NavItem>

        <NavItem href="/search" text="Search">
          <Search size={24} />
        </NavItem>

        <NavItem
          href="/post/new"
          className="bg-black rounded-full -mt-8 shadow-lg"
          text="New Post"
        >
          <Plus size={24} />
        </NavItem>

        <NavItem href="/messages" text="Messages">
          <MessageSquare size={24} />
        </NavItem>

        {session?.user ? (
          <NavItem href="/profile" text="Profile">
            <User size={24} />
          </NavItem>
        ) : (
          <NavItem href="/login" text="Login">
            <LogIn size={24} />
          </NavItem>
        )}
      </nav>
    </footer>
  );
}
