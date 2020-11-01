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
            My journey as a developer and my professional background
          </p>
        </div>

        {/* Profile Box */}
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-8 mb-16">
          <div className="flex items-start gap-4">
            <MapPin className="text-rose-500 mt-1" size={20} />
            <div>
              <h3 className="font-semibold mb-2">Profile</h3>
              <p className="text-gray-700 leading-relaxed">
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
                <h4 className="font-semibold">Senior Web Developer</h4>
                <span className="text-sm text-gray-500">
                  March 2025 - Present
                </span>
              </div>
              <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
                <li>Design and implement web applications</li>
                <li>Build scalable solutions using React, Node.js, REST APIs</li>
                <li>Collaborate in international teams</li>
              </ul>
            </div>

            {/* Web Developer */}
            <div className="relative">
              
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold">Web Developer</h4>
                  <p className="text-sm text-gray-500">Shanghai, China</p>
                </div>
                <span className="text-sm text-gray-500">
                  June 2022 - February 2025
                </span>
              </div>
              <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
                <li>Developed and maintained web applications</li>
                <li>Optimized UI/UX and performance</li>
                <li>Applied university knowledge in production</li>
              </ul>
            </div>

            {/* Junior */}
            <div className="relative">
              
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold">Junior Web Developer</h4>
                  <p className="text-sm text-gray-500">Shanghai, China</p>
                </div>
                <span className="text-sm text-gray-500">
                  June 2020 - May 2022
                </span>
              </div>
              <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
                <li>Assisted in coding and debugging</li>
                <li>Contributed to UI and backend functionality</li>
                <li>Built foundational technical skills</li>
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
                  Shanghai Dianji University
                </h4>
                <p className="text-sm text-gray-500">Shanghai, China</p>
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