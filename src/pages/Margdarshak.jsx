import React from "react";
import { motion } from "framer-motion";
import seema from "../assets/images/seema.png";
import bheem from "../assets/images/bheem.jpeg";

export default function Margdarshak() {
  const officers = [
    {
      name: "श्रीम. सीमा राणे",
      position: "गटशिक्षणाधिकारी",
      office: "पंचायत समिती पारनेर",
      image: seema,
    },
    {
      name: "श्री. दयानंद पवार",
      position: "गटविकास अधिकारी",
      office: "पंचायत समिती पारनेर",
      image: bheem,
    },
  ];

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-6 text-center text-blue-700"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        मार्गदर्शक
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {officers.map((officer, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-2xl hover:shadow-blue-300  overflow-hidden transition-all duration-300 hover:scale-105 lg:mx-8 p-4 rounded-2xl"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.2, duration: 0.3, ease: "easeOut" }}
          >
            <img
              src={officer.image}
              alt={officer.name}
              className="w-full h-115 object-fill border-4 rounded-2xl"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {officer.name}
              </h2>
              <p className="text-blue-600 font-bold text-2xl">
                {officer.position}
              </p>
              <p className="text-gray-600 text-xl mt-1">{officer.office}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
