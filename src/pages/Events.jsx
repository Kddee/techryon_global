import React, { useState, useEffect } from 'react';
import {
  Brain, Code2, Cloud, ShieldCheck, Landmark, Smartphone, Atom,
  MapPin, CalendarDays, Globe, Tag, ArrowUpRight,
  Users, BookOpen, Clock, Ticket, ChevronRight, X
} from 'lucide-react';
import { eventsData } from '../data/eventsData';

/* ─── Visual Mapping for dynamic component styling ───────── */
const visualMap = {
  "evt_001": { icon: Brain, accent: 'rgba(210,170,100,0.85)', glow: 'rgba(210,170,100,0.18)' },
  "evt_002": { icon: Code2, accent: 'rgba(100,180,210,0.85)', glow: 'rgba(100,180,210,0.18)' },
  "evt_003": { icon: Cloud, accent: 'rgba(130,210,160,0.85)', glow: 'rgba(130,210,160,0.18)' },
  "evt_004": { icon: ShieldCheck, accent: 'rgba(210,110,110,0.85)', glow: 'rgba(210,110,110,0.18)' },
  "evt_005": { icon: Landmark, accent: 'rgba(180,150,210,0.85)', glow: 'rgba(180,150,210,0.18)' },
  "evt_006": { icon: Smartphone, accent: 'rgba(210,170,100,0.85)', glow: 'rgba(210,170,100,0.18)' },
  "evt_007": { icon: Atom, accent: 'rgba(100,200,200,0.85)', glow: 'rgba(100,200,200,0.18)' }
};

const categoryStyle = {
  'Technical Summit': { bg: 'rgba(210,110,110,0.15)', color: '#d26e6e', border: 'rgba(210,110,110,0.3)' },
  'Technical Conference': { bg: 'rgba(100,180,210,0.15)', color: '#64b4d2', border: 'rgba(100,180,210,0.3)' },
};

/* ─── Helper Component ───────────────────────────────────── */
const SectionHeading = ({ icon: Icon, label, accent }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
    <Icon size={16} style={{ color: accent }} />
    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>{label}</h3>
  </div>
);

/* ─── Detail Drawer ──────────────────────────────────────── */
const EventDrawer = ({ ev, onClose }) => {
  const visual = visualMap[ev.id];
  const catStyle = categoryStyle[ev.category] || categoryStyle['Technical Conference'];
  const IconComp = visual.icon;

  // Prevent background jump when hiding scrollbar
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, []);

  // Close on Escape
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

      {/* Drawer panel */}
      <div
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 201,
          width: 'min(680px, 100vw)',
          background: 'linear-gradient(160deg, #1e1d22 0%, #19181d 100%)',
          borderLeft: `1px solid ${visual.accent.replace('0.85', '0.25')}`,
          boxShadow: `-24px 0 80px rgba(0,0,0,0.6), inset 1px 0 0 ${visual.accent.replace('0.85', '0.08')}`,
          overflowY: 'auto',
          animation: 'drawerSlideIn 0.38s cubic-bezier(0.4,0,0.2,1) forwards',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(210,170,100,0.2) transparent',
        }}
      >
        {/* ── Drawer header ── */}
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

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flex: 1 }}>
              <div style={{
                display: 'inline-flex', padding: '0.85rem',
                background: visual.glow,
                borderRadius: '0.875rem',
                color: visual.accent,
                flexShrink: 0,
              }}>
                <IconComp size={22} />
              </div>
              <div>
                <span style={{
                  fontSize: '0.7rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '0.25rem 0.7rem', borderRadius: '2rem',
                  background: catStyle.bg, color: catStyle.color,
                  border: `1px solid ${catStyle.border}`,
                  display: 'inline-block', marginBottom: '0.5rem',
                }}>{ev.category}</span>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#e8e8ee', lineHeight: 1.35 }}>
                  {ev.title}
                </h2>
              </div>
            </div>
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
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(210,110,110,0.15)'; e.currentTarget.style.color = '#e88a8a'; e.currentTarget.style.borderColor = 'rgba(210,110,110,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#9090a0'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Meta row */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '1rem',
            marginTop: '1rem', paddingTop: '1rem',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}>
            {[
              { Icon: CalendarDays, text: ev.date },
              { Icon: MapPin, text: ev.location },
              { Icon: Globe, text: ev.format },
            ].map(({ Icon, text }, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Icon size={13} style={{ color: '#d2aa64', flexShrink: 0 }} />
                <span style={{ fontSize: '0.8rem', color: '#a09080' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Drawer body ── */}
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>

          {/* Overview */}
          <section>
            <SectionHeading icon={BookOpen} label="Event Overview" accent={visual.accent.replace('0.85', '1')} />
            <p style={{ fontSize: '0.92rem', lineHeight: 1.8, color: '#9090a0' }}>
              {ev.overview}
            </p>
          </section>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

          {/* Key Themes */}
          <section>
            <SectionHeading icon={ChevronRight} label="Key Themes & Tracks" accent={visual.accent.replace('0.85', '1')} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {ev.themes.map((t, i) => {
                // Ensure split safely if it’s a string or handle string formatting from JSON
                const titleStr = typeof t === "string" ? t.split(":")[0] : t.title;
                const bodyStr = typeof t === "string" ? t.split(":").slice(1).join(":") : t.body;

                return (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: `1px solid ${visual.accent.replace('0.85', '0.12')}`,
                  borderLeft: `3px solid ${visual.accent.replace('0.85', '0.7')}`,
                  borderRadius: '0.75rem',
                  padding: '0.875rem 1.1rem',
                }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#e8e8ee', marginBottom: '0.3rem' }}>
                    {titleStr}
                  </div>
                  <div style={{ fontSize: '0.83rem', color: '#8a8a9a', lineHeight: 1.65 }}>{bodyStr}</div>
                </div>
              )})}
            </div>
          </section>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

          {/* Agenda */}
          <section>
            <SectionHeading icon={Clock} label="Agenda Highlights" accent={visual.accent.replace('0.85', '1')} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {ev.agenda.map((block, bi) => (
                <div key={bi}>
                  <div style={{
                    fontSize: '0.78rem', fontWeight: 700,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: visual.accent.replace('0.85', '1'),
                    marginBottom: '0.6rem',
                    paddingBottom: '0.4rem',
                    borderBottom: `1px solid ${visual.accent.replace('0.85', '0.15')}`,
                  }}>
                    {block.day}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {block.sessions.map((s, si) => {
                      const [time, ...rest] = s.split(/\s*[-—]\s*/);
                      return (
                        <div key={si} style={{
                          display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                          padding: '0.6rem 0.75rem',
                          borderRadius: '0.6rem',
                          background: 'rgba(255,255,255,0.018)',
                        }}>
                          <span style={{
                            fontSize: '0.72rem', fontWeight: 700, color: '#d2aa64',
                            minWidth: '5.5rem', flexShrink: 0, paddingTop: '0.05rem',
                          }}>{time}</span>
                          <span style={{ fontSize: '0.83rem', color: '#a0a0b0', lineHeight: 1.5 }}>
                            {rest.join(' - ')}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

          {/* Featured Speakers */}
          <section>
            <SectionHeading icon={Users} label="Featured Speakers" accent={visual.accent.replace('0.85', '1')} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {ev.speakers.map((sp, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '0.875rem 1rem',
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '0.875rem',
                }}>
                  {/* Avatar initials */}
                  <div style={{
                    width: '2.5rem', height: '2.5rem', borderRadius: '50%',
                    background: visual.glow,
                    border: `1px solid ${visual.accent.replace('0.85', '0.3')}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.75rem', fontWeight: 700,
                    color: visual.accent.replace('0.85', '1'),
                    flexShrink: 0,
                    letterSpacing: '0.04em',
                  }}>
                    {sp.name.split(' ').filter(w => /^[A-Z]/.test(w)).slice(0, 2).map(w => w[0]).join('')}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#e8e8ee', lineHeight: 1.3 }}>{sp.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#8a8a9a' }}>{sp.role}</div>
                  </div>
                </div>
              ))}
              <div style={{ fontSize: '0.8rem', color: '#7a7a8a', paddingLeft: '0.5rem', marginTop: '0.25rem', fontStyle: 'italic' }}>
                Plus 20+ more industry leaders and core contributors.
              </div>
            </div>
          </section>

          {/* Divider */}
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />
          
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

/* ─── Main Page Component ────────────────────────────────── */
const Events = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filters = ['All', 'Technical Summit', 'Technical Conference'];
  const filtered = activeFilter === 'All' ? eventsData : eventsData.filter(e => e.category === activeFilter);

  const openDrawer = (ev) => setSelectedEvent(ev);
  const closeDrawer = () => setSelectedEvent(null);

  return (
    <>
    <div
      className="animate-fade-in pb-28 relative w-full"
    >
      <div
        className="container relative z-10"
        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
      >

        {/* ── Header Row ── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <div style={{ marginTop: '0.5rem' }}>
              <h1 className="text-3xl md:text-4xl font-bold tracking-wide" style={{ color: '#e8e8ee', marginBottom: '0.3rem' }}>
                Our Events
              </h1>
              <p style={{ fontSize: '0.95rem', color: '#9090a0', maxWidth: '420px', lineHeight: 1.6 }}>
                Premier global gatherings at the intersection of technology, research, and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* ── Stats Row ── */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem',
          padding: '1.5rem', background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1.25rem',
        }}>
          {[
            { label: 'Our Events', value: '7' },
            { label: 'Global Cities', value: '5' },
            { label: 'Expert Speakers', value: '150+' },
          ].map((stat, i) => (
            <div key={i} style={{ flexGrow: 1, minWidth: '120px' }}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#d2aa64', marginBottom: '0.1rem' }}>{stat.value}</div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#8a8a9a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ── Category Filters ── */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} style={{
              padding: '0.5rem 1.25rem', borderRadius: '2rem',
              fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.05em',
              textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.25s ease',
              border: activeFilter === f ? '1px solid rgba(210,170,100,0.5)' : '1px solid rgba(255,255,255,0.1)',
              background: activeFilter === f
                ? 'linear-gradient(135deg,rgba(210,170,100,0.18),rgba(180,140,80,0.10))'
                : 'rgba(255,255,255,0.04)',
              color: activeFilter === f ? '#d2aa64' : '#9090a0',
              boxShadow: activeFilter === f ? '0 0 16px rgba(210,170,100,0.15)' : 'none',
            }}>{f}</button>
          ))}
        </div>

        {/* ── Events Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.75rem',
        }}>
          {filtered.map((ev, idx) => {
            const visual = visualMap[ev.id];
            const IconComp = visual.icon;
            const catStyle = categoryStyle[ev.category] || categoryStyle['Technical Conference'];
            return (
              <EventCard
                key={ev.id}
                ev={ev}
                visual={visual}
                idx={idx}
                IconComp={IconComp}
                catStyle={catStyle}
                onLearnMore={() => openDrawer(ev)}
              />
            );
          })}
        </div>

      </div>

    </div>

      {/* ── Detail Drawer — rendered outside overflow container so fixed scroll works ── */}
      {selectedEvent && (
        <EventDrawer
          ev={selectedEvent}
          onClose={closeDrawer}
        />
      )}
    </>
  );
};

/* ─── Event Card ─────────────────────────────────────────── */
const EventCard = ({ ev, visual, idx, IconComp, catStyle, onLearnMore }) => {
  const [hovered, setHovered] = useState(false);

  // Use string slice with dots if the description format changed 
  const shortDesc = ev.overview.length > 200 ? ev.overview.slice(0, 197) + '...' : ev.overview;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)',
        border: hovered ? `1px solid ${visual.accent}` : '1px solid rgba(255,255,255,0.07)',
        borderRadius: '1.5rem',
        padding: '1.75rem',
        display: 'flex', flexDirection: 'column', gap: '1rem',
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? `0 16px 48px ${visual.glow}, inset 0 0 24px ${visual.glow}`
          : '0 4px 24px rgba(0,0,0,0.25)',
        cursor: 'default',
        animationDelay: `${idx * 60}ms`,
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: `linear-gradient(90deg, transparent, ${visual.accent}, transparent)`,
        opacity: hovered ? 1 : 0, transition: 'opacity 0.35s ease',
      }} />

      {/* Icon + Category badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{
          display: 'inline-flex', padding: '0.85rem',
          background: visual.glow, borderRadius: '0.875rem', color: visual.accent,
          transition: 'transform 0.35s ease',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
        }}>
          <IconComp size={22} />
        </div>
        <span style={{
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em',
          textTransform: 'uppercase', padding: '0.3rem 0.8rem', borderRadius: '2rem',
          background: catStyle.bg, color: catStyle.color, border: `1px solid ${catStyle.border}`,
        }}>{ev.category}</span>
      </div>

      {/* Title */}
      <h2 style={{ fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.4, color: '#e8e8ee' }}>{ev.title}</h2>

      {/* Meta */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <CalendarDays size={14} style={{ color: '#d2aa64', flexShrink: 0 }} />
          <span style={{ fontSize: '0.83rem', color: '#b0a090' }}>{ev.date}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={14} style={{ color: '#d2aa64', flexShrink: 0 }} />
          <span style={{ fontSize: '0.83rem', color: '#b0a090' }}>{ev.location}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Globe size={14} style={{ color: '#d2aa64', flexShrink: 0 }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#d2aa64', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            {ev.format}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

      {/* Overview section mapping to old description */}
      <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#8a8a9a', flexGrow: 1 }}>{shortDesc}</p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.25rem' }}>
        {ev.tags.map(tag => (
          <span key={tag} style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.2rem',
            fontSize: '0.72rem', fontWeight: 600,
            padding: '0.25rem 0.65rem', borderRadius: '2rem',
            background: 'rgba(210,170,100,0.07)',
            border: '1px solid rgba(210,170,100,0.18)',
            color: '#a09070',
          }}>
            <Tag size={10} />{tag}
          </span>
        ))}
      </div>

      {/* Learn more */}
      <div style={{ marginTop: '0.25rem' }}>
        <button
          onClick={onLearnMore}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            fontSize: '0.82rem', fontWeight: 700,
            color: hovered ? '#d2aa64' : '#7a7a8a',
            transition: 'color 0.25s ease',
            background: 'none', border: 'none', padding: 0, cursor: 'pointer',
            letterSpacing: '0.06em', textTransform: 'uppercase',
          }}
        >
          Learn More <ArrowUpRight size={14} style={{
            transition: 'transform 0.25s ease',
            transform: hovered ? 'translate(2px, -2px)' : 'translate(0, 0)'
          }} />
        </button>
      </div>
    </div>
  );
};

export default Events;
