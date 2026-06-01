import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, X } from "lucide-react";

const links = ["Home", "About", "Projects", "Skills", "Contact"];

export default function Navbar({ theme, toggleTheme }) {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActive(link);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? theme === "dark" ? "bg-gray-900/95 backdrop-blur-sm shadow-lg" : "bg-white/95 backdrop-blur-sm shadow-lg"
          : theme === "dark" ? "bg-gray-900" : "bg-white"
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
              className={`w-10 h-10 object-cover rounded-full border-2 transition-all ${
                theme === "dark" ? "border-gray-700" : "border-rose-100"
              } group-hover:border-rose-300`}
            />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex flex-col">
            <h2 className={`text-xl font-bold leading-tight ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Susan Miller
            </h2>
            <span className="text-xs font-medium tracking-wide">Full Stack Developer</span>
          </div>
        </motion.a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-1">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => handleLinkClick(link)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  active === link
                    ? "text-rose-600 bg-rose-50"
                    : theme === "dark"
                    ? "text-gray-300 hover:text-rose-400 hover:bg-gray-800"
                    : "text-gray-600 hover:text-rose-500 hover:bg-rose-50/50"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${
              theme === "dark"
                ? "text-yellow-400 hover:bg-gray-800"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-rose-500 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className={`md:hidden border-t ${
            theme === "dark" ? "border-gray-700 bg-gray-900" : "border-gray-100 bg-white"
          }`}
        >
          <ul className="flex flex-col p-4 space-y-2">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => handleLinkClick(link)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    active === link
                      ? "text-rose-600 bg-rose-50"
                      : theme === "dark"
                      ? "text-gray-300 hover:text-rose-400 hover:bg-gray-800"
                      : "text-gray-600 hover:text-rose-500 hover:bg-rose-50/50"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
