import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cpu, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const isConferences = location.pathname.startsWith('/conferences');

  const beige = {
    bg: '#ede8de',
    border: 'rgba(92,74,42,0.15)',
    text: '#2c2c2c',
    subtle: '#7a6a4a',
    accent: '#5c4a2a',
    divider: 'rgba(92,74,42,0.12)',
  };

  const dark = {
    bg: 'rgba(255,255,255,0.02)',
    border: 'rgba(255,255,255,0.07)',
    text: 'var(--text-primary)',
    subtle: 'var(--text-secondary)',
    accent: '#00f0ff',
    divider: 'rgba(255,255,255,0.06)',
  };

  const t = isConferences ? beige : dark;

  return (
    <footer
      style={{
        background: t.bg,
        borderTop: `1px solid ${t.border}`,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div
        className="container"
        style={{
          paddingTop: '3rem',
          paddingBottom: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
          }}
        >
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity" style={{ width: 'fit-content' }}>
              <Cpu size={26} style={{ color: t.accent }} />
              <span
                className="text-xl font-bold uppercase tracking-widest"
                style={{ color: t.text }}
              >
                Techryon<span style={{ color: t.accent }}>Global</span>
              </span>
            </Link>
            <p style={{ fontSize: '0.9rem', color: t.subtle, lineHeight: '1.6', maxWidth: '260px' }}>
              Engineering the future of technology — bridging complex IT infrastructure and seamless business execution.
            </p>
          </div>

          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h4 className="font-bold uppercase tracking-widest" style={{ fontSize: '0.75rem', color: t.subtle }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={15} style={{ color: t.accent, marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: t.subtle, lineHeight: '1.5' }}>
                  1 Example Street,<br />Innovation District, TX 00000
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={15} style={{ color: t.accent, flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: t.subtle }}>example@techryonglobal.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: `1px solid ${t.divider}` }} />

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <span style={{ fontSize: '0.8rem', color: t.subtle }}>
            © {new Date().getFullYear()} Techryon Global. All rights reserved.
          </span>
          <span style={{ fontSize: '0.8rem', color: t.subtle }}>
            Built for the future.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
