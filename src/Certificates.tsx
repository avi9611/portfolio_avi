import React from 'react';
import { Award } from 'lucide-react';

const certificates = [
  {
    title: "Learning Docker",
    issuer: "LinkedIn",
    description:
      "This comprehensive course covers Docker containerization fundamentals, including container creation, management, networking, and deployment. It explores Docker Compose, container orchestration, best practices for building efficient images, and real-world application containerization strategies.",
    link: "https://www.linkedin.com/learning/certificates/c693de051ba3ded4dd753f503d31b28ac77291ba5a4a1cb1d7a2038eb47f1e21",
  },
  {
    title: "Spring Boot 3, Spring 6, Hibernate & Mysql",
    issuer: "Udemy",
    description:
      "This course provides extensive coverage of Spring Boot 3 and Spring 6 framework, including dependency injection, Spring MVC, RESTful web services, JPA with Hibernate ORM, and MySQL database integration. It focuses on building scalable and maintainable enterprise applications using modern Spring technologies.",
    link: "https://www.udemy.com/certificate/UC-f4e43bd1-0fa3-4fe6-ae95-93ca53221ed4/",
  },
  {
    title: "Modern React with Redux (2024)",
    issuer: "Udemy",
    description:
      "This Udemy course provides an in-depth understanding of React and Redux, covering modern development practices, state management, React Hooks, Redux Toolkit, and best practices for building scalable and maintainable React applications.",
    link: "https://www.udemy.com/certificate/UC-1658fcdc-cf67-41d1-a0e9-5ffd3ca0d64a/",
  },
  {
    title: "Developing Websites and Front-Ends with Bootstrap",
    issuer: "IBM",
    description:
      "Developing Websites and Front-Ends with Bootstrap by IBM covers the fundamentals of building responsive and visually appealing web interfaces using Bootstrap. The course explores key concepts such as grid systems, components, utilities, and customization techniques to create modern and mobile-friendly websites efficiently.",
    link: "https://www.credly.com/badges/6e85cf6d-ed21-46d1-8e7e-4365135ca766/linked_in_profile",
  },
  {
    title: "Web Application Technologies and Django",
    issuer: "University of Michigan",
    description:
      "Web Application Technologies and Django by the University of Michigan provides an in-depth understanding of web development using Django. The course covers fundamental web technologies, database integration, user authentication, and building dynamic web applications while following best practices in backend development.",
    link: "https://www.coursera.org/account/accomplishments/records/N3F6VH0CGXT8",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    description:
      "Issued by Microsoft, this certification demonstrates a strong understanding of cloud concepts, core Azure services, security, compliance, and pricing. It validates foundational knowledge essential for working with Microsoft Azure and cloud-based solutions.",
    link: "https://www.credly.com/badges/500023e2-ac50-46cf-bef8-e386adbd0979/linked_in_profile",
  },
  {
    title: "Python Data Structures and Algorithms",
    issuer: "Udemy",
    description:
      "This Udemy course covers essential data structures and algorithms in Python, including arrays, linked lists, trees, graphs, sorting, and searching techniques. It focuses on problem-solving, optimizing code efficiency, and preparing for technical interviews.",
    link: "https://www.udemy.com/certificate/UC-2d79311f-c9c3-4fa4-b7b1-abbecb4a49ec/",
  },
  {
    title: "Cloud Computing Fundamentals",
    issuer: "NPTEL",
    description:
      "Offered by NPTEL, this course covers the core concepts of cloud computing, including virtualization, service models (IaaS, PaaS, SaaS), deployment models, and security considerations. It provides a foundational understanding of cloud technologies and their applications in modern computing.",
    link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs17/Course/NPTEL24CS17S36140000330422915.pdf",
  },
  {
    title: "Git & Github",
    issuer: "Udemy",
    description:
      "This Udemy course covers version control fundamentals using Git and GitHub. It includes essential topics such as repository management, branching, merging, collaboration workflows, and best practices for efficient source code management in software development projects.",
    link: "https://www.udemy.com/certificate/UC-a2e01c05-2de2-48b2-9d8a-5d2884661acd/",
  },
  {
    title: "Fundamentals of Docker & Kubernetes",
    issuer: "Scaler",
    description:
      "Offered by Scaler, this course provides a foundational understanding of containerization with Docker and orchestration using Kubernetes. It covers key concepts such as container deployment, networking, scaling, and managing applications efficiently in cloud-native environments.",
    link: "https://moonshot.scaler.com/s/sl/cCcrUk1aST",
  },
  {
    title: "Computer Networks & Internet Protocol",
    issuer: "NPTEL",
    description:
      "This NPTEL course covers the fundamentals of computer networking, including network architectures, protocols, TCP/IP model, routing, switching, and security. It provides a deep understanding of how data is transmitted and managed across the internet and modern networks.",
    link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs19/Course/NPTEL24CS19S46140018030422915.pdf",
  },
  {
    title: "Data Mining",
    issuer: "NPTEL",
    description:
      "This NPTEL course explores the principles and techniques of data mining, including classification, clustering, association rule mining, and pattern recognition. It covers real-world applications, preprocessing methods, and algorithms used to extract meaningful insights from large datasets.",
    link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs22/Course/NPTEL24CS22S44740021030049964.pdf",
  },
];

const Certificates: React.FC = () => (
  <section id="certificates" className="py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 tracking-tight">Certifications</h2>
        <p className="text-gray-500 mb-4 text-lg">Recognitions and achievements from various platforms.</p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {certificates.map((cert, index) => (
          <div key={index} className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-gray-200 shadow group hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-3">
              <Award size={22} className="text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-800">{cert.title}</h3>
            </div>
            <p className="text-purple-700 font-medium mb-1">{cert.issuer}</p>
            <p className="text-gray-600 mb-4 text-sm">{cert.description}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block text-blue-700 hover:text-purple-700 font-semibold transition"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;