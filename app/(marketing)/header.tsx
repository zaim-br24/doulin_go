"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">2Bros</span>
              <Image
                className="h-8 w-auto sm:h-10"
                src="/placeholder.svg?height=40&width=40"
                alt=""
                width={40}
                height={40}
              />
            </a>
          </div>
          <nav className="hidden md:flex space-x-10">
            <a
              href="#about"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#menu"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Menu
            </a>
            <a
              href="#process"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              How It Works
            </a>
            <a
              href="#contact"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Contact
            </a>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary/90">
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
