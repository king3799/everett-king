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
                I'm a Full Stack Engineer who builds modern web applications and backend systems from the ground up. My primary stack includes <span className="text-1xl font-bold">Python, FastAPI, Django, Node.js, TypeScript, React, and Next.js,</span> allowing me to work comfortably across both backend and frontend development.
              </p><p className="leading-relaxed text-lg">
                I have strong experience designing <span className="text-1xl font-bold">REST and OpenAPI-based APIs, real-time applications, database architectures, and distributed services,</span> working with technologies such as <span className="text-1xl font-bold">PostgreSQL, SQLAlchemy, WebSockets, and background processing.</span> I also work with cloud infrastructure, <span className="text-1xl font-bold">CI/CD, testing, and production observability</span> to build software that is reliable and maintainable.
              </p><p className="leading-relaxed text-lg">
                My recent work has focused heavily on <span className="text-1xl font-bold">AI and LLM applications,</span> including <span className="text-1xl font-bold">RAG pipelines, AI agents, LangChain, LangGraph, vector databases, embeddings, and integrations with OpenAI, Anthropic, and open-source models.</span> I enjoy bringing these technologies together to create practical products that solve real-world problems.
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
            <h3 className="text-2xl font-bold">Experience</h3>
          </div>

          <div className="space-y-12 border-l-4 border-rose-200 pl-8">
            {/*Senior Full stack web developer */}
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-4 h-4 bg-rose-500 rounded-full border-4 border-white"></div>
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                <div>
                  <a href="https://codal.com/">
                    <h4 className="font-bold text-xl"> Codal | San Antonio, TX | Remote</h4></a>
                  <p className="text-rose-500 font-medium mb-3">Senior Full Stack Engineer</p>
                </div>
                <span className={`text-sm font-semibold px-3 py-1 rounded-lg self-start md:self-auto ${theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"
                  }`}>
                  Sep 2024 – Apr 2026
                </span>
              </div>
              <p className="leading-relaxed text-lg"> Built enterprise AI-powered applications and full-stack solutions for compliance-sensitive environments. Developed agentic AI workflows, RAG systems, FastAPI services, and React/TypeScript interfaces. Worked across AI infrastructure, APIs, databases, testing, observability, and deployment while mentoring engineers and helping establish production standards for LLM applications.</p>
              <span className="text-1xl font-bold">Key areas</span>: Python, FastAPI, React, TypeScript, LangChain, LangGraph, RAG, PostgreSQL, pgvector, Qdrant, OpenAI, Anthropic, vLLM, WebSockets, SSE
            </div>

            {/* Senior Software Engineer< */}
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-4 h-4 bg-rose-500 rounded-full border-4 border-white"></div>
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                <div>
                  <a href="https://www.paralect.com/">
                    <h4 className="font-bold text-xl"> Paralect | San Antonio, TX | Remote</h4></a>
                  <p className="text-rose-500 font-medium mb-3">Senior Software Engineer</p>
                </div>
                <span className={`text-sm font-semibold px-3 py-1 rounded-lg self-start md:self-auto ${theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"
                  }`}>
                  Dec 2021 – Jul 2024
                </span>
              </div>
             <p className="leading-relaxed text-lg">Developed backend services and full-stack features for a multi-tenant SaaS platform. Designed secure APIs and PostgreSQL data models, improved application performance and observability, and contributed to AI-powered search and document-processing capabilities. Collaborated closely with product, QA, and frontend teams to deliver reliable customer-facing features.</p>
              <span className="text-1xl font-bold">Key areas</span>: Python, SQLAlchemy, PostgreSQL, OpenAPI, React, TypeScript, APIs, vector search, SaaS, CI/CD
            </div>
            {/* Software Engineer< */}
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-4 h-4 bg-rose-500 rounded-full border-4 border-white"></div>
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                <div>
                  <a href="https://www.saritasa.com/">
                    <h4 className="font-bold text-xl"> Saritasa | San Antonio, TX | Remote</h4></a>
                  <p className="text-rose-500 font-medium mb-3">Software Engineer</p>
                </div>
                <span className={`text-sm font-semibold px-3 py-1 rounded-lg self-start md:self-auto ${theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"
                  }`}>
                  Mar 2019 – Oct 2021
                </span>
              </div>
             <p className="leading-relaxed text-lg">Built custom web applications for clients in healthcare and professional services. Developed Python and Node.js backend services, React/TypeScript interfaces, document-processing workflows, and secure system integrations. Improved application performance, testing, and deployment processes while working directly with client stakeholders.</p>
              <span className="text-1xl font-bold">Key areas</span>: Python, Node.js, React, TypeScript, REST APIs, document processing, OCR, PostgreSQL, FAISS
            </div>

            {/* Software Engineer< */}
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-4 h-4 bg-rose-500 rounded-full border-4 border-white"></div>
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                <div>
                  <a href="https://www.einfochips.com/">
                    <h4 className="font-bold text-xl"> EInfochips | San Antonio, TX | On-Site</h4></a>
                  <p className="text-rose-500 font-medium mb-3">Software Engineer</p>
                </div>
                <span className={`text-sm font-semibold px-3 py-1 rounded-lg self-start md:self-auto ${theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"
                  }`}>
                  Nov 2014 – Jan 2019
                </span>
              </div>
             <p className="leading-relaxed text-lg">Worked on embedded and IoT projects involving device management, telemetry processing, cloud services, and event-driven systems. Built backend services and data pipelines for device provisioning, monitoring, OTA workflows, and large-scale telemetry processing. Collaborated with hardware and QA teams to deliver reliable solutions for connected devices.</p>
              <span className="text-1xl font-bold">Key areas</span>: IoT, backend development, telemetry, PostgreSQL, NoSQL, message queues, cloud services, device management
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
                  <h4 className="font-bold text-xl">The University of Phoenix</h4>
                  <p className="mt-1">Bachelor's Degree in Information Technology</p>
                </div>
                <span className={`text-sm font-semibold px-3 py-1 rounded-lg self-start md:self-auto ${theme === "dark" ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"
                  }`}>
                  Aug 2010 – May 2014
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
