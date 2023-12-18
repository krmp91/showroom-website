import React from "react";
import Image from "next/image";
import Logo from "../louise-logo3.png";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="fixed w-full h-1 shadow-xl bg-darkPurple">
      <div className="flex justify-between item-center px-14 2xl:px-16">
        <Link rel="stylesheet" href="/">
          <Image
            src={Logo}
            alt="Logo"
            width="200"
            className="courser-pointer"
            priority
          />
        </Link>
        <div>right side</div>
      </div>
    </nav>
  );
};

/*import React from "react";
import Link from "next/link";




/*export const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8">
      <h1 className="text-xl font-bold">Louise Ravnløkke</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/projects"
              className="text-base uppercase hover:text-gray-600 transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/publications"
              className="text-base uppercase hover:text-gray-600 transition-colors"
            >
              Publications
            </Link>
          </li>
          <li>
            <Link
              href="/teaching"
              className="text-base uppercase hover:text-gray-600 transition-colors"
            >
              Teaching
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-base uppercase hover:text-gray-600 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-base uppercase hover:text-gray-600 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
*/
