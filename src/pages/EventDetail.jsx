import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Brain, Code2, Cloud, ShieldCheck, Landmark, Smartphone, Atom,
  MapPin, CalendarDays, Globe, Tag, ArrowLeft,
  Users, BookOpen, Clock, ChevronRight
} from 'lucide-react';
import { eventsData } from '../data/eventsData';
import InfratechSections from '../components/events/InfratechSections';

/* ─── Visual Mapping ───────────────────────────────────────── */
const visualMap = {
  "evt_001": { icon: Brain,      accent: 'rgba(210,170,100,0.85)', glow: 'rgba(210,170,100,0.18)' },
  "evt_002": { icon: Code2,      accent: 'rgba(100,180,210,0.85)', glow: 'rgba(100,180,210,0.18)' },
  "evt_003": { icon: Cloud,      accent: 'rgba(130,210,160,0.85)', glow: 'rgba(130,210,160,0.18)' },
  "evt_004": { icon: ShieldCheck,accent: 'rgba(210,110,110,0.85)', glow: 'rgba(210,110,110,0.18)' },
  "evt_005": { icon: Landmark,   accent: 'rgba(180,150,210,0.85)', glow: 'rgba(180,150,210,0.18)' },
  "evt_006": { icon: Smartphone, accent: 'rgba(210,170,100,0.85)', glow: 'rgba(210,170,100,0.18)' },
  "evt_007": { icon: Atom,       accent: 'rgba(100,200,200,0.85)', glow: 'rgba(100,200,200,0.18)' },
};

const categoryStyle = {
  'Technical Summit':      { bg: 'rgba(210,110,110,0.15)', color: '#d26e6e', border: 'rgba(210,110,110,0.3)' },
  'Technical Conference':  { bg: 'rgba(100,180,210,0.15)', color: '#64b4d2', border: 'rgba(100,180,210,0.3)' },
};

/* ─── Helper: Section Heading ──────────────────────────────── */
const SectionHeading = ({ icon: Icon, label, accent }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.2rem' }}>
    <Icon size={16} style={{ color: accent }} />
    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, letterSpacing: '0.04em', color: '#e8e8ee' }}>{label}</h3>
  </div>
);

/* ─── Event Detail Page ────────────────────────────────────── */
const EventDetail = () => {
  const { id: slug } = useParams();
  const navigate = useNavigate();

  const ev = eventsData.find(e => e.slug === slug || e.id === slug);

  if (!ev) {
    return (
      <div style={{ padding: '4rem 2.5rem', textAlign: 'center', color: '#9090a0' }}>
        <p style={{ fontSize: '1.1rem' }}>Event not found.</p>
        <button
          onClick={() => navigate('/events')}
          style={{ marginTop: '1.5rem', background: 'none', border: 'none', color: '#d2aa64', cursor: 'pointer', fontSize: '0.9rem' }}
        >
          ← Back to Events
        </button>
      </div>
    );
  }

  const fallbackVisual = { icon: Brain, accent: 'rgba(210,170,100,0.85)', glow: 'rgba(210,170,100,0.18)' };
  const visual   = visualMap[ev.id] || fallbackVisual;
  const catStyle = categoryStyle[ev.category] || categoryStyle['Technical Conference'];
  const IconComp = visual.icon;
  const accentSolid = visual.accent.replace('0.85', '1');

  /* ── Set browser tab title to the event name ── */
  useEffect(() => {
    document.title = `${ev.title} | Techryon Global`;
    return () => { document.title = 'Techryon Global'; };
  }, [ev.title]);

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
          onClick={() => navigate('/events')}
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
          <ArrowLeft size={15} /> Back to Events
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginLeft: 'auto' }}>
          <span style={{
            fontSize: '0.7rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '0.25rem 0.7rem', borderRadius: '2rem',
            background: catStyle.bg, color: catStyle.color,
            border: `1px solid ${catStyle.border}`,
          }}>{ev.category}</span>
        </div>
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
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#e8e8ee', lineHeight: 1.3, marginBottom: '1rem' }}>
              {ev.title}
            </h1>
            {/* Meta row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
              {[
                { Icon: CalendarDays, text: ev.date },
                { Icon: MapPin, text: ev.location },
                { Icon: Globe, text: ev.format },
              ].map(({ Icon, text }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Icon size={14} style={{ color: '#d2aa64', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', color: '#a09080' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accent divider */}
        <div style={{ height: '1px', background: `linear-gradient(90deg, ${visual.accent.replace('0.85','0.4')}, transparent)`, marginBottom: '3rem' }} />
      </div>

      {/* ── Main Content ── */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2.5rem 6rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

        {/* ── INFRATECH WORLD 2026 custom sections ── */}
        {ev.id === 'evt_008' ? (
          <>
            <InfratechSections speakers={ev.speakers || []} speakersTitle={ev.speakersTitle || 'Featured Speakers'} keynoteSpeakers={ev.keynoteSpeakers || []} />

            {/* Tags */}
            <section>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {ev.tags.map(tag => (
                  <span key={tag} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
                    fontSize: '0.78rem', fontWeight: 600,
                    padding: '0.3rem 0.8rem', borderRadius: '2rem',
                    background: 'rgba(210,170,100,0.07)',
                    border: '1px solid rgba(210,170,100,0.18)',
                    color: '#a09070',
                  }}>
                    <Tag size={11} />{tag}
                  </span>
                ))}
              </div>
            </section>
          </>
        ) : (
          <>
            {/* Overview */}
            <section>
              <SectionHeading icon={BookOpen} label="Event Overview" accent={accentSolid} />
              <p style={{ fontSize: '1rem', lineHeight: 1.85, color: '#9090a0' }}>{ev.overview}</p>
            </section>

            <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />

            {/* Key Themes */}
            {ev.themes && ev.themes.length > 0 && (
              <>
                <section>
                  <SectionHeading icon={ChevronRight} label="Key Themes & Tracks" accent={accentSolid} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {ev.themes.map((t, i) => {
                      const titleStr = typeof t === 'string' ? t.split(':')[0] : t.title;
                      const bodyStr  = typeof t === 'string' ? t.split(':').slice(1).join(':') : t.body;
                      return (
                        <div key={i} style={{
                          background: 'rgba(255,255,255,0.025)',
                          border: `1px solid ${visual.accent.replace('0.85', '0.12')}`,
                          borderLeft: `3px solid ${visual.accent.replace('0.85', '0.7')}`,
                          borderRadius: '0.875rem',
                          padding: '1rem 1.25rem',
                        }}>
                          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#e8e8ee', marginBottom: '0.35rem' }}>{titleStr}</div>
                          <div style={{ fontSize: '0.88rem', color: '#8a8a9a', lineHeight: 1.7 }}>{bodyStr}</div>
                        </div>
                      );
                    })}
                  </div>
                </section>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />
              </>
            )}

            {/* Agenda */}
            {ev.agenda && ev.agenda.length > 0 && (
              <>
                <section>
                  <SectionHeading icon={Clock} label="Agenda Highlights" accent={accentSolid} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                    {ev.agenda.map((block, bi) => (
                      <div key={bi}>
                        <div style={{
                          fontSize: '0.78rem', fontWeight: 700,
                          letterSpacing: '0.08em', textTransform: 'uppercase',
                          color: accentSolid,
                          marginBottom: '0.75rem',
                          paddingBottom: '0.5rem',
                          borderBottom: `1px solid ${visual.accent.replace('0.85', '0.2')}`,
                        }}>
                          {block.day}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                          {block.sessions.map((s, si) => {
                            const [time, ...rest] = s.split(/\s*[-—]\s*/);
                            return (
                              <div key={si} style={{
                                display: 'flex', gap: '1rem', alignItems: 'flex-start',
                                padding: '0.75rem 1rem',
                                borderRadius: '0.75rem',
                                background: 'rgba(255,255,255,0.02)',
                                border: '1px solid rgba(255,255,255,0.04)',
                              }}>
                                <span style={{
                                  fontSize: '0.78rem', fontWeight: 700, color: '#d2aa64',
                                  minWidth: '6rem', flexShrink: 0, paddingTop: '0.05rem',
                                }}>{time}</span>
                                <span style={{ fontSize: '0.9rem', color: '#a0a0b0', lineHeight: 1.55 }}>
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
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />
              </>
            )}

            {/* Featured Speakers */}
            {ev.speakers && ev.speakers.length > 0 && (
              <section>
                <SectionHeading icon={Users} label={ev.speakersTitle || "Featured Speakers"} accent={accentSolid} />
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
                  {ev.speakers.map((sp, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', gap: '1rem',
                      padding: '1rem 1.25rem',
                      background: 'rgba(255,255,255,0.025)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: '1rem',
                    }}>
                      <div style={{
                        width: '3rem', height: '3rem', borderRadius: '50%',
                        background: visual.glow,
                        border: `1px solid ${visual.accent.replace('0.85', '0.3')}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.8rem', fontWeight: 700,
                        color: accentSolid,
                        flexShrink: 0, letterSpacing: '0.04em',
                      }}>
                        {sp.name.split(' ').filter(w => /^[A-Z]/.test(w)).slice(0, 2).map(w => w[0]).join('')}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#e8e8ee', lineHeight: 1.3 }}>{sp.name}</div>
                        <div style={{ fontSize: '0.78rem', color: '#8a8a9a', marginTop: '0.2rem' }}>{sp.role}</div>
                        {sp.country && sp.country !== 'N/A' && <div style={{ fontSize: '0.75rem', color: '#6a6a7a', marginTop: '0.1rem' }}>{sp.country}</div>}
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#7a7a8a', marginTop: '0.75rem', fontStyle: 'italic', paddingLeft: '0.5rem' }}>
                  Plus 20+ more industry leaders and core contributors.
                </div>
              </section>
            )}

            {/* Tags */}
            <section>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {ev.tags.map(tag => (
                  <span key={tag} style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
                    fontSize: '0.78rem', fontWeight: 600,
                    padding: '0.3rem 0.8rem', borderRadius: '2rem',
                    background: 'rgba(210,170,100,0.07)',
                    border: '1px solid rgba(210,170,100,0.18)',
                    color: '#a09070',
                  }}>
                    <Tag size={11} />{tag}
                  </span>
                ))}
              </div>
            </section>
          </>
        )}

      </div>
    </div>
  );
};

export default EventDetail;
