import Link from "next/link";
import React, { act } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

type Props = {
  activeCourse: {
    imageSrc: string;
    title: string;
  }; //TODO: replace with DB types
  points: number;
  hearts: number;
  hasActiveSubscription: boolean;
};
export default function UserProgress({
  activeCourse,
  points,
  hearts,
  hasActiveSubscription,
}: Props) {
  return (
    <div className="w-full flex items-center justify-between gap-x-2">
      <Link href="courses">
        <Button variant={"ghost"}>
          <Image
            src={activeCourse.imageSrc}
            height={32}
            width={32}
            alt={activeCourse.title}
            className="rounded-md border"
          />
        </Button>
      </Link>
      <Link href={"/shop"}>
        <Button variant={"ghost"} className="text-orange-500">
          <Image
            src={"/Points.svg"}
            height={28}
            width={28}
            alt={"points"}
            className="mr-2"
          />
          {points}
        </Button>
      </Link>
      <Link href={"/shop"}>
        <Button variant={"ghost"} className="text-rose-500">
          <Image
            src={"/Heart.svg"}
            height={28}
            width={28}
            alt={"hearts"}
            className="mr-2"
          />
          {hasActiveSubscription ? (
            <InfinityIcon className="h-5 w-5 stroke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
}
