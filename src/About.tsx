import React from "react";
import { MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      duration: 0.8,
      stiffness: 100
    }
  },
};

const textVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      duration: 0.8,
      stiffness: 100
    }
  },
};

const About: React.FC = () => (
  <section
    id="about"
    className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100"
  >
    <div className="max-w-6xl mx-auto px-4 sm:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 tracking-tight">
          About
        </h2>
        <p className="text-gray-500 mb-4 text-lg">
          A brief introduction and professional background.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center">
        <motion.div
          className="order-2 lg:order-1"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="w-full max-w-[240px] sm:max-w-sm lg:max-w-lg aspect-[1/1] rounded-3xl bg-gradient-to-br from-blue-100 via-purple-50 to-gray-200 overflow-hidden flex items-center justify-center shadow-2xl mx-auto">
            <img
              src="secpic.jpg"
              alt="Avinash Poojary"
              className="w-full h-full object-cover rounded-2xl shadow-xl bg-transparent mix-blend-multiply opacity-90"
              style={{ background: "linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%)" }}
            />
          </div>
        </motion.div>
        <motion.div
          className="order-1 lg:order-2 space-y-4"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <div>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base">
              <p>
                Motivated and detail-oriented Entry-level Full Stack Developer
                with a solid foundation in HTML, CSS, JavaScript, and modern
                frameworks like React, Node.js, Express & MongoDB. I hold a
                Master of Computer Application (MCA) degree. I am passionate
                about learning new technologies and improving my coding skills.
                Eager to apply strong problem-solving abilities and a
                collaborative mindset to a dynamic development team, I aim to
                create seamless user experiences and contribute to innovative
                projects.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-6 rounded-xl shadow"
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ type: "spring", duration: 0.7, stiffness: 100 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={18} className="text-blue-500" />
                <h4 className="font-medium text-gray-800">Location</h4>
              </div>
              <p className="text-gray-700">Bangalore, India</p>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-6 rounded-xl shadow"
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ type: "spring", duration: 0.7, stiffness: 100 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Briefcase size={18} className="text-purple-500" />
                <h4 className="font-medium text-gray-800">Experience</h4>
              </div>
              <p className="text-gray-700">Fresher</p>
              <p className="text-gray-700">8+ Months Internship</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
