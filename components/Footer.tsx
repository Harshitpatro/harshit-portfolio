
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-20 w-full border-t border-white/10 bg-background-dark/90 px-8 py-4">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-widest text-white/30 uppercase">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="size-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            <span>Email: harshitpatro123@gmail.com</span>
          </div>
          <span className="hidden md:inline">Phone: 7735761538</span>
          <span className="hidden lg:inline">Status: Active</span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/harshit-patro" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <span>•</span>
            <a href="https://github.com/Harshitpatro" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          </div>
          <span>© 2025 Harshit Patro</span>
          <span className="hidden sm:inline">Robotics Engineer</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
