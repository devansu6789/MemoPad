"use client";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const Documents = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        alt="empty"
        height="300"
        width="300"
        className="dark:hidden"
      />
      <Image
        src="/empty.png"
        alt="empty"
        height="300"
        width="300"
        className="hidden dark:block"
      />
      {/* User name should be retrived from the logged in user details */}
      <h2 className="text-lg font-medium">Welcome to Antonio&apos;s MemoPad</h2>
      <Button
        onClick={() => {
          console.log("note created!!");
        }}
      >
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default Documents;
