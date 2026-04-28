import React from 'react';
import {
  Info, FileText, BookOpen, Award, ClipboardList, ShieldCheck,
  Users, Scale, HelpCircle, CreditCard, Mail, Rocket, Mic,
  Globe, CheckCircle, Search, FileCheck, Lock, Eye, Star, Zap, Target,
  Building2
} from 'lucide-react';

import emeraldImg from '../../assets/emerald.png';
import saleemImg from '../../assets/saleem.jpeg';
import olukemiImg from '../../assets/olukemi.png';
import okopiImg from '../../assets/okopi.png';

const speakerImages = {
  "Emerald Abena Amponsah Baffour": emeraldImg,
  "Saleem Abu Jaber": saleemImg,
  "Olukemi Ajibike Aluko": olukemiImg,
  "Okopi Fredrick": okopiImg
};

/* ─── Color Palette ──────────────────────────────────────────── */
const palette = {
  teal: { solid: 'rgb(0,220,180)', glow: 'rgba(0,220,180,0.15)', hover: 'rgba(0,220,180,0.3)', cardHover: 'rgba(0,220,180,0.04)' },
  blue: { solid: 'rgb(100,160,255)', glow: 'rgba(100,160,255,0.15)', hover: 'rgba(100,160,255,0.3)', cardHover: 'rgba(100,160,255,0.04)' },
  purple: { solid: 'rgb(180,130,255)', glow: 'rgba(180,130,255,0.15)', hover: 'rgba(180,130,255,0.3)', cardHover: 'rgba(180,130,255,0.04)' },
  amber: { solid: 'rgb(220,180,80)', glow: 'rgba(220,180,80,0.15)', hover: 'rgba(220,180,80,0.3)', cardHover: 'rgba(220,180,80,0.04)' },
  rose: { solid: 'rgb(255,110,140)', glow: 'rgba(255,110,140,0.15)', hover: 'rgba(255,110,140,0.3)', cardHover: 'rgba(255,110,140,0.04)' },
  cyan: { solid: 'rgb(0,200,240)', glow: 'rgba(0,200,240,0.15)', hover: 'rgba(0,200,240,0.3)', cardHover: 'rgba(0,200,240,0.04)' },
};

const sectionGap = { display: 'flex', flexDirection: 'column', gap: '3rem' };

/* ─── Themed Components ──────────────────────────────────────── */
const SectionHeading = ({ icon: Icon, label, color = palette.teal }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
    <div style={{
      display: 'inline-flex', padding: '0.55rem',
      background: color.glow, borderRadius: '0.75rem',
      color: color.solid,
    }}>
      <Icon size={18} />
    </div>
    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#e8e8ee', letterSpacing: '0.02em' }}>{label}</h3>
  </div>
);

const DarkCard = ({ title, icon: Icon, image, children, color = palette.teal, style: extraStyle }) => (
  <div style={{
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '1.25rem',
    padding: '1.5rem',
    display: 'flex', flexDirection: 'column', gap: '0.75rem',
    transition: 'all 0.3s ease',
    minWidth: 0,
    ...extraStyle,
  }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = color.hover; e.currentTarget.style.background = color.cardHover; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
  >
    {Icon && !image && (
      <div style={{
        display: 'inline-flex', padding: '0.5rem',
        background: color.glow, borderRadius: '0.65rem',
        color: color.solid, alignSelf: 'flex-start',
      }}>
        <Icon size={18} />
      </div>
    )}
    {image && (
      <div style={{
        display: 'inline-flex', padding: '0.4rem',
        background: '#ffffff', borderRadius: '0.5rem',
        alignSelf: 'flex-start', height: '48px', width: '140px', alignItems: 'center', justifyContent: 'center'
      }}>
        <img src={image} alt={title} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
      </div>
    )}
    {title && <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#e8e8ee' }}>{title}</div>}
    <div style={{ fontSize: '0.87rem', color: '#8a8a9a', lineHeight: 1.75 }}>{children}</div>
  </div>
);

/* ─── Responsive Grid Styles (injected once) ─────────────────── */
const gridStyleId = 'infratech-responsive-grids';
if (typeof document !== 'undefined' && !document.getElementById(gridStyleId)) {
  const styleEl = document.createElement('style');
  styleEl.id = gridStyleId;
  styleEl.textContent = `
    .infra-grid-2 { display:grid; gap:1.25rem; grid-template-columns: repeat(2, 1fr); }
    .infra-grid-3 { display:grid; gap:1.25rem; grid-template-columns: repeat(3, 1fr); }
    .infra-grid-4 { display:grid; gap:1.25rem; grid-template-columns: repeat(4, 1fr); }
    .infra-grid-speakers { display:grid; gap:1rem; grid-template-columns: repeat(3, 1fr); }
    .infra-grid-committee { display:grid; gap:1rem; grid-template-columns: repeat(4, 1fr); }
    @media (max-width: 900px) {
      .infra-grid-4 { grid-template-columns: repeat(2, 1fr); }
      .infra-grid-committee { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 768px) {
      .infra-grid-3 { grid-template-columns: repeat(2, 1fr); }
      .infra-grid-speakers { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 560px) {
      .infra-grid-2 { grid-template-columns: 1fr; }
      .infra-grid-3 { grid-template-columns: 1fr; }
      .infra-grid-4 { grid-template-columns: 1fr; }
      .infra-grid-speakers { grid-template-columns: 1fr; }
      .infra-grid-committee { grid-template-columns: 1fr; }
    }
  `;
  document.head.appendChild(styleEl);
}

const Grid3 = ({ children }) => (
  <div className="infra-grid-3">{children}</div>
);

const Grid4 = ({ children }) => (
  <div className="infra-grid-4">{children}</div>
);

const Grid2 = ({ children }) => (
  <div className="infra-grid-2">{children}</div>
);

const Divider = () => (
  <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />
);


/* ═══════════════════════════════════════════════════════════════
   INFRATECH WORLD 2026 — All Custom Sections
   ═══════════════════════════════════════════════════════════════ */
const InfratechSections = ({ speakers = [], speakersTitle = 'Featured Speakers', keynoteSpeakers = [] }) => {
  return (
    <div style={sectionGap}>

      {/* ───────── 1. ABOUT THE CONFERENCE (teal) ───────── */}
      <section>
        <SectionHeading icon={Info} label="About the Conference" color={palette.teal} />
        <p style={{ fontSize: '0.95rem', color: '#8a8a9a', lineHeight: 1.85, marginBottom: '1rem' }}>
          INFRATECH WORLD 2026 is a premier global conference dedicated to advancing the frontiers of IT infrastructure and enterprise technologies. Bringing together researchers, academicians, industry professionals, and thought leaders from around the world, this conference serves as a vital platform for sharing groundbreaking research, innovative solutions, and visionary ideas that are shaping the future of digital infrastructure.
        </p>
        <p style={{ fontSize: '0.95rem', color: '#8a8a9a', lineHeight: 1.85 }}>
          From cloud-native architectures and cybersecurity frameworks to AI-driven automation and next-generation networking, INFRATECH WORLD 2026 covers the full spectrum of technologies that power modern enterprises. Whether you are presenting original research, exploring strategic partnerships, or seeking to expand your professional network, this conference offers an unparalleled opportunity to engage with the global technology community.
        </p>
      </section>

      <Divider />

      {/* ───────── KEYNOTE SPEAKERS (amber) ───────── */}
      {keynoteSpeakers.length > 0 && (
        <>
          <section>
            <SectionHeading icon={Mic} label="Keynote Speakers" color={palette.amber} />
            <div className="infra-grid-speakers">
              {keynoteSpeakers.map((sp, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1rem 1.25rem',
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '1rem',
                  minWidth: 0,
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = palette.amber.hover; e.currentTarget.style.background = palette.amber.cardHover; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.025)'; }}
                >
                  <div style={{
                    width: '4.5rem', height: '4.5rem', borderRadius: '50%',
                    background: palette.amber.glow,
                    border: `1px solid ${palette.amber.hover}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.8rem', fontWeight: 700,
                    color: palette.amber.solid,
                    flexShrink: 0, letterSpacing: '0.04em',
                    overflow: 'hidden'
                  }}>
                    {speakerImages[sp.name] ? (
                      <img src={speakerImages[sp.name]} alt={sp.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      sp.name.split(' ').filter(w => /^[A-Z]/.test(w)).slice(0, 2).map(w => w[0]).join('')
                    )}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#e8e8ee', lineHeight: 1.3 }}>{sp.name}</div>
                    <div style={{ fontSize: '0.78rem', color: '#8a8a9a', marginTop: '0.2rem' }}>{sp.role}{sp.organization ? `, ${sp.organization}` : ''}</div>
                    {sp.country && sp.country !== 'N/A' && <div style={{ fontSize: '0.75rem', color: '#6a6a7a', marginTop: '0.1rem' }}>{sp.country}</div>}
                  </div>
                </div>
              ))}
            </div>
          </section>
          <Divider />
        </>
      )}

      {/* ───────── COMMITTEE MEMBERS (purple) ───────── */}
      {speakers.length > 0 && (
        <>
          <section>
            <SectionHeading icon={Users} label={speakersTitle} color={palette.purple} />
            <div className="infra-grid-committee">
              {speakers.map((sp, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1rem 1.25rem',
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '1rem',
                  minWidth: 0,
                  transition: 'all 0.3s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = palette.purple.hover; e.currentTarget.style.background = palette.purple.cardHover; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.025)'; }}
                >
                  <div style={{
                    width: '3rem', height: '3rem', borderRadius: '50%',
                    background: palette.purple.glow,
                    border: `1px solid ${palette.purple.hover}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.8rem', fontWeight: 700,
                    color: palette.purple.solid,
                    flexShrink: 0, letterSpacing: '0.04em',
                  }}>
                    {sp.name.split(' ').filter(w => /^[A-Z]/.test(w)).slice(0, 2).map(w => w[0]).join('')}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#e8e8ee', lineHeight: 1.3 }}>{sp.name}</div>
                    <div style={{ fontSize: '0.78rem', color: '#8a8a9a', marginTop: '0.2rem' }}>{sp.role}</div>
                    {sp.country && sp.country !== 'N/A' && <div style={{ fontSize: '0.75rem', color: '#6a6a7a', marginTop: '0.1rem' }}>{sp.country}</div>}
                  </div>
                </div>
              ))}
            </div>
          </section>
          <Divider />
        </>
      )}

      {/* ───────── 2. CALL FOR PAPERS (blue) ───────── */}
      <section>
        <SectionHeading icon={FileText} label="Call for Papers" color={palette.blue} />
        <p style={{ fontSize: '0.95rem', color: '#8a8a9a', lineHeight: 1.85, marginBottom: '1.5rem' }}>
          We invite original, unpublished research contributions from scholars and practitioners across all areas of IT infrastructure, enterprise computing, and emerging technologies. Accepted papers will be published in the official conference proceedings with ISBN assignment and submitted for indexing in leading academic databases.
        </p>
        <Grid3>
          <DarkCard title="Topics of Interest" icon={Target} color={palette.blue}>
            Cloud Computing &amp; Virtualization, Cybersecurity &amp; Zero-Trust Architecture, AI/ML Infrastructure, Edge &amp; Fog Computing, Software-Defined Networking (SDN), DevOps &amp; CI/CD Pipelines, Blockchain for Enterprise, IoT Infrastructure, Data Center Optimization, Green IT &amp; Sustainable Computing, Digital Twins, and 5G/6G Enterprise Integration.
          </DarkCard>
          <DarkCard title="Submission Categories" icon={ClipboardList} color={palette.blue}>
            <strong style={{ color: '#c0c0d0' }}>Full Research Papers:</strong> 8–12 pages of original, completed research with rigorous methodology and analysis.<br /><br />
            <strong style={{ color: '#c0c0d0' }}>Short Papers &amp; Work-in-Progress:</strong> 4–6 pages presenting preliminary findings, innovative concepts, or ongoing research.<br /><br />
            <strong style={{ color: '#c0c0d0' }}>Poster Presentations:</strong> 2-page extended abstracts for visual, interactive research dissemination.
          </DarkCard>
          <DarkCard title="Review & Evaluation" icon={Search} color={palette.blue}>
            All submissions undergo a rigorous double-blind peer review process conducted by an international panel of experts. Papers are evaluated on originality, technical soundness, significance of contribution, clarity of presentation, and relevance to the conference themes. Authors will receive detailed, constructive feedback regardless of the acceptance decision.
          </DarkCard>
        </Grid3>
      </section>

      <Divider />

      {/* ───────── 3. PUBLICATION & INDEXING (purple) ───────── */}
      <section>
        <SectionHeading icon={BookOpen} label="Publication & Indexing" color={palette.purple} />
        <Grid4>
          <DarkCard /*title="ISBN"*/ image="/images/logos/isbn.png" color={palette.purple}>
            All accepted and presented papers will be published in the official conference proceedings, assigned a unique ISBN (International Standard Book Number), ensuring global cataloguing and discoverability.
          </DarkCard>
          <DarkCard /*title="Scopus"*/ image="/images/logos/scopus.svg" color={palette.purple}>
            Conference proceedings are submitted for review and potential indexing in Scopus, one of the world's largest abstract and citation databases of peer-reviewed literature.
          </DarkCard>
          <DarkCard /*title="Web of Science"*/ image="/images/logos/webofscience.svg" color={palette.purple}>
            Selected high-impact papers will be recommended for indexing in the Web of Science, providing authors with enhanced academic visibility and citation tracking.
          </DarkCard>
          <DarkCard /*title="DOI"*/ image="/images/logos/doi.svg" color={palette.purple}>
            Each published paper will be assigned a unique Digital Object Identifier (DOI), providing a permanent and reliable link to the digital version of the manuscript.
          </DarkCard>
        </Grid4>
      </section>

      <Divider />

      {/* ───────── 4. WHY PARTICIPATE? (amber) ───────── */}
      <section>
        <SectionHeading icon={Award} label="Why Participate?" color={palette.amber} />
        <Grid4>
          <DarkCard title="Global Networking" icon={Users} color={palette.amber}>
            Connect with leading researchers, industry professionals, and academic luminaries from over 50 countries. Build meaningful collaborations that transcend geographical boundaries and drive international research partnerships.
          </DarkCard>
          <DarkCard title="Publication Opportunity" icon={BookOpen} color={palette.amber}>
            Get your research published in ISBN-assigned proceedings with potential indexing in Scopus, Web of Science, and Google Scholar. Gain academic recognition and bolster your research portfolio.
          </DarkCard>
          <DarkCard title="Cutting-Edge Insights" icon={Zap} color={palette.amber}>
            Gain access to keynotes, technical sessions, and panel discussions led by world-renowned experts in IT infrastructure, cloud computing, cybersecurity, and enterprise technologies.
          </DarkCard>
          <DarkCard title="Career Advancement" icon={Star} color={palette.amber}>
            Enhance your professional profile by presenting at an internationally recognized conference. Earn a certificate of participation and add a distinguished publication to your academic credentials.
          </DarkCard>
        </Grid4>
      </section>

      <Divider />

      {/* ───────── 5. PAPER SUBMISSION GUIDELINES (rose) ───────── */}
      <section>
        <SectionHeading icon={ClipboardList} label="Paper Submission Guidelines" color={palette.rose} />
        <Grid3>
          <DarkCard title="Originality" icon={CheckCircle} color={palette.rose}>
            All submitted manuscripts must be original, unpublished work that has not been submitted for review or publication elsewhere. Submissions must represent a genuine contribution to the field of IT infrastructure and enterprise technologies. Duplicate, derivative, or previously published content will be immediately rejected.
          </DarkCard>
          <DarkCard title="Manuscript Preparation" icon={FileText} color={palette.rose}>
            Papers must be formatted according to the official conference template (available on the submission portal). Full papers should be 8–12 pages, short papers 4–6 pages, and poster abstracts 2 pages. All manuscripts must be submitted in PDF format with figures, tables, and references properly formatted.
          </DarkCard>
          <DarkCard title="Submission Procedure" icon={Rocket} color={palette.rose}>
            Authors should submit their manuscripts through the official conference submission portal. Each submission must include: the manuscript in PDF, a cover letter, author details, and a declaration of originality. Submissions received after the deadline will not be considered for review.
          </DarkCard>
        </Grid3>
      </section>

      <Divider />

      {/* ───────── 6. PLAGIARISM & ACADEMIC INTEGRITY (rose) ───────── */}
      <section>
        <SectionHeading icon={ShieldCheck} label="Plagiarism & Academic Integrity Policy" color={palette.rose} />
        <Grid4>
          <DarkCard title="Academic Integrity" icon={Scale} color={palette.rose}>
            INFRATECH WORLD 2026 upholds the highest standards of academic integrity. All authors are expected to adhere to ethical research practices and ensure that their work is honest, transparent, and free from any form of academic misconduct.
          </DarkCard>
          <DarkCard title="Similarity Assessment" icon={Search} color={palette.rose}>
            All submitted manuscripts are screened using industry-standard plagiarism detection tools (e.g., Turnitin, iThenticate). Papers with a similarity index exceeding 15% (excluding references and quotations) will be flagged for further review or outright rejection.
          </DarkCard>
          <DarkCard title="Policy Enforcement" icon={ShieldCheck} color={palette.rose}>
            If plagiarism is detected at any stage—before or after publication—the paper will be immediately retracted. Authors may be barred from future submissions, and their affiliated institutions may be notified in accordance with international academic ethics standards.
          </DarkCard>
          <DarkCard title="Ethical Compliance" icon={CheckCircle} color={palette.rose}>
            Authors must provide proper citations for all referenced works, datasets, and methodologies. Self-plagiarism, data fabrication, and falsification are strictly prohibited. All co-authors must have meaningfully contributed to the research.
          </DarkCard>
        </Grid4>
      </section>

      <Divider />

      {/* ───────── 7. PEER REVIEW PROCESS (blue) ───────── */}
      <section>
        <SectionHeading icon={Eye} label="Peer Review Process" color={palette.blue} />
        <Grid4>
          <DarkCard title="Qualified Reviewers" icon={Users} color={palette.blue}>
            Each submission is assigned to a minimum of two independent reviewers who are recognized experts in the paper's subject area. Our review committee comprises over 80 scholars and practitioners from leading global institutions.
          </DarkCard>
          <DarkCard title="Double-Blind Review" icon={Lock} color={palette.blue}>
            INFRATECH WORLD 2026 employs a strict double-blind review process. The identities of both the authors and reviewers are concealed throughout the evaluation to ensure unbiased, objective, and fair assessment of every submission.
          </DarkCard>
          <DarkCard title="Evaluation Criteria" icon={ClipboardList} color={palette.blue}>
            Papers are scored on: <strong style={{ color: '#c0c0d0' }}>Originality</strong> (novelty of contribution), <strong style={{ color: '#c0c0d0' }}>Technical Soundness</strong> (methodology rigor), <strong style={{ color: '#c0c0d0' }}>Significance</strong> (impact potential), <strong style={{ color: '#c0c0d0' }}>Clarity</strong> (writing quality), and <strong style={{ color: '#c0c0d0' }}>Relevance</strong> (alignment with conference themes).
          </DarkCard>
          <DarkCard title="Decision Process" icon={CheckCircle} color={palette.blue}>
            Based on reviewer scores and feedback, the Technical Program Committee makes the final decision: <strong style={{ color: '#00dca0' }}>Accept</strong>, <strong style={{ color: '#d2aa64' }}>Revise & Resubmit</strong>, or <strong style={{ color: '#d26e6e' }}>Reject</strong>. Authors receive comprehensive feedback within 2–3 weeks of submission.
          </DarkCard>
        </Grid4>
      </section>

      <Divider />

      {/* ───────── 8. PUBLICATION & ETHICS POLICY (purple) ───────── */}
      <section>
        <SectionHeading icon={Scale} label="Publication & Ethics Policy" color={palette.purple} />
        <Grid4>
          <DarkCard title="Publication Policy" icon={BookOpen} color={palette.purple}>
            Only papers that are presented (virtually or in-person) at the conference will be included in the final published proceedings. No-show papers will be excluded. At least one author must register and attend the conference for the paper to be published.
          </DarkCard>
          <DarkCard title="Copyright & Usage" icon={FileCheck} color={palette.purple}>
            Authors retain the copyright of their published work. By submitting to INFRATECH WORLD 2026, authors grant the conference a non-exclusive license to publish, distribute, and archive the work in the proceedings and affiliated databases.
          </DarkCard>
          <DarkCard title="Research Ethics" icon={ShieldCheck} color={palette.purple}>
            All research involving human subjects, sensitive data, or potentially harmful applications must comply with relevant ethical guidelines and institutional review board (IRB) approvals. Authors must declare any ethical considerations in their manuscripts.
          </DarkCard>
          <DarkCard title="Conflict of Interest" icon={Eye} color={palette.purple}>
            Authors, reviewers, and editors must disclose any financial, professional, or personal relationships that could influence the objectivity of the research or review process. Undisclosed conflicts may result in retraction or disciplinary action.
          </DarkCard>
        </Grid4>
      </section>

      <Divider />

      {/* ───────── 9. FREQUENTLY ASKED QUESTIONS (cyan) ───────── */}
      <section>
        <SectionHeading icon={HelpCircle} label="Frequently Asked Questions" color={palette.cyan} />
        <Grid3>
          <DarkCard title="Who can submit a paper?" color={palette.cyan}>
            INFRATECH WORLD 2026 welcomes submissions from researchers, academicians, graduate students, industry practitioners, and independent scholars from any country. Interdisciplinary submissions are encouraged.
          </DarkCard>
          <DarkCard title="Is the conference fully virtual?" color={palette.cyan}>
            Yes, INFRATECH WORLD 2026 is a fully virtual conference. All sessions, presentations, and networking activities will be conducted online through our interactive digital platform, accessible from anywhere in the world.
          </DarkCard>
          <DarkCard title="Can I submit more than one paper?" color={palette.cyan}>
            Yes, authors may submit multiple papers. However, each submission will be reviewed independently and must meet all submission guidelines. A separate registration fee is required for each accepted paper.
          </DarkCard>
          <DarkCard title="What format should my paper follow?" color={palette.cyan}>
            Manuscripts must follow the official conference template, which is available on the submission portal. Papers should be submitted in PDF format. Full papers: 8–12 pages; Short papers: 4–6 pages; Posters: 2 pages.
          </DarkCard>
          <DarkCard title="Will I receive a certificate?" color={palette.cyan}>
            Yes, all registered participants—whether presenting or attending—will receive an official Certificate of Participation. Presenting authors will also receive a Certificate of Presentation.
          </DarkCard>
          <DarkCard title="How are papers published?" color={palette.cyan}>
            Accepted and presented papers are published in the official conference proceedings with ISBN assignment. Proceedings are submitted for indexing in Scopus, Web of Science, and assigned individual DOIs.
          </DarkCard>
        </Grid3>
      </section>

      <Divider />

      {/* ───────── 10. REGISTRATION & FEES (amber) ───────── */}
      <section>
        <SectionHeading icon={CreditCard} label="Registration & Fees" color={palette.amber} />
        <Grid4>
          <DarkCard title="Students" icon={Users} color={palette.amber}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: palette.amber.solid, marginBottom: '0.5rem' }}>$50</div>
            Early-bird registration for full-time students with valid institutional ID. Includes access to all virtual sessions, published proceedings, and a Certificate of Participation.
          </DarkCard>
          <DarkCard title="Academicians" icon={BookOpen} color={palette.amber}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: palette.amber.solid, marginBottom: '0.5rem' }}>$100</div>
            Registration for faculty, postdoctoral researchers, and academic staff. Includes full conference access, paper publication in proceedings, and all networking sessions.
          </DarkCard>
          <DarkCard title="Industry Professionals" icon={Building2} color={palette.amber}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: palette.amber.solid, marginBottom: '0.5rem' }}>$150</div>
            For corporate professionals, enterprise architects, and technology leaders. Includes full conference access, publication, certificate, and priority access to industry-focused sessions.
          </DarkCard>
          <DarkCard title="Virtual Participation" icon={Globe} color={palette.amber}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: palette.amber.solid, marginBottom: '0.5rem' }}>$30</div>
            Attend as a listener without paper presentation. Includes access to all live-streamed sessions, Q&amp;A participation, and a Certificate of Attendance.
          </DarkCard>
        </Grid4>
      </section>

      <Divider />



      {/* ───────── 12. CALL TO ACTION ───────── */}
      <section style={{ textAlign: 'center', padding: '3rem 0 1rem' }}>
        <h2 style={{
          fontSize: '2rem', fontWeight: 800, color: '#e8e8ee',
          marginBottom: '0.75rem', lineHeight: 1.3,
        }}>
          Join the Future of Tech
        </h2>
        <p style={{
          fontSize: '1rem', color: '#8a8a9a', maxWidth: '520px',
          margin: '0 auto 2rem', lineHeight: 1.7,
        }}>
          Be part of a global movement shaping the next generation of IT infrastructure and enterprise innovation. Submit your research or register to attend INFRATECH WORLD 2026.
        </p>
        <a
          href="https://forms.gle/qMrzfq6BmTSS4HkV9"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '0.85rem 2.5rem',
            borderRadius: '3rem',
            border: `2px solid ${palette.blue.solid}`,
            background: 'transparent',
            color: palette.blue.solid,
            fontSize: '0.88rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = palette.blue.glow; e.currentTarget.style.boxShadow = `0 0 30px ${palette.blue.glow}`; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          Submit Paper / Register
        </a>
      </section>

    </div>
  );
};

export default InfratechSections;
