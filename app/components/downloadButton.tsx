import React from "react";
import "./slideOutContent.css";
import { CvIcon, PortfolioIcon } from "../icons";

export const DownloadButton = () => {
  return (
    <div className="flex flex-col items-center p-2 pt-3 bg-blueLight border-2 border-dotted">
      <div className="pb-3">
        <a href="/cv.pdf" download="cv">
          <CvIcon className="w-[4rem] h-[4rem]" />
        </a>
      </div>
      <div>
        <a href="/portfolio.pdf" download="portfolio">
          <button className=" ">
            <PortfolioIcon className="w-[4rem] h-[4rem]" />
          </button>
        </a>
      </div>
    </div>
  );
};
