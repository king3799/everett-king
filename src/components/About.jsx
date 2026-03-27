import { MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="px-6 py-20 text-gray-900">
      <div className="max-w-5xl mx-auto">

        {/* Profile Box */}
        <div className="mt-5 mb-16 ">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="text-rose-500" size={20} />
            <h3 className="text-xl font-semibold">Profile</h3>
          </div>
          <div className="flex items-start gap-4">
            <div className="space-y-10 border-l border-rose-200 pl-8">
              <p className="text-gray-700 leading-relaxed ">
                Senior Full-Stack Software Engineer with 5+ years of experience delivering high-performance, scalable web applications and backend systems. Expert in React, Vue.js, Node.js, Django, Laravel, and Python, with extensive experience in cloud deployments (AWS, GCP), microservices architecture, real-time systems, and DevOps practices. Skilled in AI/LLM integrations, e-commerce platforms, and large-scale enterprise applications. Adept at leading engineering teams, mentoring developers, and managing full software development life cycles in Agile environments.
              </p>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-rose-500" size={20} />
            <h3 className="text-xl font-semibold">Work Experience</h3>
          </div>

          <div className="space-y-10 border-l border-rose-200 pl-8">

            {/* Senior Software Engineer */}
            <div className="relative">

              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold">October Labs Pte Ltd, Singapore | Remote</h4>
                  <p className="text-sm text-gray-500">Senior Software Engineer</p>
                </div>
                <span className="text-sm text-gray-500">
                  August 2024 – Present
                </span>
              </div>
              <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
                <li>Promoted to Senior Software Engineer for leadership in large-scale application design and architecture.</li>
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

              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">Software Engineer</p>
                </div>
                <span className="text-sm text-gray-500">
                  August 2021 - July 2024
                </span>
              </div>
              <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
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

            {/* FULL STACK ENGINEER */}
            <div className="relative">

              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">Junior Software Engineer</p>
                </div>
                <span className="text-sm text-gray-500">
                  August 2020 - July 2021
                </span>
              </div>
              <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
                <li>Assisted in building web applications with React, Node.js, and Python/Django backends.</li>
                <li>Contributed to migration projects from legacy PHP systems to modern Python-based frameworks.</li>
                <li>Learned and applied DevOps practices, containerization, and automated testing.</li>
                <li>Implemented frontend components in React and Vue.js for internal tools and dashboards.
                  Maintained relational databases (MySQL, PostgreSQL), optimized queries, and performed data validation.</li>
                <li>Contributed to CI/CD pipelines and automated testing using GitHub Actions and PyTest.</li>
                <li>Participated in Agile sprints, code reviews, and documentation to support collaborative team development.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-rose-500" size={20} />
            <h3 className="text-xl font-semibold">Education</h3>
          </div>

          <div className="border-l border-rose-200 pl-8 relative">

            <div className="flex justify-between">
              <div>
                <h4 className="font-semibold">
                  Singapore Institute of Technology (SIT)
                </h4>
                {/* <p className="text-sm text-gray-500">Institute, WV</p> */}
              </div>
              <span className="text-sm text-gray-500">
                August 2016 – July 2020
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}