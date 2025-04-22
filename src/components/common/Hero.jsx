function Hero() {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?school,india')",
      }}
    >
      <div className="bg-blue-900 bg-opacity-70 p-8 rounded-xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
          पारनेर पंचायत समिती शिक्षण विभाग
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          शिक्षण हेच खरे धन! शालेय उपक्रम, स्पर्धा परीक्षा, आरटीई प्रवेश व
          गुणवत्तापूर्ण शिक्षणासाठी समर्पित विभाग.
        </p>
      </div>
    </section>
  );
}

export default Hero;
