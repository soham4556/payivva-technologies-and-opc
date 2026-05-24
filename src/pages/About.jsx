import { Shield, Flame, Code, Cpu, Database, PenTool, BarChart, Layers, Globe, Zap, Clock, ArrowRight, Sparkles, Users, Target, BadgeCheck, MapPinned } from 'lucide-react';
import './styles/About.css';

const About = () => {
  const pillars = [
    {
      number: '01',
      title: 'Clean & Robust Engineering',
      text: 'No bloated templates. We build fast, maintainable digital systems with modern architecture and strict performance discipline.'
    },
    {
      number: '02',
      title: 'Scientific Growth Attribution',
      text: 'We measure outcomes precisely, connecting traffic, behavior, and conversion into clear business intelligence.'
    },
    {
      number: '03',
      title: 'Transparent Delivery',
      text: 'Clear communication, accountable milestones, and execution that stays aligned from kickoff to launch.'
    }
  ];

  const capabilities = [
    { icon: <Code size={22} />, label: 'React Ecosystem', tone: 'cyan' },
    { icon: <Cpu size={22} />, label: 'NodeJS API Core', tone: 'emerald' },
    { icon: <Flame size={22} />, label: 'Python Analytics', tone: 'purple' },
    { icon: <PenTool size={22} />, label: 'Product Prototyping', tone: 'cyan' },
    { icon: <BarChart size={22} />, label: 'Analytics Systems', tone: 'emerald' },
    { icon: <Database size={22} />, label: 'SQL Databases', tone: 'purple' }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Founding & Core Focus',
      text: 'PAYIVVA began in Pune with a focus on high-performance engineering and practical growth systems.',
      icon: <Zap size={14} />,
      tone: 'cyan'
    },
    {
      year: '2024',
      title: 'Service Expansion',
      text: 'We expanded into end-to-end software, SEO, and paid growth frameworks for enterprise outcomes.',
      icon: <Layers size={14} />,
      tone: 'emerald'
    },
    {
      year: '2025',
      title: 'Hinjawadi HQ',
      text: 'Core operations moved into Gera Imperium Rise, Phase II, to sit inside Pune’s tech corridor.',
      icon: <Globe size={14} />,
      tone: 'purple'
    },
    {
      year: '2026',
      title: 'Enterprise Scale',
      text: 'A premium systems partner for software, intelligence, and conversion-led digital growth.',
      icon: <Clock size={14} />,
      tone: 'cyan'
    }
  ];

  return (
    <div className="about-page-premium animate-fade-in">
      <section className="about-hero-section-premium">
        <div className="about-hero-grid-premium">
          <div className="about-hero-content-premium">
            <span className="premium-tag-glow">ABOUT PAYIVVA</span>
            <h1 className="hero-main-title">
              A premium engineering partner for <span className="text-glow-indigo">modern scale</span>
            </h1>
            <p className="hero-sub-text">
              PAYIVVA Technologies is a Pune-based digital engineering company building high-performance websites, enterprise software, and conversion-led growth systems.
            </p>
            <div className="about-hero-points">
              <div><Sparkles size={16} /> Product-first delivery</div>
              <div><Users size={16} /> Human-led collaboration</div>
              <div><Target size={16} /> Measurable outcomes</div>
            </div>
          </div>

          <div className="about-hero-visual-premium">
            <div className="obsidian-glass tech-status-monitor">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot-red"></span>
                  <span className="dot-yellow"></span>
                  <span className="dot-green"></span>
                </div>
                <span className="terminal-title">COMPANY STATUS</span>
              </div>
              <div className="terminal-body">
                <div className="stat-line"><span className="stat-label">SYSTEM INTEGRATION</span><span className="stat-value text-glow-indigo">ACTIVE</span></div>
                <div className="stat-line"><span className="stat-label">HQ LOCATION</span><span className="stat-value text-glow-teal">HINJAWADI, PUNE</span></div>
                <div className="stat-line"><span className="stat-label">DELIVERY MODEL</span><span className="stat-value text-glow-indigo">BOUTIQUE + ENTERPRISE</span></div>
                <div className="stat-bar-holder">
                  <span className="stat-label">CLIENT SATISFACTION</span>
                  <div className="stat-bar-fill-glow" style={{ width: '92%' }}>92%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-snapshot-section-premium">
        <div className="about-container-premium">
          <div className="about-snapshot-grid">
            <div className="obsidian-card-premium snapshot-card">
              <div className="snapshot-icon"><BadgeCheck size={20} /></div>
              <h3>What we do</h3>
              <p>We design and build premium websites, software systems, AI-driven workflows, and performance marketing infrastructure.</p>
            </div>
            <div className="obsidian-card-premium snapshot-card">
              <div className="snapshot-icon"><MapPinned size={20} /></div>
              <h3>Where we operate</h3>
              <p>Our HQ is in Gera Imperium Rise, Phase II, Hinjawadi, Pune, close to the city’s core tech ecosystem.</p>
            </div>
            <div className="obsidian-card-premium snapshot-card">
              <div className="snapshot-icon"><Shield size={20} /></div>
              <h3>How we work</h3>
              <p>Lean teams, precise delivery, high design standards, and engineering discipline across every engagement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-pillars-section-premium">
        <div className="about-container-premium">
          <div className="about-section-head text-center">
            <span className="section-tag-modern-light">OUR GUIDING PILLARS</span>
            <h2 className="section-title-modern-light">The principles behind the brand</h2>
            <p className="section-desc">We focus on clarity, engineering quality, and outcomes that matter to real businesses.</p>
          </div>

          <div className="pillars-grid-premium">
            {pillars.map((pillar) => (
              <div key={pillar.number} className="obsidian-card-premium pillar-card-premium">
                <span className="pillar-number-premium">{pillar.number}</span>
                <h3 className="pillar-title-premium">{pillar.title}</h3>
                <p className="pillar-text-premium">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-stack-container-premium">
        <div className="about-container-premium">
          <div className="about-section-head text-center">
            <span className="section-tag-modern-light">CAPABILITIES</span>
            <h2 className="section-title-modern-light">What powers our delivery</h2>
            <p className="section-desc">A modern stack for modern execution, from interfaces to data to automation.</p>
          </div>

          <div className="tech-grid-premium">
            {capabilities.map((item) => (
              <div key={item.label} className="tech-item-premium">
                <div className={`tech-icon-box-premium icon-${item.tone}`}>{item.icon}</div>
                <span className="tech-name-premium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-timeline-section-premium">
        <div className="about-container-premium">
          <div className="about-section-head text-center">
            <span className="section-tag-modern-light">CHRONOLOGY</span>
            <h2 className="section-title-modern-light">Milestones of scale</h2>
            <p className="section-desc">A short view of how PAYIVVA evolved into a premium systems partner.</p>
          </div>

          <div className="timeline-grid-premium">
            <div className="timeline-connector-line-premium"></div>
            {milestones.map((milestone) => (
              <div key={milestone.year} className="timeline-step-premium">
                <div className={`timeline-node-premium node-${milestone.tone}`}>{milestone.icon}</div>
                <div className="obsidian-card-premium timeline-content-card-premium">
                  <span className="timeline-year-badge">{milestone.year}</span>
                  <h4 className="timeline-title-premium">{milestone.title}</h4>
                  <p className="timeline-text-premium">{milestone.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-cta-row">
            <a href="/contact" className="btn btn-primary about-cta-btn">
              Start a Conversation <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
