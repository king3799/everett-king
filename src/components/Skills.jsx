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
    <section className="bg-[#f5f5f5] py-20 px-6" id="skills">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-gray-500">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Languages */}
          <SkillCard
            icon={<Code2 size={20} />}
            title="Languages"
            skills={[
              "JavaScript", "TypeScript", "HTML5",
              "CSS3", "SASS/SCSS", "SQL","Python","PHP"
            ]}
          />

          {/* Frontend */}
          <SkillCard
            icon={<Layout size={20} />}
            title="Frontend"
            skills={[
                   "React",
                    "Vue.js",
                    "Redux",
                    "Vuex",
                    "Next.js",
                    "Nuxt.js",
                    "Tailwind CSS",
                    "Bootstrap",
                    "Material-UI",
                    "Ant Design",
                    "Responsive Design",
                    "UI/UX Optimization",
                    "Progressive Web Apps",
                    "Web Accessibility",
                    "Cross-browser Compatibility",
            ]}
          />

          {/* Backend */}
          <SkillCard
            icon={<Server size={20} />}
            title="Backend"
            skills={[
              "Node.js",
              "Express",
              "REST APIs",
              "GraphQL",
              "JWT Authentication",
              "Microservices",
              "WebSockets",
              "Server-Side Rendering",
              "API Design",
              "OAuth",
            ]}
          />

          {/* Databases */}
          <SkillCard
            icon={<Database size={20} />}
            title="Databases"
            skills={[
               "MySQL",
              "MongoDB",
              "PostgreSQL",
              "Redis",
              "Database Design",
              "Query Optimization",
              "Data Modeling",
              "IndexDB",
            ]}
          />

          {/* Tools */}
          <SkillCard
            icon={<Wrench size={20} />}
            title="Tools & Platforms"
            skills={[
             "Git",
              "GitHub",
              "GitLab",
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
              "Nginx",
              "AWS",
            ]}
          />

          {/* Other Skills */}
          <SkillCard
            icon={<Sparkles size={20} />}
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
              "Technical Documentation",
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
    <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition">

      {/* Icon + Title */}
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-rose-100 text-rose-500 p-3 rounded-xl">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      {/* Skill Tags */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-sm bg-gray-100 px-3 py-1 rounded-lg text-gray-600"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  );
}