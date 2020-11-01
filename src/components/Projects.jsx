import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-500">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          <ProjectCard
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
            title="E-Commerce Platform"
            description="A modern e-commerce solution with real-time inventory management, secure payment integration, and responsive design."
            tags={["React", "Node.js", "PostgreSQL", "Stripe"]}
          />

          <ProjectCard
            image="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            title="Task Management App"
            description="Collaborative task management tool with drag-and-drop interface, team collaboration features, and real-time updates."
            tags={["TypeScript", "React", "Firebase", "Tailwind CSS"]}
          />

          <ProjectCard
            image="https://images.unsplash.com/photo-1551650975-87deedd944c3"
            title="Mobile Fitness Tracker"
            description="Cross-platform mobile app for tracking workouts, setting goals, and monitoring progress with beautiful data visualizations."
            tags={["React Native", "MongoDB", "Express", "Chart.js"]}
          />

          <ProjectCard
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
function ProjectCard({ image, title, description, tags }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 hover:-translate-y-1">

      {/* Image */}
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-xl font-semibold mb-3">
          {title}
        </h3>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-rose-100 text-rose-500 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        {/* <div className="flex items-center gap-6 text-sm">
          <a
            href="#"
            className="flex items-center gap-2 text-rose-500 hover:underline"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>

          <a
            href="#"
            className="flex items-center gap-2 text-gray-600 hover:text-black"
          >
            <Github size={16} />
            Source Code
          </a>
        </div> */}

      </div>
    </div>
  );
}