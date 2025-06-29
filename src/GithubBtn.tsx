import { Github } from "lucide-react";
const GithubBtn = () => {
  return (
    <a
      href="https://github.com/avi9611"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-0 bottom-5 sm:bottom-5 flex items-center gap-2 rounded-l-full
                 z-50 w-fit h-fit p-2 px-4 shadow-lg border border-black bg-white/20
                 backdrop-blur-md transition-all duration-300 ease-in-out
                 hover:bg-black hover:text-white hover:scale-110
                 hover:shadow-[0_4px_10px_rgba(0,0,0,0.3)]
                 before:absolute before:top-0 before:left-0 before:w-full
                 before:h-full before:bg-gradient-to-r before:from-transparent
                 before:via-white/30 before:to-transparent before:transition-all
                 before:duration-500 hover:before:left-full
                 animate-bounce-slow"
      style={{ zIndex: 9999 }}
    >
      <Github className="text-xl" />
      <span className="font-rubik text-2xl max-sm:text-xl">Github</span>
    </a>
  );
};

export default GithubBtn;