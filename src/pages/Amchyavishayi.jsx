import { div } from "framer-motion/client";

function Amachyavishayi() {
  return (
    <div>
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-primary">आमच्याविषयी</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          पारनेर पंचायत समिती शिक्षण विभाग हे तालुक्यातील प्राथमिक आणि माध्यमिक
          शाळांचा दर्जा वाढवण्यासाठी आणि गुणवत्तापूर्ण शिक्षण पोहोचवण्यासाठी
          कार्यरत आहे. विविध उपक्रम, स्पर्धा परीक्षा, शिष्यवृत्ती योजना, MDM,
          आणि RTE प्रवेश याच्या माध्यमातून विद्यार्थ्यांचा सर्वांगीण विकास साधणे
          हा आमचा उद्देश आहे.
        </p>
      </div>

      <div className="bg-gray-100 min-h-screen p-2">
        <div className="bg-white md:p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">
            शिक्षण विभाग पंचायत समिती पारनेर
          </h2>

          <div className="w-full h-[90vh]">
            <iframe
              src="https://drive.google.com/file/d/1KCc56RqVQlvg1drKPbkY55ocejTnqjyd/preview"
              width="100%"
              height="100%"
              allow="autoplay"
              className="rounded-lg border-2"
              title="Z P Schools PDF"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Amachyavishayi;
