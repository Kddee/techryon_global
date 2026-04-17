import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import tgLogo from '../assets/tg-logo.png';

const Navbar = ({ isLight = false, accentColor = '#00f0ff' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      style={{
        width: '100%',
      }}
    >
      <div
        className="container flex items-center justify-between"
        style={{ paddingTop: '1.25rem', paddingBottom: '1rem', paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
      >
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className={`p-1.5 rounded-lg transition-all ${isLight ? 'bg-slate-200' : 'bg-white/5'}`}>
            <img src={tgLogo} alt="Techryon Global Logo" style={{ width: 28, height: 28, objectFit: 'contain' }} />
          </div>
          <span className={`text-2xl font-bold tracking-widest uppercase ${!isLight ? 'text-[#e8e8ee] title-glow' : 'text-slate-900'}`}>
            Techryon<span style={{ color: accentColor }}>Global</span>
          </span>
        </Link>
        
        {/* Right: Hamburger dropdown */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className={`flex items-center justify-center transition-colors focus:outline-none ${isLight ? 'text-slate-600 hover:text-slate-900' : 'text-[#e8e8ee]'}`}
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Menu
                size={28}
                color={isLight ? '#475569' : '#e8e8ee'}
                style={{
                  position: 'absolute',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  opacity: isMenuOpen ? 0 : 1,
                  transform: isMenuOpen ? 'rotate(90deg) scale(0.5)' : 'rotate(0) scale(1)',
                }}
              />
              <X
                size={28}
                style={{
                  position: 'absolute',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'rotate(0) scale(1)' : 'rotate(-90deg) scale(0.5)',
                  color: accentColor
                }}
              />
            </div>
          </button>

          {/* Dropdown Menu */}
          <div
            className={`glass-panel flex flex-col items-center gap-5 ${isLight ? 'bg-white/95 border-slate-200' : 'bg-[#0a0a0f]/90 border-white/10'}`}
            style={{
              position: 'absolute',
              right: 0,
              top: '3rem',
              width: 'auto',
              minWidth: 'max-content',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              opacity: isMenuOpen ? 1 : 0,
              visibility: isMenuOpen ? 'visible' : 'hidden',
              transform: isMenuOpen ? 'translateY(0) scale(1)' : 'translateY(-12px) scale(0.95)',
              transformOrigin: 'top right',
              padding: '1.5rem 2.5rem',
              zIndex: 50,
              boxShadow: isLight ? '0 10px 30px rgba(0,0,0,0.1)' : `0 20px 50px rgba(0,0,0,0.8), 0 0 20px ${accentColor}20`,
              pointerEvents: isMenuOpen ? 'auto' : 'none',
              border: isLight ? '1px solid #e2e8f0' : `1px solid ${accentColor}30`,
              backdropFilter: 'blur(12px)'
            }}
          >
            {[
              { label: 'Home', to: '/' },
              { label: 'About Us', to: '/about' },
              { label: 'Services', to: '/services' },
              { label: 'Events', to: '/events' },
              { label: 'Contact', to: '/contact' }
            ].map(({ label, to }) => (
              <Link 
                key={label} 
                to={to}
                onClick={() => setIsMenuOpen(false)}
                className={`text-center font-medium text-sm uppercase tracking-widest block transition-all duration-300 hover:scale-105 ${isLight ? 'text-slate-700' : 'text-[#e8e8ee]'}`}
                onMouseEnter={e => {
                  e.currentTarget.style.color = accentColor;
                  e.currentTarget.style.textShadow = `0 0 10px ${accentColor}40`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = isLight ? '#334155' : '#e8e8ee';
                  e.currentTarget.style.textShadow = 'none';
                }}
              >
                {label}
              </Link>
            ))}
            {/* Empty array so we don't map anchor links here anymore */}
            {[].map(({ label, href }) => (
              <a 
                key={label} 
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-right font-semibold text-sm uppercase tracking-wider block transition-colors ${isLight ? 'text-slate-700' : 'text-[#e8e8ee]'}`}
                onMouseEnter={e => e.currentTarget.style.color = accentColor}
                onMouseLeave={e => e.currentTarget.style.color = isLight ? '#334155' : '#e8e8ee'}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
