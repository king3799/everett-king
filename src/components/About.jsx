import { MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function About({ theme }) {
  return (
    <section id="about" className={`py-20 px-6 transition-colors duration-300 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto rounded-full mb-4"></div>
          {/* <p className="max-w-2xl mx-auto">
            My professional journey, experience, and education
          </p> */}
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
                Full-Stack Web Developer with 5 years of experience designing, developing, and maintaining modern web applications.
                Skilled in JavaScript, TypeScript, React, Next.js, Node.js, and SQL databases, with a strong focus on performance, scalability, and user experience.
                <br /><br />
                Experienced in building responsive front-end interfaces, developing secure backend APIs, integrating third-party services, and deploying cloud-based applications.
                <br /><br />
                Proven ability to work across the entire development lifecycle, from requirements gathering and system design to implementation, testing, deployment, and ongoing maintenance. Comfortable collaborating with cross-functional teams, reviewing code, optimizing application performance, and solving complex technical challenges. Passionate about writing clean, maintainable code and delivering reliable software solutions that create measurable business value.
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
                <span className={`text-sm font-semibold px-3 py-1 rounded-lg self-start md:self-auto ${theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"
                  }`}>
                  Aug 2024 – Feb 2026
                </span>
              </div>
              <ul className="list-disc pl-5 mt-4 space-y-3">
                <li>Led development of RESTful APIs and microservices using Node.js and Python (Flask/Django) to support a multi-tenant
                  SaaS platform, improving maintainability and deployment predictability.</li>
                <li>Designed and implemented authentication and session flows integrated with PostgreSQL and Redis to stabilize user sessions
                  and reduce intermittent failures.</li>
                <li>Built and maintained serverless ingestion pipelines on AWS Lambda and S3, enabling batch uploads and automated
                  processing of customer data.</li>
                <li>Architected database schemas and optimized queries in PostgreSQL and MongoDB, improving query consistency and overall
                  API responsiveness.</li>
                <li>Owned end-to-end frontend implementation of core SaaS features using React, TypeScript, and CSS Modules, delivering
                  responsive interfaces that adapt across desktop, tablet, and mobile breakpoints.</li>
                <li>Implemented CI/CD pipelines with GitHub Actions and containerized builds using Docker, reducing manual deployment
                  steps and improving release cadence.</li>
                <li>Created comprehensive API contracts and OpenAPI documentation for frontend teams working with React and TypeScript, accelerating integration efforts</li>
                <li>Developed background workers and scheduled jobs for data processing using Node.js and container orchestration patterns, improving throughput of ETL workflows.</li>
                <li>Collaborated with product and UX teams to convert SPA requirements into scalable API patterns consumed by React
                  frontends and React Native mobile prototypes.</li>
                <li>Drove security improvements by introducing input validation, parameterized queries, and secrets management tied to AWS
                  credentials and environment configuration.</li>
                <li>Led code reviews focused on performance and reliability, introducing standardized logging and observability with structured
                  logs and traces.</li>
                <li>Implemented feature toggles and rollout strategies to safely deploy complex backend changes while coordinating with cross-functional teams.</li>
              </ul>
            </div>

            {/* FULL STACK ENGINEER */}
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-4 h-4 bg-rose-500 rounded-full border-4 border-white"></div>
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                <div>
                  <p className="text-rose-500 font-medium mb-3">Full Stack Web Developer</p>
                </div>
                <span className={`text-sm font-semibold px-3 py-1 rounded-lg self-start md:self-auto ${theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"
                  }`}>
                  Aug 2022 – Jul 2024
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
                  <p className="mt-1">Bachelor's Degree in Computer Science</p>
                </div>
                <span className={`text-sm font-semibold px-3 py-1 rounded-lg self-start md:self-auto ${theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"
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
