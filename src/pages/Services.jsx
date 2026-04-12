import React, { useState, useEffect } from 'react';
import { Shield, Globe2, Database, Cpu, Cloud, ArrowRight, X, Layers, Zap, Code2, ChevronRight, Tag } from 'lucide-react';
import { servicesData } from '../data/servicesData';

/* ─── Visual Mapping ──────────────────────────────────────── */
const visualMap = {
  "srv_web":   { icon: Globe2,   accent: 'rgba(56,189,248,0.85)',  glow: 'rgba(56,189,248,0.14)'  },
  "srv_data":  { icon: Database, accent: 'rgba(167,139,250,0.85)', glow: 'rgba(167,139,250,0.14)' },
  "srv_ai":    { icon: Cpu,      accent: 'rgba(96,165,250,0.85)',  glow: 'rgba(96,165,250,0.14)'  },
  "srv_cloud": { icon: Cloud,    accent: 'rgba(99,179,237,0.85)',  glow: 'rgba(99,179,237,0.14)'  },
  "srv_cyber": { icon: Shield,   accent: 'rgba(251,113,133,0.85)', glow: 'rgba(251,113,133,0.14)' },
};

/* ─── Helper: Section Heading ─────────────────────────────── */
const SectionHeading = ({ icon: Icon, label, accent }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
    <Icon size={16} style={{ color: accent }} />
    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>{label}</h3>
  </div>
);

/* ─── Service Drawer ──────────────────────────────────────── */
const ServiceDrawer = ({ service, onClose }) => {
  const visual = visualMap[service.id];
  const IconComp = visual.icon;
  const accentSolid = visual.accent.replace('0.85', '1');

  // Lock body scroll and account for scrollbar width
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(10,10,15,0.75)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          animation: 'drawerBackdropIn 0.3s ease forwards',
        }}
      />

      {/* Drawer Panel */}
      <div
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 201,
          width: 'min(700px, 100vw)',
          background: 'linear-gradient(160deg, #1e1d22 0%, #19181d 100%)',
          borderLeft: `1px solid ${visual.accent.replace('0.85', '0.25')}`,
          boxShadow: `-24px 0 80px rgba(0,0,0,0.6), inset 1px 0 0 ${visual.accent.replace('0.85', '0.08')}`,
          overflowY: 'auto',
          animation: 'drawerSlideIn 0.38s cubic-bezier(0.4,0,0.2,1) forwards',
          scrollbarWidth: 'thin',
          scrollbarColor: `${visual.accent.replace('0.85', '0.2')} transparent`,
        }}
      >
        {/* ── Sticky Header ── */}
        <div style={{
          position: 'sticky', top: 0, zIndex: 10,
          padding: '1.5rem 2rem 1.25rem',
          background: 'rgba(28,27,32,0.9)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          {/* Top accent strip */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: `linear-gradient(90deg, transparent, ${visual.accent}, transparent)`,
          }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
              <div style={{
                display: 'inline-flex', padding: '0.85rem',
                background: visual.glow,
                borderRadius: '0.875rem',
                color: visual.accent,
                flexShrink: 0,
              }}>
                <IconComp size={22} />
              </div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#e8e8ee', lineHeight: 1.3 }}>
                {service.title}
              </h2>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '2.25rem', height: '2.25rem', borderRadius: '0.75rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#9090a0', cursor: 'pointer', flexShrink: 0,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = visual.glow;
                e.currentTarget.style.color = accentSolid;
                e.currentTarget.style.borderColor = visual.accent.replace('0.85', '0.4');
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.color = '#9090a0';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* ── Drawer Body ── */}
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>

          {/* Overview */}
          <section>
            <SectionHeading icon={Layers} label="Service Overview" accent={accentSolid} />
            <p style={{ fontSize: '0.92rem', lineHeight: 1.8, color: '#9090a0' }}>
              {service.overview}
            </p>
          </section>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

          {/* Key Offerings */}
          <section>
            <SectionHeading icon={ChevronRight} label="Key Offerings" accent={accentSolid} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {service.keyOfferings.map((offering, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: `1px solid ${visual.accent.replace('0.85', '0.12')}`,
                  borderLeft: `3px solid ${visual.accent.replace('0.85', '0.7')}`,
                  borderRadius: '0.75rem',
                  padding: '0.875rem 1.1rem',
                }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#e8e8ee', marginBottom: '0.3rem' }}>
                    {offering.title}
                  </div>
                  <div style={{ fontSize: '0.83rem', color: '#8a8a9a', lineHeight: 1.65 }}>
                    {offering.description}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

          {/* Tech Stack */}
          <section>
            <SectionHeading icon={Code2} label="Tech Stack" accent={accentSolid} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {service.techStack.map(tech => (
                <span key={tech} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
                  fontSize: '0.75rem', fontWeight: 700,
                  padding: '0.3rem 0.8rem', borderRadius: '2rem',
                  background: visual.glow,
                  border: `1px solid ${visual.accent.replace('0.85', '0.25')}`,
                  color: accentSolid,
                  letterSpacing: '0.04em',
                }}>
                  <Tag size={10} />
                  {tech}
                </span>
              ))}
            </div>
          </section>

        </div>
      </div>

      <style>{`
        @keyframes drawerSlideIn {
          from { transform: translateX(100%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        @keyframes drawerBackdropIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </>
  );
};

/* ─── Main Services Page ──────────────────────────────────── */
const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const servicesList = [
    {
      id: "srv_web",
      title: "Web Development",
      description: "Scalable, high-performance web applications built with modern frameworks to deliver exceptional user experiences.",
      icon: <Globe2 size={24} />,
      color: "text-accent",
      bgHover: "hover:border-cyan-400/50"
    },
    {
      id: "srv_data",
      title: "Data Science",
      description: "Transform raw data into actionable insights with advanced analytics and predictive modeling pipelines.",
      icon: <Database size={24} />,
      color: "text-purple-400",
      bgHover: "hover:border-purple-400/50"
    },
    {
      id: "srv_ai",
      title: "AI / ML Integration",
      description: "Custom artificial intelligence solutions and machine learning models tailored to automate and optimize business processes.",
      icon: <Cpu size={24} />,
      color: "text-blue-400",
      bgHover: "hover:border-blue-400/50"
    },
    {
      id: "srv_cloud",
      title: "Cloud Computing",
      description: "Robust cloud architectures and migrations designed for maximum uptime, security, and scalability.",
      icon: <Cloud size={24} />,
      color: "text-indigo-400",
      bgHover: "hover:border-indigo-400/50"
    },
    {
      id: "srv_cyber",
      title: "Cybersecurity",
      description: "Comprehensive security audits, threat hunting, and infrastructure hardening to protect your digital assets.",
      icon: <Shield size={24} />,
      color: "text-pink-500",
      bgHover: "hover:border-pink-500/50"
    }
  ];

  const openDrawer = (id) => {
    const data = servicesData.find(s => s.id === id);
    if (data) setSelectedService(data);
  };

  const closeDrawer = () => setSelectedService(null);

  return (
    <>
      <div className="animate-fade-in pb-24 relative w-full">

        {/* Main Content */}
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
              <div
                key={service.id}
                className={`service-card group cursor-pointer ${service.bgHover} flex flex-col h-full`}
                onClick={() => openDrawer(service.id)}
                style={{ position: 'relative' }}
              >
                <div className={`icon-wrapper ${service.color}`} style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%', marginBottom: '1rem' }}>
                  {service.icon}
                  <h3 className="text-xl font-bold m-0" style={{ margin: 0, color: 'var(--text-primary)' }}>{service.title}</h3>
                </div>
                <p className="text-secondary">{service.description}</p>
                <div className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 mt-6 group-hover:w-full transition-all duration-500"></div>
                {/* "Learn More" hint */}
                <div style={{
                  marginTop: 'auto',
                  paddingTop: '1rem',
                  display: 'flex', alignItems: 'center', gap: '0.3rem',
                  fontSize: '0.78rem', fontWeight: 700,
                  color: '#5a5a6a', letterSpacing: '0.06em', textTransform: 'uppercase',
                  transition: 'color 0.2s ease',
                }}
                  className="group-hover:!text-[#9090b0]"
                >
                  <Zap size={12} /> View Details
                </div>
              </div>
            ))}

            {/* Contact CTA Card — no drawer, links to contact */}
            <div className="service-card group cursor-pointer hover:border-white/50 bg-gradient-to-br from-white/5 to-white/0 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
              <p className="text-secondary mb-6">Let's discuss how we can transform your technological landscape.</p>
              <button className="btn btn-outline border-white/20 hover:bg-white/10 w-full">
                Contact Us <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Drawer — rendered outside overflow container */}
      {selectedService && (
        <ServiceDrawer
          service={selectedService}
          onClose={closeDrawer}
        />
      )}
    </>
  );
};

export default Services;
