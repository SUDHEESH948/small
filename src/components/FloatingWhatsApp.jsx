import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const phoneNumber = "919447175232";

  const message =
    "Hello! I am planning a visit to S Mall Edakkara and would like to know more about the facilities, movies, and store hours.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  const instagramURL = "https://www.instagram.com/s.mall_edakkara/";

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-center gap-4 sm:bottom-7 sm:right-7">
      {/* Instagram Button */}
      <a
        href={instagramURL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow S Mall Edakkara on Instagram"
        title="Follow us on Instagram"
        className="group relative flex h-12 w-12 animate-float-delay items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-lg transition-shadow duration-300 hover:shadow-xl active:scale-95 sm:h-14 sm:w-14"
      >
        <FaInstagram className="text-2xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 sm:text-3xl" />

        {/* Instagram Tooltip */}
        <span className="pointer-events-none absolute right-[calc(100%+12px)] translate-x-2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Follow us on Instagram
          <span className="absolute right-[-5px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 bg-gray-900" />
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with S Mall on WhatsApp"
        title="Chat with S Mall on WhatsApp"
        className="group relative flex h-14 w-14 animate-float items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 transition-shadow duration-300 hover:bg-[#20BA5A] hover:shadow-xl hover:shadow-green-500/40 active:scale-95 sm:h-16 sm:w-16"
      >
        <FaWhatsapp className="text-3xl transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 sm:text-4xl" />

        {/* Pulse Animation */}
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />

        {/* WhatsApp Tooltip */}
        <span className="pointer-events-none absolute right-[calc(100%+12px)] translate-x-2 whitespace-nowrap rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          Chat with us
          <span className="absolute right-[-5px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 bg-gray-900" />
        </span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
