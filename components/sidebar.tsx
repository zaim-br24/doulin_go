import { cn } from "@/lib/utils";
import React from "react";
type Props = {
  className?: string;
};

export default function Sidebar({ className }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col border-r-2 px-2 bg-blue-500 h-full lg:w-[256px] lg:fixed left-0 top-0",
        className
      )}
    >
      Sidebar
    </div>
  );
}
