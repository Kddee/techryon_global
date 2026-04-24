import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Brain, Code2, Cloud, ShieldCheck, Landmark, Smartphone, Atom,
  MapPin, CalendarDays, Globe, Tag, ArrowUpRight,
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
  "evt_007": { icon: Atom, accent: 'rgba(100,200,200,0.85)', glow: 'rgba(100,200,200,0.18)' },
};

const categoryStyle = {
  'Technical Summit': { bg: 'rgba(210,110,110,0.15)', color: '#d26e6e', border: 'rgba(210,110,110,0.3)' },
  'Technical Conference': { bg: 'rgba(100,180,210,0.15)', color: '#64b4d2', border: 'rgba(100,180,210,0.3)' },
};

/* ─── Main Page Component ────────────────────────────────── */
const Events = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();

  const filters = ['All', 'Technical Summit', 'Technical Conference'];
  const filtered = activeFilter === 'All' ? eventsData : eventsData.filter(e => e.category === activeFilter);

  return (
    <div className="animate-fade-in pb-28 relative w-full">
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

        {/* ── Upcoming Events Section ── */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{
              display: 'inline-block',
              padding: '0.35rem 1rem',
              borderRadius: '2rem',
              background: 'linear-gradient(135deg, rgba(0,240,255,0.12), rgba(0,180,220,0.06))',
              border: '1px solid rgba(0,240,255,0.25)',
              marginBottom: '1rem',
            }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#00f0ff', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Coming Soon
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-wide" style={{ color: '#e8e8ee', marginBottom: '0.4rem' }}>
              Upcoming Events
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#9090a0', maxWidth: '520px', lineHeight: 1.6 }}>
              Mark your calendars, these next-generation gatherings are on the horizon.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.75rem',
          }}>
            {[
              {
                title: 'NEXAICON 2026',
                date: 'May 10, 2026',
                dateShort: { month: 'MAY', day: '10' },
                location: 'Virtual',
                format: 'Virtual',
                accent: 'rgba(0,220,180,0.85)',
                glow: 'rgba(0,220,180,0.15)',
                description: 'International Conference on AI, Computing & Nexus Technologies: bridging the frontiers of artificial intelligence, next-generation computing paradigms, and interconnected technology ecosystems through cutting-edge research presentations and global collaboration.',
                tags: ['#AI', '#Computing', '#NexusTech', '#Research'],
              },
              {
                title: 'TECHNEXUS GLOBAL CONFERENCE 2026 (TGC-26)',
                date: 'May 17, 2026',
                dateShort: { month: 'MAY', day: '17' },
                location: 'Virtual',
                format: 'Virtual',
                accent: 'rgba(255,165,0,0.85)',
                glow: 'rgba(255,165,0,0.15)',
                description: 'International Conference on Advanced Computing, Systems & Enterprise Technologies: exploring breakthroughs in high-performance computing, scalable enterprise architectures, and intelligent systems that drive digital transformation across industries.',
                tags: ['#AdvancedComputing', '#Enterprise', '#Systems', '#DigitalTransformation'],
              },
              {
                title: 'DIGITCORE CONFERENCE 2026 (DCC-26)',
                date: 'May 24, 2026',
                dateShort: { month: 'MAY', day: '24' },
                location: 'Virtual',
                format: 'Virtual',
                accent: 'rgba(130,120,220,0.85)',
                glow: 'rgba(130,120,220,0.15)',
                description: 'International Conference on Digital Infrastructure & Core Technologies: examining the foundational layers of modern digital ecosystems, from cloud-native architectures and edge computing to data pipeline engineering and resilient infrastructure design.',
                tags: ['#DigitalInfra', '#CoreTech', '#CloudNative', '#EdgeComputing'],
              },
              {
                title: 'CORETECH SUMMIT 2026',
                date: 'May 31, 2026',
                dateShort: { month: 'MAY', day: '31' },
                location: 'Virtual',
                format: 'Virtual',
                accent: 'rgba(220,60,60,0.85)',
                glow: 'rgba(220,60,60,0.15)',
                description: 'Global Conference on Core IT Infrastructure & Technologies: a premier summit uniting industry leaders and researchers to address mission-critical IT infrastructure, cybersecurity frameworks, networking innovations, and the future of enterprise technology stacks.',
                tags: ['#ITInfra', '#CoreIT', '#Cybersecurity', '#Networking'],
              },
            ].map((upcoming, idx) => (
              <UpcomingEventCard key={idx} event={upcoming} idx={idx} />
            ))}
          </div>
        </div>

        {/* ── Past Events Header ── */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide" style={{ color: '#e8e8ee', marginBottom: '0.4rem' }}>
            Past Events
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#9090a0', maxWidth: '520px', lineHeight: 1.6 }}>
            A look back at our previous conferences and summits.
          </p>
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
                onLearnMore={() => navigate(`/events/${ev.id}`)}
              />
            );
          })}
        </div>

      </div>
    </div>
  );
};

/* ─── Event Card ─────────────────────────────────────────── */
const EventCard = ({ ev, visual, idx, IconComp, catStyle, onLearnMore }) => {
  const [hovered, setHovered] = useState(false);

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

      {/* Short description */}
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
      <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
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

/* ─── Upcoming Event Card ────────────────────────────────── */
const UpcomingEventCard = ({ event, idx }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)',
        border: hovered ? `1px solid ${event.accent}` : '1px solid rgba(255,255,255,0.07)',
        borderRadius: '1.5rem',
        padding: '1.75rem',
        display: 'flex', flexDirection: 'column', gap: '1rem',
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? `0 16px 48px ${event.glow}, inset 0 0 24px ${event.glow}`
          : '0 4px 24px rgba(0,0,0,0.25)',
        cursor: 'default',
        animationDelay: `${idx * 80}ms`,
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: `linear-gradient(90deg, transparent, ${event.accent}, transparent)`,
        opacity: hovered ? 1 : 0, transition: 'opacity 0.35s ease',
      }} />

      {/* Date badge + Coming Soon badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          background: event.glow, borderRadius: '0.875rem',
          padding: '0.6rem 1rem', minWidth: '3.5rem',
          transition: 'transform 0.35s ease',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
        }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 800, color: event.accent, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {event.dateShort.month}
          </span>
          <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#e8e8ee', lineHeight: 1.1 }}>
            {event.dateShort.day}
          </span>
        </div>
        <span style={{
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em',
          textTransform: 'uppercase', padding: '0.3rem 0.8rem', borderRadius: '2rem',
          background: 'rgba(0,240,255,0.1)', color: '#00f0ff', border: '1px solid rgba(0,240,255,0.25)',
        }}>Upcoming</span>
      </div>

      {/* Title */}
      <h2 style={{ fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.4, color: '#e8e8ee' }}>{event.title}</h2>

      {/* Meta */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <CalendarDays size={14} style={{ color: event.accent, flexShrink: 0 }} />
          <span style={{ fontSize: '0.83rem', color: '#b0a090' }}>{event.date}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={14} style={{ color: event.accent, flexShrink: 0 }} />
          <span style={{ fontSize: '0.83rem', color: '#b0a090' }}>{event.location}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Globe size={14} style={{ color: event.accent, flexShrink: 0 }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: event.accent, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            {event.format}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

      {/* Description */}
      <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#8a8a9a', flexGrow: 1 }}>{event.description}</p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.25rem' }}>
        {event.tags.map(tag => (
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

      {/* Details coming soon */}
      <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          fontSize: '0.82rem', fontWeight: 700,
          color: '#5a5a6a',
          letterSpacing: '0.06em', textTransform: 'uppercase',
        }}>
          Details Coming Soon
        </span>
      </div>
    </div>
  );
};

export default Events;
