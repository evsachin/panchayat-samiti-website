import logo from "../../assets/images/logo.jpg";

function Hero() {
  return (
    <section
      className="relative pt-20 md:pt-0 min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?school,india,village')",
      }}
    >
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 opacity-80 animate-gradient-shift"></div>

      {/* Logo illustration */}
      <div className="w-64 md:w-64 lg:w-80 xl:w-96 relative mt-8 md:mt-0">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 animate-pulse-slow"></div>
          <img
            src={logo}
            alt="शिक्षण विभाग लोगो"
            className="relative z-10 w-full h-auto object-contain animate-float"
          />
          <div className="absolute -top-4 -left-4 w-12 md:w-16 h-12 md:h-16 rounded-full bg-yellow-400/20 animate-float-delay"></div>
          <div className="absolute -bottom-4 -right-4 w-14 md:w-20 h-14 md:h-20 rounded-full bg-blue-300/20 animate-float-delay-2"></div>
        </div>
      </div>
      {/* Content container */}
      <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between py-12">
        {/* Text content */}
        <div className="p-6 md:p-10 rounded-xl text-center md:text-left max-w-2xl backdrop-blur-sm bg-white/10 border border-white/20 shadow-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading tracking-tight leading-tight">
            पारनेर पंचायत समिती <span className="block">शिक्षण विभाग</span>
          </h1>

          <div className="w-24 h-1.5 bg-yellow-400 mx-auto md:mx-0 mb-8 rounded-full"></div>

          <p className="text-xl md:text-2xl mb-6 leading-relaxed font-medium">
            शिक्षण हेच खरे धन! शालेय उपक्रम, स्पर्धा परीक्षा, आरटीई प्रवेश व
            गुणवत्तापूर्ण शिक्षणासाठी समर्पित विभाग.
          </p>

          <div className="my-6 py-4 px-6 bg-white/10 border-t border-b border-white/20">
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              आमचा उद्देश प्रत्येक विद्यार्थ्याला गुणवत्तापूर्ण आणि सर्वसमावेशक
              शिक्षण पुरविणे. विविध शालेय कार्यक्रम, मिशन आरंभ व विविध स्पर्धा
              परीक्षा याद्वारे विद्यार्थ्यांना उत्कृष्ट संधी उपलब्ध करून देणे.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 hover:scale-105">
              अधिक माहिती मिळवा
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-full border-2 border-white transition duration-300 hover:scale-105">
              संपर्क साधा
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
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
  );
}

export default Hero;
