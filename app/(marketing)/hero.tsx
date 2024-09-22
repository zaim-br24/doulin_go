import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src=""
          alt="Restaurant interior"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Delicious Food Delivered to Your Doorstep
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          Order your favorite dishes online and get them fresh and fast.
        </p>
        <div className="mt-10">
          <Button
            size="lg"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
          >
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
}
