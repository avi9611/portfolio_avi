import React from 'react';
import { MapPin, Briefcase } from 'lucide-react';

const About: React.FC = () => (
  <section id="about" className="py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100">
    <div className="max-w-6xl mx-auto px-4 sm:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 tracking-tight">About</h2>
        <p className="text-gray-500 mb-4 text-lg">A brief introduction and professional background.</p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 overflow-hidden flex items-center justify-center shadow-lg">
            <img
              src="avinash.png"
              alt="Avinash Poojary"
              className="w-full h-full object-cover rounded-2xl shadow"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-8">
          <div>
            <div className="space-y-4 text-gray-700 leading-relaxed text-base">
              <p>
                Motivated and detail-oriented Entry-level Full Stack Developer with a
                solid foundation in HTML, CSS, JavaScript, and modern frameworks like
                React, Node.js, Express & MongoDB. I hold a Master of Computer
                Application (MCA) degree. I am passionate about learning new
                technologies and improving my coding skills. Eager to apply strong
                problem-solving abilities and a collaborative mindset to a dynamic
                development team, I aim to create seamless user experiences and
                contribute to innovative projects.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-6 rounded-xl shadow">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={18} className="text-blue-500" />
                <h4 className="font-medium text-gray-800">Location</h4>
              </div>
              <p className="text-gray-700">Bangalore, India</p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-6 rounded-xl shadow">
              <div className="flex items-center gap-3 mb-3">
                <Briefcase size={18} className="text-purple-500" />
                <h4 className="font-medium text-gray-800">Experience</h4>
              </div>
              <p className="text-gray-700">Fresher</p>
              <p className="text-gray-700">8+ Months Internship</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;