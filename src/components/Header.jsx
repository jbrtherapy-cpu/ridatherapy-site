import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#eaf2ed] to-[#d9e8dc] shadow-md py-8 px-6 md:px-16 rounded-b-2xl relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left side: Brand name and tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-semibold text-[#1f4037] tracking-wide mb-1">
            Rida Psychotherapy & Counselling Service
          </h1>
          <p className="text-lg italic text-[#4a645a]">
            Working together to accept and improve
          </p>
          <p className="text-base text-[#4a645a] mt-1">
            Talk. Heal. Grow.
          </p>
        </motion.div>

        {/* Right side: Contact info */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col md:items-end text-[#1f4037] space-y-1 text-sm"
        >
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-[#1f4037]" />
            <a
              href="tel:07823663208"
              className="hover:text-[#3d705f] transition-colors"
            >
              0782 366 3208
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-[#1f4037]" />
            <a
              href="mailto:jbrtherapy@gmail.com?subject=Rida%20Enquiry"
              className="hover:text-[#3d705f] transition-colors"
            >
              contact@ridatherapy.com
            </a>
          </div>
        </motion.div>
      </div>

      {/* Subtle bottom divider */}
      <div className="border-b border-[#c7d9cf] mt-6"></div>
    </header>
  );
}
