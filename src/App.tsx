import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import Certificates from './Certificates';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';
import GithubBtn from './GithubBtn';
import MobileSideNav from './MobileSideNav';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      setScrolled(window.scrollY > 50);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        scrolled={scrolled}
      />
      <MobileSideNav activeSection={activeSection} sections={sections} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      <GithubBtn />
    </div>
  );
}

export default App;