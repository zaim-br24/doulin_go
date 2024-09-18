import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/hr.svg"
            height={40}
            width={40}
            alt="Croatian"
            className="mr-4 rounded-md"
          />
          Croatian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/es.svg"
            height={40}
            width={40}
            alt="Spanish"
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>{" "}
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/fr.svg"
            height={40}
            width={40}
            alt="french"
            className="mr-4 rounded-md"
          />
          french
        </Button>{" "}
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/it.svg"
            height={40}
            width={40}
            alt="italian"
            className="mr-4 rounded-md"
          />
          italian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/jp.svg"
            height={40}
            width={40}
            alt="japanese"
            className="mr-4 rounded-md"
          />
          japanese
        </Button>
      </div>
    </footer>
  );
}
