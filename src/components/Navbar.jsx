import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = ["Home", "About", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative">
            <img 
              src="/icon.svg" 
              alt="Susan Miller" 
              className="w-10 h-10 object-cover rounded-full border-2 border-rose-100 group-hover:border-rose-300 transition-all" 
            />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-gray-900 leading-tight">
              Susan Miller
            </h2>
            <span className="text-xs text-rose-500 font-medium tracking-wide">
              Full Stack Developer
            </span>
          </div>
        </motion.a>

        {/* Links */}
        <ul className="hidden md:flex gap-1">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setActive(link)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  active === link
                    ? "text-rose-600 bg-rose-50"
                    : "text-gray-600 hover:text-rose-500 hover:bg-rose-50/50"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button (Visual Only) */}
        <div className="md:hidden">
          <button className="p-2 text-gray-600 hover:text-rose-500 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
