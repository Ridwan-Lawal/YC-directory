"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/logo.png";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface NavProps {
  userAvatar: string;
}

export default function NavBar({ userAvatar }: NavProps) {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const onToggleNav = () => setIsNavOpen((cur: boolean) => !cur);

  return (
    <nav>
      <div className="first-div">
        <div className="flex items-center justify-between w-full  md:px-0">
          <Link href="/">
            <div className="relative h-[50px] w-[150px]  ">
              <Image
                src={logo}
                alt="logo"
                quality={100}
                priority={true}
                fill
                className="object-contain"
              />
            </div>
          </Link>

          <button
            onClick={onToggleNav}
            className={`z-50 transition-all md:hidden ${
              isNavOpen ? "rotate-180" : "rotate-0"
            } transition-all`}
          >
            {isNavOpen ? <X /> : <Menu />}
          </button>
        </div>

        <ul
          className={` ${
            isNavOpen ? "w-full px-6  " : "w-0 px-0 md:w-full "
          } transition-all duration-300 z-40 left-0`}
        >
          <Link href="/pitch/create">
            <li className="" onClick={() => setIsNavOpen(false)}>
              Create
            </li>
          </Link>

          <li className="text-color-logout">Logout</li>

          <Link href="/profile">
            <div className="flex items-center gap-5 group">
              <div className="relative h-10 w-10 md:h-9 md:w-9 rounded-full   overflow-hidden">
                <Image
                  src={userAvatar}
                  alt="avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <li className="md:hidden group-hover:text-color-primary transition-colors">
                Profile
              </li>
            </div>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
