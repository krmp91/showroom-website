"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type Props = {};
const imageDetails = [
  {
    src: "/images/projekteksempel-billede-mending.jpg",
    text: "Image 1 Description",
  },
  {
    src: "/images/projekteksempel-billede-2-user-cards.jpg",
    text: "Image 2 Description",
  },
  {
    src: "/images/projekteksempel-billede-3-memory-of-crafts.jpg",
    text: "Image 3 Description",
  },
];

export default function ImageSlider({}: Props) {
  const [animationParent] = useAutoAnimate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function preImage() {
    const newIndex =
      (currentImageIndex - 1 + imageDetails.length) % imageDetails.length;
    setCurrentImageIndex(newIndex);
  }
  function nextImage() {
    const newIndex = (currentImageIndex + 1) % imageDetails.length;
    console.log(newIndex);
    setCurrentImageIndex(newIndex);
  }

  return (
    <div className="relative">
      <section
        ref={animationParent}
        className="flex justify-center items-center h-[595px] w-[949px]"
      >
        {imageDetails.map((image, index) => (
          <React.Fragment key={index}>
            {currentImageIndex === index ? (
              <div>
                <Image
                  key={index}
                  height={595}
                  width={949}
                  src={image.src}
                  alt={`slide ${index + 1}`}
                  className="h-full w-full transition-all object-cover "
                />
              </div>
            ) : null}
          </React.Fragment>
        ))}
      </section>
      {/*pre-next buttons*/}
      <section className="absolute inset-x-0 flex justify-between inset-y-0 items-center px-4 text-blueLight opacity-75 text-4xl left-[-85px] right-[-85px]">
        <button onClick={preImage} className="hover:text-[30px] transition-all">
          <IoIosArrowBack />
        </button>
        <button
          onClick={nextImage}
          className="hover:text-[30px] transition-all"
        >
          <IoIosArrowForward />
        </button>
      </section>
      {/*dots...*/}
      <section className="absolute flex justify-center pt-5 inset-x-0 buttom-5 w-full gap-3 items-center transition-all">
        {imageDetails.map((_image, index) => (
          <>
            {index === currentImageIndex ? (
              <div
                onClick={() => setCurrentImageIndex(index)}
                className="h-3 w-3 cusor-pointer bg-darkOrange rounded-full transition-all"
              />
            ) : (
              <div
                onClick={() => setCurrentImageIndex(index)}
                className="h-2 w-2 hover:h-4 transition-all hover:w-4 cursor-pointer bg-blueLight rounded-full"
              />
            )}
          </>
        ))}
      </section>
      <p className="text-center pt-16">
        {imageDetails[currentImageIndex].text}
      </p>
      {/*paralax effect with contact button*/}
      <section></section>
    </div>
  );
}
