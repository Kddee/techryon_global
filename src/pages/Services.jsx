import React from 'react';
import { Shield, Globe2, Database, Cpu, Cloud, ArrowRight } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      title: "Web Development",
      description: "Scalable, high-performance web applications built with modern frameworks to deliver exceptional user experiences.",
      icon: <Globe2 size={24} />,
      color: "text-accent",
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
