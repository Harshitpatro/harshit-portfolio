
import React from 'react';
import { View } from '../App';

interface HeaderProps {
  currentView: View;
  setView: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  const navItems = [
    { label: 'Home', view: View.HOME },
    { label: 'About', view: View.ABOUT },
    { label: 'Projects', view: View.PROJECTS },
    { label: 'Skills', view: View.SKILLS },
    { label: 'Experience', view: View.EXPERIENCE },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-background-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => setView(View.HOME)}>
        <div className="size-8 text-primary">
          <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold tracking-tighter uppercase whitespace-nowrap">Harshit_Patro</h2>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setView(item.view)}
            className={`text-xs font-bold tracking-[0.2em] uppercase transition-colors hover:text-primary ${
              currentView === item.view ? 'text-primary underline decoration-primary underline-offset-8' : 'text-white/60'
            }`}
          >
            {item.label}
          </button>
        ))}
        <div className="h-4 w-[1px] bg-white/20"></div>
        <a href="https://github.com/Harshitpatro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group px-4 py-2 border border-primary/40 bg-primary/5 hover:bg-primary/20 transition-all rounded">
          <span className="material-symbols-outlined text-primary text-sm">code</span>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">GitHub</span>
        </a>
      </nav>

      {/* Mobile view indicator */}
      <div className="md:hidden">
        <button className="material-symbols-outlined text-primary">menu</button>
      </div>
    </header>
  );
};

export default Header;
