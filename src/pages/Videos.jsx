import React from "react";

export default function Videos() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white p-6 rounded-lg shadow-md space-y-8 max-w-4xl mx-auto">
        {/* गारखिंडी शाळा */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-700 text-center">
            गारखिंडी शाळा
          </h2>
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full aspect-video rounded-lg"
              src="https://www.youtube.com/embed/zsD10EhEt6w?si=KK9himWwF43-PF6Z"
              title="गारखिंडी शाळा"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* पानोली शाळा */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-700 text-center">
            पानोली शाळा
          </h2>
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full aspect-video rounded-lg"
              src="https://www.youtube.com/embed/N8Bp3J1Wk6o?si=zkmyyAYN2Mpy7QJ9"
              title="पानोली शाळा"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Additional Video 1 */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-700 text-center">
            शाळा पाडली आळे | वनभोजन
          </h2>
          <iframe
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/MpcKf1oqzn0?si=zGO4jBFQzTXVE7Dj"
            title="Additional Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Additional Video 2 */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-700 text-center">
            केंद्र जवले | शाळा पूर्व तयारी मेळावा
          </h2>

          <iframe
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/43e7LInK3uw?si=KlMoHKQMiG0fIUrV"
            title="Additional Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        {/* Additional Video 2 */}
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-700 text-center">
            शाळा पाडली आळे | अध्ययन अध्यापन साहित्य दिवस (TLM Day).
          </h2>

          <iframe
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/X4Oas2NPEzE?si=yh6xjdhOH9EelhDd"
            title="Additional Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

