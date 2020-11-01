import { Github, Mail } from "lucide-react";
export default function Hero() {
  return (
    <section className="pt-24">
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center text-center flex-1 px-6" id="home">

        {/* Profile Image */}
        <div className="relative group w-48 h-48 rounded-full overflow-hidden sparkle">
          <img
            src="/profile.jpg"
            alt="Susan Miller"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h2 className="text-6xl font-bold mb-4">
          Susan Miller
        </h2>
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">
          Thanks for visiting!
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-6">
          Senior Full Stack Web Developer
        </p>

        {/* Description */}
        <p className="max-w-2xl text-gray-500 leading-relaxed mb-10">
          5+ years of experience in full-stack web development specializing in
          JavaScript, NodeJs, Laravel, React, Vuejs, and Node.js. 
          Passionate about building modern,
          scalable web applications and delivering exceptional user experiences.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 mb-10">
          <a
            href={`#contact`}
            className={`transition duration-300`}
          >
            <button className="relative overflow-hidden bg-pink-500 text-white px-6 py-3 rounded-lg shine-btn">
              Get In Touch
            </button>
          </a>

          <a
            href={`#projects`}
            className={`transition duration-300`}
          >
            <button className="border border-rose-400 text-rose-500 px-8 py-3 rounded-xl hover:bg-rose-50 transition">
              View Work
            </button>
          </a>
        </div>

        {/* Icons */}
        <div className="flex gap-6 text-gray-600">
          <a
            href="https://github.com/anna-nova98"
            target="_blank"
          >
            <Github className="cursor-pointer hover:text-rose-500 transition" />
          </a>
          <a
            href="mailto:annanova0908@outlook.com"
            target="_blank"
          >
            <Mail className="cursor-pointer hover:text-rose-500 transition" />
          </a>

        </div>

      </div>
    </section>
  );
}