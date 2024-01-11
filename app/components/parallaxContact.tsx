import Link from "next/link";
import React from "react";

const ParallaxContact = () => {
  return (
    <div className="flex items-center justify-center h-96 bg-fixed bg-parallax bg-cover ">
      <Link
        href="/contact"
        className="inline-block py-2.5 px-6 rounded-full bg-darkOrange hover:bg-darkOrangeHover text-blueLight text-sm font-semibold italic shadow-md hover:shadow-lg transition-shadow hover:shadow-inset"
      >
        Feel free to reach out!
      </Link>
    </div>
  );
};

export default ParallaxContact;
