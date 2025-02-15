import React from "react";
import headerTile from "@/public/header-tyle.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full h-[250px] bg-color-primary flex items-center justify-center">
      <Image
        src={headerTile}
        alt="tile"
        quality={100}
        priority={true}
        fill
        className="object-cover"
      />

      <div className="absolute header-div">
        <h2 className="uppercase">submit your startup pitch</h2>
      </div>
    </header>
  );
}
