import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cpu, Mail } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const isEvents = location.pathname.startsWith('/events');

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

  const amber = {
    bg: 'rgba(255,255,255,0.02)',
    border: 'rgba(210,170,100,0.15)',
    text: 'var(--text-primary)',
    subtle: '#9090a0',
    accent: '#d2aa64',
    divider: 'rgba(210,170,100,0.10)',
  };

  const t = isEvents ? amber : dark;

  return (
    <footer
      style={{
        background: t.bg,
        borderTop: `1px solid ${t.border}`,
        position: 'relative',
        zIndex: 20,
      }}
    >
      <div
        className="container"
        style={{
          paddingTop: '3rem',
          paddingBottom: '2rem',
          paddingLeft: '2.5rem',
          paddingRight: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
        }}
      >
        {/* Top row */}
        <div>
          {/* Brand & Social */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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
            {/* Social & Contact Links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.25rem', marginTop: '0.75rem' }}>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: t.subtle, transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}
                onMouseEnter={e => e.currentTarget.style.color = t.accent}
                onMouseLeave={e => e.currentTarget.style.color = t.subtle}
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: t.subtle, transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}
                onMouseEnter={e => e.currentTarget.style.color = t.accent}
                onMouseLeave={e => e.currentTarget.style.color = t.subtle}
                aria-label="X (Twitter)"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644z" />
                </svg>
              </a>

              {/* TODO: Uncomment and add real email when ready
              <a
                href="mailto:example@techryonglobal.com"
                style={{
                  color: t.subtle,
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseEnter={e => e.currentTarget.style.color = t.accent}
                onMouseLeave={e => e.currentTarget.style.color = t.subtle}
                aria-label="Email Us"
              >
                <Mail size={26} />
              </a>
              */}
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
