"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import Logo from "../louise-logo4.png";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => setMenuOpen(!menuOpen);

  return (
    /* Normal skærm opløsning navbar starter her */
    <nav className="fixed w-full h-18 bg-darkPurple">
      <div className="flex justify-between item-center f-width px-16 2xl:px-16 mt-10">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={200}
            height={60}
            className="courser-pointer"
            priority
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/projects">
              <li className="ml-8 uppercase tracking wide pb-1 hover:border-b text-base font-light italic">
                Projects
              </li>
            </Link>
            <Link href="/publications">
              <li className="ml-8 uppercase tracking wide pb-1 hover:border-b text-base font-light italic">
                Publications
              </li>
            </Link>
            <Link href="/teaching">
              <li className="ml-8 uppercase tracking wide pb-1 hover:border-b text-base font-light italic">
                Teaching
              </li>
            </Link>
            <Link href="/about">
              <li className="ml-8 uppercase tracking wide pb-1 hover:border-b text-base font-light italic">
                About
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-8 uppercase tracking wide pb-1 hover:border-b text-base font-light italic">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        {/* mobile burgermenu */}
        <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
          <RxHamburgerMenu size={22} />
        </div>
        <div
          className={`fixed top-0 w-[65%] sm:hidden h-screen bg-darkPurple p-10 ease-in duration-500 ${
            menuOpen ? "left-0" : "left-[-100%]"
          }`}
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <RxCross1 size={24} />
            </div>
          </div>

          <div className="flex-col py-4">
            <ul>
              <Link href="/">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor pointer uppercase
                  font-light italic"
                >
                  Home
                </li>
              </Link>
              <Link href="/projects">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor pointer uppercase
                  font-light italic"
                >
                  Projects
                </li>
              </Link>
              <Link href="/publications">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor pointer uppercase
                  font-light italic"
                >
                  Publications
                </li>
              </Link>
              <Link href="/teaching">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor pointer uppercase
                  font-light italic"
                >
                  Teaching
                </li>
              </Link>
              <Link href="/about">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor pointer uppercase
                  font-light italic"
                >
                  About
                </li>
              </Link>
              <Link href="/contact">
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 cursor pointer uppercase
                  font-light italic"
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
