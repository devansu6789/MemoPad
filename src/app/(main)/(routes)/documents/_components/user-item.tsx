"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Ghost, LucideChevronsLeftRight } from "lucide-react";
import Image from "next/image";

import React from "react";

const UserItem = () => {
  // const user = useUser(); to be added
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center text-sm p-3 w-full hover:bg-primary/5">
          <div className="gap-x-2 flex items-center max-w-[150px]">
            <Image
              src="/avatar.jpg"
              alt="empty"
              height="30"
              width="30"
              className="rounded-full"
            />
            <span className="text-start font-medium line-clamp-1">
              {/*TODO : username to be fetched from logged in user's details */}
              Antonio&apos;s MemoPad
            </span>
          </div>
          <LucideChevronsLeftRight className="rotate-90 ml-2 text-muted-foreground h-4 w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80"
        align="start"
        alignOffset={11}
        forceMount
      >
        <div className="flex flex-col space-y-4 p-2">
          <p className="text-xs font-medium leading-none text-muted-foreground">
            {/*TODO : user email to be fetched from logged in user's details */}
            test@testmail.com
          </p>
          <div className="flex items-center gap-x-2">
            <div className="rounded-md bg-secondary p-1">
              {/* TODO : below image should be an avatar of user profil to be fetched from userdetails */}
              <Image
                src="/avatar.jpg"
                alt="empty"
                height="20"
                width="20"
                className="rounded-full"
              />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium line-clamp-1">
                Antonio&apos;s MemoPad
              </p>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          asChild
          className="w-full cursor-pointer text-muted-foreground"
        >
          {/* TODO LogOut should be linked to user profile */}
          <Button variant="ghost">LogOut</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserItem;
