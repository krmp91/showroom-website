"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Logo } from "../logo";
import "./hover-trigger.css";

export const Header = () => {
  const currentRoute = usePathname();
  const navLink = [
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Publications",
      link: "/publications",
    },
    {
      name: "Teaching",
      link: "/teaching",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => setMenuOpen(!menuOpen);

  return (
    /* Normal skærm opløsning navbar starter her */
    <nav className=" flex w-full h-24 bg-roseGray">
      <div className="flex justify-between item-center w-full h-full px-16 2xl:px-16 pt-12">
        <Link href="/">
          <Logo className="fill-black w-60 z-10" />
        </Link>
        <div className="hidden sm:flex ">
          <div className="hidden sm:flex">
            {navLink.map(({ link, name }) => (
              <Link
                key={name}
                href={link}
                className={` ${
                  currentRoute == link ? "underline-trigger" : ""
                } ml-8 uppercase tracking-wide pb-1 hover-trigger text-base font-light italic`}
              >
                {name}
              </Link>
            ))}
          </div>
          {/*<ul className="hidden sm:flex">
            <Link href="/projects">
              <li className="ml-8 uppercase tracking-wide pb-1 hover:border-b text-base font-light italic">
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
          </ul>*/}
        </div>
        {/* mobile burgermenu */}
        <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
          <RxHamburgerMenu size={22} />
        </div>
        <div
          className={`fixed top-0 w-[65%] sm:hidden h-screen bg-roseGray p-10 ease-in duration-500 ${
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
