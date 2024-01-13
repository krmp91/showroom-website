/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ImageSlider from "../components/imageSlider";
import ParallaxContact from "../components/parallaxContact";
import { DownloadButton } from "../components/downloadButton";
import { Suspense } from "react";
import Loading from "./loading";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center pt-6 h-screen mb-80 mt-2">
      <div className="p-2 px-16 pb-20 self-start">
        <h1 className="pb-8 text-base italic font-semibold text-darkOrange">
          Hi, I'm Louise. I am a designer, researcher, and maker<br></br>{" "}
          exploring participatory practices of textiles and clothing <br></br>
          for well-being and sustainability.
        </h1>
      </div>
      <div className="mb-40 z-10">
        <ImageSlider />
      </div>
      <div className="self-start mb-20">
        <DownloadButton />
      </div>
      <div className="w-full">
        <ParallaxContact />
      </div>
    </div>
  );
};

export default HomePage;
