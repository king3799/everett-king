import { ExternalLink, Github } from "lucide-react";

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
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            theme={theme}
            image="/ecommerce.png"
            title="E-Commerce Platform"
            description="Designed and developed a full-stack e-commerce platform with both admin management features and a user-friendly frontend."
            tags={["React", "Node.js", "PostgreSQL", "Stripe"]}
          />

          <ProjectCard
            theme={theme}
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            title="Task Management App"
            description="Collaborative task management tool with drag-and-drop interface, team collaboration features, and real-time updates."
            tags={["TypeScript", "React", "Firebase", "Tailwind CSS"]}
          />

          <ProjectCard
            theme={theme}
            image="https://images.unsplash.com/photo-1551650975-87deedd944c3"
            title="Mobile Fitness Tracker"
            description="Cross-platform mobile app for tracking workouts, setting goals, and monitoring progress with beautiful data visualizations."
            tags={["React Native", "MongoDB", "Express", "Chart.js"]}
          />

          <ProjectCard
            theme={theme}
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            title="Analytics Dashboard"
            description="Real-time analytics dashboard with interactive charts, custom reports, and data export functionality."
            tags={["Vue.js", "D3.js", "Python", "FastAPI"]}
          />
        </div>
      </div>
    </section>
  );
}

/* Reusable Card Component */
function ProjectCard({ theme, image, title, description, tags }) {
  return (
    <div className={`rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group ${
      theme === "dark" ? "bg-gray-800" : "bg-white"
    } border ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}>
      {/* Image */}
      <div className="h-56 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="mb-6 leading-relaxed">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`text-sm px-3 py-1 rounded-full ${
                theme === "dark"
                  ? "bg-gray-700 text-rose-400"
                  : "bg-rose-50 text-rose-600"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a href="#" className={`flex items-center gap-2 font-medium transition-colors ${
            theme === "dark" ? "text-gray-300 hover:text-rose-400" : "text-gray-600 hover:text-rose-500"
          }`}>
            <Github className="w-5 h-5" />
            <span>Code</span>
          </a>
          <a href="#" className={`flex items-center gap-2 font-medium transition-colors ${
            theme === "dark" ? "text-gray-300 hover:text-rose-400" : "text-gray-600 hover:text-rose-500"
          }`}>
            <ExternalLink className="w-5 h-5" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
