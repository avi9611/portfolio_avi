import React from "react";
import FramerWrapper from "./FramerWrapper";

const Education: React.FC = () => (
  <section id="education" className="py-20 bg-white dark:bg-gray-950">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4">
          Education
        </h2>
        <div className="w-16 h-px bg-gray-300 dark:bg-gray-700 mx-auto"></div>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="w-full flex flex-col gap-12 border-l-4 border-gray-300 dark:border-gray-700 pl-6">
          {/* MCA */}
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.25}
            className="relative group transition-all duration-300 hover:translate-x-2"
          >
            <div className="absolute -left-8 top-1 bg-gradient-to-r from-blue-500 to-indigo-600 h-4 w-4 rounded-full shadow-md group-hover:scale-125 transition-transform duration-300 education-timeline-dot timeline-pulse"></div>
            <div className="text-lg font-semibold text-gray-700 dark:text-white mb-1">
              Oct 2022 - Sep 2024
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              Master of Computer Application
            </div>
            <div className="text-md font-medium text-gray-600 dark:text-gray-300 mb-3">
              Visvesvaraya Technological University
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Completed MCA at Srinivas Institute of Technology, Mangalore,
              gaining expertise in software engineering, web development, cloud
              computing, and algorithms. Proficient in Java, Python, and modern
              frameworks.
            </p>
            <div className="mt-4 inline-block bg-blue-100 dark:bg-blue-900/30 rounded-lg px-4 py-2 text-blue-800 dark:text-blue-200 font-semibold">
              CGPA: 8.85
            </div>
          </FramerWrapper>

          {/* BSc */}
          <FramerWrapper
            y={0}
            x={-100}
            delay={0.35}
            className="relative group transition-all duration-300 hover:translate-x-2"
          >
            <div className="absolute -left-8 top-1 bg-gradient-to-r from-green-500 to-teal-600 h-4 w-4 rounded-full shadow-md group-hover:scale-125 transition-transform duration-300 education-timeline-dot timeline-pulse-green"></div>
            <div className="text-lg font-semibold text-gray-700 dark:text-white mb-1">
              Feb 2017 - Jul 2019
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              Bachelor of Science
            </div>
            <div className="text-md font-medium text-gray-600 dark:text-gray-300 mb-3">
              Mangalore University
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Completed B.Sc. in Mathematics at Bhandarkars Arts and Science
              College, Kundapura. Developed strong analytical skills through
              coursework in mathematics, forming a solid foundation for
              problem-solving in technology.
            </p>
            <div className="mt-4 inline-block bg-green-100 dark:bg-green-900/30 rounded-lg px-4 py-2 text-green-800 dark:text-green-200 font-semibold">
              Percentage: 68.24%
            </div>
          </FramerWrapper>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
