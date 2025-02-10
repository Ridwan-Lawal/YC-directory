import Image from "next/image";
import React from "react";
import headerTile from "@/public/header-tyle.png";
import pitchvotegrow from "@/public/pitch-vote-grow.png";
import Form from "next/form";
import searchIcon from "@/public/search.png";

export default function Header() {
  return (
    <header className="relative h-[400px] md:h-[531px] border border-green-700 bg-color-primary flex items-center justify-center px-8">
      <Image src={headerTile} alt="tile" fill className="object-cover" />

      <div className="border-2 border-blue-700 absolute space-y-[26px] md:space-y-[32px] px-8">
        {/* pitch vote and grow */}
        <div className="flex flex-col items-center">
          <div className="relative w-[200px] h-[50px] md:w-[271px] md:h-[45px]">
            <Image
              src={pitchvotegrow}
              alt="pitch"
              quality={100}
              placeholder="blur"
              priority={true}
              fill
              className="object-contain"
            />
          </div>

          {/* dark side */}
          <div className="header-div">
            <h1>Pitch Your Startup, Connect with Entrepreneurs</h1>
          </div>
          <p className="header-white-text text-center">
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
            Competitions
          </p>
        </div>

        {/* search form  */}
        <Form
          action=""
          className="flex items-center  w-full max-w-[700px] mx-auto h-[50px] bg-white  md:h-[65px] rounded-[80px] border-4 border-black overflow-hidden pr-5 pl-5 md:pr-5 md:pl-8"
        >
          <input
            type="text"
            autoComplete="query"
            name="query"
            id="query"
            className="flex-grow text-lg  md:text-xl font-semibold placeholder:text-lg md:placeholder:text-xl placeholder:font-semibold focus:outline-none"
            placeholder="Search here..."
          />
          <button
            type="submit"
            className="relative w-[30px] h-[30px] md:w-[45px] md:h-[45px]"
          >
            <Image
              src={searchIcon}
              alt="search"
              quality={100}
              placeholder="blur"
              priority={true}
              fill
              className="object-contain"
            />
          </button>
        </Form>
      </div>
    </header>
  );
}
