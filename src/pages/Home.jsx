import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Cpu, Mic2 } from 'lucide-react';

const Home = () => {
  return (
    <div className="animate-fade-in flex-grow flex flex-col items-center justify-center min-h-screen py-16 text-center relative overflow-hidden" style={{ backgroundColor: '#1c1c1f' }}>

      {/* Liquid Plasma Background Orbs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Blue/Cyan orb — sits behind IT Services card */}
        <div className="absolute top-[15%] left-[5%] w-[45vw] h-[45vw] rounded-full blur-[130px]" style={{ background: 'rgba(0,180,255,0.12)' }}></div>
        {/* Purple depth orb — centre */}
        <div className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] rounded-full blur-[150px]" style={{ background: 'rgba(120,80,200,0.09)' }}></div>
        {/* Warm amber orb — sits behind Conferences card */}
        <div className="absolute top-[15%] right-[5%] w-[45vw] h-[45vw] rounded-full blur-[130px]" style={{ background: 'rgba(210,170,100,0.10)' }}></div>
      </div>

      <div className="container relative z-10 flex flex-col items-center max-w-5xl">

        {/* Central Logo, Name and Typography */}
        <div className="flex flex-col items-center mb-16">
          <div className="p-5 rounded-2xl bg-white/10 shadow-[0_0_30px_rgba(0,240,255,0.3)] mb-8">
            <Cpu className="text-cyan-400" size={64} />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold title-glow mb-10 tracking-widest uppercase">
            Techryon<span className="text-cyan-400">Global</span>
          </h1>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-3xl">
            Engineering the <span className="text-gradient">Future</span> of Technology
          </h2>

          <p className="text-xl md:text-2xl text-secondary max-w-3xl leading-relaxed">
            Techryon Global bridges the gap between complex IT infrastructure and seamless business execution.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-2 gap-8 w-full" style={{ marginTop: '5rem' }}>

          {/* IT Services — Cyan/Blue glass glow */}
          <Link
            to="/services"
            className="group block text-left relative overflow-hidden transition-all duration-500"
            style={{
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              border: '1px solid rgba(0,240,255,0.15)',
              borderRadius: '1.5rem',
              padding: '2.5rem',
              boxShadow: 'inset 0 0 20px rgba(0,240,255,0.04), 0 0 40px rgba(0,200,255,0.08)',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = 'inset 0 0 30px rgba(0,240,255,0.08), 0 0 60px rgba(0,200,255,0.18), 0 8px 32px rgba(0,0,0,0.3)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'inset 0 0 20px rgba(0,240,255,0.04), 0 0 40px rgba(0,200,255,0.08)'}
          >
            <Terminal size={36} className="text-cyan-400 mb-6" />
            <h3 className="text-3xl font-bold mb-4">IT Consultancy</h3>
            <p className="text-secondary mb-8 text-lg">
              Enterprise-grade software development, artificial intelligence implementation, and secure architectures.
            </p>
            <div className="flex items-center gap-2 font-semibold group-hover:text-cyan-300 pt-2" style={{ color: '#00f0ff' }}>
              Explore IT Services <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          {/* Conferences — Warm beige/amber glass glow */}
          <Link
            to="/conferences"
            className="group block text-left relative overflow-hidden transition-all duration-500"
            style={{
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              border: '1px solid rgba(210,170,100,0.2)',
              borderRadius: '1.5rem',
              padding: '2.5rem',
              boxShadow: 'inset 0 0 20px rgba(210,170,100,0.05), 0 0 40px rgba(180,140,80,0.08)',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = 'inset 0 0 30px rgba(210,170,100,0.1), 0 0 60px rgba(180,140,80,0.18), 0 8px 32px rgba(0,0,0,0.3)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'inset 0 0 20px rgba(210,170,100,0.05), 0 0 40px rgba(180,140,80,0.08)'}
          >
            <Mic2 size={36} className="mb-6" style={{ color: '#d2aa64' }} />
            <h3 className="text-3xl font-bold mb-4">Academic Conferences</h3>
            <p className="text-secondary mb-8 text-lg">
              We host world-class technological gatherings bridging academia and industry.
            </p>
            <div className="flex items-center gap-2 font-semibold group-hover:opacity-80 pt-2 transition-opacity" style={{ color: '#d2aa64' }}>
              Discover Conferences <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Home;
