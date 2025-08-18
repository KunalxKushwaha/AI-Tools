import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detect scroll to add background + shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-md bg-white/80 shadow-md"
          : "backdrop-blur-sm bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-20 xl:px-32">
        
        {/* Left: Logo */}
        <img
          src={assets.logo}
          alt="logo"
          className="w-32 sm:w-44 cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() => navigate("/")}
        />

        {/* Middle: Nav links (Desktop) */}
        <div className="hidden md:flex items-center gap-10">
          {["Home", "Features", "Plans", "Contact"].map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase()}`}
              className="relative text-gray-700 font-medium transition-colors duration-300 hover:text-blue-600"
            >
              {link}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right: Auth */}
        <div className="hidden md:flex">
          {user ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <button
              onClick={openSignIn}
              className="flex items-center gap-2 rounded-full text-sm bg-[var(--primary-color)] hover:bg-blue-700 text-white py-2.5 px-8 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg rounded-b-2xl px-6 py-4 flex flex-col gap-4 animate-slideDown">
          {["Home", "Features", "Plans", "Contact"].map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase()}`}
              className="text-gray-700 font-medium transition-colors duration-300 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}

          {user ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <button
              onClick={() => {
                openSignIn();
                setIsOpen(false);
              }}
              className="flex items-center justify-center gap-2 rounded-full text-sm bg-[var(--primary-color)] hover:bg-blue-700 text-white px-6 py-2.5 shadow-md hover:shadow-xl transition-all duration-300"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
