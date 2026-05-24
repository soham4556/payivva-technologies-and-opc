import { useState } from 'react';
import { 
  Code, Eye, Brain, Cpu, Smartphone, Globe, BarChart3, TrendingUp,
  ArrowRight, ShieldCheck, Zap, Sparkles, AlertCircle, CheckCircle2, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './styles/Services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedEstimates, setSelectedEstimates] = useState([]);
  
  const servicesList = [
    {
      id: 'ai-strategy',
      category: 'ai',
      icon: <img src="/project_img/aiimage.png" alt="AI Strategy Logo" />,
      title: "AI Consulting & Strategy",
      tagline: "Enterprise system roadmapping",
      friction: "Enterprises waste up to 70% of AI budgets on misaligned models and fragmented legacy pipelines.",
      solution: "We audit your infrastructure and design structured, compliance-ready AI roadmaps aligned with C-suite KPIs.",
      metric: "ROI Blueprint: 100% Alignment",
      path: "/services/ai-consulting-strategy",
      techTags: ["System Audits", "LLM Strategy", "ROI Mapping"]
    },
    {
      id: 'ml-solutions',
      category: 'ai',
      icon: <img src="/project_img/mlimage.png" alt="Machine Learning Logo" />,
      title: "Machine Learning Solutions",
      tagline: "Predictive model engines",
      friction: "Static data stacks fail to forecast volatile market trends, causing loss of competitive market share.",
      solution: "We deploy custom neural networks and real-time regression pipelines to turn raw telemetry into automated decisions.",
      metric: "Accuracy Rate: 99.2%",
      path: "/services/machine-learning-solutions",
      techTags: ["Regression", "TensorFlow", "Neural Nets"]
    },
    {
      id: 'vision-nlp',
      category: 'ai',
      icon: <img src="/project_img/cv.png" alt="Computer Vision Logo" className="srv-icon-cv" />,
      title: "Computer Vision & NLP",
      tagline: "OCR & semantic understanding",
      friction: "Organizations manual-process thousands of files, generating human errors and high operational costs.",
      solution: "We build advanced vision nodes and semantic document pipelines to automate structured extraction at scale.",
      metric: "Data Extraction: 10x Faster",
      path: "/services/computer-vision-nlp",
      techTags: ["YOLOv8", "OCR Engines", "Semantic Processing"]
    },
    {
      id: 'generative-ai',
      category: 'ai',
      icon: <img src="/project_img/llm.png" alt="Generative AI Logo" className="srv-icon-llm" />,
      title: "Generative AI & LLM",
      tagline: "Custom GPT & agentic systems",
      friction: "Generic AI tools leak proprietary data and lack the custom context needed to automate real processes.",
      solution: "We build secure, private-tenant LLM systems and autonomous multi-agent networks that execute secure workflows.",
      metric: "Process Velocity: +220%",
      path: "/services/generative-ai-llm",
      techTags: ["Private LLMs", "LangChain", "Autonomous Agents"]
    },
    {
      id: 'software-dev',
      category: 'digital',
      icon: <img src="/project_img/software_dev.png" alt="Software Development Logo" />,
      title: "Software Development",
      tagline: "Custom enterprise systems",
      friction: "Legacy monoliths are slow to scale, expensive to maintain, and vulnerable to security threats.",
      solution: "We design clean, highly scalable microservices architectures and robust API layers tailored to your business operations.",
      metric: "System SLA: 99.9% Uptime",
      path: "/services/software-development",
      techTags: ["React / Node", "Microservices", "Docker / K8s"]
    },
    {
      id: 'app-dev',
      category: 'digital',
      icon: <img src="/project_img/appdev.png" alt="App Development Logo" />,
      title: "App Development",
      tagline: "Next-gen iOS & Android apps",
      friction: "Clunky mobile experiences turn customers away and lead to poor app store ratings and high churn.",
      solution: "We craft lightning-fast, highly responsive native and cross-platform mobile apps with premium fluid gestures.",
      metric: "Avg Store Rating: 4.8★",
      path: "/services/app-development",
      techTags: ["Flutter / Swift", "Fluid Gestures", "Offline Sync"]
    },
    {
      id: 'web-dev',
      category: 'digital',
      icon: <img src="/project_img/webdev.png" alt="Website Development Logo" />,
      title: "Website Development",
      tagline: "High-performance web platforms",
      friction: "Slow, template-based websites fail to rank on search engines and convert only a fraction of visitors.",
      solution: "We build custom, zero-bloat web codebases engineered for speed, pristine SEO, and flawless responsive layouts.",
      metric: "Lighthouse Performance: 99/100",
      path: "/services/website-development",
      techTags: ["Vite / React", "Vanilla CSS", "SEO Architecture"]
    },
    {
      id: 'digital-marketing',
      category: 'digital',
      icon: <img src="/project_img/digital.png" alt="Digital Marketing Logo" />,
      title: "Digital Marketing",
      tagline: "SEO & brand authority growth",
      friction: "Ineffective paid ad campaigns burn budgets without driving high-intent corporate pipelines.",
      solution: "We deploy ROI-focused performance marketing, technical schema layouts, and targeted corporate lead structures.",
      metric: "Media Spend Cost: -40%",
      path: "/services/digital-marketing",
      techTags: ["Technical SEO", "Attribution Models", "Lead Gen"]
    }
  ];

  const filteredServices = servicesList.filter(srv => {
    if (activeTab === 'all') return true;
    return srv.category === activeTab;
  });

  const calculatorOptions = [
    { id: 'strategy', label: 'AI Strategy & Auditing', time: 3, costFactor: 1 },
    { id: 'ml', label: 'Custom ML Engines', time: 6, costFactor: 2 },
    { id: 'genai', label: 'Agentic LLM Systems', time: 5, costFactor: 2 },
    { id: 'software', label: 'Enterprise Software Build', time: 8, costFactor: 3 },
    { id: 'web', label: 'Custom Web Platform', time: 4, costFactor: 1 },
    { id: 'app', label: 'Fluid Mobile Application', time: 6, costFactor: 2 }
  ];

  const handleSelectEstimate = (id) => {
    if (selectedEstimates.includes(id)) {
      setSelectedEstimates(selectedEstimates.filter(item => item !== id));
    } else {
      setSelectedEstimates([...selectedEstimates, id]);
    }
  };

  const calculateTimeline = () => {
    if (selectedEstimates.length === 0) return 0;
    const items = calculatorOptions.filter(opt => selectedEstimates.includes(opt.id));
    const maxTime = Math.max(...items.map(i => i.time));
    const count = items.length;
    return maxTime + Math.round((count - 1) * 1.5);
  };

  const getSystemImpact = () => {
    if (selectedEstimates.length === 0) return "Select services below";
    if (selectedEstimates.length >= 4) return "Complete Digital Transformation (Primal Scale)";
    if (selectedEstimates.includes('strategy') || selectedEstimates.includes('genai')) return "System Optimization + High Automation Yield";
    return "Enhanced Operational Efficiency & Core Delivery";
  };

  return (
    <div className="services-landing animate-fade-in">
      
      <section className="services-hero-section">
        <div className="container">
          <div className="services-hero-grid">
            <div className="hero-text-block">
              <span className="premium-tag-glow">SYSTEM ARCHITECTURE</span>
              <h1 className="hero-main-title">
                We Engineer <span className="text-glow-indigo">Digital Authority</span>
              </h1>
              <p className="hero-sub-text">
                From custom machine learning backends to hyper-performant React architectures, we replace standard templates with custom, secure, and client-attracting code bases.
              </p>
              <div className="hero-cta-group">
                <a href="#capabilities" className="btn btn-primary">
                  Explore Capabilities <ArrowRight size={16} />
                </a>
                <a href="#estimator" className="btn btn-secondary">
                  Configure Tech Stack
                </a>
              </div>
            </div>
            <div className="hero-visual-card">
              <div className="system-live-badge">
                <span className="live-dot"></span> SYSTEM ONLINE
              </div>
              <div className="visual-stat-row">
                <span className="visual-stat-title">CORE WEB VITALS</span>
                <span className="visual-stat-val">PASSED (100%)</span>
              </div>
              <div className="visual-stat-row">
                <span className="visual-stat-title">COMPLIANCE CODE</span>
                <span className="visual-stat-val">ISO 27001 SECURE</span>
              </div>
              <div className="visual-chart-mock">
                <div className="bar bar-1"></div>
                <div className="bar bar-2"></div>
                <div className="bar bar-3"></div>
                <div className="bar bar-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container services-capabilities-section" id="capabilities">
        <div className="capabilities-header">
          <div className="services-title-area">
            <span className="section-tag-modern-light">OUR CAPABILITIES</span>
            <h2 className="section-title-modern-light">Bespoke Engineering Specializations</h2>
          </div>
          
          <div className="capabilities-tabs">
            <button 
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Capabilities
            </button>
            <button 
              className={`tab-btn ${activeTab === 'ai' ? 'active' : ''}`}
              onClick={() => setActiveTab('ai')}
            >
              AI & Intelligent Systems
            </button>
            <button 
              className={`tab-btn ${activeTab === 'digital' ? 'active' : ''}`}
              onClick={() => setActiveTab('digital')}
            >
              Digital Engineering & Growth
            </button>
          </div>
        </div>

        <div className="capabilities-grid">
          {filteredServices.map((srv, index) => (
            <div key={srv.id} className="capability-card-wrapper" style={{ animationDelay: `${index * 80}ms` }}>
              <div className="capability-card-glass">
                <div className="cap-card-header">
                  <div className="cap-icon-box">{srv.icon}</div>
                  <span className="cap-category-badge">{srv.category === 'ai' ? 'AI Systems' : 'Engineering'}</span>
                </div>
                
                <h3 className="cap-title">{srv.title}</h3>
                <span className="cap-tagline">{srv.tagline}</span>
                
                <div className="cap-narrative-box">
                  <div className="narrative-segment">
                    <span className="segment-label"><AlertCircle size={12} /> Client Pain Point</span>
                    <p className="segment-desc">{srv.friction}</p>
                  </div>
                  <div className="narrative-segment">
                    <span className="segment-label"><ShieldCheck size={12} /> The Solution</span>
                    <p className="segment-desc">{srv.solution}</p>
                  </div>
                </div>

                <div className="cap-tech-row">
                  {srv.techTags.map(tag => (
                    <span key={tag} className="tech-badge">{tag}</span>
                  ))}
                </div>

                <div className="cap-card-footer">
                  <div className="metric-badge">
                    <Zap size={13} /> {srv.metric}
                  </div>
                  <Link to={srv.path} className="cap-arrow-link">
                    Explore Node <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="estimator-section-wrapper" id="estimator">
        <div className="container">
          <div className="estimator-grid">
            
            <div className="estimator-info-block">
              <span className="section-tag-modern-light">INTERACTIVE BLUEPRINT</span>
              <h2 className="section-title-modern-light">
                Configure Your <br/>
                <span className="text-glow-indigo">Proprietary Tech Stack</span>
              </h2>
              <p className="estimator-desc text-secondary">
                Select the modules your enterprise requires. Our interactive builder projects engineering velocity, concurrency timelines, and systemic impacts instantly.
              </p>
              
              <div className="estimator-options-list">
                {calculatorOptions.map(opt => (
                  <button 
                    key={opt.id} 
                    className={`estimator-opt-card ${selectedEstimates.includes(opt.id) ? 'selected' : ''}`}
                    onClick={() => handleSelectEstimate(opt.id)}
                  >
                    <div className="checkbox-holder">
                      {selectedEstimates.includes(opt.id) && <CheckCircle2 size={16} />}
                    </div>
                    <span className="opt-label">{opt.label}</span>
                    <span className="opt-time">{opt.time} Weeks</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="estimator-display-dashboard">
              <div className="dashboard-glass-shell">
                <h3 className="dash-title">SYSTEM ESTIMATION METRICS</h3>
                
                <div className="dash-metric-row">
                  <div className="dash-metric-item">
                    <span className="metric-label">CONCURRENT TIMELINE</span>
                    <div className="metric-value-large">
                      {calculateTimeline()} <span className="metric-unit">Weeks</span>
                    </div>
                  </div>
                  <div className="dash-metric-item">
                    <span className="metric-label">ACTIVE INTEGRATIONS</span>
                    <div className="metric-value-large">
                      {selectedEstimates.length} <span className="metric-unit">Nodes</span>
                    </div>
                  </div>
                </div>

                <div className="dash-status-box">
                  <span className="metric-label">ESTIMATED SYSTEM IMPACT</span>
                  <p className="dash-status-text">{getSystemImpact()}</p>
                </div>

                <div className="dash-efficiency-bar">
                  <div className="efficiency-fill" style={{ width: `${selectedEstimates.length * 16.6}%` }}></div>
                </div>

                <div className="dash-actions">
                  <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Request System Integration Audit <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="container services-cta-section">
        <div className="premium-glass-card-cta">
          <div className="cta-content-grid">
            <div>
              <h2 className="section-title">Ready to deploy <span className="glow-text">elite custom codebases?</span></h2>
              <p className="section-desc">
                Stop relying on slow AI-generated layouts that turn clients away. Work with PAYIVVA to construct custom digital systems engineered for high conversion rates.
              </p>
            </div>
            <div className="services-cta-actions">
              <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                Consult an Engineer <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
