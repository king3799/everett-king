import { Github, Mail } from "lucide-react";

export default function Hero({ theme }) {
  return (
    <section className={`pt-24 pb-16 transition-colors duration-300 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`} id="home">
      <div className="flex flex-col items-center justify-center text-center flex-1 px-6 min-h-[85vh]">
        {/* Profile Image */}
        <div className={`relative group w-72 h-72 rounded-full overflow-hidden sparkle mb-8 shadow-2xl ${theme === "dark" ? "border-4 border-gray-800" : "border-4 border-white/20"}`}>
          <img
            src="/profile.png"
            alt="Susan Miller"
            className="w-full h-auto object-cover rounded-full"
          />
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Full Stack <span className="text-rose-500">Web Developer</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-6 font-medium">
          Hi, I'm Susan Miller
        </p>

        {/* Description */}
        <p className="max-w-3xl text-lg md:text-xl leading-relaxed mb-12">
          I build scalable, high-performance web applications with React, Node.js, Python, and Django. I specialize in modern AI integration and crafting solutions that combine clean design with robust architecture.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="#contact"
            className="relative overflow-hidden bg-rose-500 text-white px-8 py-4 rounded-xl shine-btn hover:bg-rose-600 transition-all duration-300 shadow-lg hover:shadow-rose-500/30 hover:-translate-y-1"
          >
            Get In Touch
          </a>

          <a
            href="#projects"
            className={`border-2 px-8 py-4 rounded-xl hover:bg-rose-50 transition-all duration-300 font-medium ${
              theme === "dark"
                ? "border-rose-500 text-rose-500 hover:text-rose-400"
                : "border-rose-500 text-rose-500 hover:border-rose-600"
            }`}
          >
            View Work
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1">5+</div>
            <div className="text-sm uppercase tracking-wide">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1">50+</div>
            <div className="text-sm uppercase tracking-wide">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1">30+</div>
            <div className="text-sm uppercase tracking-wide">Clients</div>
          </div>
        </div>

        {/* Icons */}
        <div className="flex gap-6">
          <a
            href="https://github.com/Kilros0817/Kilros0817"
            target="_blank"
            className="group transition-all duration-300 hover:text-rose-500 hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="mailto:susan0907miller@outlook.com"
            target="_blank"
            className="group transition-all duration-300 hover:text-rose-500 hover:-translate-y-1"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2 group-hover:border-rose-500 transition-colors">
            <div className="w-1 h-2 bg-gray-400 rounded-full group-hover:bg-rose-500 transition-colors"></div>
          </div>
        </a>
      </div>
    </section>
  );
}
