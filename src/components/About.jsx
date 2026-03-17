import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="px-6 py-10 text-gray-900">
      <div className="max-w-5xl mx-auto">

        {/* Profile Box */}
        <div className="mb-16 ">
           <div className="flex items-center gap-3 mb-8">
            <MapPin className="text-rose-500" size={20} />
            <h3 className="text-xl font-semibold">Profile</h3>
          </div>
          <div className="flex items-start gap-4">
            <div  className="space-y-10 border-l border-rose-200 pl-8">
              <p className="text-gray-700 leading-relaxed ">
                Results-driven Senior Full-Stack Developer with 5+ years of experience delivering robust web applications. Expertise in React, Node.js, and full-stack architecture. Passionate about performance, scalability, and creating user-friendly solutions while continuously expanding technical skills.
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
                  <h4 className="font-semibold">Senior Software Engineer</h4>
                  <p className="text-sm text-gray-500">Iostudio •REMOTE | NASHVILLE, TN</p>
                </div>
                <span className="text-sm text-gray-500">
                  Dec 2023 – Present
                </span>
              </div>
              <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
                <li>Led full-stack delivery of product features using React with backend services in Laravel and Django, focusing on scalable patterns and long-term maintainability.</li>
                <li>Designed and implemented REST APIs including validation, pagination, error handling, and versioning patterns while collaborating with stakeholders to translate requirements into reliable features.</li>
                <li>Built reusable UI components and shared utilities in React, improving consistency and reducing duplicated work across teams.</li>
                <li>Implemented performance and reliability improvements such as query and endpoint optimization, improved caching strategies, and stronger API contracts</li>
                <li>Designed and integrated backend service workflows and third-party APIs to improve automation, reliability, and overall user experience.</li>
                <li>Improved developer workflow and deployment consistency using Docker and automated checks (linting, type checks, testing) aligned with CI/CD practices</li>
                <li>Participated in production support, including debugging, root cause analysis, and system hardening through preventative fixes and improvements.</li>
              </ul>
            </div>

            {/* FULL STACK ENGINEER */}
            <div className="relative">
              
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold">Full Stack Engineer</h4>
                  <p className="text-sm text-gray-500">Amazon •Remote | HUNTINGTON, WV</p>
                </div>
                <span className="text-sm text-gray-500">
                  May 2021 - Oct 2023
                </span>
              </div>
              <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
                <li>Delivered full-stack features using Next.js and Angular with Node.js/Express backend services, supporting product goals with clean and maintainable code.</li>
                <li>Worked in an Agile/Scrum environment including sprint planning, estimations, iterative delivery, code reviews, and release readiness.</li>
                <li>Built and enhanced API endpoints and integrations while improving debugging efficiency through better logging, error handling, and consistent response structures.</li>
                <li>Contributed to product quality through unit and integration testing practices and close collaboration with QA on edge cases and regression prevention.</li>
                <li>Helped streamline developer experience through improved documentation, repeatable local setup processes, and shared service conventions.</li>
              </ul>
            </div>

            {/* SOFTWARE ENGINEER */}
            <div className="relative">
              
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold">Software Engineer</h4>
                  <p className="text-sm text-gray-500">RSYGLASS, INC • HYBRID | Morgantown, WV</p>
                </div>
                <span className="text-sm text-gray-500">
                  June 2018 - Apr 2021
                </span>
              </div>
              <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
                <li>Built and maintained web application features using Vue.js and React, focusing on reusable component architecture and responsive UI patterns.</li>
                <li>Developed backend services with Node.js, implementing REST endpoints and integration workflows supporting core product operations.</li>
                <li>Worked with MongoDB and MySQL for application data and reporting use cases, contributing to schema design and query optimization for better performance.</li>
                <li>Supported containerized development environments using Docker to improve consistency across development and shared environments.</li>
                <li>Assisted with production troubleshooting by identifying root causes and delivering fixes with minimal risk to system stability.</li>
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
                  West Virginia State University
                </h4>
                <p className="text-sm text-gray-500">Institute, WV</p>
              </div>
              <span className="text-sm text-gray-500">
                September 2014 - May 2018
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}