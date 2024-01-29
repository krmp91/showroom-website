"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type Props = {};
const imageDetails = [
  {
    src: "/images/projekteksempel-billede-mending.jpg",
    text: "Garment mending as a care and maintenance practice does not solely have the potential to extend clothing lifespan. Mending can also be seen as a bottom-up approach to altering a clothing culture through creativity and making. This topic is discussed in the conference paper Textile Aesthetic Dialogues of Garment Mending presented at PLATE conference in June 2023.",
  },
  {
    src: "/images/projekteksempel-billede-2-user-cards.jpg",
    text: "User Cards – Understanding Garments and Wear is a collection of cards which introduces a range of methods that fashion designers can use to begin to understand their users which in turn can help them make better circular design choices. ",
  },
  {
    src: "/images/projekteksempel-billede-3-memory-of-crafts.jpg",
    text: "Memory of Textile Crafts is a card game developed as a tool to be used when teaching textile techniques. Through interactive and dialogue-based activities the card game emphasizes active learning in the textile design classroom. The game can be seen as an advanced version of a traditional memory game, where sets or ‘matches’ are to be made. Here matches are of specific textile techniques. ",
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
      <p className="flex items-center w-[949px] pt-16 font-light">
        {imageDetails[currentImageIndex].text}
      </p>
    </div>
  );
}
