import {
  Shield, Code2, Cpu, BarChart, Globe, Clock, ArrowRight,
  Sparkles, Target, BadgeCheck, MapPin, Building2, Phone, Mail, CheckCircle2,
  Quote, UserCheck, ExternalLink, Factory, HardHat
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './styles/About.css';

const LinkedInIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const About = () => {
  const pillars = [
    {
      number: '01',
      title: 'Clean & Robust Engineering',
      text: 'No bloated templates. We build fast, maintainable digital systems with modern architecture, microservices, and strict performance discipline.'
    },
    {
      number: '02',
      title: 'Scientific Growth & AI Intelligence',
      text: 'We engineer custom RAG networks, machine learning models, and data pipelines grounded in real factual business outcomes.'
    },
    {
      number: '03',
      title: 'Transparent Enterprise Delivery',
      text: 'Accountable milestones, zero-trust data security, and end-to-end execution that stays perfectly aligned from kickoff to deployment.'
    }
  ];

  const capabilities = [
    { icon: <Code2 size={22} />, label: 'Custom Website & Web Platforms', tone: 'cyan' },
    { icon: <Globe size={22} />, label: 'Mobile App Engineering (iOS & Android)', tone: 'emerald' },
    { icon: <Cpu size={22} />, label: 'Enterprise Software & Robust APIs', tone: 'purple' },
    { icon: <BarChart size={22} />, label: 'Digital Marketing & SEO Growth', tone: 'cyan' },
    { icon: <Sparkles size={22} />, label: 'Generative AI & Private RAG', tone: 'emerald' },
    { icon: <Shield size={22} />, label: 'ML Analytics & Zero-Trust Security', tone: 'purple' }
  ];


  const milestones = [
    {
      year: '2023',
      title: 'Industrial Engineering Heritage',
      text: 'PAYIVVA established turnkey infrastructure, MEP engineering, and industrial construction across Pune & Maharashtra.',
      icon: <Factory size={14} />,
      tone: 'cyan'
    },
    {
      year: '2024',
      title: 'Official OPC Incorporation',
      text: 'Incorporated as PAYIVVA TECHNOLOGIES (OPC) PRIVATE LIMITED with the Ministry of Corporate Affairs, expanding operational scale.',
      icon: <Building2 size={14} />,
      tone: 'emerald'
    },
    {
      year: '2025',
      title: 'Tech HQ & IT Department Launch',
      text: 'Established core tech headquarters at Handewadi, Pune, and launched the dedicated enterprise IT & Artificial Intelligence Department.',
      icon: <Globe size={14} />,
      tone: 'purple'
    },
    {
      year: '2026',
      title: 'Physical & Digital AI Convergence',
      text: 'A premier multidisciplinary partner delivering both turnkey physical infrastructure and sovereign AI software architectures.',
      icon: <Clock size={14} />,
      tone: 'cyan'
    }
  ];

  return (
    <div className="about-page-premium animate-fade-in">

      {/* 1. Ultra-Premium Hero Section */}
      <section className="about-hero-section-premium">
        <div className="about-hero-grid-premium">

          {/* Left Column: Corporate Identity & Mission */}
          <div className="about-hero-content-premium">
            <span className="premium-tag-glow">
              <Sparkles size={14} style={{ color: '#007cc3' }} /> IT & AI DEPARTMENT • PAYIVVA TECHNOLOGIES (OPC) PVT LTD
            </span>
            <h1 className="hero-main-title">
              Engineering Smart Software & AI from <span className="text-glow-indigo">Pune, India</span>
            </h1>
            <p className="hero-sub-text">
              Welcome to the official <strong>IT Department portal</strong> of <strong>PAYIVVA TECHNOLOGIES (OPC) PRIVATE LIMITED</strong>. While our parent firm is renowned across Maharashtra for premier turnkey infrastructure and industrial construction, this dedicated IT wing delivers high-velocity enterprise software architectures, machine learning engines, and sovereign Generative AI agent networks under one corporate banner.
            </p>
            <div className="about-hero-points">
              <div><BadgeCheck size={16} style={{ color: '#007cc3' }} /> Govt Registered OPC Pvt Ltd</div>
              <div><Building2 size={16} style={{ color: '#007cc3' }} /> Dual Non-IT & IT Capabilities</div>
              <div><MapPin size={16} style={{ color: '#007cc3' }} /> Handewadi Tech HQ, Pune</div>
            </div>
          </div>

          {/* Right Column: Corporate Verification Monitor */}
          <div className="about-hero-visual-premium">
            <div className="obsidian-glass tech-status-monitor">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot-red"></span>
                  <span className="dot-yellow"></span>
                  <span className="dot-green"></span>
                </div>
                <span className="terminal-title">CORPORATE VERIFICATION MATRIX</span>
              </div>
              <div className="terminal-body">
                <div className="stat-line">
                  <span className="stat-label">PARENT ENTITY</span>
                  <span className="stat-value text-glow-indigo">PAYIVVA TECHNOLOGIES (OPC) PVT LTD</span>
                </div>
                <div className="stat-line">
                  <span className="stat-label">DIRECTOR & FOUNDER</span>
                  <span className="stat-value text-glow-teal">SUDHAANSHU SRIVASTAVAA</span>
                </div>
                <div className="stat-line">
                  <span className="stat-label">ACTIVE DIVISIONS</span>
                  <span className="stat-value text-glow-indigo">1. NON-IT INFRASTRUCTURE • 2. IT & AI DEPT</span>
                </div>
                <div className="stat-line">
                  <span className="stat-label">HEADQUARTERS</span>
                  <span className="stat-value text-glow-teal">PUNE, MAHARASHTRA, INDIA</span>
                </div>
                <div className="stat-line">
                  <span className="stat-label">REGISTRATION STATUS</span>
                  <span className="stat-value text-glow-teal">VERIFIED • ACTIVE OPC PVT LTD</span>
                </div>
                <div className="stat-bar-holder">
                  <span className="stat-label">ENGINEERING DISCIPLINE & COMPLIANCE</span>
                  <div className="stat-bar-fill-glow" style={{ width: '100%' }}>100% ISO ALIGNED & SECURE</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. DUAL-DIVISION SHOWCASE: ONE COMPANY, TWO POWERFUL DIVISIONS */}
      <section className="about-dual-division-section">
        <div className="about-container-premium">
          <div className="about-section-head text-center">
            <span className="section-tag-modern-light">ONE COMPANY • DUAL CAPABILITY</span>
            <h2 className="section-title-modern-light">Connecting Infrastructure Engineering with Digital Intelligence</h2>
            <p className="section-desc">
              PAYIVVA TECHNOLOGIES (OPC) PRIVATE LIMITED operates across two complementary divisions under one corporate vision: infrastructure engineering for physical environments and a dedicated IT department for software, AI, cloud, and digital transformation.
            </p>
          </div>

          <div className="dual-cards-grid">

            {/* Non-IT infrastructure capability card */}
            <div className="dual-division-card card-non-it">
              <div className="division-badge-row">
                <span className="division-badge badge-non-it">
                  <Factory size={14} /> NON-IT INFRASTRUCTURE DIVISION
                </span>
                <span className="division-status-indicator">
                  <Building2 size={14} style={{ color: '#007cc3' }} /> Established Division
                </span>
              </div>

              <div className="division-header">
                <div className="division-icon-box icon-box-non-it">
                  <HardHat size={28} />
                </div>
                <div className="division-heading-text">
                  <h3>Infrastructure, Safety & Built Environment</h3>
                  <span className="division-subheading">Industrial Construction • MEP • Fire Safety • Security Systems</span>
                </div>
              </div>

              <p className="division-lead-text">
                Our established Non-IT division delivers physical infrastructure and facility solutions for industrial and commercial environments across Maharashtra.
              </p>

              <div className="division-services-block">
                <span className="division-services-title">Core Infrastructure Services</span>
                <div className="division-service-item"><span className="bullet-dot"></span><span>Turnkey Industrial Construction & Pre-Engineered Buildings (PEB)</span></div>
                <div className="division-service-item"><span className="bullet-dot"></span><span>MEP (Mechanical, Electrical, Plumbing) Solutions</span></div>
                <div className="division-service-item"><span className="bullet-dot"></span><span>Certified Fire Safety, Detection & Hydrant Protection Systems</span></div>
                <div className="division-service-item"><span className="bullet-dot"></span><span>Enterprise CCTV, Access Control & Surveillance Networks</span></div>
                <div className="division-service-item"><span className="bullet-dot"></span><span>Corporate Interiors & Executive Workspace Architecture</span></div>
              </div>

              <div className="division-links-wrapper">
                <a href="https://www.payivvatechnologies.in/" target="_blank" rel="noopener noreferrer" className="division-primary-btn btn-non-it-portal">
                  Visit Official Infrastructure Website <ExternalLink size={16} />
                </a>
                <div className="division-social-row">
                  <span className="division-social-label">Follow Infrastructure Division:</span>
                  <a href="https://www.instagram.com/payivva_technologies_opcpvtltd/" target="_blank" rel="noopener noreferrer" className="division-social-link social-link-instagram">
                    Instagram
                  </a>
                  <a href="https://www.facebook.com/payivvatechnologiespvtltd/" target="_blank" rel="noopener noreferrer" className="division-social-link social-link-facebook">
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* IT and AI capability card */}
            <div className="dual-division-card card-it">
              <div className="division-badge-row">
                <span className="division-badge badge-it">
                  <Cpu size={14} /> AI AND SOFTWARE ENGINEERING
                </span>
                <span className="division-status-indicator">
                  <Sparkles size={14} style={{ color: '#007cc3' }} /> Current Website Portal
                </span>
              </div>

              <div className="division-header">
                <div className="division-icon-box icon-box-it">
                  <Code2 size={28} />
                </div>
                <div className="division-heading-text">
                  <h3>Full-Stack IT, Software & AI Department</h3>
                  <span className="division-subheading">Web & App Dev • Custom Software • Digital Marketing • Generative AI & ML</span>
                </div>
              </div>

              <p className="division-lead-text">
                We help modern enterprises improve every digital touchpoint through high-speed web platforms, mobile apps, custom software systems, data-driven marketing, and autonomous Generative AI workflows.
              </p>

              <div className="division-services-block">
                <span className="division-services-title">Full Spectrum of IT & Digital Services</span>
                <div className="division-service-item">
                  <span className="bullet-dot"></span>
                  <span><strong>Website Development:</strong> Ultra-fast, responsive web platforms (React, Next.js, Vite) with 99+ Lighthouse performance & technical SEO.</span>
                </div>
                <div className="division-service-item">
                  <span className="bullet-dot"></span>
                  <span><strong>Mobile App Development:</strong> Fluid native iOS, Android & cross-platform Flutter mobile applications.</span>
                </div>
                <div className="division-service-item">
                  <span className="bullet-dot"></span>
                  <span><strong>Custom Software Development:</strong> Scalable enterprise architectures, microservices, cloud systems & secure API layers.</span>
                </div>
                <div className="division-service-item">
                  <span className="bullet-dot"></span>
                  <span><strong>Digital Marketing & Growth:</strong> Performance marketing, Google Ads, technical SEO audits, corporate branding & high-intent lead generation.</span>
                </div>
                <div className="division-service-item">
                  <span className="bullet-dot"></span>
                  <span><strong>Generative AI & Autonomous LLMs:</strong> Secure private RAG networks, fine-tuned domain LLMs (LoRA/QLoRA) & automated agent workflows.</span>
                </div>
                <div className="division-service-item">
                  <span className="bullet-dot"></span>
                  <span><strong>Machine Learning & Computer Vision:</strong> Predictive data analytics, intelligent OCR pipelines & sub-15ms edge inference.</span>
                </div>
              </div>

              <div className="division-links-wrapper">
                <Link to="/services" className="division-primary-btn btn-it-portal">
                  Explore All IT & AI Services <ArrowRight size={16} />
                </Link>

                <div className="division-social-row">
                  <span className="division-social-label">Need Web, Marketing or AI?</span>
                  <Link to="/contact" className="division-social-link" style={{ background: '#f0f9ff', color: '#007cc3', border: '1px solid #bae6fd' }}>
                    <Mail size={14} /> Talk to IT Specialists
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. ABOUT DIRECTOR: EXECUTIVE KEYNOTE & LEADERSHIP */}
      <section className="about-director-section">
        <div className="about-container-premium">
          <div className="about-section-head text-center">
            <span className="section-tag-modern-light">LEADERSHIP & VISION</span>
            <h2 className="section-title-modern-light">Director's Keynote & Strategic Vision</h2>
            <p className="section-desc">
              Unifying physical infrastructure engineering with full-spectrum software development, digital marketing, and autonomous AI under one visionary leadership.
            </p>
          </div>

          <div className="director-spotlight-card">

            {/* Director Profile Column */}
            <div className="director-profile-col">
              <div className="director-avatar-box">
                <span className="director-monogram">SS</span>
              </div>
              <h3 className="director-name">Sudhaanshu Srivastavaa</h3>
              <span className="director-role">Director & Founder</span>
              <span className="director-company">PAYIVVA TECHNOLOGIES (OPC) PVT LTD</span>

              <div className="director-dual-scope-badge">
                <UserCheck size={14} /> Director
              </div>

              <div className="director-profile-divider"></div>

              <a
                href="https://www.linkedin.com/in/sudhaanshu-srivastavaa-a5b16b48/"
                target="_blank"
                rel="noopener noreferrer"
                className="director-linkedin-btn"
              >
                <LinkedInIcon size={18} /> Connect on LinkedIn <ExternalLink size={14} />
              </a>
            </div>

            {/* Director Vision & Quote Column */}
            <div className="director-quote-col">
              <div className="director-quote-header">
                <Quote size={28} className="quote-decor-icon" />
                <span className="director-quote-tag">DIRECTOR'S STATEMENT • THE EXPANSION TO IT & AI</span>
              </div>

              <blockquote className="director-quote-text">
                "Physical infrastructure builds the concrete foundation, industrial plants, and operational home of an enterprise, but modern digital platforms, custom software, digital marketing reach, and <strong>Artificial Intelligence provide its cognitive mind, market reach, and limitless scale</strong>. Having successfully delivered turnkey industrial construction, MEP, fire safety, and corporate spaces across Maharashtra, launching our dedicated IT Department was our natural, high-impact evolution.
                <br /><br />
                Today, enterprises no longer want fragmented vendors for their physical and digital needs. They need an integrated partner that can build fast-loading <strong>websites, intuitive mobile apps, custom business software, and targeted digital marketing campaigns, while deploying private, sovereign AI agent networks</strong> that automate complex operations. By uniting the robust discipline of industrial engineering with cutting-edge digital and AI capabilities, Payivva provides businesses with single-source accountability. We don't just build modern physical spaces; we engineer the complete digital ecosystems that power and scale them."
              </blockquote>

              <div className="director-vision-points">
                <div className="director-point-item">
                  <span className="director-point-title">Unified Governance</span>
                  <span className="director-point-desc">Single-source leadership ensuring non-IT and IT operations align flawlessly.</span>
                </div>
                <div className="director-point-item">
                  <span className="director-point-title">Complete Digital Engine</span>
                  <span className="director-point-desc">From web & mobile development and digital marketing to custom software and private AI.</span>
                </div>
                <div className="director-point-item">
                  <span className="director-point-title">Engineering Discipline</span>
                  <span className="director-point-desc">The same rigorous standards from industrial PEB construction to production-grade software code.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Official Corporate Registered Address Showcase */}
      <section className="about-address-section-premium">
        <div className="about-container-premium">
          <div className="address-showcase-card">

            <div className="address-info-col">
              <span className="section-tag-modern-light">CORPORATE HEADQUARTERS</span>
              <h2 className="address-title">Registered Office Address</h2>
              <p className="address-sub">
                Official registered office address of <strong>PAYIVVA TECHNOLOGIES (OPC) PRIVATE LIMITED</strong>:
              </p>

              <div className="address-details-box">
                <div className="address-detail-item">
                  <Building2 size={20} className="addr-icon" />
                  <div>
                    <span className="addr-label">Legal Corporate Entity</span>
                    <span className="addr-val">PAYIVVA TECHNOLOGIES (OPC) PRIVATE LIMITED</span>
                  </div>
                </div>

                <div className="address-detail-item">
                  <MapPin size={20} className="addr-icon" />
                  <div>
                    <span className="addr-label">Registered Office Address</span>
                    <span className="addr-val">
                      House No. 105, Green Park - Venkatesh Properties,<br />
                      Autadwadi Handewadi, Haveli, Pune, Maharashtra — 411028, India
                    </span>
                  </div>
                </div>

                <div className="address-contact-row">
                  <div className="address-contact-item">
                    <Phone size={16} /> <a href="tel:+918380009994">+91 8380009994</a> / <a href="tel:+918380009995">+91 8380009995</a>
                  </div>
                  <div className="address-contact-item">
                    <Mail size={16} /> <a href="mailto:info@payivvatechnologies.com">info@payivvatechnologies.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="address-map-col">
              <div className="map-badge-card">
                <div className="map-badge-header">
                  <span className="map-live-dot"></span>
                  <span className="map-badge-title">PUNE HQ TECH CORRIDOR</span>
                </div>
                <p className="map-badge-text">
                  Located in Pune, Maharashtra’s premier technology hub, driving innovative AI and software engineering globally.
                </p>
                <div className="map-stats-chips">
                  <span className="chip"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Registered OPC Entity</span>
                  <span className="chip"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Pune, Maharashtra 411028</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Handewadi+Pune+Maharashtra+411028"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary map-directions-btn"
                >
                  Get Directions on Maps <ArrowRight size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Company Snapshot Section */}
      <section className="about-snapshot-section-premium">
        <div className="about-container-premium">
          <div className="about-snapshot-grid">
            <div className="obsidian-card-premium snapshot-card">
              <div className="snapshot-icon"><BadgeCheck size={20} /></div>
              <h3>Dual-Front Engineering</h3>
              <p>We deliver turnkey physical industrial infrastructure & MEP (Non-IT) alongside custom enterprise software, machine learning engines, and sovereign AI agent networks (IT Department).</p>
            </div>
            <div className="obsidian-card-premium snapshot-card">
              <div className="snapshot-icon"><Building2 size={20} /></div>
              <h3>Unified Corporate Entity</h3>
              <p>One parent corporate entity — <strong>PAYIVVA TECHNOLOGIES (OPC) PRIVATE LIMITED</strong>, registered with the Ministry of Corporate Affairs, Pune, Maharashtra.</p>
            </div>
            <div className="obsidian-card-premium snapshot-card">
              <div className="snapshot-icon"><Shield size={20} /></div>
              <h3>Cross-Discipline Rigor</h3>
              <p>Uncompromising execution from physical PEB structural standards to sub-15ms AI inference pipelines, with zero vendor lock-in and single-source accountability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Guiding Pillars */}
      <section className="about-pillars-section-premium">
        <div className="about-container-premium">
          <div className="about-section-head text-center">
            <span className="section-tag-modern-light">OUR GUIDING PILLARS</span>
            <h2 className="section-title-modern-light">The Principles Behind The Brand</h2>
            <p className="section-desc">We focus on clarity, engineering quality, and verifiable outcomes that matter to real businesses.</p>
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

      {/* 5. Core Capabilities */}
      <section className="tech-stack-container-premium">
        <div className="about-container-premium">
          <div className="about-section-head text-center">
            <span className="section-tag-modern-light">CAPABILITIES</span>
            <h2 className="section-title-modern-light">What Powers Our Delivery</h2>
            <p className="section-desc">A modern technology stack for enterprise execution, from web interfaces to deep AI automation.</p>
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

      {/* 6. Company Chronology */}
      <section className="about-timeline-section-premium">
        <div className="about-container-premium">
          <div className="about-section-head text-center">
            <span className="section-tag-modern-light">CHRONOLOGY</span>
            <h2 className="section-title-modern-light">Milestones of Scale</h2>
            <p className="section-desc">A view of how PAYIVVA evolved into a premier enterprise systems partner.</p>
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
        </div>
      </section>

      {/* 7. Enterprise Leadership & Visionary Ethos Showcase */}
      <section className="about-leadership-section-premium">
        <div className="about-container-premium">
          <div className="about-section-head text-center">
            <span className="section-tag-modern-light">LEADERSHIP & GOVERNANCE</span>
            <h2 className="section-title-modern-light">Executive Vision & Engineering Ethos</h2>
            <p className="section-desc">Pioneering autonomous AI systems and cloud engineering with uncompromised integrity.</p>
          </div>

          <div className="leadership-grid-premium">
            <div className="obsidian-card-premium leadership-card">
              <div className="leadership-header">
                <div className="leadership-icon-box"><Building2 size={24} /></div>
                <div>
                  <h3 className="leadership-role">Corporate Leadership & Strategy</h3>
                  <span className="leadership-sub">PAYIVVA TECHNOLOGIES (OPC) PVT LTD</span>
                </div>
              </div>
              <p className="leadership-desc">
                Directing global client engagements, corporate governance, and legal compliance under the Ministry of Corporate Affairs, Government of India. Committed to building permanent technology value and verifiable client ROI.
              </p>
              <div className="leadership-tags">
                <span>Enterprise Strategy</span>
                <span>Corporate Governance</span>
                <span>ISO Compliance</span>
              </div>
            </div>

            <div className="obsidian-card-premium leadership-card">
              <div className="leadership-header">
                <div className="leadership-icon-box"><Cpu size={24} /></div>
                <div>
                  <h3 className="leadership-role">AI Research & RAG Architecture</h3>
                  <span className="leadership-sub">Pune Systems & Intelligence Lab</span>
                </div>
              </div>
              <p className="leadership-desc">
                Spearheading parameter-efficient LLM fine-tuning (LoRA/QLoRA), Pinecone vector search, and edge computing architectures that achieve sub-15ms real-time inference on industrial assembly lines.
              </p>
              <div className="leadership-tags">
                <span>Autonomous Agents</span>
                <span>Private RAG</span>
                <span>Edge Inference</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Global Impact & Compliance Metrics (Light Luxury Theme) */}
      <section className="about-impact-section-premium">
        <div className="about-container-premium">
          <div className="impact-grid-card">

            <div className="impact-header-row text-center">
              <span className="section-tag-modern-light">MEASURABLE IMPACT</span>
              <h2 className="section-title-modern-light">Enterprise Benchmarks & Compliance</h2>
            </div>

            <div className="impact-metrics-row">
              <div className="impact-metric-item">
                <span className="impact-val">50+</span>
                <span className="impact-lbl">Enterprise Projects Deployed</span>
              </div>
              <div className="impact-divider"></div>
              <div className="impact-metric-item">
                <span className="impact-val">99.4%</span>
                <span className="impact-lbl">ML Inference Accuracy Rate</span>
              </div>
              <div className="impact-divider"></div>
              <div className="impact-metric-item">
                <span className="impact-val">12ms</span>
                <span className="impact-lbl">Sub-Second Edge Latency</span>
              </div>
              <div className="impact-divider"></div>
              <div className="impact-metric-item">
                <span className="impact-val">100%</span>
                <span className="impact-lbl">Private Sovereign RAG Security</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Corporate Mission & Vision 2030 Showcase */}
      <section className="about-mission-section-premium">
        <div className="about-container-premium">
          <div className="about-section-head text-center">
            <span className="section-tag-modern-light">PURPOSE & HORIZONS</span>
            <h2 className="section-title-modern-light">Corporate Mission & Vision 2030</h2>
            <p className="section-desc">Building sustainable technology infrastructure for the next decade of enterprise intelligence.</p>
          </div>

          <div className="mission-grid-premium">
            <div className="mission-card">
              <div className="mission-icon-box"><Target size={24} /></div>
              <h3 className="mission-title">Our Corporate Mission</h3>
              <p className="mission-text">
                To empower global enterprise leaders by engineering sovereign AI agent networks, isolated RAG architectures, and custom cloud platforms that guarantee zero data leakage while driving verifiable 3-5x operational ROI.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-icon-box"><Sparkles size={24} /></div>
              <h3 className="mission-title">Vision 2030</h3>
              <p className="mission-text">
                To establish Pune, India as a globally recognized epicenter for Agentic AI innovation, scaling PAYIVVA TECHNOLOGIES (OPC) PRIVATE LIMITED into a premier technology partner across 20+ countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Why Enterprise Leaders Partner With PAYIVVA */}
      <section className="about-reasons-section-premium">
        <div className="about-container-premium">
          <div className="about-section-head text-center">
            <span className="section-tag-modern-light">THE PAYIVVA ADVANTAGE</span>
            <h2 className="section-title-modern-light">Why Global Brands Partner With Us</h2>
            <p className="section-desc">Four core commitments that define our client delivery standards.</p>
          </div>

          <div className="reasons-grid-premium">
            <div className="reason-card">
              <div className="reason-num">01</div>
              <h4 className="reason-title">100% IP & Code Ownership</h4>
              <p className="reason-desc">Zero vendor lock-in. You retain full intellectual property rights, database schemas, and source code ownership for all delivered systems.</p>
            </div>

            <div className="reason-card">
              <div className="reason-num">02</div>
              <h4 className="reason-title">Zero Data Leakage RAG</h4>
              <p className="reason-desc">We deploy isolated local vector databases and private model sandboxes. Your corporate data never trains public LLMs.</p>
            </div>

            <div className="reason-card">
              <div className="reason-num">03</div>
              <h4 className="reason-title">Sub-15ms Real-Time Inference</h4>
              <p className="reason-desc">We optimize deep learning models for edge gateways and local GPU servers, delivering sub-second responses for factory & fintech operations.</p>
            </div>

            <div className="reason-card">
              <div className="reason-num">04</div>
              <h4 className="reason-title">14-Week Rapid Sprints</h4>
              <p className="reason-desc">Product-first agile methodology ensures rapid deployment from initial architecture audit to production rollout within 14 weeks.</p>
            </div>
          </div>

          {/* CTA Row */}
          <div className="about-cta-row">
            <Link to="/contact" className="btn btn-primary about-cta-btn">
              Start an Enterprise Engagement <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;

