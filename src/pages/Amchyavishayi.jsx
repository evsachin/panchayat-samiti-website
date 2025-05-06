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
      

      <div className="bg-gray-100 min-h-screen p-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="list-disc pl-6 text-blue-700">
            <li>
              <a
                href="https://drive.google.com/file/d/1uA1Jyb7c2V9wMtBdxpLZWFQ9fTIYV_Yx/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold hover:underline"
              >
                नवोदय विद्यालय प्रवेश परीक्षा यादी
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Amachyavishayi;
