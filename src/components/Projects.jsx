import { Github, Link } from "lucide-react";

export default function Projects({ theme }) {
  return (
    <section className={`py-20 px-6 transition-colors duration-300 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`} id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full mb-4"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Here are some of the greatest projects that showcase my skills and experience
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          <ProjectCard
            theme={theme}
            image="/telus.95ee4bf0.webp"
            title="TELUS"
            description="Built a scalable web platform with React, Next.js, and Node.js, optimized for SEO, accessibility, and performance, and deployed on AWS/GCP with CDN, caching, and security best practices."
            tags={["TypeScript", "React", "Gatsby.js", "GitHub/GitHub Actions", "Azure", "CI/CD Pipelines", "Directus", ".Net", "SEO"]}
            Githublink="https://github.com/king3799/"
            Livelink="https://www.telus.com/en"
          />
           <ProjectCard
            theme={theme}
            image="/omers.2fcdf7f7.webp"
            title="Omers"
            description="A flexible content platform that dynamically displays and manages website content, with fast page-level updates and caching to improve performance. It enabled teams to publish important information quickly without waiting for regular release cycles."
            tags={["TanStack Start", "React", "TypeScript", "Tailwind", "Shadcn"]}
            Githublink="https://github.com/king3799/"
            Livelink="https://www.omers.com/"
          />
           <ProjectCard
            theme={theme}
            image="/amadeus.6fe22bcd.webp"
            title="Amadeus"
            description="A modern travel technology platform delivering a seamless experience for global users, supporting high-volume travel operations, real-time data processing, and secure connections between travel suppliers and partners worldwide."
            tags={["React", "Java", "Spring Boot", "AWS", "Azure", "REST APIs", "Big Data"]}
            Githublink="https://github.com/king3799/"
            Livelink="https://amadeus.com/"
          />
           <ProjectCard
            theme={theme}
            image="/siteauditpro.cebe0d56.webp"
            title="Siteauditpro"
            description="Built a scalable web platform with React, Next.js, and Node.js, optimized for SEO, accessibility, and performance, and deployed on AWS/GCP with CDN, caching, and security best practices."
            tags={["TypeScript", "React", "Gatsby.js", "GitHub/GitHub Actions", "Azure", "CI/CD Pipelines", "Directus", ".Net", "SEO"]}
            Githublink="https://github.com/king3799/"
            Livelink="https://siteauditpro.com/"
          />

          <ProjectCard
            theme={theme}
            image="/model.png"
            title="Model Context Protocol (MCP) Server Development"
            description="Developed reference MCP servers enabling LLMs to securely interact with files, Git repositories, web content, memory, and other tools through standardized protocols."
            tags={["TypeScript", "Python", "MCP SDK", "Node.js", "uv/uvx", "Claude Desktop"]}
            Githublink="https://github.com/king3799/Rust_Embedded_Book"
            Livelink="https://docs.rust-embedded.org/book/"
          />

          {/* <ProjectCard
            theme={theme}
            image="/Shouting_game.png"
            title="Shouting game"
            description="Integrated Hugging Face DistilBERT sentiment analysis to dynamically modify gameplay, including player health, enemy behavior, scoring, and visual themes. "
            tags={["Python", "Streamlit", "PyTorch", "DistilBERT", "HTML5 Canvas + JavaScript", "Hugging Face Transformers",]}
            Githublink="https://github.com/king3799/Arena-game"
            Livelink="https://arena-shouting-game.streamlit.app/"
          /> */}
        </div>
      </div>
    </section>
  );
}

/* Reusable Card Component */
function ProjectCard({ theme, image, title, description, tags, Githublink, Livelink }) {
  return (
    <div className={`rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group ${theme === "dark" ? "bg-gray-800" : "bg-white"
      } border ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}>
      {/* Image */}
      <div className="h-40 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="mb-6 leading-relaxed">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`text-sm px-3 py-1 rounded-full ${theme === "dark"
                  ? "bg-gray-700 text-rose-400"
                  : "bg-rose-50 text-rose-600"
                }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 justify-between">
          <a href={Githublink} className={`flex items-center gap-2 font-medium transition-colors ${theme === "dark" ? "text-gray-300 hover:text-rose-400" : "text-gray-600 hover:text-rose-500"
            }`}>
            <Github className="w-5 h-5" />
            <span>Code</span>
          </a>
          <a href={Livelink} className={`flex items-center gap-2 font-medium transition-colors ${theme === "dark" ? "text-gray-300 hover:text-rose-400" : "text-gray-600 hover:text-rose-500"
            }`}>
            <Link className="w-5 h-5" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
