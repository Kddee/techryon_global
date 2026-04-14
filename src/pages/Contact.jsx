import React from 'react';
import { Mail, MapPin, Phone, ArrowRight, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="animate-fade-in pb-24 relative w-full mt-12">
      <div
        className="container relative z-10"
        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
      >
        {/* Header */}
        <div style={{ marginBottom: '4rem', maxWidth: '800px' }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide leading-tight" style={{ color: '#e8e8ee' }}>
            Initiate <span className="text-gradient">Dialogue.</span>
          </h1>
          <p className="text-xl text-secondary leading-relaxed">
            Whether you require deep architectural consulting, offensive security audits, or custom AI integrations, our engineers are ready to build constraints-defying solutions for your enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Column: Contact Info */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-2xl font-bold tracking-wide mb-8 uppercase" style={{ color: '#e8e8ee', letterSpacing: '0.1em' }}>
                Headquarters
              </h2>
              <div className="flex flex-col gap-6">

                {/* TODO: Uncomment and add real contact details when ready
                
                <div className="group flex items-center" style={{ gap: '1.25rem' }}>
                  <div className="transition-all duration-300" style={{ padding: '0.75rem', background: 'rgba(0, 240, 255, 0.1)', color: '#00f0ff', borderRadius: '0.75rem' }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-secondary leading-relaxed text-lg">
                      1 Example Street,<br />
                      Innovation District, TX 00000
                    </p>
                  </div>
                </div>

                <div className="group flex items-center" style={{ gap: '1.25rem' }}>
                  <div className="transition-all duration-300" style={{ padding: '0.75rem', background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7', borderRadius: '0.75rem' }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="text-secondary leading-relaxed text-lg">
                      example@techryonglobal.com
                    </p>
                  </div>
                </div>

                <div className="group flex items-center" style={{ gap: '1.25rem' }}>
                  <div className="transition-all duration-300" style={{ padding: '0.75rem', background: 'rgba(236, 72, 153, 0.1)', color: '#ec4899', borderRadius: '0.75rem' }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-secondary leading-relaxed text-lg">
                      +1 (800) TECH-RYON
                    </p>
                  </div>
                </div>
                */}

              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphism Form */}
          <div>
            <form
              className="flex flex-col gap-6"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
              }}
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-2xl font-bold text-white mb-2">Send us a message</h3>
              <p className="text-secondary mb-4">We actively monitor all encrypted channels.</p>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-secondary">Full Name</label>
                <input
                  type="text"
                  className="w-full transition-colors"
                  style={{ padding: '0.75rem 1rem', background: 'rgba(0, 240, 255, 0.04)', border: '1px solid rgba(0, 240, 255, 0.15)', outline: 'none', borderRadius: '0.5rem', color: '#e8e8ee' }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(0, 240, 255, 0.5)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(0, 240, 255, 0.15)'}
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-secondary">Corporate Email</label>
                <input
                  type="email"
                  className="w-full transition-colors"
                  style={{ padding: '0.75rem 1rem', background: 'rgba(0, 240, 255, 0.04)', border: '1px solid rgba(0, 240, 255, 0.15)', outline: 'none', borderRadius: '0.5rem', color: '#e8e8ee' }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(0, 240, 255, 0.5)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(0, 240, 255, 0.15)'}
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold uppercase tracking-wider text-secondary">Inquiry Details</label>
                <textarea
                  rows={4}
                  className="w-full transition-colors"
                  style={{ padding: '0.75rem 1rem', background: 'rgba(0, 240, 255, 0.04)', border: '1px solid rgba(0, 240, 255, 0.15)', outline: 'none', borderRadius: '0.5rem', color: '#e8e8ee' }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(0, 240, 255, 0.5)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(0, 240, 255, 0.15)'}
                  placeholder=""
                />
              </div>

              <button
                className="w-full mt-4 font-bold tracking-wide uppercase flex items-center justify-center transition-all duration-300"
                style={{
                  padding: '1rem',
                  gap: '0.75rem',
                  background: 'rgba(0, 240, 255, 0.1)',
                  color: '#00f0ff',
                  border: '1px solid rgba(0, 240, 255, 0.3)',
                  borderRadius: '0.75rem',
                  cursor: 'pointer'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#00f0ff';
                  e.currentTarget.style.color = '#0a0a0f';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(0, 240, 255, 0.1)';
                  e.currentTarget.style.color = '#00f0ff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Transmit Query <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
