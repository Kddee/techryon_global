import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cpu } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const isLight = location.pathname.startsWith('/conferences');

  let heading = "Engineering the Future of Technology";
  let subheading = "Techryon Global bridges the gap between complex IT infrastructure and seamless business execution.";

  if (location.pathname === '/services') {
    heading = "Our IT Expertise";
    subheading = "Leveraging cutting-edge technologies to architect solutions that drive innovation.";
  } else if (location.pathname === '/conferences') {
    heading = "Techryon Conferences";
    subheading = "Where academic rigor meets industry innovation.";
  }

  return (
    <nav className="glass-nav fixed top-0 w-full z-50 transition-colors duration-500">
      <div className="container flex items-center py-4 gap-4 md:gap-8">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className={`p-2 rounded-lg transition-all ${isLight ? 'bg-slate-200' : 'bg-white/10 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.5)]'}`}>
            <Cpu className={isLight ? "text-slate-800" : "text-cyan-400"} size={24} />
          </div>
          <span className={`text-xl font-bold ${!isLight && 'title-glow'}`}>
            Techryon<span className={isLight ? "text-slate-500" : "text-cyan-400"}>Global</span>
          </span>
        </Link>
        
        {/* Dynamic header and subheading shifted here */}
        <div className="hidden md:flex flex-col justify-center border-l border-white/10 pl-6 h-full">
          <h1 className={`text-lg md:text-xl font-bold ${!isLight ? 'text-white title-glow' : 'text-slate-900'}`}>{heading}</h1>
          <p className={`text-xs md:text-sm ${!isLight ? 'text-secondary' : 'text-slate-500'} max-w-xl truncate`}>{subheading}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
