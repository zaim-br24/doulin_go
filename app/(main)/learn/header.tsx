import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
};
export default function Header({ title }: Props) {
  return (
    <div className="sticky top-0 bg-white pb-3 lg:pt-[28px] lg:mt-[-28px] flex items-center justify-between border-b-2 mb-5 text-neutral-400 lg:z-50">
      <Link href="/courses">
        <Button variant="ghost" size="sm" className="w-full">
          <ArrowLeftIcon className="h-5 w-5 stroke-2 text-neutral-400" />
        </Button>
      </Link>
      <h1 className="text-lg font-bold">{title}</h1>
      <div></div>
    </div>
  );
}
