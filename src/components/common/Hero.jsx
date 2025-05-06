import React from "react";
import logo1 from "../../assets/images/logo1.png";
import Margdarshak from "../../pages/Margdarshak";
import Contact from "./Contact";

function Hero() {
  return (
    <>
      <section
        className="relative pt-20 md:pt-0 min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white scroll-smooth"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?school,india,village')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 opacity-80 animate-gradient-shift"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between py-12 gap-8">
          {/* Logo */}
          <div className="w-40 sm:w-60 md:w-64 lg:w-80 xl:w-96 relative">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 animate-pulse-slow"></div>
              <img
                src={logo1}
                alt="शिक्षण विभाग लोगो"
                className="relative z-10 w-full h-auto object-contain animate-float rounded-4xl"
              />
              <div className="absolute -top-4 -left-4 w-12 md:w-16 h-12 md:h-16 rounded-full bg-yellow-400/20 animate-float-delay"></div>
              <div className="absolute -bottom-4 -right-4 w-14 md:w-20 h-14 md:h-20 rounded-full bg-blue-300/20 animate-float-delay-2"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="p-6 md:p-10 rounded-xl text-center md:text-left max-w-2xl backdrop-blur-sm bg-white/10 border border-white/20 shadow-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-heading tracking-tight leading-tight animate-fadeInUp">
              <span className="text-yellow-300 drop-shadow-[0_2px_4px_rgba(255,255,0,0.7)]">
                शिक्षण विभाग
              </span>
              <br />
              <span className="text-white relative inline-block [text-shadow:_0_2px_8px_rgba(255,255,255,0.8)]">
                पारनेर पंचायत समिती
                <span className="absolute left-0 bottom-0 h-1 bg-yellow-400 w-full transform scale-x-0 hover:scale-x-100 transition-transform origin-left duration-500 rounded"></span>
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mt-4 font-medium italic [text-shadow:_0_2px_4px_rgba(255,255,255,0.3)] animate-slideInLeft">
              ता. पारनेर, जि. अहिल्यानगर
            </p>

            <div className="w-24 h-1.5 bg-yellow-400 mx-auto md:mx-0 mb-6 rounded-full animate-scaleIn"></div>

            <p className="text-xl md:text-2xl mb-6 font-medium leading-relaxed animate-fadeIn">
              शिक्षण हेच खरे धन! शालेय उपक्रम, स्पर्धा परीक्षा, आरटीई प्रवेश व
              गुणवत्तापूर्ण शिक्षणासाठी समर्पित विभाग.
            </p>

            <div className="my-6 py-4 px-6 bg-white/10 border-t border-b border-white/20 rounded-lg animate-popIn">
              <p className="text-lg text-blue-100 leading-relaxed">
                आमचा उद्देश प्रत्येक विद्यार्थ्याला गुणवत्तापूर्ण आणि
                सर्वसमावेशक शिक्षण पुरविणे. विविध शालेय कार्यक्रम, मिशन आरंभ व
                विविध स्पर्धा परीक्षा याद्वारे विद्यार्थ्यांना उत्कृष्ट संधी
                उपलब्ध करून देणे.
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-button">
              <a
                href="#contact"
                className="bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-full border-2 border-white transition duration-300 hover:scale-105 hover:glow"
              >
                संपर्क साधा
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </section>

      {/* Other Sections */}
      <Margdarshak />
      <Contact />
    </>
  );
}

export default Hero;
