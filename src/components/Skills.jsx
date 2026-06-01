import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles
} from "lucide-react";

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white" id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Languages */}
          <SkillCard
            icon={<Code2 size={24} />}
            title="Languages"
            skills={[
              "CSS3",
              "HTML5",
              "JavaScript (ES6+)",
              "PHP",
              "Python",
              "SQL",
              "TypeScript"
            ]}
          />

          {/* Frontend */}
          <SkillCard
            icon={<Layout size={24} />}
            title="Frontend"
            skills={[
              "React",
              "Vue.js",
              "Redux",
              "Next.js",
              "Tailwind CSS",
              "Bootstrap",
              "Material-UI",
              "Ant Design",
              "Responsive UI",
              "UI/UX Optimization",
              "Progressive Web Apps",
              "Web Accessibility",
              "Cross-browser Compatibility"
            ]}
          />

          {/* Backend */}
          <SkillCard
            icon={<Server size={24} />}
            title="Backend"
            skills={[
              "ASP.NET Core",
              "Node.js",
              "Laravel",
              "Express",
              "REST APIs",
              "GraphQL",
              "JWT Authentication",
              "Microservices",
              "WebSockets",
              "Server-Side Rendering",
              "API Design",
              "OAuth"
            ]}
          />

          {/* Databases */}
          <SkillCard
            icon={<Database size={24} />}
            title="Databases"
            skills={[
              "MySQL",
              "MongoDB",
              "PostgreSQL",
              "Redis",
              "Database Design",
              "Query Optimization",
              "Data Modeling"
            ]}
          />

          {/* Tools */}
          <SkillCard
            icon={<Wrench size={24} />}
            title="Tools & Platforms"
            skills={[
              "Git",
              "GitHub",
              "Docker",
              "Webpack",
              "Vite",
              "NPM",
              "Yarn",
              "Postman",
              "VS Code",
              "Jira",
              "Figma",
              "Linux",
              "Nginx"
            ]}
          />

          {/* Other Skills */}
          <SkillCard
            icon={<Sparkles size={24} />}
            title="Other Skills"
            skills={[
              "Performance Optimization",
              "Debugging",
              "Testing",
              "Jest",
              "Cypress",
              "Agile/Scrum",
              "Project Management",
              "Code Review",
              "CI/CD",
              "SEO Optimization",
              "Security Best Practices",
              "Team Leadership",
              "Technical Documentation"
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* Reusable Card Component */
function SkillCard({ icon, title, skills }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
      {/* Icon + Title */}
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-rose-50 text-rose-500 p-4 rounded-xl group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>

      {/* Skill Tags */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-sm bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-rose-50 hover:border-rose-200 hover:text-rose-600 transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
