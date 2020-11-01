import { Github, Mail } from "lucide-react";
export default function Hero() {
  return (
    <section className="pt-40 max-w-5xl mx-auto " id="home">
      {/* Hero Content */}

      <div className="px-6 flex flex-col md:flex-row gap-6 items-center">
        <div className="w-60 h-60 overflow-hidden sparkle rounded-full">
          <img
            src="/profile.png"
            alt="Susan Miller"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center text-center md:text-left px-6">
          <h2 className="text-3xl font-bold mb-4 text-rose-500">
            Senior Full Stack Web Developer
          </h2>

          <p className="max-w-2xl text-gray-500 leading-relaxed mb-10">
            Experienced full-stack developer specializing in building scalable web applications using modern technologies such as React, Node.js, and RESTful APIs. Passionate about clean architecture, performance optimization, and delivering reliable solutions for complex systems.
          </p>
        </div>
      </div>
    </section>
  );
}