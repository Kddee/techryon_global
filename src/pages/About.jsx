import React from 'react';
import { Cpu, ShieldCheck, Box } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: "Algorithmic Precision",
      description: "We treat code as mathematics. From memory-safe cross-platform compilations to parameter-efficient fine-tuning, we optimize for millisecond latency and zero-defect deployments.",
      icon: <Cpu size={28} />,
      accent: "#00f0ff"
    },
    {
      title: "Zero-Trust Philosophy",
      description: "Security is not an afterthought; it is our foundation. We operate on a strict zero-trust model, ensuring that every microservice, API, and user interaction is cryptographically verified.",
      icon: <ShieldCheck size={28} />,
      accent: "#ec4899"
    },
    {
      title: "Immutable Architecture",
      description: "We believe in infrastructure that heals itself. By leveraging cloud-native containerization and infrastructure-as-code, we build systems designed to scale elastically without human intervention.",
      icon: <Box size={28} />,
      accent: "#8b5cf6"
    }
  ];

  const team = [
    {
      name: "Dr. Example",
      role: "Founder & Chief Executive Officer",
      bio: "Former Director of Distributed Systems at NeuralCore, specializing in highly concurrent cloud infrastructure.",
      glow: "rgba(210,170,100,0.15)"
    },
    {
      name: "Example",
      role: "Chief AI Scientist",
      bio: "Lead researcher in parameter-efficient fine-tuning (PEFT) and the mitigation of algorithmic bias in LLMs.",
      glow: "rgba(0,240,255,0.15)"
    },
    {
      name: "example example",
      role: "Head of Offensive Security",
      bio: "Zero-day vulnerability researcher and architect of predictive threat modeling frameworks.",
      glow: "rgba(236,72,153,0.15)"
    }
  ];

  return (
    <div className="animate-fade-in pb-24 relative w-full mt-12">

      {/* Main Content */}
      <div
        className="container relative z-10"
        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
      >

        {/* Page Title */}
        <div style={{ marginBottom: '3rem' }}>
          <p style={{ fontSize: '0.8rem', color: '#00f0ff', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: '700', marginBottom: '0.5rem' }}>
            Techryon Global
          </p>
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide" style={{ color: '#e8e8ee' }}>
            About Us
          </h1>
          <div style={{ width: '3.5rem', height: '3px', background: '#00f0ff', borderRadius: '2px', marginTop: '1rem' }} />
        </div>

        {/* Mission Section */}
        <div style={{ marginBottom: '5rem', maxWidth: '800px' }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide leading-tight" style={{ color: '#e8e8ee' }}>
            Architecting the Next Epoch of <span className="text-gradient">Enterprise Technology.</span>
          </h2>
          <p className="text-xl text-secondary leading-relaxed">
            Techryon Global was founded on a singular premise: the gap between theoretical computer science and practical enterprise application is widening. We exist to bridge that gap. We are a collective of distributed systems architects, quantitative data scientists, and offensive security researchers dedicated to building high-availability, AI-driven ecosystems for the modern web.
          </p>
        </div>

        {/* Core Values Section */}
        <div style={{ marginBottom: '5rem' }}>
          <h2 className="text-2xl font-bold tracking-wide mb-8 uppercase" style={{ color: '#e8e8ee', letterSpacing: '0.1em' }}>
            Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="group cursor-default flex flex-col h-full"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '1.5rem',
                  padding: '2.5rem',
                  transition: 'transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease',
                  willChange: 'transform',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = val.accent;
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = `0 10px 40px -10px ${val.accent}40`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ color: val.accent, marginBottom: '1.5rem' }}>
                  {val.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#e8e8ee' }}>{val.title}</h3>
                <p className="text-secondary leading-relaxed mt-auto" style={{ fontSize: '1.05rem' }}>{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team Section */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide mb-8 uppercase" style={{ color: '#e8e8ee', letterSpacing: '0.1em' }}>
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="group cursor-default flex flex-col h-full"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '1.5rem',
                  padding: '2.5rem',
                  transition: 'transform 0.4s ease, border-color 0.4s ease, background-color 0.4s ease',
                  willChange: 'transform',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.background = member.glow;
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                }}
              >
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 className="text-2xl font-bold" style={{ color: '#e8e8ee', marginBottom: '0.25rem' }}>{member.name}</h3>
                  <div style={{ fontSize: '0.85rem', color: '#00f0ff', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: '700' }}>
                    {member.role}
                  </div>
                </div>
                <p className="text-secondary leading-relaxed mt-auto" style={{ fontSize: '1.05rem' }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
