import React, { useState } from 'react';
import { Shield, Globe2, Database, Cpu, Cloud, ArrowRight, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

/* ─── Accent colours — must match visualMap in ServiceDetail.jsx ── */
const servicesList = [
  {
    id: "srv_web",
    title: "Web Development",
    description: "Scalable, high-performance web applications built with modern frameworks to deliver exceptional user experiences.",
    icon: Globe2,
    accent: 'rgba(56,189,248,0.85)',
    glow:   'rgba(56,189,248,0.14)',
  },
  {
    id: "srv_data",
    title: "Data Science",
    description: "Transform raw data into actionable insights with advanced analytics and predictive modeling pipelines.",
    icon: Database,
    accent: 'rgba(167,139,250,0.85)',
    glow:   'rgba(167,139,250,0.14)',
  },
  {
    id: "srv_ai",
    title: "AI / ML Integration",
    description: "Custom artificial intelligence solutions and machine learning models tailored to automate and optimize business processes.",
    icon: Cpu,
    accent: 'rgba(96,165,250,0.85)',
    glow:   'rgba(96,165,250,0.14)',
  },
  {
    id: "srv_cloud",
    title: "Cloud Computing",
    description: "Robust cloud architectures and migrations designed for maximum uptime, security, and scalability.",
    icon: Cloud,
    accent: 'rgba(99,179,237,0.85)',
    glow:   'rgba(99,179,237,0.14)',
  },
  {
    id: "srv_cyber",
    title: "Cybersecurity",
    description: "Comprehensive security audits, threat hunting, and infrastructure hardening to protect your digital assets.",
    icon: Shield,
    accent: 'rgba(251,113,133,0.85)',
    glow:   'rgba(251,113,133,0.14)',
  },
];

/* ─── Service Card ────────────────────────────────────────── */
const ServiceCard = ({ service, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const IconComp = service.icon;
  const accentSolid = service.accent.replace('0.85', '1');

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        padding: '1.75rem',
        borderRadius: '1.25rem',
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        background: hovered
          ? `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, ${service.glow} 100%)`
          : 'rgba(255,255,255,0.03)',
        border: hovered
          ? `1px solid ${service.accent}`
          : '1px solid rgba(255,255,255,0.08)',
        boxShadow: hovered
          ? `0 16px 48px ${service.glow}, inset 0 0 32px ${service.glow}`
          : '0 4px 24px rgba(0,0,0,0.25)',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
      }}
    >
      {/* Top accent line — matches detail page strip */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)`,
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.35s ease',
      }} />

      {/* Icon + Title row */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '1rem',
        marginBottom: '1rem',
      }}>
        <div style={{
          display: 'inline-flex', padding: '0.75rem',
          background: hovered ? service.glow : 'rgba(255,255,255,0.05)',
          borderRadius: '0.875rem',
          color: hovered ? accentSolid : 'rgba(255,255,255,0.5)',
          flexShrink: 0,
          transition: 'all 0.35s ease',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          border: `1px solid ${hovered ? service.accent.replace('0.85','0.3') : 'rgba(255,255,255,0.08)'}`,
        }}>
          <IconComp size={22} />
        </div>
        <h3 style={{
          fontSize: '1.1rem', fontWeight: 700, margin: 0,
          color: hovered ? '#e8e8ee' : '#c0c0cc',
          transition: 'color 0.25s ease',
        }}>
          {service.title}
        </h3>
      </div>

      {/* Description */}
      <p style={{
        fontSize: '0.875rem', lineHeight: 1.7,
        color: '#8a8a9a', flexGrow: 1, margin: 0,
      }}>
        {service.description}
      </p>

      {/* Accent underline bar */}
      <div style={{
        height: '2px', marginTop: '1.5rem',
        background: `linear-gradient(90deg, ${accentSolid}, ${service.accent.replace('0.85','0.3')})`,
        borderRadius: '2px',
        width: hovered ? '100%' : '0%',
        transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)',
      }} />

      {/* View Details hint */}
      <div style={{
        marginTop: '1rem',
        display: 'flex', alignItems: 'center', gap: '0.35rem',
        fontSize: '0.78rem', fontWeight: 700,
        color: hovered ? accentSolid : '#5a5a6a',
        letterSpacing: '0.06em', textTransform: 'uppercase',
        transition: 'color 0.25s ease',
      }}>
        <Zap size={12} /> View Details
      </div>
    </div>
  );
};

/* ─── Main Services Page ──────────────────────────────────── */
const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in pb-24 relative w-full">
      <div
        className="container relative z-10"
        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
      >

        {/* Page Title */}
        <div style={{ marginBottom: '3rem' }}>
          <h1 className="text-3xl md:text-4xl font-bold text-secondary tracking-wide">
            Our Services
          </h1>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={() => navigate(`/services/${service.id}`)}
            />
          ))}

          {/* Contact CTA Card */}
          <div className="service-card group hover:border-white/20 bg-gradient-to-br from-white/5 to-white/0 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
            <p className="text-secondary mb-8">Let's discuss how we can transform your technological landscape.</p>
            <Link to="/contact" className="btn btn-outline border-white/20 hover:bg-white/10 w-full" style={{ marginTop: '1rem' }}>
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
