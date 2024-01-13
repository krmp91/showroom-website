import React from "react";
import { Instagram, Linkedin, Mail, ResearchGate } from "../app/icons";

export const Footer = () => {
  return (
    <footer className="w-full bg-blueLight bg-opacity-75 bottom-0">
      <div className="flex  items-center h-24 justify-between inline-block">
        <div className="flex gap-6 px-36">
          <a href="mailto:l.ravnloekke@gmail.com" aria-label="Email">
            <Mail className="fill-darkOrange h-5 w-5 pt-1.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/louiseravnloekke/"
            aria-label="Linkedin"
          >
            <Linkedin className="fill-darkOrange h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/louiseravnloekke/"
            aria-label="Instagram"
          >
            <Instagram className="fill-darkOrange h-5 w-5" />
          </a>
          <a
            href="https://www.researchgate.net/profile/Louise-Ravnlokke"
            aria-label="ReaserchGate"
          >
            <ResearchGate className="fill-darkOrange h-5 w-5" />
          </a>
        </div>

        <span className="font-light italic text-sm inline-block align-bottom pt-3 px-12 hidden md:block">
          &copy; Louise Ravnløkke 2023
        </span>
      </div>
    </footer>
  );
};
