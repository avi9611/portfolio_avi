import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Developer Intern",
    org: "GRID R & D",
    date: "May 2024 - Present",
    desc: `At GRID R & D, I am actively involved in full-stack development using the MERN stack (MongoDB, Express.js, React, Node.js). My responsibilities include developing and maintaining web applications, implementing RESTful APIs, and managing MySQL databases. I work with AWS cloud infrastructure for deployment and hosting, gaining valuable experience in cloud services. Key contributions include building responsive user interfaces, optimizing database queries, and collaborating with the team to deliver scalable solutions.`,
  },
  {
    title: "Java Full Stack Developer Intern",
    org: "Kodnest",
    date: "Jan 2024 - Apr 2024",
    desc: `At Kodnest, I worked on developing full-stack web applications using Java, Spring Boot, Hibernate, and MySQL for backend development, along with HTML, CSS, JavaScript, and React for frontend development. My responsibilities included building RESTful APIs, implementing authentication and authorization, optimizing database queries, and ensuring responsive UI design. Additionally, I collaborated with a team to follow Agile methodologies and gained hands-on experience in the full software development lifecycle.`,
  },
  {
    title: "MERN Stack Intern",
    org: "Samagra Technologies",
    date: "Nov 2023 - Jan 2024",
    desc: `At Samagra Technologies, I developed and maintained full-stack web applications using MongoDB, Express.js, React, and Node.js. My responsibilities included designing and implementing RESTful APIs, developing dynamic and responsive user interfaces, integrating third-party services, and optimizing database queries for performance. I collaborated with cross-functional teams, followed Agile methodologies, and worked on debugging, testing, and deploying applications to enhance scalability and user experience.`,
  },
  {
    title: "Open Source Contributor",
    org: "GitHub",
    date: "Ongoing",
    desc: `Contributed to various open-source projects, focusing on bug fixes, feature implementations, and documentation improvements.`,
  },
];

const Experience: React.FC = () => (
  <section id="experience" className="py-12 px-4 max-w-4xl mx-auto">
    <h2 className="text-3xl font-extrabold mb-8 text-center text-teal-600 drop-shadow-sm">
      Internships & Experience
    </h2>
    <div className="space-y-8">
      {experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          initial={{ x: idx % 2 === 0 ? -80 : 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ type: "spring", duration: 0.7, stiffness: 100 }}
          className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl shadow-lg p-7 border border-neutral-200 dark:border-neutral-700 transition hover:shadow-xl"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
              <span className="font-bold text-lg text-teal-700 dark:text-teal-400">{exp.title}</span>
              <span className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 md:mt-0">
                {exp.org} &bull; <span className="font-medium text-teal-500 dark:text-teal-300">{exp.date}</span>
              </span>
            </div>
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-[15px] leading-relaxed">{exp.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;