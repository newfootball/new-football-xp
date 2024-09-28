import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit } from "lucide-react";
import React from "react";
import QuickAccess from "./QuickAccess";

function Messages() {
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Messages</h1>
        <h2 className="text-lg">Inbox</h2>
        <Button variant="ghost" size="icon">
          <Edit className="s-6" />
        </Button>
      </div>

      <div className="px-4 mb-4">
        <Input
          type="text"
          placeholder="Search here"
          className="w-full bg-gray-100 rounded-full"
        />
      </div>

      <QuickAccess />
    </div>
  );
}

export default Messages;
