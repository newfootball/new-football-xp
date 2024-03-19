"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User2 } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { signOutAction } from "./auth.action";

export type LoggedInDropdownProps = PropsWithChildren;

export const LoggedInDropdown = (props: LoggedInDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{props.children}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <User2 size={16} className="mr-2 " />
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <User2 size={16} className="mr-2 " />
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            signOutAction();
          }}
        >
          <LogOut size={16} className="mr-2 " />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
