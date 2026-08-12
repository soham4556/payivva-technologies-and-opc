import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu, X, ArrowRight, ChevronDown, ChevronRight, Sparkles, Code2, Cloud, Database, Factory,
  Stethoscope, Building2, ShoppingBag, Truck, ExternalLink, Globe, Phone, Mail,
  Layers, BookOpen, ShieldCheck, Cpu
} from 'lucide-react';
import industriesData from '../data/industries';
import SearchModal from './SearchModal';
import './styles/Navbar.css';

// Services Categories for Mega Menu
const servicesCategories = [
  {
    id: 'ai-topaz',
    name: 'AI & Intelligent Systems',
    tagline: 'Enterprise Machine Intelligence & GenAI',
    icon: Sparkles,
    services: [
      {
        title: 'AI Consulting & Strategy',
        desc: 'Enterprise AI system roadmapping & governance',
        path: '/services/ai-consulting-strategy',
        badge: 'Popular',
      },
      {
        title: 'Machine Learning Solutions',
        desc: 'Predictive analytics & ML inference engines',
        path: '/services/machine-learning-solutions',
      },
      {
        title: 'Computer Vision & NLP',
        desc: 'Optical defect detection, OCR & semantic analysis',
        path: '/services/computer-vision-nlp',
      },
      {
        title: 'Generative AI & LLM Agents',
        desc: 'Custom GPT models & multi-agent frameworks',
        path: '/services/generative-ai-llm',
        badge: 'Featured',
      },
    ],
  },
  {
    id: 'digital-engineering',
    name: 'Digital Engineering',
    tagline: 'Custom Software & Modern Web/Mobile Apps',
    icon: Code2,
    services: [
      {
        title: 'Software Development',
        desc: 'Custom enterprise software & cloud backend systems',
        path: '/services/software-development',
      },
      {
        title: 'App Development',
        desc: 'Native iOS, Android & cross-platform apps',
        path: '/services/app-development',
      },
      {
        title: 'Website Development',
        desc: 'High-performance React & modern web platforms',
        path: '/services/website-development',
        badge: 'Popular',
      },
      {
        title: 'Digital Marketing',
        desc: 'SEO strategy & brand authority growth',
        path: '/services/digital-marketing',
      },
    ],
  },
];

// Industry Categories (Matching exact slugs in src/data/industries.js)
const industryCategories = [
  {
    id: 'ind-manufacturing',
    title: 'Manufacturing & Industrial IoT',
    slug: 'manufacturing-industrial-iot',
    desc: 'Predictive maintenance, computer vision inspection & smart factory',
    icon: Factory,
    highlight: '99.4% Defect Accuracy',
  },
  {
    id: 'ind-healthcare',
    title: 'Healthcare & Biotech',
    slug: 'healthcare-biotech',
    desc: 'HIPAA-compliant diagnostic systems & medical imaging AI',
    icon: Stethoscope,
    highlight: 'Real-Time Diagnostics',
  },
  {
    id: 'ind-fintech',
    title: 'Finance & FinTech',
    slug: 'finance-fintech',
    desc: 'Fraud detection algorithms & algorithmic trading engines',
    icon: Building2,
    highlight: 'Zero-Trust Security',
  },
  {
    id: 'ind-retail',
    title: 'E-commerce & Retail',
    slug: 'ecommerce-retail',
    desc: 'Personalized AI recommendation engines & inventory prediction',
    icon: ShoppingBag,
    highlight: '35% Conversion Lift',
  },
  {
    id: 'ind-logistics',
    title: 'Logistics & Supply Chain',
    slug: 'logistics-supply-chain',
    desc: 'Autonomous fleet route optimization & warehouse robotics',
    icon: Truck,
    highlight: '40% Route Efficiency',
  },
  {
    id: 'ind-cybersecurity',
    title: 'Cybersecurity & Cloud',
    slug: 'cybersecurity-cloud-systems',
    desc: 'Zero-trust architecture, threat intelligence & cloud security',
    icon: ShieldCheck,
    highlight: 'Enterprise Grade',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null); // 'services' | 'industries' | null
  const [activeServiceTab, setActiveServiceTab] = useState(servicesCategories[0].id);
  const [activeIndustryTab, setActiveIndustryTab] = useState(industryCategories[0].id);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const closeTimeoutRef = useRef(null);
  const location = useLocation();

  // Smooth hover handlers with 250ms grace period to prevent accidental flickering/closing
  const handleMouseEnter = (menuName) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMegaMenu(menuName);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 250);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setIsOpen(false);
      setActiveMegaMenu(null);
    }, 0);
    return () => window.clearTimeout(id);
  }, [location]);

  // Global shortcut Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentServiceCategory = servicesCategories.find(c => c.id === activeServiceTab) || servicesCategories[0];
  const currentIndustryItem = industryCategories.find(i => i.id === activeIndustryTab) || industryCategories[0];

  return (
    <>
      <header className={`infosys-navbar-wrapper ${scrolled ? 'scrolled' : ''}`} role="banner">
        <div className="infosys-navbar-container">

          {/* LEFT SECTION: Brand Logo */}
          <div className="left-brand-group">
            <Link to="/" className="nav-logo-link" onClick={() => setActiveMegaMenu(null)}>
              <img src="/logo.png" alt="PAYIVVA Technologies Logo" className="nav-logo-img" />
            </Link>
          </div>

          {/* CENTER SECTION: Translucent Floating Capsule Pill Navigation Bar */}
          <nav className="center-nav-pill" aria-label="Primary Navigation">
            <NavLink
              to="/"
              className={({ isActive }) => `pill-nav-link ${isActive ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter(null)}
            >
              Navigate your next
            </NavLink>

            {/* Services Dropdown Trigger */}
            <div
              className="pill-dropdown-wrapper"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`pill-nav-link pill-dropdown-btn ${activeMegaMenu === 'services' ? 'active' : ''}`}
                onClick={() => setActiveMegaMenu(activeMegaMenu === 'services' ? null : 'services')}
              >
                Services & Solutions <ChevronDown size={14} className="pill-arrow" />
              </button>
            </div>

            {/* Industries Dropdown Trigger */}
            <div
              className="pill-dropdown-wrapper"
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`pill-nav-link pill-dropdown-btn ${activeMegaMenu === 'industries' ? 'active' : ''}`}
                onClick={() => setActiveMegaMenu(activeMegaMenu === 'industries' ? null : 'industries')}
              >
                Industries <ChevronDown size={14} className="pill-arrow" />
              </button>
            </div>

            <NavLink
              to="/blog"
              className={({ isActive }) => `pill-nav-link ${isActive ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter(null)}
            >
              Tech Insights
            </NavLink>

            <NavLink
              to="/careers"
              className={({ isActive }) => `pill-nav-link ${isActive ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter(null)}
            >
              Careers
            </NavLink>
          </nav>

          {/* RIGHT SECTION: Circular Menu Toggle */}
          <div className="right-action-group">
            <button
              className="circular-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Full Menu"
              title="Menu"
            >
              {isOpen ? <X size={20} color="#0f172a" /> : <Menu size={20} color="#0f172a" />}
            </button>
          </div>

        </div>

        {/* TOP-LEVEL GLOBAL MEGA DROPDOWN PANELS (Unbound to inner wrappers to ensure 100% full-width alignment) */}
        {/* Services Mega Dropdown Panel */}
        <div
          className={`mega-menu-overlay ${activeMegaMenu === 'services' ? 'show' : ''}`}
          onMouseEnter={() => handleMouseEnter('services')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mega-menu-content-box">
            <div className="mega-menu-grid">

              {/* Category Sidebar */}
              <div className="mega-tabs-sidebar">
                <span className="mega-menu-heading">Service Categories</span>
                {servicesCategories.map((cat) => {
                  const IconComp = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      className={`mega-tab-btn ${activeServiceTab === cat.id ? 'active' : ''}`}
                      onMouseEnter={() => setActiveServiceTab(cat.id)}
                      onClick={() => setActiveServiceTab(cat.id)}
                    >
                      <div className="mega-tab-icon">
                        <IconComp size={16} />
                      </div>
                      <div className="mega-tab-text">
                        <span className="mega-tab-name">{cat.name}</span>
                        <span className="mega-tab-sub">{cat.tagline}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Category Services Grid */}
              <div className="mega-services-grid-wrapper">
                <div className="mega-category-header">
                  <h3>{currentServiceCategory.name}</h3>
                  <p>{currentServiceCategory.tagline}</p>
                </div>

                <div className="mega-services-cards">
                  {currentServiceCategory.services.map((srv, idx) => (
                    <Link
                      key={idx}
                      to={srv.path}
                      className="mega-service-card"
                      onClick={() => setActiveMegaMenu(null)}
                    >
                      <div className="mega-service-title-row">
                        <span className="mega-service-title">{srv.title}</span>
                        {srv.badge && <span className="mega-badge">{srv.badge}</span>}
                      </div>
                      <p className="mega-service-desc">{srv.desc}</p>
                      <div className="mega-service-link-row">
                        <span>Explore Architecture</span>
                        <ArrowRight size={13} className="mega-arrow" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Spotlight Card */}
              <div className="mega-spotlight-card">
                <span className="spotlight-badge"><Sparkles size={12} /> GenAI Studio</span>
                <h4 className="spotlight-title">PAYIVVA Agentic AI Platform</h4>
                <p className="spotlight-desc">
                  Deploy autonomous AI agents, enterprise LLM knowledge bases, and workflow automation.
                </p>
                <div className="spotlight-image-box">
                  <img src="/project_img/overview_manufacturing.png" alt="GenAI Studio" />
                </div>
                <Link to="/services/generative-ai-llm" className="btn btn-primary spotlight-btn" onClick={() => setActiveMegaMenu(null)}>
                  Explore Agentic AI <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Industries Mega Dropdown Panel */}
        <div
          className={`mega-menu-overlay ${activeMegaMenu === 'industries' ? 'show' : ''}`}
          onMouseEnter={() => handleMouseEnter('industries')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mega-menu-content-box">
            <div className="mega-menu-grid">

              <div className="mega-tabs-sidebar">
                <span className="mega-menu-heading">Target Sectors</span>
                {industryCategories.map((ind) => {
                  const IconComp = ind.icon;
                  return (
                    <button
                      key={ind.id}
                      className={`mega-tab-btn ${activeIndustryTab === ind.id ? 'active' : ''}`}
                      onMouseEnter={() => setActiveIndustryTab(ind.id)}
                      onClick={() => setActiveIndustryTab(ind.id)}
                    >
                      <div className="mega-tab-icon">
                        <IconComp size={16} />
                      </div>
                      <div className="mega-tab-text">
                        <span className="mega-tab-name">{ind.title}</span>
                        <span className="mega-tab-sub">{ind.highlight}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mega-industry-detail-panel">
                <div className="industry-panel-header">
                  <span className="mega-badge">{currentIndustryItem.highlight}</span>
                  <h3>{currentIndustryItem.title}</h3>
                  <p>{currentIndustryItem.desc}</p>
                </div>

                <div className="industry-metrics-row">
                  <div className="metric-box">
                    <span className="metric-val">99.4%</span>
                    <span className="metric-lbl">Precision SLA</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-val">&lt; 15ms</span>
                    <span className="metric-lbl">Edge Latency</span>
                  </div>
                  <div className="metric-box">
                    <span className="metric-val">24/7</span>
                    <span className="metric-lbl">Zero Downtime</span>
                  </div>
                </div>

                <div className="industry-panel-actions">
                  <Link
                    to={`/industries/${currentIndustryItem.slug}`}
                    className="btn btn-primary"
                    onClick={() => setActiveMegaMenu(null)}
                  >
                    Explore Industry Solution <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              <div className="mega-spotlight-card">
                <span className="spotlight-badge"><Factory size={12} /> Industry 4.0</span>
                <h4 className="spotlight-title">Smart Factory & Industrial IoT</h4>
                <p className="spotlight-desc">
                  Bridge factory floor sensors with real-time cloud predictive analytics engines.
                </p>
                <div className="spotlight-image-box">
                  <img src="/project_img/manufacturing.png" alt="Manufacturing Industry" />
                </div>
                <Link to="/industries/manufacturing-industrial-iot" className="spotlight-link" onClick={() => setActiveMegaMenu(null)}>
                  Read Manufacturing Blueprint <ExternalLink size={13} />
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* ULTRA-PREMIUM FULL OVERLAY MENU DRAWER (Infosys Light Luxury Enterprise Hub) */}
        <div className={`full-menu-drawer ${isOpen ? 'open' : ''}`} aria-label="Full Navigation Drawer">
          <div className="bg-light-ambient-glow"></div>

          {/* Header Bar inside Drawer */}
          <div className="full-drawer-header">
            <div className="drawer-header-left">
              <img src="/logo.png" alt="PAYIVVA Logo" className="drawer-logo-img" />
              <div className="drawer-brand-tag">
                <span className="drawer-brand-name">PAYIVVA</span>
                <span className="drawer-brand-sub">ENTERPRISE HUB</span>
              </div>
            </div>

            <button className="drawer-close-btn" onClick={() => setIsOpen(false)}>
              <X size={18} /> <span>Close Menu</span>
            </button>
          </div>

          {/* Drawer Body Container */}
          <div className="full-drawer-content">
            <div className="drawer-grid">
              
              {/* Column 1: Company Overview Spotlight Card */}
              <div className="drawer-col company-hero-col">
                <span className="drawer-col-heading">Overview</span>
                <div className="drawer-company-card">
                  <span className="hero-card-badge"><Sparkles size={12} /> Applied AI Leader</span>
                  <h4>Pioneering Enterprise Intelligence</h4>
                  <p>Building high-performance AI engines, cloud platforms, and Industry 4.0 IoT solutions.</p>
                  
                  <div className="hero-quick-links">
                    <Link to="/" className="hero-link-btn" onClick={() => setIsOpen(false)}>
                      <Layers size={15} /> <span>Navigate your next</span> <ChevronRight size={14} className="link-arrow" />
                    </Link>
                    <Link to="/about" className="hero-link-btn" onClick={() => setIsOpen(false)}>
                      <Cpu size={15} /> <span>About PAYIVVA</span> <ChevronRight size={14} className="link-arrow" />
                    </Link>
                    <Link to="/careers" className="hero-link-btn" onClick={() => setIsOpen(false)}>
                      <Sparkles size={15} /> <span>Careers & Culture</span> <ChevronRight size={14} className="link-arrow" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Column 2: Services & AI Engineering */}
              <div className="drawer-col">
                <span className="drawer-col-heading">Services & AI Engineering</span>
                <div className="drawer-links-group">
                  <Link to="/services/ai-consulting-strategy" className="drawer-item-card" onClick={() => setIsOpen(false)}>
                    <div className="item-card-icon"><Sparkles size={16} /></div>
                    <div className="item-card-text">
                      <span className="item-card-title">AI Consulting & Strategy</span>
                      <span className="item-card-sub">Roadmapping & governance</span>
                    </div>
                  </Link>
                  <Link to="/services/machine-learning-solutions" className="drawer-item-card" onClick={() => setIsOpen(false)}>
                    <div className="item-card-icon"><Cpu size={16} /></div>
                    <div className="item-card-text">
                      <span className="item-card-title">Machine Learning Solutions</span>
                      <span className="item-card-sub">Predictive analytics</span>
                    </div>
                  </Link>
                  <Link to="/services/generative-ai-llm" className="drawer-item-card" onClick={() => setIsOpen(false)}>
                    <div className="item-card-icon"><Sparkles size={16} /></div>
                    <div className="item-card-text">
                      <span className="item-card-title">Generative AI & LLMs</span>
                      <span className="item-card-sub">Autonomous AI agents</span>
                    </div>
                  </Link>
                  <Link to="/services/software-development" className="drawer-item-card" onClick={() => setIsOpen(false)}>
                    <div className="item-card-icon"><Code2 size={16} /></div>
                    <div className="item-card-text">
                      <span className="item-card-title">Custom Software Engineering</span>
                      <span className="item-card-sub">Cloud-native systems</span>
                    </div>
                  </Link>
                  <Link to="/services/app-development" className="drawer-item-card" onClick={() => setIsOpen(false)}>
                    <div className="item-card-icon"><Code2 size={16} /></div>
                    <div className="item-card-text">
                      <span className="item-card-title">Mobile App Development</span>
                      <span className="item-card-sub">iOS & Android solutions</span>
                    </div>
                  </Link>
                  <Link to="/services/website-development" className="drawer-item-card" onClick={() => setIsOpen(false)}>
                    <div className="item-card-icon"><Code2 size={16} /></div>
                    <div className="item-card-text">
                      <span className="item-card-title">High-Performance Web Platforms</span>
                      <span className="item-card-sub">React & Vite architecture</span>
                    </div>
                  </Link>
                  <Link to="/services/digital-marketing" className="drawer-item-card" onClick={() => setIsOpen(false)}>
                    <div className="item-card-icon"><Globe size={16} /></div>
                    <div className="item-card-text">
                      <span className="item-card-title">Digital Marketing & Growth</span>
                      <span className="item-card-sub">SEO, brand authority & CRO</span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Column 3: Industries */}
              <div className="drawer-col">
                <span className="drawer-col-heading">Industry Solutions</span>
                <div className="drawer-links-group">
                  {industryCategories.map((ind) => {
                    const IconComp = ind.icon;
                    return (
                      <Link key={ind.slug} to={`/industries/${ind.slug}`} className="drawer-item-card" onClick={() => setIsOpen(false)}>
                        <div className="item-card-icon"><IconComp size={16} /></div>
                        <div className="item-card-text">
                          <span className="item-card-title">{ind.title}</span>
                          <span className="item-card-sub">{ind.highlight}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Column 4: Knowledge Hub & Insights */}
              <div className="drawer-col">
                <span className="drawer-col-heading">Resources & Insights</span>
                <div className="drawer-links-group">
                  <Link to="/resources/case-studies" className="drawer-item-card" onClick={() => setIsOpen(false)}>
                    <div className="item-card-icon"><BookOpen size={16} /></div>
                    <div className="item-card-text">
                      <span className="item-card-title">Case Studies & ROI</span>
                      <span className="item-card-sub">Client success results</span>
                    </div>
                  </Link>
                  <Link to="/resources/documentation" className="drawer-item-card" onClick={() => setIsOpen(false)}>
                    <div className="item-card-icon"><BookOpen size={16} /></div>
                    <div className="item-card-text">
                      <span className="item-card-title">Technical Documentation</span>
                      <span className="item-card-sub">Architecture specs</span>
                    </div>
                  </Link>
                  <Link to="/blog" className="drawer-item-card" onClick={() => setIsOpen(false)}>
                    <div className="item-card-icon"><BookOpen size={16} /></div>
                    <div className="item-card-text">
                      <span className="item-card-title">Tech Insights Blog</span>
                      <span className="item-card-sub">Tech articles & insights</span>
                    </div>
                  </Link>
                  <Link to="/security" className="drawer-item-card" onClick={() => setIsOpen(false)}>
                    <div className="item-card-icon"><ShieldCheck size={16} /></div>
                    <div className="item-card-text">
                      <span className="item-card-title">Security & Compliance</span>
                      <span className="item-card-sub">Zero-trust policy</span>
                    </div>
                  </Link>
                </div>
              </div>

            </div>

            {/* Bottom Contact Strip */}
            <div className="drawer-footer-glass-box">
              <div className="drawer-contact-chips">
                <div className="contact-chip">
                  <Globe size={15} className="chip-icon" /> <span>Global / English</span>
                </div>
                <div className="contact-chip">
                  <Phone size={15} className="chip-icon" /> <a href="tel:+918380009994">+91 8380009994</a> / <a href="tel:+918380009995">+91 8380009995</a>
                </div>
                <div className="contact-chip">
                  <Mail size={15} className="chip-icon" /> <a href="mailto:info@payivvatechnologies.com">info@payivvatechnologies.com</a>
                </div>
              </div>

              <Link to="/contact" className="btn btn-primary drawer-cta-btn" onClick={() => setIsOpen(false)}>
                Reach Us <ArrowRight size={15} />
              </Link>
            </div>

          </div>
        </div>

      </header>

      {/* Global Spotlight Search / Ask AI Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
