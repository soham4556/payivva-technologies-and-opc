import { useState } from 'react';
import { ChevronRight, X, AlertTriangle, ShieldCheck, TrendingUp } from 'lucide-react';

const campaignsList = [
  {
    title: 'B2B Pipeline Engineering',
    tabTitle: 'Lead Acquisition',
    image: '/project_img/supplychain.png',
    overview: 'We engineered an automated acquisition funnel, optimizing target search groups and connecting lead captures to CRM systems.',
    problem: 'Apex Logistics was burning $32,000 monthly on blind B2B ad words that generated cold, unqualified calls and zero trackable sales conversions.',
    engineering: 'We audited search queries, designed three fast-loading conversion landing pages, and connected dynamic GA4 conversion APIs to their HubSpot CRM.',
    roi: 'Captured 3,500+ high-value corporate leads, multiplied landing-page conversion yield from 1.2% to 4.5%, and generated $3.2M in qualified sales opportunities.',
  },
  {
    title: 'Technical SEO Dominance',
    tabTitle: 'SEO Authority',
    image: '/project_img/finanace.png',
    overview: 'We restructured indexing schema, injected multi-stage JSON-LD layouts, and built backlink profiles to secure top Google rankings.',
    problem: 'Zenith FinTech spent $15,000 monthly on paid acquisition, lacking organic search presence and losing top keywords to local competition.',
    engineering: 'We refactored site hierarchies to pass Core Web Vitals, injected rich JSON-LD schemas, and deployed a targeted entity-backlinking campaign.',
    roi: 'Ranked 45 high-intent keywords in the Top 3 positions on Google, driving 14,000+ monthly organic sessions and saving $180K in yearly paid ad bills.',
  },
  {
    title: 'Programmatic Ad Funnel',
    tabTitle: 'Programmatic',
    image: '/project_img/bio.png',
    overview: 'We mapped conversion retargeting paths and optimized dynamic bidding parameters to secure software demo sign-ups.',
    problem: 'MedCloud was struggling to convert doctors for their hospital software, with high CAC limiting growth.',
    engineering: 'We set up dynamic retargeting paths, ran A/B testing on ad copies, and adjusted bids automatically to focus budget on active medical clinics.',
    roi: 'Generated 1,500+ demo sign-ups, multiplied ad spend return to 3.5x, and secured $840K in new ARR in 60 days.',
  },
  {
    title: 'Content & Landing Flow',
    tabTitle: 'Content System',
    image: '/project_img/supplychain.png',
    overview: 'We refined page messaging, supporting content, and CTA sequencing to improve engagement and lead quality.',
    problem: 'The client had strong traffic but weak on-page structure, causing visitors to leave before converting.',
    engineering: 'We rebuilt the narrative flow, sharpened offers, and aligned each landing page to one conversion objective.',
    roi: 'Improved page clarity, stronger engagement, and a more efficient path from attention to enquiry.',
  },
  {
    title: 'CRM-Native Lead Routing',
    tabTitle: 'CRM Routing',
    image: '/project_img/finanace.png',
    overview: 'We built a lead delivery flow that moved qualified prospects from marketing into sales without manual delay.',
    problem: 'Slow handoff reduced lead response speed and created friction between marketing and sales teams.',
    engineering: 'We aligned routing rules, lead stages, and notifications so the right sales owner sees the lead immediately.',
    roi: 'Faster follow-up, better sales coordination, and higher close potential from warmer leads.',
  },
];

const MarketingProjectsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const current = campaignsList[activeTab];

  return (
    <section className="srv-projects-section">
      <div className="container">
        <div className="services-title-area text-center">
          <span className="section-tag-modern-light">PIPELINE ANALYSIS</span>
          <h2 className="section-title-modern-light">Digital Marketing Performance</h2>
        </div>

        <div className="industries-container-box service-case-container" style={{ marginTop: '14px' }}>
          <div className="industries-showcase-grid">
            <div className="industries-image-col">
              <div className="industries-img-card">
                {campaignsList.map((campaign, index) => (
                  <img
                    key={campaign.title}
                    src={campaign.image}
                    alt={campaign.title}
                    className={`industry-showcase-img ${activeTab === index ? 'active' : ''}`}
                  />
                ))}
                <div className="industry-img-gradient-cover"></div>
              </div>
            </div>

            <div className="industries-info-col">
              {campaignsList.map((campaign, index) => (
                <div key={campaign.title} className={`industry-info-details ${activeTab === index ? 'active' : ''}`}>
                  <h3 className="industry-details-title">{campaign.title}</h3>
                  <p className="industry-details-text">{campaign.overview}</p>

                  <div className="service-case-compact-cards">
                    <div className="service-case-compact-card">
                      <span className="service-case-compact-label">Operational Pain</span>
                      <p>{campaign.problem}</p>
                    </div>
                    <div className="service-case-compact-card">
                      <span className="service-case-compact-label">Engineering Response</span>
                      <p>{campaign.engineering}</p>
                    </div>
                    <div className="service-case-compact-card">
                      <span className="service-case-compact-label">Outcome Summary</span>
                      <p>{campaign.roi}</p>
                    </div>
                  </div>

                  <button className="btn btn-primary industry-read-btn" onClick={() => setModalOpen(true)}>
                    Read Deep-Dive Case Study <ChevronRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="industries-tabs-bar">
            {campaignsList.map((campaign, index) => (
              <button
                key={campaign.title}
                className={`industry-tab-btn ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {campaign.tabTitle}
              </button>
            ))}
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content-shell" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setModalOpen(false)}>
              <X size={18} />
            </button>

            <span className="srv-badge">PIPELINE AUDIT REPORT</span>
            <h2 className="srv-title" style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>{current.title}</h2>
            <p className="srv-desc" style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>{current.overview}</p>

            <div className="service-portfolio-modal">
              <div className="service-portfolio-modal-panel">
                <h4><AlertTriangle size={15} /> The Budget Leaks</h4>
                <p>{current.problem}</p>
              </div>
              <div className="service-portfolio-modal-panel">
                <h4><ShieldCheck size={15} /> Technical Marketing Setup</h4>
                <p>{current.engineering}</p>
              </div>
            </div>

            <div className="service-portfolio-modal-panel" style={{ marginTop: '16px' }}>
              <h4><TrendingUp size={15} /> Deep ROI Analysis</h4>
              <p>{current.roi}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MarketingProjectsSection;
