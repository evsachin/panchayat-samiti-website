function Hero() {
  return (
    <section
      className="relative h-[600px] bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?school,india')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-400 to-pink-700 opacity-80"></div>

      <div className="relative z-10 p-8 rounded-xl text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
          पारनेर पंचायत समिती शिक्षण विभाग
        </h1>
        <p className="text-lg md:text-xl mb-4 max-w-3xl mx-auto">
          शिक्षण हेच खरे धन! शालेय उपक्रम, स्पर्धा परीक्षा, आरटीई प्रवेश व
          गुणवत्तापूर्ण शिक्षणासाठी समर्पित विभाग.
        </p>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-6 text-blue-100">
          आमचा उद्देश प्रत्येक विद्यार्थ्याला गुणवत्तापूर्ण आणि सर्वसमावेशक
          शिक्षण पुरविणे. विविध शालेय कार्यक्रम, मिशन आरंभ व विविध स्पर्धा
          परीक्षा याद्वारे विद्यार्थ्यांना उत्कृष्ट संधी उपलब्ध करून देणे.
        </p>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300">
          अधिक माहिती मिळवा
        </button>
      </div>
    </section>
  );
}

export default Hero;
