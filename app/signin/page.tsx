import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";

import Signin from "@/app/_components/auth/Signin";

type metadata = {
  title: string;
};

export const metadata: metadata = {
  title: "Sign in",
};

export default function Page() {
  return (
    <div className="max-w-[500px] mx-auto flex flex-col items-center h-screen justify-center">
      <div className="relative w-[200px] h-[100px]  ">
        <Image
          src={logo}
          alt="Logo"
          quality={100}
          priority={true}
          fill
          className="object-contain"
        />
      </div>

      <Signin />
    </div>
  );
}
