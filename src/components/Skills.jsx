import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles
} from "lucide-react";

export default function Skills({ theme }) {
  return (
    <section className={`py-20 px-6 transition-colors duration-300 ${theme === "dark" ? "bg-gray-800" : "bg-gradient-to-b from-gray-50 to-white"}`} id="skills">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full mb-4"></div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Languages */}
          <SkillCard
            theme={theme}
            icon={<Code2 size={24} />}
            title="Languages"
            skills={[
              "Python",
              "TypeScript",
              "JavaScript",
              "Java",
              // "C#",
              // ".NET"
            ]}
          />

          {/* Frontend */}
          <SkillCard
            theme={theme}
            icon={<Layout size={24} />}
            title="Frontend"
            skills={[
              "React",
              "Next.js",
              "Angular",
              "Redux Toolkit",
              "Zustand",
              "TanStack Query",
              "React Hooks",
              "Material-UI",
              "Responsive UI",
              "UI/UX Optimization",
              "Progressive Web Apps",
              "Web Accessibility",
              "Cross-browser Compatibility"
            ]}
          />

          {/* Backend */}
          <SkillCard
            theme={theme}
            icon={<Server size={24} />}
            title="Backend"
            skills={[
              // "ASP.NET Core",
              "Node.js",
              "Django",
              "Flask",
              "FlastAPI",
              "Laravel",
              "Express",
              "REST APIs",
              "API Design",
              "GraphQL",
              "JWT Authentication",
              "Microservices",
              "WebSockets",
              "Server-Side Rendering",
              "Pydantic",
              "SQLAlchemy",
              "SSE",
              "Async Processing"
              
            ]}
          />

          {/* Databases */}
          <SkillCard
            theme={theme}
            icon={<Database size={24} />}
            title="Databases"
            skills={[
              "PostgreSQL",
              "pgvector",
              "Qdrant",
              "FAISS",
              "MongoDB",
              "MySQL",
              "NoSQL",
              "Redis",
              "Database Design",
              "Indexing",
              "Query Optimization",
              "Data Modeling",
              "Transactions",
              "Migrations"
            ]}
          />

          {/* Tools */}
          <SkillCard
            theme={theme}
            icon={<Wrench size={24} />}
            title="Tools & Platforms"
            skills={[
              "Git",
              "GitHub",
              "Docker",
              "OpenAI",
              "Anthropic",
              "vLLM",
              "TGI",
              "LangChain",
              "LangGraph",
              "LlamaIndex",
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
            theme={theme}
            icon={<Sparkles size={24} />}
            title="Other Skills"
            skills={[
              "Performance Optimization",
              "Debugging",
              "Testing",
              "Project Management",
              "Code Review",
              "SEO Optimization",
              "Security Best Practices",
              "Team Leadership",
              "Technical Documentation",
              "AI & LLM Applications","RAG","AI Agents", "Vector Search", "Embeddings", "Model Integration", "API Architecture", "Distributed Systems"
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* Reusable Card Component */
function SkillCard({ theme, icon, title, skills }) {
  return (
    <div className={`rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 group ${
      theme === "dark" ? "bg-gray-700 hover:bg-gray-650" : "bg-white hover:shadow-xl"
    } border ${theme === "dark" ? "border-gray-600" : "border-gray-200"}`}>
      {/* Icon + Title */}
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-4 rounded-xl transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-600 text-rose-400 group-hover:bg-rose-500 group-hover:text-white" : "bg-rose-50 text-rose-500 group-hover:bg-rose-500 group-hover:text-white"
        }`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>

      {/* Skill Tags */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`text-sm px-3 py-1.5 rounded-lg transition-colors duration-200 ${
              theme === "dark"
                ? "bg-gray-600 text-gray-300 hover:bg-rose-500/20 hover:text-rose-400"
                : "bg-gray-50 text-gray-700 hover:bg-rose-50 hover:text-rose-600"
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
