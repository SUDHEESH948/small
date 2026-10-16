import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const phoneNumber = "919447175232"; // S Mall Edakkara Official WhatsApp
  const message =
    "Hello! I am planning a visit to S Mall Edakkara and would like to know more about the facilities, movies, and store hours.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with S Mall on WhatsApp"
      title="Chat with S Mall on WhatsApp"
      className="group fixed bottom-5 right-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 transition-all duration-300 ease-out hover:scale-110 hover:bg-[#20BA5A] hover:shadow-xl hover:shadow-green-500/40 active:scale-95 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      {/* WhatsApp Icon */}
      <FaWhatsapp className="text-3xl transition-transform duration-300 group-hover:rotate-12 sm:text-4xl" />

      {/* Pulse Animation */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-[calc(100%+12px)] whitespace-nowrap rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 translate-x-2">
        Chat with us
        <span className="absolute right-[-5px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rotate-45 bg-gray-900" />
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
