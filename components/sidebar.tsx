import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SidebarItem from "./sidebarItem";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
type Props = {
  className?: string;
};

export default function Sidebar({ className }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col border-r-2 px-2 h-full lg:w-[256px] lg:fixed left-0 top-0",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3 ">
          <Image src="/mascot.svg" height={40} width={40} alt="logo" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide ">
            Lingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-2 flex-1">
        <SidebarItem label="Learn" iconSrc="/learn.svg" href="/learn" />
        <SidebarItem
          label="leaderboard"
          iconSrc="/leaderboard.svg"
          href="/leaderboard"
        />
        <SidebarItem label="quests" iconSrc="/quests.svg" href="/quests" />
        <SidebarItem label="shop" iconSrc="/shop.svg" href="/shop" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
}
