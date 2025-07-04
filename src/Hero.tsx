import React from "react";
import { ExternalLink, Download, ChevronDown } from "lucide-react";
import SocialLinks from "./SocialLinks";

const Hero: React.FC = () => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-slate-200 to-slate-300"
  >
    <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-36 aspect-[3/4] md:w-44 md:aspect-[3/4] lg:w-56 lg:aspect-[3/4] mx-auto mb-8 rounded-3xl bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 flex items-center justify-center shadow-xl ring-2 ring-slate-300/40">
            <img
              src="profilepic.jpg"
              alt="Avinash Poojary"
              className="w-full h-full object-contain rounded-3xl shadow-xl mix-blend-multiply"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/80 text-gray-700 px-5 py-2 rounded-full text-base font-medium border border-gray-200 shadow">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Available for opportunities
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight tracking-tight">
            Avinash <span className="text-slate-500">N</span>
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-light">
            Entry Level Full-Stack Developer / Tester / Cloud Enthusiast specializing in building scalable
            cloud-based web applications with a strong foundation in software
            testing, DevOps practices, and modern JavaScript frameworks
          </p>
          {/* Social Links below description */}
          <SocialLinks />
        </div>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-14">
          <a
            href="#projects"
            className="bg-gradient-to-r from-slate-700 to-slate-500 text-white px-10 py-4 rounded-xl font-semibold hover:from-slate-800 hover:to-slate-600 transition-colors duration-200 flex items-center gap-2 shadow"
          >
            View Projects
            <ExternalLink size={18} />
          </a>
          <a
            href="avinashresume.pdf"
            download
            className="border-2 border-slate-400 text-slate-700 px-10 py-4 rounded-xl font-semibold hover:bg-slate-200 transition-all duration-200 flex items-center gap-2 shadow"
          >
            <Download size={18} />
            Resume
          </a>
        </div>
        <div className="mt-20">
          <ChevronDown
            size={28}
            className="mx-auto text-slate-400 animate-bounce"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
