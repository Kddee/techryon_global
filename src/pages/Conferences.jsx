import React, { useState } from 'react';
import { Mic2, ArrowUpRight, Cpu, Menu, X, Mail, User, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Conferences = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="animate-fade-in pb-24 relative overflow-hidden min-h-screen" style={{ backgroundColor: '#f5f0e8', color: '#1a1a1a' }}>

      {/* Liquid Plasma Background Orbs — matches Services page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[5%] right-[10%] w-[40vw] h-[40vw] rounded-full" style={{ background: 'radial-gradient(circle, rgba(210,190,160,0.5) 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-[10%] left-[5%] w-[30vw] h-[30vw] rounded-full" style={{ background: 'radial-gradient(circle, rgba(180,160,130,0.4) 0%, transparent 70%)' }}></div>
        <div className="absolute top-[40%] left-[40%] w-[25vw] h-[25vw] rounded-full" style={{ background: 'radial-gradient(circle, rgba(200,180,150,0.3) 0%, transparent 70%)' }}></div>
      </div>

      {/* Main Content — header + content share same container */}
      <div className="container relative z-10" style={{ paddingTop: '1.5rem' }}>

        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>

          {/* Left: Logo + Page Title */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Cpu size={30} style={{ color: '#5c4a2a' }} />
              <span className="text-2xl font-bold uppercase tracking-widest" style={{ color: '#1a1a1a' }}>
                Techryon<span style={{ color: '#5c4a2a' }}>Global</span>
              </span>
            </Link>
            <h1 className="text-3xl font-bold tracking-wide" style={{ color: '#2c2c2c' }}>
              Our Conferences
            </h1>
          </div>

          {/* Right: Hamburger dropdown */}
          <div style={{ position: 'relative', marginRight: '1rem', marginTop: '0.5rem' }}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center transition-colors focus:outline-none"
              style={{ color: '#2c2c2c' }}
            >
              <div className="relative w-8 h-8 flex items-center justify-center">
                <Menu
                  size={28}
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
                    color: '#5c4a2a'
                  }}
                />
              </div>
            </button>

            {/* Dropdown */}
            <div
              className="flex flex-col items-end gap-5"
              style={{
                position: 'absolute',
                right: 0,
                top: '2.5rem',
                width: '13rem',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: isMenuOpen ? 1 : 0,
                visibility: isMenuOpen ? 'visible' : 'hidden',
                transform: isMenuOpen ? 'translateY(0) scale(1)' : 'translateY(-12px) scale(0.95)',
                transformOrigin: 'top right',
                padding: '1.5rem',
                zIndex: 50,
                background: '#ede8de',
                border: '1px solid rgba(92,74,42,0.2)',
                borderRadius: '1.25rem',
                boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
                pointerEvents: isMenuOpen ? 'auto' : 'none'
              }}
            >
              <Link to="/" className="text-right font-semibold text-sm uppercase tracking-wider block transition-colors" style={{ color: '#2c2c2c' }}>Home</Link>
              <Link to="/services" className="text-right font-semibold text-sm uppercase tracking-wider block transition-colors" style={{ color: '#2c2c2c' }}>Services</Link>
              <a href="#about" className="text-right font-semibold text-sm uppercase tracking-wider block transition-colors" style={{ color: '#2c2c2c' }}>About Us</a>
              <a href="#contact" className="text-right font-semibold text-sm uppercase tracking-wider block transition-colors" style={{ color: '#2c2c2c' }}>Contact</a>
            </div>
          </div>
        </div>

        {/* Call for Speakers Section */}
        <div style={{ maxWidth: '720px', margin: '1rem auto 0' }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="icon-wrapper" style={{ display: 'inline-flex', marginBottom: '1.5rem', background: 'rgba(92,74,42,0.12)', color: '#5c4a2a', borderRadius: '1rem', padding: '1rem' }}>
              <Mic2 size={28} />
            </div>
            <h2 className="text-4xl font-bold" style={{ marginBottom: '1rem', color: '#1a1a1a' }}>Call for Speakers</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.75', maxWidth: '520px', margin: '0 auto', color: '#5a5a5a' }}>
              Are you pioneering new technologies? We're actively looking for industry experts and academic researchers to present at our upcoming global events.
            </p>
          </div>

          {/* Submission Form Card */}
          <div
            style={{
              background: 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(92,74,42,0.15)',
              borderRadius: '1.5rem',
              padding: '2rem',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7a6a4a' }}>Full Name</label>
                <div style={{ position: 'relative' }}>
                  <User size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#8c7a5a' }} />
                  <input
                    type="text"
                    placeholder="Dr. Jane Smith"
                    style={{
                      width: '100%',
                      background: 'rgba(92,74,42,0.06)',
                      border: '1px solid rgba(92,74,42,0.2)',
                      borderRadius: '0.75rem',
                      padding: '0.75rem 1rem 0.75rem 2.75rem',
                      color: '#1a1a1a',
                      fontSize: '0.95rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7a6a4a' }}>Email Address</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#8c7a5a' }} />
                  <input
                    type="email"
                    placeholder="jane@university.edu"
                    style={{
                      width: '100%',
                      background: 'rgba(92,74,42,0.06)',
                      border: '1px solid rgba(92,74,42,0.2)',
                      borderRadius: '0.75rem',
                      padding: '0.75rem 1rem 0.75rem 2.75rem',
                      color: '#1a1a1a',
                      fontSize: '0.95rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7a6a4a' }}>Talk Title</label>
              <div style={{ position: 'relative' }}>
                <FileText size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#8c7a5a' }} />
                <input
                  type="text"
                  placeholder="e.g. The Future of Quantum ML"
                  style={{
                    width: '100%',
                    background: 'rgba(92,74,42,0.06)',
                    border: '1px solid rgba(92,74,42,0.2)',
                    borderRadius: '0.75rem',
                    padding: '0.75rem 1rem 0.75rem 2.75rem',
                    color: '#1a1a1a',
                    fontSize: '0.95rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#7a6a4a' }}>Abstract / Proposal</label>
              <textarea
                rows={5}
                placeholder="Briefly describe the topic, key takeaways, and your background..."
                style={{
                  width: '100%',
                  background: 'rgba(92,74,42,0.06)',
                  border: '1px solid rgba(92,74,42,0.2)',
                  borderRadius: '0.75rem',
                  padding: '0.875rem 1rem',
                  color: '#1a1a1a',
                  fontSize: '0.95rem',
                  outline: 'none',
                  resize: 'vertical',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <button
              style={{
                alignSelf: 'flex-end',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                paddingLeft: '2rem',
                paddingRight: '2rem',
                paddingTop: '0.75rem',
                paddingBottom: '0.75rem',
                background: '#2c2c2c',
                color: '#fff',
                border: 'none',
                borderRadius: '0.75rem',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                letterSpacing: '0.04em'
              }}
            >
              Submit Proposal <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Conferences;
