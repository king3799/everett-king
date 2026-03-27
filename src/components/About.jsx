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
                Full Stack Developer with 5+ years of professional experience building end-to-end web
                applications using modern frontend and backend technologies. Strong foundation in JavaScript, React, and Node.js, with a clear understanding of application flow from user interface to
                database. Known for steady problem-solving, clean code habits, and a proactive attitude toward
                learning and improving system quality.
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
                  August 2022 – Present
                </span>
              </div>
              <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
                <li>Promoted to Senior Software Engineer after demonstrating advanced technical leadership in large-scale
                  application development and architecture design. </li>
                <li>Led cross-functional teams in the development of complex web applications, ensuring high scalability, performance, and maintainability. </li>
                <li>Spearheaded the transition of legacy systems to modern Node.js-based microservices architectures, resulting in
                  improved scalability and reduced deployment times. </li>
                <li>Collaborated closely with product owners and stakeholders to align technical solutions with business needs and
                  deliver timely, quality-driven solutions. </li>
                <li>Provided mentorship and guidance to junior engineers, helping to enhance their skills, improve code quality, and foster a collaborative team culture. </li>
                <li>Championed the integration of modern CI/CD workflows, reducing release cycles and improving development
                  efficiency by 40%.</li>
              </ul>
            </div>

            {/* FULL STACK ENGINEER */}
            <div className="relative">

              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">Full Stack Engineer</p>
                </div>
                <span className="text-sm text-gray-500">
                  August 2020 - July 2022
                </span>
              </div>
              <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2">
                <li>Played a key role in the design, development, and optimization of highly scalable applications using Node.js, React, and TypeScript. • Led backend engineering efforts for e-commerce platforms, improving performance and reliability of payment
                  processing systems.</li>
                <li>Focused on improving application performance and scalability by optimizing API structures and database
                  queries, resulting in reduced latency and faster response times. </li>
                <li>Integrated real-time features using Django Channels and Node.js, delivering enhanced user experiences in
                  real-time applications. </li>
                <li>Deployed applications using Docker and cloud services (AWS, GCP), ensuring high availability and optimal
                  performance in production environments.</li>
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