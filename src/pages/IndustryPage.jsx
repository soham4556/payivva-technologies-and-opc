import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import SaaSButton from '../components/SaaSButton';
import { getIndustryBySlug } from '../data/industries';
import './styles/IndustryPage.css';
const getSectionTitles = (slug, tabTitle) => {
  switch (slug) {
    case 'manufacturing-industrial-iot':
      return {
        ai: 'Applied Manufacturing AI Solutions',
        ml: 'Industrial Machine Learning & Automation',
        cloud: 'Smart Factory Cloud & Data Analytics',
        iot: 'Industrial IoT & Real-Time Telemetry',
        security: 'Industrial Cyber Security & Safety Compliance',
        matrixTitle: 'Industrial Control Matrix',
        matrixDesc: 'Edge infrastructure orchestrating IIoT networks and shopfloor automation:'
      };
    case 'cybersecurity-cloud-systems':
      return {
        ai: 'AI-Native Cybersecurity Solutions',
        ml: 'Machine Learning & Threat Automation',
        cloud: 'Secure Multi-Cloud & Threat Analytics',
        iot: 'Security Information (SIEM) & Endpoint Monitoring',
        security: 'Zero-Trust Security & Data Sovereignty Compliance',
        matrixTitle: 'Threat Intelligence Matrix',
        matrixDesc: 'Secure neural pipeline monitoring multi-cloud nodes and threat anomalies:'
      };
    case 'logistics-supply-chain':
      return {
        ai: 'Supply Chain Artificial Intelligence',
        ml: 'Logistics Machine Learning & Route Automation',
        cloud: 'Supply Chain Cloud & Route Analytics',
        iot: 'Fleet IoT & Real-Time Cargo Monitoring',
        security: 'Logistics Trade Security & Regulatory Compliance',
        matrixTitle: 'Logistics Optimization Matrix',
        matrixDesc: 'Dynamic neural framework calculating shipping routing and supply telemetry:'
      };
    case 'ecommerce-retail':
      return {
        ai: 'Personalized E-commerce AI Solutions',
        ml: 'Smart Retail Machine Learning & Personalization',
        cloud: 'E-commerce Cloud & Customer Conversion Analytics',
        iot: 'Smart Retail IoT & Smart Inventory Monitoring',
        security: 'E-commerce Security, Fraud Prevention & PCI Compliance',
        matrixTitle: 'Conversion Intelligence Matrix',
        matrixDesc: 'Personalized recommendation network tracking inventory and checkout funnels:'
      };
    case 'finance-fintech':
      return {
        ai: 'Applied AI in Banking & FinTech',
        ml: 'Algorithmic Machine Learning & Risk Automation',
        cloud: 'FinTech Cloud & Real-Time Fraud Analytics',
        iot: 'Transaction IoT & Real-Time Auditing Systems',
        security: 'FinTech Enterprise Security & Regulatory Compliance',
        matrixTitle: 'Risk Mitigation Matrix',
        matrixDesc: 'High-speed algorithmic node classifying transactions and fraud anomalies:'
      };
    case 'healthcare-biotech':
      return {
        ai: 'Clinical Artificial Intelligence & Biotech Solutions',
        ml: 'Healthcare Machine Learning & Diagnostic Automation',
        cloud: 'Biotech Cloud & HIPAA-Compliant Analytics',
        iot: 'Smart Medical IoT & Real-Time Patient Monitoring',
        security: 'Healthcare Enterprise Security & HIPAA Regulatory Compliance',
        matrixTitle: 'Clinical Diagnosis Matrix',
        matrixDesc: 'HIPAA-compliant deep learning structure scanning medical telemetry:'
      };
    default:
      return {
        ai: `${tabTitle} Artificial Intelligence Solutions`,
        ml: `${tabTitle} Machine Learning & Automation`,
        cloud: `${tabTitle} Cloud & Data Analytics`,
        iot: `${tabTitle} IoT & Real-Time Monitoring`,
        security: `${tabTitle} Enterprise Security & Compliance`,
        matrixTitle: 'System Execution Matrix',
        matrixDesc: 'Integrated framework leveraging production-grade neural structures:'
      };
  }
};

const IndustryPage = () => {
  const { slug } = useParams();
  const industry = getIndustryBySlug(slug);
  
  const titles = getSectionTitles(slug, industry?.tabTitle || '');

  useEffect(() => {
    // Hide the global background brain grid for a clean industry page
    const bgGrid = document.querySelector('.bg-grid');
    if (bgGrid) {
      bgGrid.style.display = 'none';
    }
    
    // Restore it when leaving the industry subpages
    return () => {
      if (bgGrid) {
        bgGrid.style.display = 'block';
      }
    };
  }, [slug]);

  // Scroll Reveal Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Dynamic clean observer bind
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [slug]);

  if (!industry) {
    return (
      <div className="industry-404">
        <h1>Industry not found</h1>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="industry-page">

      {/* 1. Hero Section */}
      <section className="industry-hero">
        <div className="industry-container">
          <div className="industry-hero-grid">
            <div className="industry-hero-content">
              <h1 className="industry-hero-title">{industry.title}</h1>
              <p className="industry-hero-desc">{industry.heroDesc}</p>
              <div className="industry-hero-actions">
                <SaaSButton to="/contact" variant="primary">Start Your Project</SaaSButton>
                <SaaSButton to="/services" variant="ghost">Explore Services</SaaSButton>
              </div>
            </div>
            <div className="industry-hero-visual">
              <div className="industry-hero-img-placeholder">
                <img src={industry.image} alt={industry.title} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Industry Overview - Restructured to 2-Column Layout with custom overviewImage */}
      <section className="industry-overview reveal-on-scroll">
        <div className="industry-container industry-overview-grid-container">
          
          {/* Left Column: Text Content */}
          <div className="industry-overview-text-col">
            <div className="industry-section-header industry-overview-header-left">
              <h2 className="industry-section-title">Understanding the {industry.tabTitle} Landscape</h2>
            </div>
            <div className="industry-overview-content">
              <p>{industry.overview}</p>
            </div>
          </div>

          {/* Right Column: Premium Image Card */}
          <div className="industry-overview-image-col">
            <div className="industry-overview-img-wrapper">
              <img src={industry.overviewImage} alt={`${industry.title} Overview`} className="overview-side-img" loading="lazy" />
              <div className="overview-img-glow-overlay"></div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Industry Challenges - Stepped Vertical Timeline Restructure */}
      <section className="industry-challenges">
        <div className="industry-container">
          <div className="industry-section-header">
            <h2 className="industry-section-title">Key Challenges We Solve</h2>
            <p className="industry-section-desc">
              {industry.tabTitle} organizations face complex, interconnected obstacles that require intelligent, data-driven solutions.
            </p>
          </div>
          
          <div className="challenges-timeline-container">
            {industry.challenges.map((challenge, i) => (
              <div key={i} className={`timeline-step-row reveal-on-scroll delay-${(i % 3) + 1}`}>
                <div className="timeline-step-number-col">
                  <div className="step-circle-number">{i + 1}</div>
                  {i < industry.challenges.length - 1 && <div className="step-connecting-line"></div>}
                </div>
                <div className="timeline-step-content-card">
                  <h3 className="timeline-step-title">{challenge.title}</h3>
                  <p className="timeline-step-desc">{challenge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="industry-stats-strip">
        <div className="industry-container">
          <div className="industry-stats-grid">
            {industry.stats.map((stat, i) => (
              <div key={i} className="industry-stat-item">
                <span className="industry-stat-value">{stat.value}</span>
                <span className="industry-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AI & Technology Solutions - Premium Asymmetrical Bento Grid Restructure */}
      <section className="industry-ai-solutions">
        <div className="industry-container">
          <div className="industry-section-header">
            <h2 className="industry-section-title">{titles.ai}</h2>
            <p className="industry-section-desc">
              Purpose-built AI systems engineered to address the unique demands of the {industry.tabTitle.toLowerCase()} sector.
            </p>
          </div>
          <div className="industry-grid-bento">
            {industry.aiSolutions.map((sol, i) => {
              const isWide = i === 0 || i === 3; 
              return (
                <div key={i} className={`industry-card bento-card reveal-on-scroll ${isWide ? 'bento-card-wide' : 'bento-card-narrow'} delay-${(i % 3) + 1}`}>
                  <div className="bento-badge">SYSTEM SOLUTION 0{i + 1}</div>
                  <h3 className="industry-card-title">{sol.title}</h3>
                  <p className="industry-card-desc">{sol.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Machine Learning & Automation Applications - Premium Grid Restructure */}
      <section className="industry-ml-apps">
        <div className="industry-container">
          <div className="industry-section-header">
            <h2 className="industry-section-title">{titles.ml}</h2>
            <p className="industry-section-desc">
              Deploy production-grade machine learning models that automate complex workflows and uncover hidden patterns.
            </p>
          </div>
          
          <div className="ml-apps-grid-container">
            {industry.mlApplications.map((app, i) => (
              <div key={i} className={`ml-app-grid-card reveal-on-scroll delay-${(i % 3) + 1}`}>
                <div className="ml-app-card-header">
                  <div className="ml-app-icon-sphere">
                    <span className="sphere-inner"></span>
                  </div>
                  <h3 className="ml-app-card-title">{app.title}</h3>
                </div>
                <p className="ml-app-card-desc">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Cloud & Data Analytics - High-Contrast Metrics Pipeline Restructure */}
      <section className="industry-cloud">
        <div className="industry-container">
          <div className="industry-section-header">
            <h2 className="industry-section-title">{titles.cloud}</h2>
            <p className="industry-section-desc">
              Scalable, secure cloud architectures and real-time analytics platforms that transform raw data into strategic assets.
            </p>
          </div>
          
          <div className="cloud-analytics-metrics-grid">
            {industry.cloudAnalytics.map((item, i) => (
              <div key={i} className={`analytics-metric-row-card reveal-on-scroll delay-${(i % 3) + 1}`}>
                <div className="metric-icon-sphere">
                  <span className="sphere-inner"></span>
                </div>
                <div className="metric-info-text">
                  <h3 className="metric-title">{item.title}</h3>
                  <p className="metric-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. IoT & Real-Time Monitoring */}
      <section className="industry-iot">
        <div className="industry-container">
          <div className="industry-section-header">
            <h2 className="industry-section-title">{titles.iot}</h2>
            <p className="industry-section-desc">
              Connect, monitor, and optimize physical assets with intelligent IoT ecosystems and real-time telemetry.
            </p>
          </div>
          <div className="industry-grid-3col">
            {industry.iotMonitoring.map((item, i) => (
              <div key={i} className="industry-card">
                <h3 className="industry-card-title">{item.title}</h3>
                <p className="industry-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Use Cases */}
      <section className="industry-usecases">
        <div className="industry-container">
          <div className="industry-section-header">
            <h2 className="industry-section-title">Real-World Impact</h2>
            <p className="industry-section-desc">
              Proven deployments that have delivered measurable results for organizations in the {industry.tabTitle.toLowerCase()} sector.
            </p>
          </div>
          <div className="industry-usecases-list">
            {industry.useCases.map((uc, i) => (
              <div key={i} className={`industry-usecase-item reveal-on-scroll delay-${(i % 3) + 1}`}>
                <span className="industry-usecase-number">{String(i + 1).padStart(2, '0')}</span>
                <div className="industry-usecase-body">
                  <h3 className="industry-usecase-title">{uc.title}</h3>
                  <p className="industry-usecase-desc">{uc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Benefits & Business Impact */}
      <section className="industry-impact">
        <div className="industry-container">
          <div className="industry-section-header">
            <h2 className="industry-section-title">Benefits &amp; Measurable Outcomes</h2>
            <p className="industry-section-desc">
              Every engagement is designed to deliver quantifiable, business-transforming results.
            </p>
          </div>
          <div className="industry-impact-grid">
            {industry.businessImpact.map((item, i) => (
              <div key={i} className={`industry-impact-card reveal-on-scroll delay-${(i % 4) + 1}`}>
                <CheckCircle size={24} className="industry-impact-icon" />
                <h3 className="industry-impact-title">{item.title}</h3>
                <p className="industry-impact-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Integration Capabilities */}
      <section className="industry-integration">
        <div className="industry-container">
          <div className="industry-section-header">
            <h2 className="industry-section-title">Integration Capabilities</h2>
            <p className="industry-section-desc">
              Seamlessly connect with your existing technology stack through our comprehensive integration framework.
            </p>
          </div>
          <div className="industry-grid-2col">
            {industry.integrationCapabilities.map((item, i) => (
              <div key={i} className="industry-card">
                <h3 className="industry-card-title">{item.title}</h3>
                <p className="industry-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Security & Compliance */}
      <section className="industry-security">
        <div className="industry-container">
          <div className="industry-section-header">
            <h2 className="industry-section-title">{titles.security}</h2>
            <p className="industry-section-desc">
              Built on a foundation of trust with enterprise-grade security, privacy, and compliance frameworks.
            </p>
          </div>
          <div className="industry-grid-3col">
            {industry.securityCompliance.map((item, i) => (
              <div key={i} className="industry-card">
                <h3 className="industry-card-title">{item.title}</h3>
                <p className="industry-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Why Choose Us */}
      <section className="industry-whyus">
        <div className="industry-container">
          <div className="industry-section-header">
            <h2 className="industry-section-title">Why Partner With Us</h2>
            <p className="industry-section-desc">
              What sets our approach apart in delivering {industry.tabTitle.toLowerCase()} AI solutions.
            </p>
          </div>
          <div className="industry-grid-2col">
            {industry.whyChooseUs.map((item, i) => (
              <div key={i} className="industry-card industry-card-accent">
                <h3 className="industry-card-title">{item.title}</h3>
                <p className="industry-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Case Study */}
      <section className="industry-casestudy">
        <div className="industry-container">
          <div className="industry-section-header">
            <h2 className="industry-section-title">Client Success Story</h2>
          </div>
          <div className="industry-casestudy-card reveal-on-scroll">
            <h3 className="industry-casestudy-title">{industry.caseStudy.title}</h3>
            <div className="industry-casestudy-section">
              <h4>The Challenge</h4>
              <p>{industry.caseStudy.challenge}</p>
            </div>
            <div className="industry-casestudy-section">
              <h4>Our Solution</h4>
              <p>{industry.caseStudy.solution}</p>
            </div>
            <div className="industry-casestudy-section">
              <h4>The Result</h4>
              <p>{industry.caseStudy.result}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ Section */}
      <section className="industry-faq">
        <div className="industry-container">
          <div className="industry-section-header">
            <h2 className="industry-section-title">Frequently Asked Questions</h2>
            <p className="industry-section-desc">
              Answers to common questions about our {industry.tabTitle.toLowerCase()} AI solutions.
            </p>
          </div>
          <div className="industry-faq-list">
            {industry.faqs.map((faq, i) => (
              <details key={i} className={`industry-faq-item reveal-on-scroll delay-${(i % 3) + 1}`}>
                <summary className="industry-faq-question">
                  <span>{faq.q}</span>
                  <span className="industry-faq-icon">+</span>
                </summary>
                <div className="industry-faq-answer">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 15. Contact Section */}
      <section className="industry-cta">
        <div className="industry-container">
          <div className="industry-cta-card reveal-on-scroll">
            <h2 className="industry-cta-title">
              Ready to Transform Your {industry.tabTitle} Operations?
            </h2>
            <p className="industry-cta-desc">{industry.contactCTA}</p>
            <div className="industry-cta-actions">
              <SaaSButton to="/contact" variant="primary">Schedule a Consultation</SaaSButton>
              <SaaSButton to="/services" variant="ghost">View All Services</SaaSButton>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IndustryPage;
