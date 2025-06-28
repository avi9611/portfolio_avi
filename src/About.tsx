import React from 'react';
import { User, MapPin, Briefcase } from 'lucide-react';

const About: React.FC = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">About</h2>
        <div className="w-16 h-px bg-gray-300 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="w-full h-96 rounded-xl bg-gray-100 overflow-hidden flex items-center justify-center">
            <img
              src="avinash.png"
              alt="Avinash Poojary"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-6">Professional Background</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
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
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={18} className="text-gray-600" />
                <h4 className="font-medium text-gray-900">Location</h4>
              </div>
              <p className="text-gray-600">Bangalore, India</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Briefcase size={18} className="text-gray-600" />
                <h4 className="font-medium text-gray-900">Experience</h4>
              </div>
              <p className="text-gray-600">Fresher </p>
              <p className="text-gray-600">8+ Months Internship</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;