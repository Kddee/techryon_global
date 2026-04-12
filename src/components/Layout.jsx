import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();

  let accentColor = '#00f0ff'; // Default cyan
  if (location.pathname === '/events') {
    accentColor = '#d2aa64'; // Amber
  } else if (location.pathname === '/services') {
    accentColor = '#00f0ff'; // Cyan
  } 

  return (
    <div className="min-h-screen flex flex-col relative bg-[#1c1c1f] text-[#e8e8ee] overflow-clip">
      {/* Dynamic Background Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ willChange: 'transform' }}>
        {location.pathname === '/events' ? (
          // Events Orbs
          <>
            <div className="absolute top-[5%] right-[10%] w-[40vw] h-[40vw] rounded-full blur-[90px]"
              style={{ background: 'rgba(210,170,100,0.09)' }} />
            <div className="absolute bottom-[10%] left-[5%] w-[30vw] h-[30vw] rounded-full blur-[80px]"
              style={{ background: 'rgba(180,140,80,0.07)' }} />
            <div className="absolute top-[55%] left-[40%] w-[25vw] h-[25vw] rounded-full blur-[80px]"
              style={{ background: 'rgba(100,180,255,0.05)' }} />
          </>
        ) : location.pathname === '/services' ? (
          // Services Orbs
          <>
             <div className="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] bg-cyan-600/20 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] bg-purple-700/15 rounded-full blur-[110px]"></div>
             <div className="absolute top-[40%] left-[60%] w-[25vw] h-[25vw] bg-blue-600/15 rounded-full blur-[90px]"></div>
          </>
        ) : (
          // Home / Default Orbs
          <>
            <div className="absolute top-[15%] left-[5%] w-[40vw] h-[40vw] rounded-full blur-[90px]" style={{ background: 'rgba(0,180,255,0.10)' }}></div>
            <div className="absolute top-[30%] left-[30%] w-[35vw] h-[35vw] rounded-full blur-[110px]" style={{ background: 'rgba(120,80,200,0.08)' }}></div>
            <div className="absolute top-[15%] right-[5%] w-[40vw] h-[40vw] rounded-full blur-[90px]" style={{ background: 'rgba(210,170,100,0.09)' }}></div>
          </>
        )}
      </div>

      <Navbar accentColor={accentColor} />

      {/* Main Content Area */}
      <main
        className="flex-grow flex flex-col relative z-10"
        style={{ paddingBottom: '5rem' }}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
