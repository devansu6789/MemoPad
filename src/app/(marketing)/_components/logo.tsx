import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="md:flex hidden items-center gap-x-2">
      <Image
        src="/logo.svg"
        alt="Logo"
        height="40"
        width="40"
        className="dark:hidden"
      />
      <Image
        src="/logo-dark.svg"
        alt="Logo"
        height="40"
        width="40"
        className="hidden dark:block"
      />
      <p className="font-bold">MemoPad</p>
    </div>
  );
};
