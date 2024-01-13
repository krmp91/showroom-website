import React from "react";
import { CvIcon, PortfolioIcon } from "../app/icons";

export const DownloadButton = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Download CV <CvIcon className="w-[2rem] h-[2rem]" />
        </>
      ),
      href: "/cv.pdf",
      style: "rounded-tr-3xl",
      download: true,
    },
    {
      id: 2,
      child: (
        <>
          Download Portfolio <PortfolioIcon className="w-[2.5rem] h-[2.5rem]" />
        </>
      ),
      href: "/portfolio.pdf",
      style: "rounded-br-3xl",
      download: true,
    },
  ];

  return (
    <div className="hidden flex-col top-[55%] left-0 fixed lg:flex">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex font-light italic text-base text-darkOrange justify-between items-center w-40 h-14 px-5 ml-[-100px] hover:ml-[-10px] hover:rounded-r-3xl duration-300 bg-blueLight" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

{
  /*<div className="flex flex-col items-center">
      <div>
        <a href="/cv.pdf" download="cv">
          <button className="rounded-tr-lg bg-blueLight p-2 download-button py-2 px-4">
            <CvIcon className="w-[3rem] h-[3rem]" />
            <span className="slide-out-content absolute left-full top-0">
              Download CV
            </span>
          </button>
        </a>
      </div>

      <div>
        <a href="/portfolio.pdf" download="portfolio">
          <button className="rounded-br-lg bg-blueLight p-2 download-button py-2 px-4">
            <PortfolioIcon className="w-[3rem] h-[3rem]" />

            <span className="slide-out-content absolute left-full top-0">
              Download Portfolio
            </span>
          </button>
        </a>
      </div>
  </div>*/
}
