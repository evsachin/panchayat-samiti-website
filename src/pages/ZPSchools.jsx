import React from "react";

export default function ZPSchools() {
  return (
    <div className="bg-gray-100 min-h-screen p-2">
      <div className="bg-white md:p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Z P Schools</h2>

        <div className="w-full h-[90vh]">
          <iframe
            src="https://drive.google.com/file/d/1unKLplHQgwC7IGndwbz1lkmGA84ETV2I/preview"
            width="100%"
            height="100%"
            allow="autoplay"
            className="rounded-lg border-2"
            title="Z P Schools PDF"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
