import React from "react";
import { Mail } from "../icons/mail";
import { Instagram } from "../icons/instagram";
import { Linkedin } from "../icons/linkedin";
import { ResearchGate } from "../icons/researchgate";

const Contact = () => {
  return (
    <div className="text-darkOrange text-center p-6">
      <h1 className="text-2xl font-bold mb-4">CONTACT ME</h1>
      <div className="flex justify-end">
        <Mail className="fill-darkOrange h-6 w-6" />
        <Instagram className="fill-darkOrange h-5 w-5" />
        <Linkedin className="fill-darkOrange h-5 w-5" />
        <ResearchGate className="fill-darkOrange h-5 w-5" />
      </div>
    </div>
  );
};

export default Contact;
