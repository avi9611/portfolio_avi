import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => (
  <section id="contact" className="py-20 bg-gray-900">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-4">Contact</h2>
        <div className="w-16 h-px bg-gray-600 mx-auto"></div>
        <p className="text-gray-300 mt-8 max-w-2xl mx-auto leading-relaxed">
          Let's discuss how I can contribute to your team or project. Feel free to reach out via email, phone, or connect with me on social media.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Mail size={24} className="text-gray-300" />
          </div>
          <h3 className="text-white font-medium mb-2">Email</h3>
          <p className="text-gray-300">avinashpoojary651@gmail.com</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Phone size={24} className="text-gray-300" />
          </div>
          <h3 className="text-white font-medium mb-2">Phone</h3>
          <p className="text-gray-300">(+91) 9611670779</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mx-auto mb-4">
            <MapPin size={24} className="text-gray-300" />
          </div>
          <h3 className="text-white font-medium mb-2">Location</h3>
          <p className="text-gray-300">Bangalore, India</p>
        </div>
      </div>
      <div className="text-center">
        <div className="flex justify-center gap-4">
          <a 
            href="https://github.com/avi9611" 
            className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
          >
            <Github size={20} className="text-gray-300" />
          </a>
          <a 
            href="https://www.linkedin.com/in/avinash-n-a99387286/" 
            className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
          >
            <Linkedin size={20} className="text-gray-300" />
          </a>
          <a 
            href="mailto:avinashpoojary651@gmail.com" 
            className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
          >
            <Mail size={20} className="text-gray-300" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;