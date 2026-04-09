import React, { useState } from 'react';
import { Shield, Globe2, Database, Cpu, Cloud, ArrowRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const servicesList = [
    {
      title: "Web Development",
      description: "Scalable, high-performance web applications built with modern frameworks to deliver exceptional user experiences.",
      icon: <Globe2 size={24} />,
      color: "text-cyan-400",
      bgHover: "hover:border-cyan-400/50"
    },
    {
      title: "Data Science",
      description: "Transform raw data into actionable insights with advanced analytics and predictive modeling pipelines.",
      icon: <Database size={24} />,
      color: "text-purple-400",
      bgHover: "hover:border-purple-400/50"
    },
    {
      title: "AI / ML Integration",
      description: "Custom artificial intelligence solutions and machine learning models tailored to automate and optimize business processes.",
      icon: <Cpu size={24} />,
      color: "text-blue-400",
      bgHover: "hover:border-blue-400/50"
    },
    {
      title: "Cloud Computing",
      description: "Robust cloud architectures and migrations designed for maximum uptime, security, and scalability.",
      icon: <Cloud size={24} />,
      color: "text-indigo-400",
      bgHover: "hover:border-indigo-400/50"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security audits, threat hunting, and infrastructure hardening to protect your digital assets.",
      icon: <Shield size={24} />,
      color: "text-pink-500",
      bgHover: "hover:border-pink-500/50"
    }
  ];

  return (
    <div className="animate-fade-in pb-24 relative overflow-hidden min-h-screen">
      
      {/* Liquid Plasma Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[20%] w-[35vw] h-[35vw] bg-cyan-600/30 rounded-full blur-[140px] mix-blend-screen"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-purple-700/20 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute top-[40%] left-[60%] w-[30vw] h-[30vw] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      {/* Main Content — header + grid share same container so columns align */}
      <div className="container relative z-10" style={{ paddingTop: '1.5rem' }}>

        {/* Header row — logo left, hamburger right, both aligned to grid column edges */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          
          {/* Left: Logo + Page Title */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Cpu className="text-cyan-400" size={30} />
              <span className="text-2xl font-bold title-glow uppercase tracking-widest">
                Techryon<span className="text-cyan-400">Global</span>
              </span>
            </Link>
            <h1 className="text-3xl font-bold text-secondary tracking-wide">
              Our Services
            </h1>
          </div>

          {/* Right: Hamburger dropdown */}
          <div style={{ position: 'relative', marginRight: '1rem', marginTop: '0.5rem' }}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center text-secondary hover:text-cyan-400 transition-colors focus:outline-none"
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
                    color: '#00f0ff'
                  }}
                />
              </div>
            </button>

            {/* Dropdown */}
            <div
              className="glass-panel flex flex-col items-end gap-5 border border-cyan-900/50"
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
                boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                pointerEvents: isMenuOpen ? 'auto' : 'none'
              }}
            >
              <Link to="/" className="text-right font-semibold text-sm hover:text-cyan-400 transition-colors uppercase tracking-wider block">Home</Link>
              <Link to="/conferences" className="text-right font-semibold text-sm hover:text-cyan-400 transition-colors uppercase tracking-wider block">Conferences</Link>
              <a href="#about" className="text-right font-semibold text-sm hover:text-cyan-400 transition-colors uppercase tracking-wider block">About Us</a>
              <a href="#contact" className="text-right font-semibold text-sm hover:text-cyan-400 transition-colors uppercase tracking-wider block">Contact</a>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className={`service-card group cursor-pointer ${service.bgHover}`}>
              <div className={`icon-wrapper ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-secondary">{service.description}</p>
              <div className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 mt-6 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}

          {/* Contact Card */}
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
  );
};

export default Services;
