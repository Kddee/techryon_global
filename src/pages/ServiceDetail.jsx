import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Shield, Globe2, Database, Cpu, Cloud, ArrowLeft, Layers, Code2, ChevronRight, Tag, ArrowRight } from 'lucide-react';
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

/* ─── Service Detail Page ─────────────────────────────────── */
const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div style={{ padding: '4rem 2.5rem', textAlign: 'center', color: '#9090a0' }}>
        <p style={{ fontSize: '1.1rem' }}>Service not found.</p>
        <button
          onClick={() => navigate('/services')}
          style={{ marginTop: '1.5rem', background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer', fontSize: '0.9rem' }}
        >
          ← Back to Services
        </button>
      </div>
    );
  }

  const visual      = visualMap[service.id];
  const IconComp    = visual.icon;
  const accentSolid = visual.accent.replace('0.85', '1');

  return (
    <div
      className="animate-fade-in"
      style={{ minHeight: '100vh', background: 'linear-gradient(160deg, #1e1d22 0%, #19181d 100%)' }}
    >
      {/* ── Sticky header bar ── */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 50,
        padding: '1.25rem 2.5rem',
        background: 'rgba(28,27,32,0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center', gap: '1.25rem',
      }}>
        {/* Top accent strip */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: `linear-gradient(90deg, transparent, ${visual.accent}, transparent)`,
        }} />

        <button
          onClick={() => navigate('/services')}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.5rem 1rem', borderRadius: '0.75rem',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#9090a0', cursor: 'pointer', fontSize: '0.82rem',
            fontWeight: 600, letterSpacing: '0.04em',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = visual.glow; e.currentTarget.style.color = accentSolid; e.currentTarget.style.borderColor = visual.accent.replace('0.85','0.4'); }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#9090a0'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
        >
          <ArrowLeft size={15} /> Back to Services
        </button>
      </div>

      {/* ── Hero section ── */}
      <div style={{
        maxWidth: '900px', margin: '0 auto',
        padding: '4rem 2.5rem 2rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{
            display: 'inline-flex', padding: '1.1rem',
            background: visual.glow,
            borderRadius: '1.25rem',
            color: visual.accent,
            flexShrink: 0,
            boxShadow: `0 0 40px ${visual.glow}`,
          }}>
            <IconComp size={32} />
          </div>
          <div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#e8e8ee', lineHeight: 1.3 }}>
              {service.title}
            </h1>
            <p style={{ fontSize: '0.9rem', color: '#8a8a9a', marginTop: '0.5rem' }}>
              Deep-dive into how we deliver this service
            </p>
          </div>
        </div>

        {/* Accent divider */}
        <div style={{ height: '1px', background: `linear-gradient(90deg, ${visual.accent.replace('0.85','0.4')}, transparent)`, marginBottom: '3rem' }} />
      </div>

      {/* ── Main Content ── */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2.5rem 6rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

        {/* Overview */}
        <section>
          <SectionHeading icon={Layers} label="Service Overview" accent={accentSolid} />
          <p style={{ fontSize: '1rem', lineHeight: 1.85, color: '#9090a0' }}>{service.overview}</p>
        </section>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

        {/* Key Offerings */}
        <section>
          <SectionHeading icon={ChevronRight} label="Key Offerings" accent={accentSolid} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {service.keyOfferings.map((offering, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.025)',
                border: `1px solid ${visual.accent.replace('0.85', '0.12')}`,
                borderLeft: `3px solid ${visual.accent.replace('0.85', '0.7')}`,
                borderRadius: '0.875rem',
                padding: '1rem 1.25rem',
              }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#e8e8ee', marginBottom: '0.35rem' }}>
                  {offering.title}
                </div>
                <div style={{ fontSize: '0.88rem', color: '#8a8a9a', lineHeight: 1.7 }}>
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
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {service.techStack.map(tech => (
              <span key={tech} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                fontSize: '0.82rem', fontWeight: 700,
                padding: '0.4rem 1rem', borderRadius: '2rem',
                background: visual.glow,
                border: `1px solid ${visual.accent.replace('0.85', '0.25')}`,
                color: accentSolid,
                letterSpacing: '0.04em',
              }}>
                <Tag size={11} />
                {tech}
              </span>
            ))}
          </div>
        </section>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

        {/* CTA */}
        <section style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '1.25rem',
          padding: '2rem',
          textAlign: 'center',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem',
        }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#e8e8ee' }}>Ready to get started?</h2>
          <p style={{ fontSize: '0.92rem', color: '#8a8a9a', maxWidth: '400px' }}>
            Let's discuss how we can tailor this solution to your specific needs.
          </p>
          <Link to="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.75rem 1.75rem', borderRadius: '0.875rem',
            background: visual.glow,
            border: `1px solid ${visual.accent.replace('0.85','0.4')}`,
            color: accentSolid, fontWeight: 700, fontSize: '0.9rem',
            textDecoration: 'none', letterSpacing: '0.04em',
            transition: 'all 0.2s ease',
          }}>
            Contact Us <ArrowRight size={16} />
          </Link>
        </section>

      </div>
    </div>
  );
};

export default ServiceDetail;
