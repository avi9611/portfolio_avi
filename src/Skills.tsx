import React from "react";

const frontendSkills = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
];

const backendSkills = [
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Flask",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "SpringBoot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
];

const databaseSkills = [
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
];

const uiuxSkills = [
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
{
  name: "Adobe Illustrator",
  icon: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
}

];

const devopsSkills = [
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Github Actions",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
    {
    name: "Kubernetes",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
];

const testingSkills = [
  {
    name: "Selenium",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    name: "API Testing",
    icon: "https://cdn-icons-png.flaticon.com/512/5957/5957160.png",
  },
  {
    name: "Manual Testing",
    icon: "https://cdn-icons-png.flaticon.com/512/2919/2919600.png",
  },
];

const cloudSkills = [
  {
    name: "Microsoft Azure",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  {
    name: "AWS",
    icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
];

const csFundamentals = [
  {
    name: "Data Structures & Algorithms",
    icon: "https://cdn-icons-png.flaticon.com/512/3899/3899618.png",
  },
  {
    name: "OOPS",
    icon: "https://cdn-icons-png.flaticon.com/512/1087/1087815.png",
  },
  {
    name: "DBMS",
    icon: "https://cdn-icons-png.flaticon.com/512/3370/3370877.png",
  },
  {
    name: "Operating System",
    icon: "https://cdn-icons-png.flaticon.com/512/599/599305.png",
  },
];

const skillGroups = [
  { title: "Frontend", skills: frontendSkills },
  { title: "Backend", skills: backendSkills },
  { title: "Database", skills: databaseSkills },
  { title: "Cloud Platforms", skills: cloudSkills },
  { title: "UI/UX", skills: uiuxSkills },
  { title: "DevOps & Containerization", skills: devopsSkills },
  { title: "Testing", skills: testingSkills },
  { title: "Computer Science Fundamentals", skills: csFundamentals },
];

const Skills: React.FC = () => (
  <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-8">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 tracking-tight">Skills</h2>
        <p className="text-gray-500 mb-4 text-lg">Technologies and tools I work with</p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {skillGroups.map((group) => (
          <div key={group.title} className="bg-white/80 backdrop-blur-md p-7 rounded-2xl border border-gray-200 shadow group hover:shadow-2xl transition-all duration-300 flex flex-col items-center">
            <h3 className="font-semibold text-xl text-gray-800 mb-4 text-center group-hover:text-blue-700 transition">{group.title}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center m-1"
                  style={{ width: 80 }}
                >
                  <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-xl flex items-center justify-center mb-2 shadow" style={{ width: 48, height: 48 }}>
                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        style={{ width: 32, height: 32, objectFit: "contain" }}
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-xs text-gray-500">{skill.name[0]}</span>
                    )}
                  </div>
                  <span className="text-xs text-gray-700 text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;