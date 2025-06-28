import React, { useState } from "react";
import { Menu, X, MapPin, Briefcase } from "lucide-react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  activeSection: string;
  setIsMenuOpen: (open: boolean) => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  mobile = false,
  activeSection,
  setIsMenuOpen,
}) => (
  <a
    href={href}
    className={`${
      mobile
        ? "block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-[#2e3950] rounded-lg transition-all duration-300"
        : `relative text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            activeSection === href.slice(1)
              ? "text-white bg-[#2e3950]"
              : "hover:bg-[#2e3950]"
          }`
    }`}
    onClick={() => setIsMenuOpen(false)}
  >
    {children}
    {!mobile && activeSection === href.slice(1) && (
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full"></span>
    )}
  </a>
);

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  activeSection: string;
  scrolled: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrolled,
}) => (
  <nav
    className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? "bg-gray-800/70 backdrop-blur-xl shadow-sm border-b border-gray-700"
        : "bg-gray-700/50 backdrop-blur-sm"
    }`}
  >
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        {/* Minimal Logo */}
        <div className="flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#232b3e] rounded-lg flex items-center justify-center shadow">
              <span className="text-white font-semibold text-sm">AN</span>
            </div>
            <div>
              <h1 className="font-semibold text-lg text-white">Avinash N</h1>
              <p className="text-xs text-gray-300">Developer / Tester / Cloud Enthusiast</p>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <div className="flex items-center space-x-1">
            <NavLink
              href="#home"
              activeSection={activeSection}
              setIsMenuOpen={setIsMenuOpen}
            >
              Home
            </NavLink>
            <NavLink
              href="#about"
              activeSection={activeSection}
              setIsMenuOpen={setIsMenuOpen}
            >
              About
            </NavLink>
            <NavLink
              href="#skills"
              activeSection={activeSection}
              setIsMenuOpen={setIsMenuOpen}
            >
              Skills
            </NavLink>
            <NavLink
              href="#education"
              activeSection={activeSection}
              setIsMenuOpen={setIsMenuOpen}
            >
              Education
            </NavLink>
            <NavLink
              href="#projects"
              activeSection={activeSection}
              setIsMenuOpen={setIsMenuOpen}
            >
              Projects
            </NavLink>
            <NavLink
              href="#certificates"
              activeSection={activeSection}
              setIsMenuOpen={setIsMenuOpen}
            >
              Certificates
            </NavLink>
            <NavLink
              href="#contact"
              activeSection={activeSection}
              setIsMenuOpen={setIsMenuOpen}
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 bg-[#232b3e] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#1a2233] border border-[#2e3950] shadow transition-colors duration-200"
          >
            Get In Touch
          </a>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-[#2e3950] transition-all duration-200"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile Navigation */}
    {isMenuOpen && (
      <div className="lg:hidden bg-gray-800/80 backdrop-blur-md border-t border-gray-700 rounded-b-xl">
        <div className="px-6 pt-4 pb-6 space-y-1">
          <NavLink
            href="#home"
            mobile
            activeSection={activeSection}
            setIsMenuOpen={setIsMenuOpen}
          >
            Home
          </NavLink>
          <NavLink
            href="#about"
            mobile
            activeSection={activeSection}
            setIsMenuOpen={setIsMenuOpen}
          >
            About
          </NavLink>
          <NavLink
            href="#skills"
            mobile
            activeSection={activeSection}
            setIsMenuOpen={setIsMenuOpen}
          >
            Skills
          </NavLink>
          <NavLink
            href="#education"
            mobile
            activeSection={activeSection}
            setIsMenuOpen={setIsMenuOpen}
          >
            Education
          </NavLink>
          <NavLink
            href="#projects"
            mobile
            activeSection={activeSection}
            setIsMenuOpen={setIsMenuOpen}
          >
            Projects
          </NavLink>
          <NavLink
            href="#certificates"
            mobile
            activeSection={activeSection}
            setIsMenuOpen={setIsMenuOpen}
          >
            Certificates
          </NavLink>
          <NavLink
            href="#contact"
            mobile
            activeSection={activeSection}
            setIsMenuOpen={setIsMenuOpen}
          >
            Contact
          </NavLink>
          <div className="pt-4 border-t border-gray-700">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-gray-800/80 text-white px-5 py-3 rounded-lg font-medium w-full border border-gray-700 shadow"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    )}
  </nav>
);

export default Navigation;
