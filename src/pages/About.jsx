import { Shield, Code2, Cpu, Database, BarChart, Layers, Globe, Zap, Clock, ArrowRight, Sparkles, Users, Target, BadgeCheck, MapPin, Building2, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './styles/About.css';

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
    { icon: <Code2 size={22} />, label: 'React & Next.js Platforms', tone: 'cyan' },
    { icon: <Cpu size={22} />, label: 'Node.js & Python API Core', tone: 'emerald' },
    { icon: <Sparkles size={22} />, label: 'Generative AI & RAG', tone: 'purple' },
    { icon: <Database size={22} />, label: 'Vector DBs (Pinecone/Milvus)', tone: 'cyan' },
    { icon: <BarChart size={22} />, label: 'Predictive ML Analytics', tone: 'emerald' },
    { icon: <Shield size={22} />, label: 'Zero-Trust Cybersecurity', tone: 'purple' }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Company Foundation in Pune',
      text: 'PAYIVVA began in Pune with a core focus on high-performance web engineering and practical machine learning solutions.',
      icon: <Zap size={14} />,
      tone: 'cyan'
    },
    {
      year: '2024',
      title: 'Official OPC Incorporation',
      text: 'Incorporated as PAYIVVA TECHNOLOGIES (OPC) PRIVATE LIMITED, expanding into enterprise AI and multi-agent RAG networks.',
      icon: <Building2 size={14} />,
      tone: 'emerald'
    },
    {
      year: '2025',
      title: 'Handewadi Tech HQ Facility',
      text: 'Established core operations at Green Park - Venkatesh Properties, Autadwadi Handewadi, inside Pune’s tech corridor.',
      icon: <Globe size={14} />,
      tone: 'purple'
    },
    {
      year: '2026',
      title: 'Enterprise Global Scale',
      text: 'A trusted systems partner for Fortune 500 & high-growth brands in AI consulting, custom software, and digital engineering.',
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
              <Sparkles size={14} style={{ color: '#007cc3' }} /> DIVISION OF PAYIVVA TECHNOLOGIES (OPC) PVT LTD
            </span>
            <h1 className="hero-main-title">
              Pioneering Enterprise AI & Digital Engineering from <span className="text-glow-indigo">Pune, India</span>
            </h1>
            <p className="hero-sub-text">
              <strong>PAYIVVA</strong> is the flagship enterprise technology division of <strong>PAYIVVA TECHNOLOGIES (OPC) PRIVATE LIMITED</strong>, an officially incorporated technology firm based in Pune, Maharashtra. We engineer high-performance software architectures, machine learning systems, and sovereign Generative AI agent networks.
            </p>
            <div className="about-hero-points">
              <div><BadgeCheck size={16} style={{ color: '#007cc3' }} /> Govt Registered OPC Pvt Ltd</div>
              <div><MapPin size={16} style={{ color: '#007cc3' }} /> Handewadi Tech HQ, Pune</div>
              <div><Shield size={16} style={{ color: '#007cc3' }} /> Zero-Trust Data Isolation</div>
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
                  <span className="stat-label">LEGAL NAME</span>
                  <span className="stat-value text-glow-indigo">PAYIVVA TECHNOLOGIES (OPC) PVT LTD</span>
                </div>
                <div className="stat-line">
                  <span className="stat-label">ENTITY TYPE</span>
                  <span className="stat-value text-glow-teal">OPC PRIVATE LIMITED</span>
                </div>
                <div className="stat-line">
                  <span className="stat-label">HEADQUARTERS</span>
                  <span className="stat-value text-glow-indigo">PUNE, MAHARASHTRA, INDIA</span>
                </div>
                <div className="stat-line">
                  <span className="stat-label">REGISTERED STATUS</span>
                  <span className="stat-value text-glow-teal">VERIFIED • ACTIVE</span>
                </div>
                <div className="stat-bar-holder">
                  <span className="stat-label">SYSTEM COMPLIANCE & SECURITY</span>
                  <div className="stat-bar-fill-glow" style={{ width: '100%' }}>100% ISO ALIGNED</div>
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

      {/* 3. Company Snapshot Section */}
      <section className="about-snapshot-section-premium">
        <div className="about-container-premium">
          <div className="about-snapshot-grid">
            <div className="obsidian-card-premium snapshot-card">
              <div className="snapshot-icon"><BadgeCheck size={20} /></div>
              <h3>What We Do</h3>
              <p>We engineer custom enterprise software systems, Machine Learning inference engines, Generative AI agent networks, and high-performance digital platforms.</p>
            </div>
            <div className="obsidian-card-premium snapshot-card">
              <div className="snapshot-icon"><Building2 size={20} /></div>
              <h3>Corporate Entity</h3>
              <p>A flagship technology division of <strong>PAYIVVA TECHNOLOGIES (OPC) PRIVATE LIMITED</strong>, registered under the Ministry of Corporate Affairs, Pune.</p>
            </div>
            <div className="obsidian-card-premium snapshot-card">
              <div className="snapshot-icon"><Shield size={20} /></div>
              <h3>Engineering Discipline</h3>
              <p>Product-first mindset, lean architecture, strict zero-trust data security, and verifiable ROI on every technology deployment.</p>
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

