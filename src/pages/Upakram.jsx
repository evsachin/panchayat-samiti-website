import React from "react";
import upakram from '../assets/images/upakram.jpeg'
import { div } from "framer-motion/client";
export default function Upakram() {
  return (
    <div>

    <div className="flex md:justify-center md:items-center min-h-[80vh] flex-col bg-gray-100 p-2 md:p-5">
      <h2 className="text-blue-600 text-3xl p-2">उपक्रम </h2>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={upakram}
          alt="Upakram"
          className="w-full object-contain md:p-8"
          />
      </div>
    </div>
          </div>
  );
}
