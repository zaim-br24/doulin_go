"use client";
import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
type Props = {
  label: string;
  iconSrc: string;
  href: string;
};

export default function SidebarItem({ label, iconSrc, href }: Props) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Button
      size="lg"
      variant={active ? "sidebarOutline" : "sidebar"}
      className="justify-start"
      asChild
    >
      <Link href={href}>
        <Image
          src={iconSrc}
          className="mr-5"
          height={32}
          width={32}
          alt="label"
        />
        {label}
      </Link>
    </Button>
  );
}
