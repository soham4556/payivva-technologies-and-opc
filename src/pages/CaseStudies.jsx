import { useMemo, useState } from 'react';
import { ArrowRight, BarChart3, CheckCircle2, Filter, Layers3, Sparkles } from 'lucide-react';
import './styles/CaseStudies.css';

const caseStudies = [
  {
    id: 1,
    category: 'AI Systems',
    title: 'Enterprise AI Ops for Financial Workflows',
    summary: 'We designed a private AI workflow that reduced manual review time across finance teams and improved decision turnaround.',
    impact: ['-62% manual effort', '+3.4x throughput', '99.2% audit traceability'],
    image: '/project_img/finanace.png',
    highlight: 'A secure, role-based AI layer for approvals, summaries, and anomaly routing.',
  },
  {
    id: 2,
    category: 'Software',
    title: 'Unified SaaS Platform for Logistics Control',
    summary: 'A modular operations platform consolidated order movement, exception handling, and customer visibility into one system.',
    impact: ['-48% support load', '+27% fulfillment speed', 'Single source of truth'],
    image: '/project_img/supplychain.png',
    highlight: 'Built for teams that need visibility without adding process overhead.',
  },
  {
    id: 3,
    category: 'AI Systems',
    title: 'Vision Pipeline for Quality Inspection',
    summary: 'A computer vision pipeline scanned products at the edge and flagged defects before packaging completed.',
    impact: ['99.4% detection', '12ms latency', '-41% wastage'],
    image: '/project_img/bio.png',
    highlight: 'Edge-first inspection with clear operator alerts and trace logs.',
  },
  {
    id: 4,
    category: 'Growth',
    title: 'Revenue Engine for B2B Lead Generation',
    summary: 'We rebuilt acquisition around conversion intent, CRM routing, and landing page sequencing.',
    impact: ['+4.5% CVR', '3,500+ leads', '$3.2M pipeline'],
    image: '/project_img/blog_business.png',
    highlight: 'Marketing aligned with sales follow-up and measurable ROI.',
  },
  {
    id: 5,
    category: 'Software',
    title: 'Customer Portal for Healthcare Operations',
    summary: 'A patient-facing portal reduced calls, accelerated onboarding, and centralized service requests.',
    impact: ['-35% call volume', '+2.1x self-service', 'Mobile responsive'],
    image: '/project_img/blog_deep_learning.png',
    highlight: 'Secure access, structured journeys, and fast support handoff.',
  },
  {
    id: 6,
    category: 'Growth',
    title: 'SEO and Content System for Technical Brands',
    summary: 'A content architecture and SEO program increased organic visibility for a complex B2B offering.',
    impact: ['+14k sessions', '45 top-3 keywords', '-$180k ad spend'],
    image: '/project_img/blog_cloud_sovereignty.png',
    highlight: 'Structured search content with measurable business outcomes.',
  },
];

const categories = ['All', 'AI Systems', 'Software', 'Growth'];

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeCase, setActiveCase] = useState(caseStudies[0]);

  const filteredCases = useMemo(() => {
    return caseStudies.filter((item) => activeCategory === 'All' || item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="case-studies-page-wrapper animate-fade-in">
      <div className="premium-edge-section case-hero">
        <div className="case-studies-hero">
          <span className="resource-kicker">CASE STUDIES</span>
          <h1>Proof of Work, Not Just Promises</h1>
          <p>
            Selected delivery stories across AI, software, and growth systems. Every project is framed by the problem,
            the build, and the measurable result.
          </p>

          <div className="case-studies-metrics">
            <div className="metric-card">
              <BarChart3 size={18} />
              <strong>30+</strong>
              <span>delivery stories</span>
            </div>
            <div className="metric-card">
              <Sparkles size={18} />
              <strong>3 lanes</strong>
              <span>AI, software, growth</span>
            </div>
            <div className="metric-card">
              <CheckCircle2 size={18} />
              <strong>Outcome-led</strong>
              <span>built around business value</span>
            </div>
          </div>
        </div>
      </div>

      <div className="premium-edge-section case-filters">
        <div className="case-studies-filterbar">
          <div className="case-studies-filterlabel">
            <Filter size={16} /> Filter by category
          </div>
          <div className="case-studies-chiprow">
            {categories.map((category) => (
              <button
                key={category}
                className={`case-chip ${activeCategory === category ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(category);
                  setActiveCase((prev) => {
                    const next = caseStudies.find((item) => (category === 'All' || item.category === category)) || prev;
                    return next;
                  });
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="premium-edge-section case-grid">
        <div className="case-studies-layout">
          <article className="case-featured-card">
            <img src={activeCase.image} alt={activeCase.title} />
            <div className="case-featured-body">
              <span className="case-tag">{activeCase.category}</span>
              <h2>{activeCase.title}</h2>
              <p>{activeCase.summary}</p>
              <div className="case-impact-row">
                {activeCase.impact.map((item) => (
                  <span key={item} className="case-impact-pill">
                    {item}
                  </span>
                ))}
              </div>
              <div className="case-highlight">
                <Layers3 size={16} />
                <span>{activeCase.highlight}</span>
              </div>
            </div>
          </article>

          <aside className="case-list-panel">
            {filteredCases.map((item) => (
              <button
                key={item.id}
                className={`case-list-item ${activeCase.id === item.id ? 'active' : ''}`}
                onClick={() => setActiveCase(item)}
              >
                <img src={item.image} alt={item.title} />
                <div>
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                </div>
              </button>
            ))}
          </aside>
        </div>

        <div className="case-study-grid">
          {filteredCases.map((item) => (
            <article key={item.id} className="case-mini-card">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <button onClick={() => setActiveCase(item)}>
                Open story <ArrowRight size={15} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
