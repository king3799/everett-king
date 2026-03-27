import { Github, Mail } from "lucide-react";
export default function Hero() {
  return (
    <section className="pt-24" id="home">

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center text-center flex-1 px-6 h-[820px]">

        {/* Profile Image */}
       <div className="relative group w-48 h-48 rounded-full overflow-hidden sparkle">
          <img
            src="/profile.png"
            alt="Susan Miller"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Heading */}
        <h2 className="text-6xl font-bold mb-4 text-rose-500 text-center">
          Senior Software Engineer
        </h2>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 mb-6">
         Hi, I'm Susan Miller
        </p>

        {/* Description */}
        <p className="max-w-2xl text-gray-500 leading-relaxed mb-10">
        I’m a Senior Full Stack Engineer specializing in React, Node.js, Python, and Django. I build scalable, high-performance web applications, integrate modern AI tools, and craft solutions that combine clean design with robust architecture.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 mb-10">
          <button className="relative overflow-hidden bg-pink-500 text-white px-6 py-3 rounded-lg shine-btn">
            Get In Touch
          </button>

          <button className="border border-rose-400 text-rose-500 px-8 py-3 rounded-xl hover:bg-rose-50 transition">
            View Work
          </button>
        </div>

        {/* Icons */}
        <div className="flex gap-6 text-gray-600">
          <a
            href="https://github.com/modernWebDev9"
            target="_blank"
          >
            <Github className="cursor-pointer hover:text-rose-500 transition" />
          </a>
          <a
            href="mailto:susan0907miller@outlook.com"
            target="_blank"
          >
            <Mail className="cursor-pointer hover:text-rose-500 transition" />
          </a>
          
        </div>

      </div>
    </section>
  );
}