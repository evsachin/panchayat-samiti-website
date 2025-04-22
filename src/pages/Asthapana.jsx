import React from "react";
import seema from "../assets/images/seema.jpeg";
import bheem from "../assets/images/bheem.jpeg";

export default function Asthapana() {
  const officers = [
    {
      name: "श्रीमती सीमा राणे",
      position: "गटशिक्षणाधिकारी",
      office: "पंचायत समिती पारनेर",
      image: seema, // replace with actual image URLs
    },
    {
      name: "श्री. राजेश पाटील",
      position: "उपगटशिक्षणाधिकारी",
      office: "पंचायत समिती पारनेर",
      image: bheem, // replace with actual image URLs
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        आस्थापना
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {officers.map((officer, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src={officer.image}
              alt={officer.name}
              className="w-full h-110 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {officer.name}
              </h2>
              <p className="text-blue-600 font-bold text-2xl">{officer.position}</p>
              <p className="text-gray-600 text-xl mt-1">{officer.office}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
