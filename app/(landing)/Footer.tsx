import { auth } from "@/auth/auth";
import {
  Home,
  LogIn,
  MessageSquare,
  PlusSquare,
  Search,
  User,
} from "lucide-react";
import Link from "next/link";

export async function Footer() {
  const session = await auth();

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <nav className="flex justify-around items-center h-16">
        <Link
          href="/"
          className="flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-indigo-600"
        >
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link
          href="/search"
          className="flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-indigo-600"
        >
          <Search size={24} />
          <span className="text-xs mt-1">Search</span>
        </Link>
        <Link
          href="/post/new"
          className="flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-indigo-600"
        >
          <PlusSquare size={24} />
          <span className="text-xs mt-1">New Post</span>
        </Link>
        <Link
          href="/messages"
          className="flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-indigo-600"
        >
          <MessageSquare size={24} />
          <span className="text-xs mt-1">Messages</span>
        </Link>
        {session?.user ? (
          <Link
            href="/profile"
            className="flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-indigo-600"
          >
            <User size={24} />
            <span className="text-xs mt-1">Profile</span>
          </Link>
        ) : (
          <Link
            href="/login"
            className="flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-indigo-600"
          >
            <LogIn size={24} />
            <span className="text-xs mt-1">Login</span>
          </Link>
        )}
      </nav>
    </footer>
  );
}
