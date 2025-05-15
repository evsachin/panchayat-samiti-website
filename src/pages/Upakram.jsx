import React, { useState } from "react";
import upakram from "../assets/images/upakram.jpeg";
import upakram1 from "../assets/images/upakram1.jpeg";
import upakram2 from "../assets/images/upakram2.jpeg";
import upakram3 from "../assets/images/upakram3.jpeg";
import upakram4 from "../assets/images/upakram4.jpeg";
import upakram5 from "../assets/images/upakram5.jpeg";

export default function Upakram() {
  const images = [upakram4, upakram5, upakram, upakram3, upakram1, upakram2];
  const [loaded, setLoaded] = useState(false);


  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8">
      <h2 className="text-blue-600 text-3xl text-center mb-6">उपक्रम</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {images.map((imgSrc, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex justify-center items-center p-4"
          >
            <img
              src={imgSrc}
              alt="Upakram"
              loading="lazy"
              className={`lazy-image ${loaded ? "loaded" : ""}`}
              onLoad={() => setLoaded(true)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
