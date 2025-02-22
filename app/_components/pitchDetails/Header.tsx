import Image from "next/image";
import React from "react";
import PitchDate from "@/app/_ui/PitchDate";
import headerTile from "@/public/header-tyle.png";

export default function Header() {
  return (
    <header className="relative h-[300px] md:h-[400px] w-full bg-color-primary flex items-center justify-center px-8">
      <Image
        src={headerTile}
        alt="tile"
        quality={100}
        priority={true}
        fill
        className="object-cover"
      />

      {/* content */}
      <div className="absolute flex flex-col items-center  justify-center border">
        {/* created date */}

        <PitchDate />
        <div className="header-div  ">
          <h1 className="uppercase">jsm academy materclass</h1>
        </div>
        <p className="header-white-text max-w-[970px] text-center">
          The platform offering project-based learning for web developers, aimed
          at leveling up mid-developers to mid-level developers by focusing on
          real-world applications.
        </p>
      </div>
    </header>
  );
}
