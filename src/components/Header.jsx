import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

export default function Header() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/library", label: "Guidance Library" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-[#eaf2ed] to-[#d9e8dc] shadow-md py-6 px-8 rounded-b-2xl">

      {/* Top Bar — Contact Info */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-700 mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Phone size={16} />
            <span>0782 366 3208</span>
          </div>
          <div className="flex items-center space-x-1">
            <Mail size={16} />
            <span>contact@ridatherapy.com</span>
          </div>
        </div>
      </div>

      {/* Logo / Title */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#1f4037] tracking-wide">
          Rida Psychotherapy & Counselling Service
v        </h1>
 
        <p className="text-sm sm:text-base italic text-emerald-900 mt-1">
          Working together to accept and improve
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex justify-center space-x-6 sm:space-x-10 font-medium text-gray-700">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`pb-1 border-b-2 transition-colors duration-200 ${
              location.pathname === link.path
                ? "border-emerald-600 text-emerald-700"
                : "border-transparent hover:border-emerald-400 hover:text-emerald-600"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
