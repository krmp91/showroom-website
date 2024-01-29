import Link from "next/link";
import React from "react";

const ParallaxContact = () => {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-center h-[500px] bg-fixed bg-parallax bg-cover">
        <Link
          href="/contact"
          className="inline-block py-3 px-8 rounded-full bg-darkOrange hover:bg-darkOrangeHover text-blueLight text-sm font-semibold italic shadow-md hover:shadow-lg transition-shadow hover:shadow-inset"
        >
          Feel free to reach out!
        </Link>
      </div>
    </div>
  );
};

export default ParallaxContact;
