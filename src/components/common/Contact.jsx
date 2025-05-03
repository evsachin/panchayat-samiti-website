import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div
      id="contact"
      className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white px-2 py-16 gap-10"
    >
      {/* Contact Card */}
      <div className="bg-white rounded-2xl shadow-xl p-4 w-full max-w-4xl transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-semibold text-start text-blue-700 mb-6 animate-fade-in">
          📞 आमच्याशी संपर्क
        </h2>
        <div className="space-y-4 text-lg font-medium text-gray-800 text-center md:text-left">
          <ul className="space-y-4">
            <li className="flex items-center justify-start gap-4 animate-slide-in-left">
              <FaPhoneAlt className="text-blue-600" />
              <a href="tel:+9403194842">9403194842</a>
            </li>

            <li className="flex items-center justify-start gap-4 animate-slide-in-right">
              <FaEnvelope className="text-blue-600" />
              <a href="mailto:ssaparner3@gmail.com">ssaparner3@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Google Map Embed */}
        <h2 className="text-3xl font-semibold text-start text-blue-700 my-6 animate-fade-in">
          🗺️ Google नकाशावर पत्ता:
        </h2>

        <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-lg border border-blue-200 animate-fade-in">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4101.5008247024725!2d74.4325033752036!3d19.002159982187255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAwJzA3LjgiTiA3NMKwMjYnMDYuMyJF!5e1!3m2!1sen!2sin!4v1746254274316!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
