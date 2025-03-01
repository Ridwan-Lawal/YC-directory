import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";

export default function Loading() {
  return (
    <div className="h-screen  flex items-center justify-center">
      <div className="spinner-container">
        <Image src={logo} alt="logo" quality={100} priority={true} />
      </div>
    </div>
  );
}
