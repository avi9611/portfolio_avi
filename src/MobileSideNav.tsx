import React, { useEffect, useState, useRef } from "react";
import { Home, User, Star, BookOpen, Folder, Award, Mail } from "lucide-react";

interface MobileSideNavProps {
  activeSection: string;
  sections: { id: string; label: string }[];
}

const iconMap: Record<string, React.ReactNode> = {
  home: <Home size={22} />,
  about: <User size={22} />,
  skills: <Star size={22} />,
  education: <BookOpen size={22} />,
  projects: <Folder size={22} />,
  certificates: <Award size={22} />,
  contact: <Mail size={22} />,
};

const MobileSideNav: React.FC<MobileSideNavProps> = ({
  activeSection,
  sections,
}) => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const hideTimeout = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(true);
        setVisible(true);
        if (hideTimeout.current) clearTimeout(hideTimeout.current);
        hideTimeout.current = setTimeout(() => setVisible(false), 1000);
      } else {
        setShow(false);
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, []);

  if (!show || !visible) return null;

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`
        fixed right-2 top-1/2 -translate-y-1/2 z-50
        flex flex-col gap-3
        bg-white/10 backdrop-blur-xl rounded-2xl p-2 shadow-2xl
        border border-white/20
        transition-all duration-500
        animate-fade-in
        lg:hidden
      `}
      style={{
        boxShadow: "0 4px 24px 0 rgba(0,0,0,0.18)",
        backdropFilter: "blur(16px)",
      }}
    >
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={(e) => handleSmoothScroll(e, section.id)}
          className={`
            flex flex-col items-center justify-center
            rounded-xl p-1
            transition-all duration-200
            ${
              activeSection === section.id
                ? "bg-blue-500/80 text-white scale-110 shadow-lg"
                : "text-gray-200 hover:bg-white/20"
            }
          `}
          style={{ width: 38, height: 44 }}
        >
          {iconMap[section.id] || section.label[0]}
          <span className="text-[10px] mt-1 font-medium opacity-80">
            {section.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default MobileSideNav;
