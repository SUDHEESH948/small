import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const FloatingWhatsApp = () => {
  const phoneNumber = "919447175232";

  const message =
    "Hello! I am planning a visit to S Mall Edakkara and would like to know more about the facilities, movies, and store hours.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const instagramURL = "https://www.instagram.com/s.mall_edakkara/";

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-center gap-4 sm:bottom-7 sm:right-7">
      {/* Instagram */}
      <a
        href={instagramURL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow S Mall Edakkara on Instagram"
        className="instagram-float flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-xl transition-transform duration-300 hover:scale-110 sm:h-14 sm:w-14"
      >
        <FaInstagram className="text-2xl sm:text-3xl" />
      </a>

      {/* WhatsApp */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with S Mall on WhatsApp"
        className="whatsapp-float relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-110 active:scale-95 sm:h-16 sm:w-16"
      >
        {/* Animated outer circle */}
        <span className="whatsapp-ring absolute inset-0 rounded-full border-2 border-[#25D366]" />

        <FaWhatsapp className="relative z-10 text-3xl sm:text-4xl" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
