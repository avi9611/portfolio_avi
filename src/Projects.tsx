import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = [
  {
    title: "ClickTalk-Real time Chatting App || MERN Stack",
    description: `This MERN Stack App is a full-stack web application that combines modern technologies to deliver a seamless and interactive user experience. It features real-time messaging with online user status, secured authentication and authorization, and an intuitive user interface styled with TailwindCSS and Daisy UI.`,
    tags: ["Zustand", "MongoDb", "Nodejs", "Reactjs", "Expressjs"],
    link: "https://github.com/avi9611/Click-Talk-MERN-App",
    imageOne: "/click1.png",
    imageTwo: "/click2.png",
  },
  {
    title: "Staff Management App",
    description: "A comprehensive full-stack application for efficient staff management with advanced CRUD operations, responsive dashboard, and dynamic filtering capabilities. Features include real-time staff updates, role-based access control, and intuitive user interface for seamless workforce management.",
    tags: ["Reactjs", "Typescript", "TailwindCSS", "Nodejs", "Express.js", "MongoDb"],
    link: "https://github.com/avi9611/staff-app",
    imageOne: "/staff1.png",
    imageTwo: "/staff2.png",
  },
  {
    title: "Code Eval AI",
    description: "An innovative AI-powered code and UI evaluation platform utilizing the Gemini API. Features include real-time feedback generation, comprehensive scoring system, and detailed code analysis. Built with modern tech stack for optimal performance and scalability.",
    tags: ["Vite", "Reactjs", "TailwindCSS", "Nodejs", "Express.js", "Prisma", "PostgreSQL"],
    link: "https://github.com/avi9611/code-eval-ai",
    imageOne: "/codeval1.png",
    imageTwo: "/codeval2.png",
  },
  {
    title: "Secure OTP Authentication App",
    description: "A robust passwordless authentication system with integrated analytics dashboard. Features include secure OTP delivery, real-time session management, and comprehensive usage analytics powered by ApexCharts. Built with focus on security and user experience.",
    tags: ["Reactjs", "TailwindCSS", "ApexCharts", "Express.js"],
    link: "https://github.com/avi9611/otp-app",
    imageOne: "/otp1.png",
    imageTwo: "/otp2.png",
  },
  {
    title: "Freelance-Chemcoach Solutions || Nextjs",
    description: "A simple, responsive web application built with Next.js 14, React, Node.js, Tailwind CSS, and written entirely in TypeScript. This app showcases the services of ChemCoach Solutions, highlighting their online chemistry classes. While the site itself does not host classes, it serves as an informative platform for promoting their offerings with a clean design and smooth user experience.",
    tags: ["Nextjs", "Typescript", "TailwindCSS", "Nodejs"],
    link: "https://github.com/avi9611/chemcoach-solutions",
    imageOne: "/nadibettu.png",
  },
  {
    title: "BookStore App || PERN Stack",
    description: "Book Store is a modern web application built with Next.js, featuring a seamless user experience for book discovery, management, and library organization. It includes robust authentication, database management, and an advanced UI/UX design.",
    tags: ["Nextjs", "PostgreSQL", "Typescript", "TailwindCSS"],
    link: "https://github.com/avi9611/book-store-nextjs",
    imageOne: "/bookstore.png",
  },
  {
    title: "Task Manager App || Nextjs, MongoDb",
    description: "This is a Next.js application designed as a task management tool with robust user authentication powered by Clerk. The application is written in TypeScript, styled with Tailwind CSS, and uses MongoDB to store user data.",
    tags: ["Nextjs", "MongoDb", "Typescript", "Clerk"],
    link: "https://github.com/avi9611/task-app",
    imageOne: "/taskapp.png",
    imageTwo: "/taskapp2.png",
  },
  {
    title: "Vulnerability Detection Tool - SQL Injection || Flask, MySql",
    description: "Vulnerability Detection System This project is a security-focused system designed to improve the safety of web applications by identifying and mitigating common vulnerabilities like SQL injection, weak passwords, and malicious file uploads. The system uses Python and Flask for backend services, MySQL for data management, and features a user-friendly web interface.",
    tags: ["Flask", "MySQL", "Javascript", "Python"],
    link: "https://github.com/avi9611/VulnerabilityDetection",
    imageOne: "/imagesA.jpg"
  },
  {
    title: "Cyber Store || PERN Stack",
    description: "Cyber Store is a simple e-commerce platform designed for gaming enthusiasts. The application enables users to perform basic CRUD operations to manage product listings.",
    tags: ["Nodejs", "Reactjs", "PostgreSQL", "Javascript", "TailwindCSS"],
    link: "https://github.com/avi9611/cyber-store-pern",
    imageOne: "/cyberstore.png",
  },
  {
    title: "Voyager Travel Agency || HTML5, CSS3",
    description: "The Travelers is a web application created to inspire wanderlust and provide users with a seamless experience for planning their dream trips. This website highlights breathtaking travel destinations, exclusive packages, and customer reviews, along with an interactive inquiry form for personalized assistance.",
    tags: ["HTML", "CSS", "Javascript"],
    link: "https://github.com/avi9611/travel-agency-voyager",
    imageOne: "/voyager.png",
  },
  {
    title: "Event Manager App || MERN Stack",
    description: "Event Manager App is for handling event for different events and user interaction",
    tags: ["Javascript", "Reactjs", "Nodejs", "MongoDb"],
    link: "https://github.com/avi9611/event-app-mern",
    imageOne: "/eventapp.png",
  },
  {
    title: "E-commerce App",
    description: "This is a platform for purchasing products online. This project is currently under development",
    tags: ["Nextjs", "MongoDb", "Typescript", "TailwindCSS"],
    link: "https://github.com/avi9611/e-commerce-react",
    imageOne: "/imagesA.jpg",
  },
];

const ProjectsComponent: React.FC = () => (
  <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 tracking-tight">Projects</h2>
        <p className="text-gray-500 mb-4 text-lg">A showcase of my work, featuring modern stacks and clean UI.</p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div className="relative flex gap-1 h-48 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 justify-center items-center">
              <img
                src={project.imageOne}
                alt={project.title}
                className={`object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105 ${project.imageTwo ? "w-1/2 h-full" : "w-full h-full"}`}
                style={{ maxHeight: "192px" }}
              />
              {project.imageTwo && (
                <img
                  src={project.imageTwo}
                  alt={project.title + " 2"}
                  className="object-cover rounded-lg shadow-md w-1/2 h-full transition-transform duration-300 group-hover:scale-105"
                  style={{ maxHeight: "192px" }}
                />
              )}
              <div className="absolute top-2 right-2 flex gap-2">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 hover:bg-blue-100 text-blue-600 rounded-full p-2 shadow transition"
                    title="View Repo"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs rounded-full font-medium shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-700 hover:text-purple-700 transition-colors duration-200 text-sm font-semibold"
                >
                  <ExternalLink size={16} />
                  Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsComponent;