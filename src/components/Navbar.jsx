import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import industriesData from '../data/industries';
import './styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'services' | 'industries' | 'resources' | null
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const location = useLocation();

  // Handle scroll event to change background opacity
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

  // Close mobile drawer when route changes
  useEffect(() => {
    // Defer to avoid setState during effect evaluation (eslint react-hooks/set-state-in-effect).
    const id = window.setTimeout(() => {
      setIsOpen(false);
      setActiveDropdown(null);
      setMobileServicesOpen(false);
      setMobileIndustriesOpen(false);
      setMobileResourcesOpen(false);
    }, 0);
    return () => window.clearTimeout(id);
  }, [location]);

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`} role="banner">
      <div className="navbar-container">
        
        {/* Brand Logo */}
        <Link to="/" className="nav-logo-link">
          <img src="/logo.png" alt="PAYIVVA Technologies Logo" className="nav-logo-img" />
        </Link>

        {/* Skip link for keyboard users */}
        <a href="#main" className="sr-only-focusable">Skip to content</a>

        {/* Desktop Menu */}
        <nav aria-label="Primary">
          <ul className="nav-menu">
            <li>
              <NavLink to="/" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>
            </li>
            
            {/* Services Dropdown */}
            <li 
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`nav-item-link nav-dropdown-btn ${activeDropdown === 'services' ? 'active' : ''}`}>
                Services <ChevronDown size={14} className="dropdown-arrow" />
              </button>
              <div className={`nav-dropdown-menu ${activeDropdown === 'services' ? 'show' : ''}`}>
                <div className="dropdown-grid">
                  {/* Column 1: AI & Intelligent Systems */}
                  <div className="dropdown-col">
                    <span className="dropdown-heading">AI & Intelligent Systems</span>
                    <Link to="/services/ai-consulting-strategy" className="dropdown-item">
                      <span className="dropdown-item-title">AI Consulting & Strategy</span>
                      <span className="dropdown-item-desc">Enterprise system roadmapping</span>
                    </Link>
                    <Link to="/services/machine-learning-solutions" className="dropdown-item">
                      <span className="dropdown-item-title">Machine Learning Solutions</span>
                      <span className="dropdown-item-desc">Predictive model engines</span>
                    </Link>
                    <Link to="/services/computer-vision-nlp" className="dropdown-item">
                      <span className="dropdown-item-title">Computer Vision & NLP</span>
                      <span className="dropdown-item-desc">OCR & semantic understanding</span>
                    </Link>
                    <Link to="/services/generative-ai-llm" className="dropdown-item">
                      <span className="dropdown-item-title">Generative AI & LLM</span>
                      <span className="dropdown-item-desc">Custom GPT & agentic systems</span>
                    </Link>
                  </div>
                  
                  {/* Column 2: Digital Engineering */}
                  <div className="dropdown-col">
                    <span className="dropdown-heading">Digital Engineering</span>
                    <Link to="/services/software-development" className="dropdown-item">
                      <span className="dropdown-item-title">Software Development</span>
                      <span className="dropdown-item-desc">Custom enterprise systems</span>
                    </Link>
                    <Link to="/services/app-development" className="dropdown-item">
                      <span className="dropdown-item-title">App Development</span>
                      <span className="dropdown-item-desc">Next-gen iOS & Android apps</span>
                    </Link>
                    <Link to="/services/website-development" className="dropdown-item">
                      <span className="dropdown-item-title">Website Development</span>
                      <span className="dropdown-item-desc">High-performance web platforms</span>
                    </Link>
                    <Link to="/services/digital-marketing" className="dropdown-item">
                      <span className="dropdown-item-title">Digital Marketing</span>
                      <span className="dropdown-item-desc">SEO & brand authority growth</span>
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            {/* Industries Dropdown */}
            <li 
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`nav-item-link nav-dropdown-btn ${activeDropdown === 'industries' ? 'active' : ''}`}>
                Industries <ChevronDown size={14} className="dropdown-arrow" />
              </button>
              <div className={`nav-dropdown-menu industries-dropdown ${activeDropdown === 'industries' ? 'show' : ''}`}>
                {industriesData.map((ind) => (
                  <Link key={ind.slug} to={`/industries/${ind.slug}`} className="dropdown-item">
                    <span className="dropdown-item-title">{ind.tabTitle}</span>
                    <span className="dropdown-item-desc" style={{ fontSize: '0.75rem', opacity: 0.8 }}>{ind.title}</span>
                  </Link>
                ))}
              </div>
            </li>

            {/* Resources Dropdown */}
            <li 
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`nav-item-link nav-dropdown-btn ${activeDropdown === 'resources' ? 'active' : ''}`}>
                Resources <ChevronDown size={14} className="dropdown-arrow" />
              </button>
              <div className={`nav-dropdown-menu resources-dropdown ${activeDropdown === 'resources' ? 'show' : ''}`}>
                <Link to="/resources/case-studies" className="dropdown-item">
                  <span className="dropdown-item-title">Case Studies</span>
                </Link>
                <Link to="/resources/documentation" className="dropdown-item">
                  <span className="dropdown-item-title">Documentation</span>
                </Link>
                <Link to="/blog" className="dropdown-item">
                  <span className="dropdown-item-title">Insights Blog</span>
                </Link>
              </div>
            </li>

            <li>
              <NavLink to="/about" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/careers" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Action Button & Toggle */}
        <div className="nav-actions">
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.65rem 1.5rem', fontSize: '0.9rem' }}>
            Reach Us <ArrowRight size={15} />
          </Link>
          <button 
            className="mobile-toggle" 
            onClick={() => {
              setIsOpen(!isOpen);
              if (isOpen) {
                setMobileServicesOpen(false);
                setMobileIndustriesOpen(false);
              }
            }} 
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`} style={{ overflowY: 'auto' }} aria-label="Mobile">
        <ul className="mobile-nav-list">
          <li>
            <NavLink to="/" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          
          {/* Collapsible Services in Mobile */}
          <li>
            <button 
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)} 
              className="mobile-nav-link mobile-dropdown-toggle"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', background: 'none', border: 'none', padding: '0.75rem 0', textAlign: 'left', cursor: 'pointer' }}
            >
              Resources <ChevronDown size={18} style={{ transform: mobileResourcesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', color: mobileResourcesOpen ? 'var(--color-cyan)' : 'inherit' }} />
            </button>
            <div style={{ 
              maxHeight: mobileResourcesOpen ? '220px' : '0px', 
              overflow: 'hidden', 
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)', 
              paddingLeft: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
              borderLeft: mobileResourcesOpen ? '2px solid rgba(6, 182, 212, 0.3)' : '2px solid transparent'
            }}>
              <Link to="/resources/case-studies" className="mobile-sub-link" onClick={() => setIsOpen(false)}>Case Studies</Link>
              <Link to="/resources/documentation" className="mobile-sub-link" onClick={() => setIsOpen(false)}>Documentation</Link>
              <Link to="/blog" className="mobile-sub-link" onClick={() => setIsOpen(false)}>Insights Blog</Link>
            </div>
          </li>

          <li>
            <button 
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)} 
              className="mobile-nav-link mobile-dropdown-toggle"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', background: 'none', border: 'none', padding: '0.75rem 0', textAlign: 'left', cursor: 'pointer' }}
            >
              Services <ChevronDown size={18} style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', color: mobileServicesOpen ? 'var(--color-cyan)' : 'inherit' }} />
            </button>
            <div style={{ 
              maxHeight: mobileServicesOpen ? '600px' : '0px', 
              overflow: 'hidden', 
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)', 
              paddingLeft: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
              borderLeft: mobileServicesOpen ? '2px solid rgba(6, 182, 212, 0.3)' : '2px solid transparent'
            }}>
              <Link to="/services" className="mobile-sub-link" onClick={() => setIsOpen(false)}>All Services</Link>
              <Link to="/services/ai-consulting-strategy" className="mobile-sub-link" onClick={() => setIsOpen(false)}>AI Consulting & Strategy</Link>
              <Link to="/services/machine-learning-solutions" className="mobile-sub-link" onClick={() => setIsOpen(false)}>Machine Learning Solutions</Link>
              <Link to="/services/computer-vision-nlp" className="mobile-sub-link" onClick={() => setIsOpen(false)}>Computer Vision & NLP</Link>
              <Link to="/services/generative-ai-llm" className="mobile-sub-link" onClick={() => setIsOpen(false)}>Generative AI & LLM</Link>
              <Link to="/services/software-development" className="mobile-sub-link" onClick={() => setIsOpen(false)}>Software Development</Link>
              <Link to="/services/app-development" className="mobile-sub-link" onClick={() => setIsOpen(false)}>App Development</Link>
              <Link to="/services/website-development" className="mobile-sub-link" onClick={() => setIsOpen(false)}>Website Development</Link>
              <Link to="/services/digital-marketing" className="mobile-sub-link" onClick={() => setIsOpen(false)}>Digital Marketing</Link>
            </div>
          </li>

          {/* Collapsible Industries in Mobile */}
          <li>
            <button 
              onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)} 
              className="mobile-nav-link mobile-dropdown-toggle"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', background: 'none', border: 'none', padding: '0.75rem 0', textAlign: 'left', cursor: 'pointer' }}
            >
              Industries <ChevronDown size={18} style={{ transform: mobileIndustriesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s', color: mobileIndustriesOpen ? 'var(--color-cyan)' : 'inherit' }} />
            </button>
            <div style={{ 
              maxHeight: mobileIndustriesOpen ? '400px' : '0px', 
              overflow: 'hidden', 
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)', 
              paddingLeft: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
              borderLeft: mobileIndustriesOpen ? '2px solid rgba(6, 182, 212, 0.3)' : '2px solid transparent'
            }}>
              {industriesData.map((ind) => (
                <Link 
                  key={ind.slug} 
                  to={`/industries/${ind.slug}`} 
                  className="mobile-sub-link"
                  onClick={() => setIsOpen(false)}
                >
                  {ind.tabTitle}
                </Link>
              ))}
            </div>
          </li>

          <li>
            <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/careers" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
        <Link to="/contact" className="btn btn-primary mobile-drawer-cta" onClick={() => setIsOpen(false)}>
          Reach Us <ArrowRight size={16} />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
