import React from 'react';
import { User, ExternalLink, Download, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-2xl bg-gray-200 flex items-center justify-center">
            <img
              src="avinash.png"
              alt="Avinash Poojary"
              className="w-full h-full object-cover rounded-2xl border-2 border-teal-400 shadow"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-white text-gray-600 px-4 py-2 rounded-full text-sm font-medium border border-gray-200">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Available for opportunities
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight">
            Avinash <span className="font-semibold">N</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Entry Level Full-Stack Developer specializing in building scalable cloud-based web applications with a strong foundation in software testing, DevOps practices, and modern JavaScript frameworks
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <a
            href="#projects"
            className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2"
          >
            View Projects
            <ExternalLink size={16} />
          </a>
          <a
            href="#contact"
            className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center gap-2"
          >
            <Download size={16} />
            Resume
          </a>
        </div>
        <div className="mt-16">
          <ChevronDown size={24} className="mx-auto text-gray-400" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;