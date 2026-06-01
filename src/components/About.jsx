import { MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function About({ theme }) {
  return (
    <section id="about" className={`py-20 px-6 transition-colors duration-300 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full mb-4"></div>
          <p className="max-w-2xl mx-auto">
            My professional journey, experience, and education
          </p>
        </div>

        {/* Profile Box */}
        <div className="mt-8 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-rose-100 p-3 rounded-xl">
              <MapPin className="text-rose-500" size={20} />
            </div>
            <h3 className="text-2xl font-bold">Profile</h3>
          </div>
          <div className="flex items-start gap-4">
            <div className="space-y-6 border-l-4 border-rose-200 pl-8">
              <p className="leading-relaxed text-lg">
                Full-Stack Web Developer with 5 years of experience building scalable web applications and backend systems. I work with React, Vue, Node.js, Python, Django, and Laravel, and I've delivered projects across e-commerce, SaaS, and real-time platforms. I'm comfortable with cloud deployments (AWS, GCP), microservices, and AI/LLM integrations. I focus on performance, clean architecture, and building reliable, production-ready systems.
              </p>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-rose-100 p-3 rounded-xl">
              <Briefcase className="text-rose-500" size={20} />
            </div>
            <h3 className="text-2xl font-bold">Work Experience</h3>
          </div>

          <div className="space-y-12 border-l-4 border-rose-200 pl-8">
            {/* Full stack web developer */}
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-4 h-4 bg-rose-500 rounded-full border-4 border-white"></div>
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                <div>
                  <h4 className="font-bold text-xl">October Labs Pte Ltd, Singapore</h4>
                  <p className="text-rose-500 font-medium mb-3">Backend-focused Web Developer</p>
                </div>
                <span className={`text-sm font-semibold px-3 py-1 rounded-lg self-start md:self-auto ${
                  theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"
                }`}>
                  Aug 2024 – Present
                </span>
              </div>
              <ul className="list-disc pl-5 mt-4 space-y-3">
                <li>Turned to Backend-focused Web Developer for leadership in large-scale application design and architecture.</li>
                <li>Developed Python backend services using Django and FastAPI for data pipelines, AI/ML integration, and API orchestration.</li>
                <li>Built AI/LLM-powered internal tools and dashboards, leveraging Python to process structured and unstructured data.</li>
                <li>Led React and Vue.js frontend projects, optimizing performance and ensuring accessibility.</li>
                <li>Implemented microservices architecture in Node.js and Python, reducing system downtime by 35%.</li>
                <li>Oversaw CI/CD pipelines, automated testing, and cloud deployment, improving release efficiency by 40%.</li>
                <li>Mentored junior engineers in Python and JavaScript best practices, code reviews, and testing methodologies.</li>
              </ul>
            </div>

            {/* FULL STACK ENGINEER */}
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-4 h-4 bg-rose-500 rounded-full border-4 border-white"></div>
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                <div>
                  <p className="text-rose-500 font-medium mb-3">Full Stack Web Developer</p>
                </div>
                 <span className={`text-sm font-semibold px-3 py-1 rounded-lg self-start md:self-auto ${
                  theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"
                }`}>
                  Nov 2022 – Jul 2024
                </span>
              </div>
              <ul className="list-disc pl-5 mt-4 space-y-3">
                <li>Designed and implemented Python-based APIs and data processing services for e-commerce and real-time analytics platforms.</li>
                <li>Integrated backend systems with AI/ML models for recommendation engines, data transformation, and reporting tools.</li>
                <li>Enhanced application performance and scalability by optimizing Python code and database queries.</li>
                <li>Built real-time applications with WebSockets and Django Channels, improving user engagement.</li>
                <li>Managed Dockerized deployments on AWS and GCP, ensuring high availability and monitoring.</li>
                <li>Developed full-stack web applications using Django (Python), Node.js, and PHP Laravel.</li>
                <li>Built RESTful APIs, microservices, and background workers for asynchronous processing.</li>
                <li>Designed and optimized database schemas for PostgreSQL and Redis for high-volume systems.</li>
                <li>Created reusable frontend components with React and Vue.js, ensuring maintainable and scalable UI.</li>
                <li>Contributed to DevOps automation with Docker, CI/CD workflows, and cloud deployments.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-rose-100 p-3 rounded-xl">
              <GraduationCap className="text-rose-500" size={20} />
            </div>
            <h3 className="text-2xl font-bold">Education</h3>
          </div>

          <div className="border-l-4 border-rose-200 pl-8 relative">
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-4 h-4 bg-rose-500 rounded-full border-4 border-white"></div>
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                <div>
                  <h4 className="font-bold text-xl">Shanghai University</h4>
                  <p className="mt-1">Bachelor's Degree</p>
                </div>
                 <span className={`text-sm font-semibold px-3 py-1 rounded-lg self-start md:self-auto ${
                  theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"
                }`}>
                  Aug 2018 – Jul 2022
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
