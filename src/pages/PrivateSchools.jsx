import React from "react";

export default function PrivateSchools() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">
          Private Schools
        </h2>

        <div className="w-full h-[90vh]">
          <iframe
            src="https://drive.google.com/file/d/18BYsuNV9k5gjIsm-KbiWLBCRfTg4UFm1/preview"
            width="100%"
            height="100%"
            allow="autoplay"
            className="rounded-lg border-2"
            title="Private Schools PDF"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

