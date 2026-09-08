import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Star,
  Cpu,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import SaaSButton from '../components/SaaSButton';
import industriesData from '../data/industries';
import './styles/Home.css';

const blogsData = [
  {
    id: 1,
    title: "Real-Time Kitting Validation with AI & Raspberry Pi 5",
    category: "AIML",
    date: "October 8, 2026",
    readTime: "5 min read",
    author: "Dr. Ashley Vance",
    image: "/project_img/blog_kitting.png",
    summary: "How edge computing models and light-weight neural networks on compact hardware are automating defect tracking on factory conveyor belts.",
    content: "Industrial manufacturing plants have historically struggled with real-time assembly line errors due to high processing latencies in centralized cloud pipelines. By pairing the robust processing capabilities of the newly deployed Raspberry Pi 5 with highly optimized MobileNet-SSD architectures, we have established a real-time kitting validation system capable of 99.4% tracking accuracy.\n\nThis setup monitors packaging containers on a moving conveyor belt, analyzing object presence, coordinates, and physical dimensions. Telemetries are computed directly at the edge, cutting down latency from 450ms to a mere 12ms. This zero-delay validation ensures defective shipments are flagged and routed away before leaving the factory floor, bringing permanent cost-reductions to manufacturing margins."
  },
  {
    id: 2,
    title: "Harnessing AI for Crowd Safety and Intelligence",
    category: "Computer Vision",
    date: "October 16, 2026",
    readTime: "7 min read",
    author: "Marcus Chen",
    image: "/project_img/blog_crowd.png",
    summary: "Leveraging deep visual learning models and thermal dashboards to coordinate rapid emergency responses in crowded smart stadiums.",
    content: "Modern crowd control requires more than just reactive physical security. Harnessing the predictive power of multi-object tracking (MOT) algorithms coupled with custom YOLOv8 structures, security commanders can now predict crowd bottlenecks up to 10 minutes before they occur.\n\nOur system processes thousands of high-definition video frames across stadium terminals, mapping optical densities, directional vectors, and rapid heat expansions. By feeding these metrics into localized safety dashboards, emergency responders are automatically deployed to congested exits. The system maintains strict localized privacy compliance protocols, ensuring zero personal identity data is stored while maximizing public safety."
  },
  {
    id: 3,
    title: "Transforming Business Operations with AI and Gen AI",
    category: "Gen AI",
    date: "October 28, 2026",
    readTime: "6 min read",
    author: "Elena Rostova",
    image: "/project_img/blog_business.png",
    summary: "How autonomous software agents and parameter-tuned transformers are orchestrating and scaling daily corporate administrative workflows.",
    content: "Corporate administrations are undergoing a permanent structural shift. Instead of simple automated templates, enterprises are now deploying Agentic AI networks capable of handling complex multi-variable tasks.\n\nBy fine-tuning proprietary LLaMA parameters on secure local business data, these agents can read incoming emails, parse operational intents, fetch relevant database files, draft context-aware replies, and trigger backend API actions. We have witnessed operations teams save up to 72% of their administrative hours, redirecting human talent toward high-level strategy and client relations."
  },
  {
    id: 4,
    title: "The Future of NLP: Scaling Large Language Models for Enterprise",
    category: "NLP",
    date: "November 5, 2026",
    readTime: "8 min read",
    author: "Dr. Sarah Jenkins",
    image: "/project_img/blog_business.png",
    summary: "Diving deep into model quantization and retrieval-augmented generation (RAG) to deploy fast, reliable LLMs on local server hardware.",
    content: "Enterprise adoption of NLP has entered a new phase. Standard off-the-shelf APIs often fall short due to data sovereignty concerns and latency overheads. This article explores how model quantization (reducing precision from FP16 to INT8/INT4) allows companies to run 70-billion parameter models directly on compact local GPU clusters.\n\nAdditionally, by constructing robust Retrieval-Augmented Generation (RAG) structures, models are anchored to fresh internal company databases. This eliminates standard model hallucinations, providing customer support and engineering teams with absolute, factual answers derived from trusted proprietary resources."
  },
  {
    id: 5,
    title: "Deep Learning Breakthroughs in Automated Medical Diagnostics",
    category: "Deep Learning",
    date: "November 12, 2026",
    readTime: "9 min read",
    author: "Dr. Rajiv Mehta",
    image: "/project_img/blog_kitting.png",
    summary: "How convolutional neural networks and 3D imaging visual fields are assisting radiologists in pinpointing anomalies with absolute precision.",
    content: "Automating medical diagnostics requires unprecedented precision. Recent deep learning architectures, specifically 3D UNet and ResNet variants, have achieved accuracy rates that match senior clinical radiologists. By feeding volumetric CT and MRI scans into these deep visual pipelines, the systems isolate micro-anomalies as small as 1mm.\n\nThe AI highlights suspicious regions, calculates volumetric growth over time, and alerts the clinical staff. This collaborative workflow has reduced screening times by 40%, allowing physicians to initiate early-stage treatments and significantly improve clinical outcomes worldwide."
  },
  {
    id: 6,
    title: "Cloud Sovereignty: The Future of Distributed AI Infrastructure",
    category: "Cloud Future",
    date: "November 20, 2026",
    readTime: "7 min read",
    author: "David Miller",
    image: "/project_img/blog_crowd.png",
    summary: "Navigating local data residency laws and microservice architectures to host scalable deep learning engines securely.",
    content: "As nations tighten data residency laws, global tech companies are forced to redesign their AI scaling models. Distributed AI infrastructures are the solution, allowing computational workloads to spin up serverless GPU pipelines in specific local regions.\n\nUsing Kubernetes clusters configured with custom load-balancing logic, pipelines can dynamically route training workloads to regions with excess green energy, while storing sensitive customer data strictly within localized physical boundaries. This ensures absolute compliance with international GDPR and HIPAA acts without sacrificing system speed."
  },
  ...Array.from({ length: 24 }).map((_, idx) => {
    const topics = ["AIML", "Computer Vision", "Gen AI", "NLP", "Deep Learning", "Cloud Future"];
    const topic = topics[idx % topics.length];
    const id = idx + 7;
    return {
      id,
      title: `Scaling ${topic} Systems: Key Considerations for Enterprise Architecture (Part ${idx + 1})`,
      category: topic,
      date: `November ${21 + (idx % 10)}, 2026`,
      readTime: `${4 + (idx % 5)} min read`,
      author: "PAYIVVA Engineering",
      image: idx % 3 === 0 ? "/project_img/blog_kitting.png" : idx % 3 === 1 ? "/project_img/blog_crowd.png" : "/project_img/blog_business.png",
      summary: `A thorough analysis of engineering constraints and latency benchmarks in modern distributed ${topic} systems.`,
      content: `As businesses scale, hosting robust ${topic} systems becomes a core engineering challenge. Developers must balance high parameter sizes with localized hardware latency thresholds to maintain stable performance.\n\nIn this comprehensive analysis, our PAYIVVA engineering team walks through model pipeline optimizations, memory management benchmarks, and low-latency API wrappers (such as FastAPI and gRPC) designed to serve millions of concurrent token inputs. Discover how setting up asynchronous queue systems and distributed memory caches like Redis can elevate your systems to enterprise-grade stability.`
    };
  })
];

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeIndustryTab, setActiveIndustryTab] = useState(0);
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const [blogSearchQuery, setBlogSearchQuery] = useState("");
  const [selectedBlogCategory, setSelectedBlogCategory] = useState("All");
  const [activeReadingBlog, setActiveReadingBlog] = useState(null);

  useEffect(() => {
    const bgGrid = document.querySelector('.bg-grid');
    if (bgGrid) {
      bgGrid.classList.add('hide-brain-bg');
    }
    return () => {
      if (bgGrid) {
        bgGrid.classList.remove('hide-brain-bg');
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Luke Lewis",
      role: "VP of Engineering, CyberSec Corp",
      quote: "PAYIVVA Technologies delivered custom machine learning systems that completely automated our telemetry alerts. Their performance code was clean and highly optimized.",
      avatar: "LL"
    },
    {
      name: "Patrick Chu",
      role: "CTO, BioChem Systems",
      quote: "The B2B lead generation analytics platform they deployed outperformed our previous local agency by 180%. Extremely responsive team located in Pune's primary tech center.",
      avatar: "PC"
    }
  ];

  return (
    <div className="animate-fade-in nextastra-home">
      
      {/* 1. NextAstra Tech Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          
          {/* Hero Content Column */}
          <div className="hero-content">
            <div className="hero-tag hero-tag-premium">
              <span className="hero-tag-sparkle"><Sparkles size={14} style={{ color: '#007cc3' }} /></span>
              <span>ENTERPRISE AGENTIC AI PLATFORM</span>
            </div>
            <h1 className="hero-title">
              AI and Software Engineering for <span className="glow-text">Modern Businesses</span>
            </h1>
            <p className="hero-desc">
              Empowering global brands by engineering high-performance AI consulting, machine learning systems, and deep visual/semantic automation architectures to secure exponential pipeline growth.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Discover More <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>

            {/* Trust Micro-Metrics Bar */}
            <div className="hero-trust-bar">
              <div className="trust-item">
                <span className="trust-num">99.4%</span>
                <span className="trust-lbl">Tracking Accuracy</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <span className="trust-num">12ms</span>
                <span className="trust-lbl">Edge Latency</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <span className="trust-num">50+</span>
                <span className="trust-lbl">Deployments</span>
              </div>
            </div>
          </div>

          {/* Hero Right Column: Ultra-Premium AI Command Showcase */}
          <div className="hero-visual-container">
            <div className="hero-glass-showcase">
              
              {/* Live Header Bar */}
              <div className="showcase-header-bar">
                <div className="system-pill">
                  <span className="live-dot"></span>
                  <span>PAYIVVA AGENTIC CORE v4.2</span>
                </div>
                <span className="system-status"><Sparkles size={11} style={{ display: 'inline', marginRight: '4px' }} /> 99.8% ACCURACY</span>
              </div>

              {/* Central Glowing AI Graphic Spotlight */}
              <div className="showcase-graphic-box">
                <img src="/project_img/gen_ai_llm_one.png" alt="PAYIVVA Agentic AI Platform" className="hero-glowing-graphic" />
                <div className="graphic-ambient-glow"></div>
                
                {/* Live Core Overlay Chip */}
                <div className="graphic-live-overlay">
                  <div className="overlay-pulse-ring"></div>
                  <span className="overlay-text">Autonomous Multi-Agent Mesh Active</span>
                </div>
              </div>

              {/* Floating Metric Chips */}
              <div className="floating-chip chip-top-left float-anim-1">
                <div className="chip-icon-box cyan"><Cpu size={16} /></div>
                <div className="chip-info">
                  <span className="chip-title">12ms Edge Inference</span>
                  <span className="chip-sub">Real-Time Processing</span>
                </div>
              </div>

              <div className="floating-chip chip-bottom-right float-anim-2">
                <div className="chip-icon-box emerald"><ShieldCheck size={16} /></div>
                <div className="chip-info">
                  <span className="chip-title">Zero-Trust Guarded</span>
                  <span className="chip-sub">Private Data Sovereignty</span>
                </div>
              </div>

              <div className="floating-chip chip-top-right float-anim-3">
                <div className="chip-icon-box blue"><TrendingUp size={16} /></div>
                <div className="chip-info">
                  <span className="chip-title">99.4% Defect Tracking</span>
                  <span className="chip-sub">Automated Quality AI</span>
                </div>
              </div>

              {/* Terminal Activity Log Strip */}
              <div className="showcase-terminal-box">
                <div className="terminal-header">
                  <div className="terminal-controls">
                    <span className="terminal-dot red"></span>
                    <span className="terminal-dot yellow"></span>
                    <span className="terminal-dot green"></span>
                  </div>
                  <span className="terminal-title">agent_execution_stream.log</span>
                </div>
                <div className="terminal-body">
                  <p className="terminal-line"><span className="term-prompt">&gt;</span> [RAG Pipeline]: Syncing 1.4M Vector Embeddings...</p>
                  <p className="terminal-line highlight"><span className="term-prompt">&gt;</span> <CheckCircle2 size={12} style={{ color: '#10b981', display: 'inline', marginRight: '4px' }} /> [Agent Consensus]: 99.8% Factual Grounding Verified</p>
                  <p className="terminal-line pulse-line"><span className="term-prompt">&gt;</span> <span className="blinking-cursor">_</span> Running sub-second inference at 12ms latency</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. Tailored AI Solutions Grid (8 card items with Glow cards) */}
      <section className="section-padding">
        <div className="container">
          <div className="home-services-title-area">
            <span className="section-tag">OUR SERVICES</span>
            <h2 className="section-title">Intelligent Innovations: Tailored AI Solutions</h2>
            <p className="section-desc">
              We design and execute custom strategies that capture market share, convert cold prospects, and build permanent digital assets for your brand.
            </p>
          </div>

          <div className="services-grid-astra">
            
            {/* Service 1 */}
            <div className="glow-card-wrapper">
              <div className="glass-card service-card">
                <div className="service-icon-container">
                  <img src="/project_img/aiimage.png" alt="AI Consulting & Strategy" />
                </div>
                <h3 className="service-card-title">AI Consulting & Strategy</h3>
                <p className="service-card-desc">
                  Accelerate growth and align your enterprise roadmap using deep technology feasibility analysis and implementation strategies.
                </p>
                <Link to="/services/ai-consulting-strategy" className="service-card-link">
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="glow-card-wrapper">
              <div className="glass-card service-card">
                <div className="service-icon-container">
                  <img src="/project_img/mlimage.png" alt="Machine Learning Solutions" />
                </div>
                <h3 className="service-card-title">Machine Learning Solutions</h3>
                <p className="service-card-desc">
                  Deploy complex predictive engines, classification models, and anomaly detectors to streamline critical business forecasts.
                </p>
                <Link to="/services/machine-learning-solutions" className="service-card-link">
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="glow-card-wrapper">
              <div className="glass-card service-card">
                <div className="service-icon-container">
                  <img src="/project_img/cv.png" alt="Computer Vision & NLP" className="srv-icon-cv" />
                </div>
                <h3 className="service-card-title">Computer Vision & NLP</h3>
                <p className="service-card-desc">
                  Automate optical character recognition, semantic language parsers, and custom audio sentiment analyzers with absolute precision.
                </p>
                <Link to="/services/computer-vision-nlp" className="service-card-link">
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="glow-card-wrapper">
              <div className="glass-card service-card">
                <div className="service-icon-container">
                  <img src="/project_img/llm.png" alt="Generative AI & LLM" className="srv-icon-llm" />
                </div>
                <h3 className="service-card-title">Generative AI & LLM</h3>
                <p className="service-card-desc">
                  Integrate custom Generative Pre-trained Transformer instances and retrieval-augmented indexing tools into enterprise systems.
                </p>
                <Link to="/services/generative-ai-llm" className="service-card-link">
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Service 5 */}
            <div className="glow-card-wrapper">
              <div className="glass-card service-card">
                <div className="service-icon-container">
                  <img src="/project_img/software_dev.png" alt="Software Development" />
                </div>
                <h3 className="service-card-title">Software Development</h3>
                <p className="service-card-desc">
                  Design and deploy scalable custom software, microservices, and robust backend architectures designed for speed and reliability.
                </p>
                <Link to="/services/software-development" className="service-card-link">
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Service 6 */}
            <div className="glow-card-wrapper">
              <div className="glass-card service-card">
                <div className="service-icon-container">
                  <img src="/project_img/appdev.png" alt="App Development" />
                </div>
                <h3 className="service-card-title">App Development</h3>
                <p className="service-card-desc">
                  Engineer intuitive native and cross-platform mobile apps for iOS and Android, optimizing user retention and conversion rates.
                </p>
                <Link to="/services/app-development" className="service-card-link">
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Service 7 */}
            <div className="glow-card-wrapper">
              <div className="glass-card service-card">
                <div className="service-icon-container">
                  <img src="/project_img/webdev.png" alt="Website Development" />
                </div>
                <h3 className="service-card-title">Website Development</h3>
                <p className="service-card-desc">
                  Build high-performance, responsive websites using custom code bases, clean aesthetics, and conversion science.
                </p>
                <Link to="/services/website-development" className="service-card-link">
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Service 8 */}
            <div className="glow-card-wrapper">
              <div className="glass-card service-card">
                <div className="service-icon-container">
                  <img src="/project_img/digital.png" alt="Digital Marketing" />
                </div>
                <h3 className="service-card-title">Digital Marketing</h3>
                <p className="service-card-desc">
                  Maximize search and social presence through laser-focused SEO campaigns, conversion-focused paid ads, and brand growth.
                </p>
                <Link to="/services/digital-marketing" className="service-card-link">
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Stats Showcase ("Why Choose Us") */}
      <section className="section-padding stats-dashboard-area premium-light-theme">
        {/* Soft background pastel glowing orbs behind the grid */}
        <div className="light-glow-sphere left-orb"></div>
        <div className="light-glow-sphere right-orb"></div>

        <div className="container">
          <div className="home-services-title-area reveal-on-scroll">
            <span className="section-tag-modern-light">WHY CHOOSE US</span>
            <h2 className="section-title-modern-light">
              We don't just promise results—we deliver them through <span className="text-gradient-indigo">world-class talent</span> and unwavering dedication.
            </h2>
          </div>

          <div className="why-us-grid-light">
            
            {/* Left Column: Premium Capability Showcase (no video) */}
            <div className="why-us-visual-light reveal-on-scroll delay-1">
              <div className="why-us-video-monitor-frame-light">
                {/* Header controls bar */}
                <div className="monitor-header-bar-light">
                  <div className="tech-header-controls-light">
                    <span className="dot-red-pastel"></span>
                    <span className="dot-yellow-pastel"></span>
                    <span className="dot-green-pastel"></span>
                  </div>
                  <span className="monitor-telemetry-status-light">ENGINEERING SIGNAL</span>
                </div>
                
                {/* Static Image Panel */}
                <div className="video-viewport-light why-us-image-viewport">
                  <img
                    src="/project_img/overview_cybersecurity.png"
                    alt="Security and AI engineering overview"
                    className="why-us-image-element"
                    loading="lazy"
                  />
                  <div className="why-us-image-gradient"></div>
                  <div className="why-us-image-badges" aria-hidden="true">
                    <span className="why-us-badge">SLA</span>
                    <span className="why-us-badge">LOW LATENCY</span>
                    <span className="why-us-badge">SECURE BY DEFAULT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Stats and Interactive Accordion */}
            <div className="why-us-content-light">
              
              {/* Soft Glowing Stats Cards */}
              <div className="why-us-stats-display-light reveal-on-scroll delay-2">
                <div className="why-us-stat-box-light premium-glass-light">
                  <span className="why-us-stat-num-light text-gradient-indigo">32+</span>
                  <span className="why-us-stat-lbl-light">Projects Completed</span>
                </div>
                <div className="why-us-stat-box-light premium-glass-light">
                  <span className="why-us-stat-num-light text-gradient-emerald">75%</span>
                  <span className="why-us-stat-lbl-light">AI Integrations Built</span>
                </div>
              </div>

              {/* Dynamic Accordion Cards */}
              <div className="why-us-accordion-light reveal-on-scroll delay-3">
                <div className="why-us-acc-item-light minimalist-item">
                  <div className="why-us-acc-num-light">01</div>
                  <div>
                    <h4 className="why-us-acc-title-light">Expert Team</h4>
                    <p className="why-us-acc-text-light">Experienced engineers crafting enterprise code and fine-tuning model architectures.</p>
                  </div>
                </div>
                <div className="why-us-acc-item-light minimalist-item">
                  <div className="why-us-acc-num-light">02</div>
                  <div>
                    <h4 className="why-us-acc-title-light">Innovative Thinking</h4>
                    <p className="why-us-acc-text-light">Pushing boundaries of system logic to architect custom, high-fidelity neural platforms.</p>
                  </div>
                </div>
                <div className="why-us-acc-item-light minimalist-item">
                  <div className="why-us-acc-num-light">03</div>
                  <div>
                    <h4 className="why-us-acc-title-light">Tailored Solutions</h4>
                    <p className="why-us-acc-text-light">Every pipeline is modeled exclusively around your unique business telemetry and scaling constraints.</p>
                  </div>
                </div>
                <div className="why-us-acc-item-light minimalist-item">
                  <div className="why-us-acc-num-light">04</div>
                  <div>
                    <h4 className="why-us-acc-title-light">Continuous Commitment</h4>
                    <p className="why-us-acc-text-light">Operating with strict local SLAs out of Pune to ensure stable production uptime.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. High-End Interactive Roadmap Lifecycle ("What We Do") */}
      <section className="section-padding lifecycle-section premium-light-roadmap">
        <div className="container">
          <div className="home-services-title-area reveal-on-scroll">
            <span className="section-tag-modern-light">OUR ROADMAP</span>
            <h2 className="section-title-modern-light">
              How We Engineer <span className="text-gradient-indigo">Scalable AI Systems</span>
            </h2>
            <p className="section-desc-light">
              A highly systematic, enterprise-grade software engineering lifecycle ensuring every neural model translates to verifiable business value.
            </p>
          </div>

          <div className="lifecycle-grid-wrapper">
            {/* Sequential Background Progress Vector Line */}
            <div className="roadmap-connector-line"></div>

            <div className="lifecycle-grid">
              
              {/* Step 1 - Phase: Scope */}
              <div className="lifecycle-card card-accent-indigo reveal-on-scroll delay-1">
                <div className="card-top-accent"></div>
                <div className="lifecycle-card-header">
                  <span className="lifecycle-phase-badge">PHASE 01 // STRATEGY</span>
                  <div className="lifecycle-icon-wrapper">
                    <img src="/project_img/1.png" alt="Strategy & Feasibility Analysis" className="lifecycle-logo" />
                    <div className="lifecycle-hover-number">01</div>
                  </div>
                </div>
                <h4 className="lifecycle-card-title">Deep Architecture & Consultation</h4>
                <p className="lifecycle-card-subtitle">Scoping operational bottlenecks & data structures.</p>
                <ul className="lifecycle-action-list">
                  <li>Technical feasibility matrix</li>
                  <li>Custom telemetry auditing</li>
                  <li>API integration roadmap</li>
                </ul>
              </div>

              {/* Step 2 - Phase: Build */}
              <div className="lifecycle-card card-accent-cyan reveal-on-scroll delay-2">
                <div className="card-top-accent"></div>
                <div className="lifecycle-card-header">
                  <span className="lifecycle-phase-badge">PHASE 02 // SYNTHESIS</span>
                  <div className="lifecycle-icon-wrapper">
                    <img src="/project_img/2.png" alt="Custom Engine Build" className="lifecycle-logo" />
                    <div className="lifecycle-hover-number">02</div>
                  </div>
                </div>
                <h4 className="lifecycle-card-title">Cognitive Engine Synthesis</h4>
                <p className="lifecycle-card-subtitle">Developing custom semantic, spatial, & predictive models.</p>
                <ul className="lifecycle-action-list">
                  <li>Retrieval-Augmented Indexing (RAG)</li>
                  <li>Custom visual/audio classifiers</li>
                  <li>Autonomous execution pipelines</li>
                </ul>
              </div>

              {/* Step 3 - Phase: Integrate */}
              <div className="lifecycle-card card-accent-emerald reveal-on-scroll delay-3">
                <div className="card-top-accent"></div>
                <div className="lifecycle-card-header">
                  <span className="lifecycle-phase-badge">PHASE 03 // INTEGRATE</span>
                  <div className="lifecycle-icon-wrapper">
                    <img src="/project_img/3.png" alt="Enterprise Orchestration" className="lifecycle-logo" />
                    <div className="lifecycle-hover-number">03</div>
                  </div>
                </div>
                <h4 className="lifecycle-card-title">Orchestration & Performance Tuning</h4>
                <p className="lifecycle-card-subtitle">Bridging pipelines with frontends & secure cloud layers.</p>
                <ul className="lifecycle-action-list">
                  <li>Low-latency API architecture</li>
                  <li>Multi-agent coordination loops</li>
                  <li>Vigorous automated stress tests</li>
                </ul>
              </div>

              {/* Step 4 - Phase: Monitor */}
              <div className="lifecycle-card card-accent-purple reveal-on-scroll delay-4">
                <div className="card-top-accent"></div>
                <div className="lifecycle-card-header">
                  <span className="lifecycle-phase-badge">PHASE 04 // COMPLIANCE</span>
                  <div className="lifecycle-icon-wrapper">
                    <img src="/project_img/4.png" alt="SLA Maintenance" className="lifecycle-logo" />
                    <div className="lifecycle-hover-number">04</div>
                  </div>
                </div>
                <h4 className="lifecycle-card-title">Telemetry & Pune-Based SLAs</h4>
                <p className="lifecycle-card-subtitle">Executing direct system updates & security monitoring.</p>
                <ul className="lifecycle-action-list">
                  <li>Real-time model drift detection</li>
                  <li>Hot-patch upgrades without downtime</li>
                  <li>Strict localized SLA response</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Specialization - What We Do Section */}
      <section className="section-padding specialization-section reveal-on-scroll">
        <div className="container specialization-grid">
          
          {/* Left Column: Premium Large Image */}
           <div className="specialization-visual">
             <div className="visual-image-wrapper">
              <img src="/project_img/overview_manufacturing.png" alt="AI engineering specialization" className="large-specialization-img" />
              <div className="visual-glow-overlay"></div>
             </div>
           </div>

          {/* Right Column: Specialization List with Custom Connector Arrows */}
          <div className="specialization-content">
            <div className="specialization-header">
              <div className="specialization-tag-line">
                <span className="specialization-tag">OUR SPECIALIZATION</span>
                <span className="tag-horizontal-line"></span>
              </div>
              <h2 className="specialization-title">What we do</h2>
              <p className="specialization-subtitle-desc">
                Choosing us means partnering with a forward-thinking team that's as invested in your success as you are. Together, we'll unlock the full potential of AI to transform your business.
              </p>
            </div>

            <div className="specialization-list">
              
              {/* Step 1 */}
              <div className="specialization-item">
                <div className="step-number-container">
                  <span className="step-number">1</span>
                  <img src="/arrow.png" alt="Connector Arrow" className="step-arrow-icon" />
                </div>
                <div className="step-details">
                  <h4 className="step-title">Custom AI Platform Development</h4>
                  <p className="step-desc">
                    Specializing in the design, architecture, & building of tailored AI platforms to meet unique business needs. This includes selecting the right technologies, ensuring scalability & integrating with existing systems.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="specialization-item">
                <div className="step-number-container">
                  <span className="step-number">2</span>
                  <img src="/arrow.png" alt="Connector Arrow" className="step-arrow-icon" />
                </div>
                <div className="step-details">
                  <h4 className="step-title">Intelligent Tool and Solution Building</h4>
                  <p className="step-desc">
                    Creating specific AI-powered tools and applications that address particular business challenges, leveraging machine learning, deep learning, visual AI and generative AI techniques and IoT automation.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="specialization-item">
                <div className="step-number-container">
                  <span className="step-number">3</span>
                  <img src="/arrow.png" alt="Connector Arrow" className="step-arrow-icon" />
                </div>
                <div className="step-details">
                  <h4 className="step-title">End-to-End Platform Integration</h4>
                  <p className="step-desc">
                    Offering comprehensive services for integrating AI platforms into existing IT infrastructure and providing ongoing support, maintenance, and optimization to ensure seamless operation and maximum value.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="specialization-item">
                <div className="step-number-container">
                  <span className="step-number">4</span>
                  <img src="/arrow.png" alt="Connector Arrow" className="step-arrow-icon" />
                </div>
                <div className="step-details">
                  <h4 className="step-title">Tailored AI Services and support</h4>
                  <p className="step-desc">
                    Providing expert custom development services for a wide range of AI applications, including model development, data engineering, and the creation of intelligent workflows, all aligned with specific client objectives.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 7. Industries We Empower Section */}
      <section className="section-padding industries-section reveal-on-scroll">
        <div className="container">
          
          {/* Watermark and Header Area */}
          <div className="industries-header-area">
            <span className="industries-watermark">Industries</span>
            <div className="specialization-tag-line" style={{ justifyContent: 'center' }}>
              <span className="tag-horizontal-line"></span>
              <span className="specialization-tag" style={{ color: '#4f46e5' }}>INDUSTRY EXPERTISE</span>
              <span className="tag-horizontal-line"></span>
            </div>
            <h2 className="industries-main-title">Industries We Empower</h2>
            <p className="industries-main-desc">
              We deliver tailored AI solutions that drive innovation, efficiency, and growth across diverse sectors. Unlock intelligent transformation in industry.
            </p>
          </div>
          {/* Interactive Content Container */}
          <div className="industries-container-box">
            <div className="industries-showcase-grid">
              
              {/* Left Column: Animated Image Card */}
              <div className="industries-image-col">
                <div className="industries-img-card">
                  {industriesData.map((ind) => (
                    <img 
                      key={ind.id}
                      src={ind.image} 
                      alt={ind.title} 
                      className={`industry-showcase-img ${activeIndustryTab === ind.id ? 'active' : ''}`}
                    />
                  ))}
                  <div className="industry-img-gradient-cover"></div>
                </div>
              </div>
              {/* Right Column: Dynamic Info Card */}
              <div className="industries-info-col">
                {industriesData.map((ind) => (
                  <div 
                    key={ind.id} 
                    className={`industry-info-details ${activeIndustryTab === ind.id ? 'active' : ''}`}
                  >
                    <h3 className="industry-details-title">{ind.title}</h3>
                    <p className="industry-details-text">{ind.desc1}</p>
                    <p className="industry-details-text">{ind.desc2}</p>
                    
                    <SaaSButton to={"/industries/" + ind.slug} variant="primary" className="industry-read-btn">Read more</SaaSButton>
                  </div>
                ))}
              </div>
            </div>
            {/* Bottom Row: Seamless Navigation Tabs */}
            <div className="industries-tabs-bar">
              {industriesData.map((ind) => (
                <button
                  key={ind.id}
                  className={`industry-tab-btn ${activeIndustryTab === ind.id ? 'active' : ''}`}
                  onClick={() => setActiveIndustryTab(ind.id)}
                >
                  {ind.tabTitle}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Premium Client Testimonials Slider - Upgraded with High Contrast & Editorial Style */}
      <section className="section-padding premium-light-testimonials">
        <div className="container">
          <div className="home-services-title-area reveal-on-scroll">
            <span className="section-tag-modern-light">TESTIMONIALS</span>
            <h2 className="section-title-modern-light">
              Trusted by <span className="text-gradient-indigo">Visionary Engineers</span> & Leaders
            </h2>
          </div>

          <div className="testimonials-slider-container reveal-on-scroll">
            {/* Elegant Background Quote Graphic */}
            <div className="testimonial-editorial-quote-mark">"</div>

            <div className="testimonials-track">
              {testimonials.map((t, i) => (
                <div 
                  key={i} 
                  className={`glass-card testimonial-slide-premium ${activeTab === i ? 'active' : ''}`}
                  onClick={() => setActiveTab(i)}
                >
                  <div className="testimonial-stars-premium">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={15} fill="#f59e0b" style={{ color: '#f59e0b' }} />
                    ))}
                  </div>
                  
                  <blockquote className="testimonial-quote-text">
                    "{t.quote}"
                  </blockquote>
                  
                  <div className="testimonial-author-box-premium">
                    <div className="testimonial-avatar-gradient">
                      <span>{t.avatar}</span>
                    </div>
                    <div className="author-meta-premium">
                      <h4 className="testimonial-author-name-fixed">{t.name}</h4>
                      <span className="testimonial-author-role-fixed">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="testimonials-dots-premium">
              {testimonials.map((_, i) => (
                <span 
                  key={i} 
                  className={`dot-indicator-premium ${activeTab === i ? 'active' : ''}`}
                  onClick={() => setActiveTab(i)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Premium News & Blog Section */}
      <section className="section-padding premium-blogs-section reveal-on-scroll">
        <div className="container">
          
          {/* Section Header with View All Button */}
          <div className="blogs-header-grid">
            <div>
              <div className="specialization-tag-line">
                <span className="specialization-tag">NEWS</span>
                <span className="tag-horizontal-line"></span>
              </div>
              <h2 className="industries-main-title" style={{ textAlign: 'left', marginTop: '0.8rem' }}>
                Our Latest News & Blog
              </h2>
            </div>
            <div className="blogs-header-action">
              <Link to="/blog" className="btn btn-secondary blogs-view-all-btn">
                View All Blogs <ArrowRight size={15} style={{ marginLeft: '6px' }} />
              </Link>
            </div>
          </div>

          {/* Homepage 3-Blog Grid */}
          <div className="blogs-homepage-grid">
            {blogsData.slice(0, 3).map((blog) => (
              <div key={blog.id} className="glass-card blog-card-premium">
                <div className="blog-card-img-wrapper" onClick={() => setActiveReadingBlog(blog)}>
                  <img src={blog.image} alt={blog.title} className="blog-card-img" loading="lazy" />
                </div>
                <div className="blog-card-content">
                  <span className="blog-card-category">{blog.category}</span>
                  <h4 className="blog-card-title" onClick={() => setActiveReadingBlog(blog)}>
                    {blog.title}
                  </h4>
                  <div className="blog-card-meta">
                    <span>admin</span>
                    <span className="meta-separator">|</span>
                    <span>{blog.date}</span>
                  </div>
                  <button className="blog-card-link-btn" onClick={() => setActiveReadingBlog(blog)}>
                    Read More »
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* --- DYNAMIC FULL-SCREEN BLOG EXPLORER (30 BLOGS GRID) --- */}
        {showAllBlogs && (
          <div className="blog-explorer-overlay">
            <div className="blog-explorer-container animate-fade-in">
              
              {/* Explorer Header */}
              <div className="explorer-header-bar">
                <h2 className="explorer-title">PAYIVVA Tech Insights</h2>
                <button className="explorer-close-btn" onClick={() => setShowAllBlogs(false)}>
                  Close Explorer ✕
                </button>
              </div>

              {/* Filters & Search Toolbar */}
              <div className="explorer-toolbar">
                <div className="explorer-categories">
                  {["All", "AIML", "Computer Vision", "Gen AI", "NLP", "Deep Learning", "Cloud Future"].map((cat) => (
                    <button
                      key={cat}
                      className={`explorer-cat-btn ${selectedBlogCategory === cat ? 'active' : ''}`}
                      onClick={() => setSelectedBlogCategory(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <div className="explorer-search-box">
                  <input 
                    type="text" 
                    placeholder="Search technical insights..." 
                    className="explorer-search-input"
                    value={blogSearchQuery}
                    onChange={(e) => setBlogSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* 30 Blogs Grid */}
              <div className="explorer-blogs-grid">
                {blogsData
                  .filter((b) => selectedBlogCategory === "All" || b.category === selectedBlogCategory)
                  .filter((b) => b.title.toLowerCase().includes(blogSearchQuery.toLowerCase()) || b.summary.toLowerCase().includes(blogSearchQuery.toLowerCase()))
                  .map((blog) => (
                    <div key={blog.id} className="glass-card blog-card-premium explorer-card">
                      <div className="blog-card-img-wrapper" onClick={() => setActiveReadingBlog(blog)}>
                        <img src={blog.image} alt={blog.title} className="blog-card-img" loading="lazy" />
                      </div>
                      <div className="blog-card-content">
                        <div className="explorer-card-meta-top">
                          <span className="blog-card-category">{blog.category}</span>
                          <span className="explorer-readtime">{blog.readTime}</span>
                        </div>
                        <h4 className="blog-card-title" onClick={() => setActiveReadingBlog(blog)}>
                          {blog.title}
                        </h4>
                        <p className="explorer-card-summary">{blog.summary}</p>
                        <button className="blog-card-link-btn" onClick={() => setActiveReadingBlog(blog)}>
                          Read More »
                        </button>
                      </div>
                    </div>
                  ))}
              </div>

            </div>
          </div>
        )}

        {/* --- DEEP BLOG POST READER MODAL (FULL CONTENT VIEW) --- */}
        {activeReadingBlog && (
          <div className="blog-reader-overlay" onClick={() => setActiveReadingBlog(null)}>
            <div className="blog-reader-modal animate-slide-up" onClick={(e) => e.stopPropagation()}>
              
              <button className="reader-close-btn" onClick={() => setActiveReadingBlog(null)}>✕</button>
              
              <div className="reader-content-scroll">
                
                {/* Banner Image */}
                <div className="reader-banner-wrapper">
                  <img src={activeReadingBlog.image} alt={activeReadingBlog.title} className="reader-banner-img" loading="lazy" />
                  <div className="reader-banner-gradient"></div>
                  <span className="reader-badge-cat">{activeReadingBlog.category}</span>
                </div>

                {/* Article Content */}
                <div className="reader-article-body">
                  <div className="reader-meta-info">
                    <span>By {activeReadingBlog.author}</span>
                    <span className="meta-dot">•</span>
                    <span>{activeReadingBlog.date}</span>
                    <span className="meta-dot">•</span>
                    <span>{activeReadingBlog.readTime}</span>
                  </div>
                  
                  {/* Keep a single page-level H1; reader modal uses H2 */}
                  <h2 className="reader-article-title">{activeReadingBlog.title}</h2>
                  
                  <div className="reader-article-text-container">
                    {activeReadingBlog.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="reader-paragraph">{paragraph}</p>
                    ))}
                  </div>

                  <div className="reader-footer-actions">
                    <button className="btn btn-secondary" onClick={() => setActiveReadingBlog(null)}>
                      Close Article
                    </button>
                  </div>

                </div>

              </div>

            </div>
          </div>
        )}

      </section>

    </div>
  );
};

export default Home;
