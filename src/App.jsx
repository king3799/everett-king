import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import emailjs from "@emailjs/browser";

function App() {

  const hasSentVisitorInfo = useRef(false);
  useEffect(() => {
    // Prevent duplicate execution caused by React StrictMode
    if (hasSentVisitorInfo.current) {
      return;
    }

    hasSentVisitorInfo.current = true;

    const getVisitorInfo = async () => {
      try {
        // 1. Get visitor IP
        const ipResponse = await fetch(
          "https://api.ipify.org?format=json"
        );

        if (!ipResponse.ok) {
          throw new Error("Failed to get visitor IP");
        }

        const ipData = await ipResponse.json();
        const ip = ipData.ip;

        // console.log("Visitor IP:", ip);

        // 2. Get country information from IP
        const locationResponse = await fetch(
          `https://ipapi.co/${ip}/json/`
        );

        if (!locationResponse.ok) {
          throw new Error("Failed to get location information");
        }

        const locationData = await locationResponse.json();

        const country = locationData.country_name || "Unknown";
        const countryCode = locationData.country_code || "Unknown";

        console.log("Country:", country);
        // console.log("Country Code:", countryCode);

        // 3. Send visitor information to your email
        await emailjs.send(
          "service_9w5i94u",
          "template_tzpg19k",
          {
            visitor_ip: ip,
            country: country,
            country_code: countryCode,
          },
          {
            publicKey: "9y9Pp025chXgSnt4l",
          }
        );

        console.log("Visitor information sent successfully.");
      } catch (error) {
        console.error(
          "Failed to get/send visitor information:",
          error
        );
      }
    };

    getVisitorInfo();
  }, []);

  const [theme, setTheme] = useState(() => {
    // Check localStorage or system preference
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    // Update HTML class for Tailwind dark mode
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save preference
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-slate-900"}`}>
      <div className="relative z-10">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className="pt-20">
          <Hero theme={theme} />
          <About theme={theme} />
          <Skills theme={theme} />
          <Projects theme={theme} />
          <Contact theme={theme} />
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showScrollBtn ? 1 : 0, y: showScrollBtn ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3 rounded-full shadow-lg transition-colors ${theme === "dark" ? "bg-rose-500 text-white hover:bg-rose-600" : "bg-rose-500 text-white hover:bg-rose-600"
          }`}
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
}

export default App;
