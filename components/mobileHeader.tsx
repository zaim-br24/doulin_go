import React from "react";
import MobileSidebar from "./mobileSidebar";

export default function MobileHeader() {
  return (
    <div className="lg:hidden fixed bg-green-500 px-6 top-0 border-b h-[50px] flex items-center w-full z-50">
      <MobileSidebar />
    </div>
  );
}
