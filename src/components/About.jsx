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
                Results-driven full stack web developer with 4 years building backend services, APIs, and cloud-native web applications using Node.js, Python, React, and TypeScript. <br />Strong background in API design, microservices, and AWS-based deployments with hands-on experience in PostgreSQL and NoSQL stores. <br />Comfortable working in Agile teams, contributing to architecture, and delivering secure, maintainable systems relevant to mission-focused environments.
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
                  <a href="https://www.zelifcam.net">
                    <h4 className="font-bold text-xl"> Zelifcam, San Antonio, TX </h4></a>
                  <p className="text-rose-500 font-medium mb-3">Full Stack Web Developer</p>
                </div>
                <span className={`text-sm font-semibold px-3 py-1 rounded-lg self-start md:self-auto ${theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"
                  }`}>
                  Aug 2023 – Apr 2026
                </span>
              </div>
              <ul className="list-disc pl-5 mt-4 space-y-3">
                <li>Led development of RESTful APIs and microservices using Node.js and Python (Flask/Django) to support a multi-tenant SaaS platform, improving maintainability and deployment predictability.</li>
                <li>Designed and implemented authentication and session flows integrated with PostgreSQL and Redis to stabilize user sessions and reduce intermittent failures.</li>
                <li>Built and maintained serverless ingestion pipelines on AWS Lambda and S3, enabling batch uploads and automated processing of customer data.</li>
                <li>Architected database schemas and optimized queries in PostgreSQL and MongoDB, improving query consistency and overall API responsiveness.</li>
                <li>Owned end-to-end frontend implementation of core SaaS features using React, TypeScript, and CSS Modules, delivering responsive interfaces that adapt across desktop, tablet, and mobile breakpoints.</li>
                <li>Implemented CI/CD pipelines with GitHub Actions and containerized builds using Docker, reducing manual deployment steps and improving release cadence.</li>
                <li>Developed background workers and scheduled jobs for data processing using Node.js and container orchestration patterns, improving throughput of ETL workflows.</li>
                <li>Collaborated with product and UX teams to convert SPA requirements into scalable API patterns consumed by React frontends and React Native mobile prototypes.</li>
                <li>Implemented feature toggles and rollout strategies to safely deploy complex backend changes while coordinating with team members.</li>
                <li>Integrated third-party APIs and payment/webhook processors, handling retries and idempotency across Node.js services and database transactions.</li>
                <li>Designed and implemented client-side data fetching patterns with React Query, improving perceived load and simplifying offline handling for slow mobile networks.</li>
              </ul>
            </div>

            {/* FULL STACK ENGINEER */}
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-4 h-4 bg-rose-500 rounded-full border-4 border-white"></div>
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                <div>
                  <p className="text-rose-500 font-medium mb-3">Web Developer</p>
                </div>
                <span className={`text-sm font-semibold px-3 py-1 rounded-lg self-start md:self-auto ${theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"
                  }`}>
                  Jun 2022 – Jul 2023
                </span>
              </div>
              <ul className="list-disc pl-5 mt-4 space-y-3">
                <li>Developed full-stack features and reusable components for customer-facing applications using React, TypeScript, and Node.js backed by PostgreSQL.</li>
                <li>Implemented REST APIs in Python (Flask) and Node.js, focusing on clear contracts and error handling for upstream consumers.</li>
                <li>Tuned database indexes and query plans in PostgreSQL to improve response times for reporting endpoints and reduce load on primary instances.</li>
                <li>Partnered with QA to introduce end-to-end and unit testing using Jest and Playwright for critical customer flows in the React frontend.</li>
                <li>Implemented caching strategies with Redis to alleviate read load and improve perceived page performance for high-traffic endpoints.</li>
                <li>oordinated cross-team integration for third-party services, handling authentication flows and webhook reliability in Node.js services.</li>
                <li>Contributed to system design sessions to scope migrations from monolithic code to modular services and clarify ownership boundaries.</li>
                <li>Provided on-call support and performed incident triage, diagnosing root causes across application, database, and cloud layers.</li>
                <li>Produced technical documentation and runbooks for deploys, rollbacks, and operational procedures to improve team knowledge transfer.</li>
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
                  <h4 className="font-bold text-xl">University of Texas at San Antonio</h4>
                  <p className="mt-1">Bachelor's Degree in Computer Science</p>
                </div>
                <span className={`text-sm font-semibold px-3 py-1 rounded-lg self-start md:self-auto ${theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"
                  }`}>
                  Aug 2018 – May 2022
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
