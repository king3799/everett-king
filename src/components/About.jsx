import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 text-gray-900">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-3">
            About Me
          </h2>
          <p className="text-gray-500">
            My journey as a Senior Web developer and my Professional background
          </p>
        </div>

        {/* Profile Box */}
        <div className="mb-16">
           <div className="flex items-center gap-3 mb-8">
            <MapPin className="text-rose-500" size={20} />
            <h3 className="text-xl font-semibold">Profile</h3>
          </div>
          <div className="flex items-start gap-4">
            <div  className="space-y-10 border-l border-rose-200 pl-8">
              <p className="text-gray-700 leading-relaxed ">
                Senior Web Developer with 5+ years of experience in full-stack
                development. Delivered scalable, user-friendly applications.
                Recently relocated and continuously improving communication skills.
                Passionate about building modern web applications and learning new technologies.
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

            {/* Senior */}
            <div className="relative">
              
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold">Senior Full Stack Web Developer</h4>
                  <p className="text-sm text-gray-500">Red Orange Pte Ltd, Singapore</p>
                </div>
                <span className="text-sm text-gray-500">
                  March 2025 - Present
                </span>
              </div>
              <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
                <li>Design and implement scalable web applications using React, Node.js, and RESTful APIs.</li>
                <li>Architect backend services and optimize application performance for high-traffic environments.</li>
                <li>Lead development of new features from planning to deployment.</li>
                <li>Collaborate with international cross-functional teams including designers, product managers, and backend engineers.</li>
                <li>Review code and enforce best practices to maintain high code quality and system reliability.</li>
                <li>Improve system performance through refactoring, caching strategies, and API optimization.</li>
                <li>Participate in architectural discussions and technical decision-making.</li>
              </ul>
            </div>

            {/* Web Developer */}
            <div className="relative">
              
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold">Web Developer</h4>
                  <p className="text-sm text-gray-500">Red Orange Pte Ltd, Singapore</p>
                </div>
                <span className="text-sm text-gray-500">
                  June 2022 - February 2025
                </span>
              </div>
              <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
                <li>Developed and maintained full-stack web applications using JavaScript, React, and backend APIs.</li>
                <li>Built responsive and user-friendly interfaces while improving UI/UX performance.</li>
                <li>Integrated frontend applications with backend services and third-party APIs.n</li>
                <li>Optimized database queries and application performance to improve system efficiency.</li>
                <li>Collaborated with senior developers to implement new product features.</li>
                <li>Applied software engineering concepts learned in university to real production systems.</li>
                <li>Fixed bugs and improved existing functionality across multiple web platforms.</li>
              </ul>
            </div>

            {/* Junior */}
            <div className="relative">
              
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold">Junior Web Developer</h4>
                  <p className="text-sm text-gray-500">Red Orange Pte Ltd, Singapore</p>
                </div>
                <span className="text-sm text-gray-500">
                  June 2020 - May 2022
                </span>
              </div>
              <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
                <li>Assisted senior developers with coding, debugging, and maintaining web applications.</li>
                <li>Contributed to frontend UI development using HTML, CSS, and JavaScript.</li>
                <li>Supported backend development tasks and basic API integration.</li>
                <li>Tested features and fixed bugs to improve application stability.</li>
                <li>Learned best practices in version control (Git), code structure, and collaborative development.</li>
                <li>Built foundational knowledge in full-stack development and modern web technologies.</li>
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
                  Singapore Institute of Technology
                </h4>
                <p className="text-sm text-gray-500">1 Punggol Coast Road, Singapore</p>
              </div>
              <span className="text-sm text-gray-500">
                September 2018 - June 2022
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}