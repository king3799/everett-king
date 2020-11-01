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
          ? "bg-white shadow-md"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-xl font-semibold text-rose-500 cursor-pointer"
        >
          Anna Nova
        </motion.h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link} className="relative">
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setActive(link)}
                className={`transition duration-300 ${
                  active === link
                    ? "text-rose-500"
                    : "hover:text-rose-500"
                }`}
              >
                {link}
              </a>

              {/* Animated underline */}
              {active === link && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-[2px] bg-rose-500"
                />
              )}
            </li>
          ))}
        </ul>

      </div>
    </motion.nav>
  );
}