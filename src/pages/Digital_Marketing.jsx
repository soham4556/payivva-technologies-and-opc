import { CheckCircle2, AlertTriangle, ShieldCheck, BarChart3, Target, Share2, ShieldAlert, Cpu, HeartHandshake, GitBranch, Terminal, FileSpreadsheet, Shield, Layers } from 'lucide-react';
import './styles/ServicePagePremium.css';
import MarketingProjectsSection from '../components/MarketingProjectsSection';

const Digital_Marketing = () => {
  return (
    <div className="srv-page-wrapper animate-fade-in">

      <section className="srv-hero-section container">
        <div className="srv-hero-grid">
          <div>
            <span className="srv-badge">PERFORMANCE GROW</span>
            <h1 className="srv-title">Digital Growth Systems for <span>Technology Companies</span></h1>
            <p className="srv-desc">
              Stop burning budgets on generic views. We deploy technical SEO hierarchies, cost-attribution setups, and optimized paid loops built specifically to capture enterprise client interest.
            </p>
            <div className="tech-pill-row">
              <span className="tech-pill">Technical Schema SEO</span>
              <span className="tech-pill">GA4 Advanced Pipelines</span>
              <span className="tech-pill">Conversion Bidding</span>
              <span className="tech-pill">Pipeline Attribution</span>
            </div>
          </div>
          <div className="premium-glass-graphic-wrapper">
            <img src="/project_img/digital.png" alt="Digital Marketing" className="floating-glowing-graphic" />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="srv-split-showcase">
          <div className="showcase-pane pane-warn">
            <span className="pane-tag red"><AlertTriangle size={14} /> The Enterprise Friction</span>
            <h3 className="pane-title">The Cost of Blind Campaigns</h3>
            <p className="pane-desc">
              Many agencies run basic ad groups that inflate impressions without securing real buyer pipelines. Without proper attribution maps, your marketing budget is spent blindly.
            </p>
          </div>
          <div className="showcase-pane pane-solve">
            <span className="pane-tag cyan"><ShieldCheck size={14} /> The PAYIVVA Solution</span>
            <h3 className="pane-title">Rigorous Conversion Loops</h3>
            <p className="pane-desc">
              We connect robust GA4 pipelines directly to your CRM backends. We deploy structured content hierarchies and optimized bidding models to secure high-intent leads at low cost.
            </p>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      <section className="srv-matrix-section container">
        <div className="services-title-area text-center">
          <span className="section-tag-modern-light">CAPABILITIES MATRIX</span>
          <h2 className="section-title-modern-light">Performance Marketing Competencies</h2>
        </div>
        <div className="matrix-grid">
          <div className="matrix-card">
            <div className="matrix-icon-box"><Target size={22} /></div>
            <h3 className="matrix-title">Conversion Bid Management</h3>
            <p className="matrix-desc">Structuring conversion-oriented bidding groups to lower cost-per-acquisition metrics across networks with value-based optimization strategies.</p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> CPA Bid Optimization</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Lead Retargeting Funnels</li>
            </ul>
          </div>
          <div className="matrix-card">
            <div className="matrix-icon-box"><BarChart3 size={22} /></div>
            <h3 className="matrix-title">System Analytics Pipelines</h3>
            <p className="matrix-desc">Integrating advanced tracking systems (GA4, GTM) to provide clear attribution flows and performance data with server-side tracking that survives ad blockers.</p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Live Attribution Modeling</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Dynamic Custom Event Tagging</li>
            </ul>
          </div>
          <div className="matrix-card">
            <div className="matrix-icon-box"><Share2 size={22} /></div>
            <h3 className="matrix-title">Organic SEO Authority</h3>
            <p className="matrix-desc">Structuring technical content schemas and building backlink frameworks to secure rank positions on search engines through strategic content development.</p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Technical SEO Architectures</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Structural Entity Linking</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      <section className="srv-pipeline-section container">
        <div className="services-title-area text-center">
          <span className="section-tag-modern-light">THE WORKFLOW</span>
          <h2 className="section-title-modern-light">System Pipeline Integration</h2>
        </div>
        <div className="pipeline-grid">
          <div className="pipeline-step">
            <div className="step-num-node">01</div>
            <h4 className="step-title">Attribution Mapping</h4>
            <p className="step-desc">Setting up GA4 configurations and mapping transaction events to revenue with server-side tracking.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">02</div>
            <h4 className="step-title">Campaign Structure</h4>
            <p className="step-desc">Building structured search groups and setting up conversion criteria aligned with pipeline stages.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">03</div>
            <h4 className="step-title">Optimization Tuning</h4>
            <p className="step-desc">Refining target parameters to lower cost-per-click values based on performance data analysis.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">04</div>
            <h4 className="step-title">Pipeline Tracking</h4>
            <p className="step-desc">Connecting structured leads directly to your sales department pipelines through closed-loop reporting.</p>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      <section className="srv-outcomes-section">
        <div className="container">
          <div className="outcomes-grid">
            <div className="outcome-card">
              <div className="outcome-val">-40%</div>
              <span className="outcome-label">Customer Acquisition Cost</span>
              <p className="outcome-desc">Significant cost reductions achieved by optimizing target parameters and eliminating wasteful spend.</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-val">+140%</div>
              <span className="outcome-label">Organic View Growth</span>
              <p className="outcome-desc">Substantial volume improvements secured through technical schema setups and strategic content development.</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-val">100%</div>
              <span className="outcome-label">Attribution Clarity</span>
              <p className="outcome-desc">Clear, traceable pipelines displaying precisely which ads drive enterprise leads and closed revenue.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">Marketing Analytics Infrastructure & Data Architecture</h3>
            <p className="details-text">
              Data-driven marketing requires a sophisticated analytics infrastructure that captures every meaningful interaction across your digital presence. We design comprehensive tracking architectures using Google Analytics 4 with customized event schemas that map to your specific business KPIs and sales funnel stages. Our server-side tagging implementation using Google Tag Manager Server Container ensures data completeness by sending conversion events directly from your web server to analytics platforms, bypassing browser-level tracking limitations imposed by ad blockers and privacy restrictions. Custom Looker Studio dashboards provide real-time visibility into campaign performance, pipeline contribution, and ROI across all channels, enabling data-driven budget allocation decisions.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num">01</div>
                <div className="vertical-item-content">
                  <h5>Server-Side Tracking</h5>
                  <p>Ad-blocker resistant analytics implementation that captures complete conversion data through server-side Google Tag Manager.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num">02</div>
                <div className="vertical-item-content">
                  <h5>Custom Event Schema</h5>
                  <p>Tailored GA4 event architecture that maps user interactions to your specific sales pipeline stages and revenue attribution model.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><ShieldAlert size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Data Privacy Compliance</h5>
                  <p>GDPR and CCPA compliant tracking implementations with cookie consent management and automated data anonymization protocols.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><ShieldCheck size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Fraud Click Protection</h5>
                  <p>Automated detection and exclusion of invalid traffic from ad platforms, protecting your budget from bot clicks and click fraud.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">Marketing Compliance & Budget Protection</h3>
            <p className="details-text">
              Modern digital marketing must navigate complex privacy regulations while protecting advertising budgets from fraud and waste. We implement GDPR and CCPA compliant tracking architectures with cookie consent management platforms that respect user preferences while maintaining data completeness for analytics. Our click fraud detection systems automatically identify and exclude invalid traffic patterns including bot clicks, click farms, and competitor abuse, protecting your ad budget from fraudulent activity. We implement conversion delay modeling and view-through attribution windows calibrated to your specific sales cycle, ensuring that your reporting accurately reflects the true performance of each marketing channel without over-attributing to last-click interactions.
            </p>
          </div>
        </div>
      </section>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">Marketing Operations & Performance Monitoring</h3>
            <p className="details-text">
              Sustained marketing performance requires continuous optimization and proactive management across all channels. We provide 24/7 monitoring of campaign performance metrics including impression share, cost per acquisition, conversion rates, and return on ad spend across Google Ads, LinkedIn, Meta, and programmatic platforms. Our optimization team conducts weekly performance reviews that analyze search query data, audience segment performance, and creative fatigue metrics to identify optimization opportunities. We maintain automated rules that pause underperforming ad groups, adjust bids based on performance thresholds, and redistribute budget to high-performing channels without requiring manual intervention.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><HeartHandshake size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Weekly Optimization</h5>
                  <p>Dedicated account management with weekly performance reviews, bid adjustments, and creative refresh recommendations.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Cpu size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Automated Budget Rules</h5>
                  <p>Intelligent rules that automatically reallocate budget to top-performing campaigns and pause underperforming ad groups.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><GitBranch size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Testing Sprints</h5>
                  <p>Structured A/B testing cycles that validate creative variations, landing page designs, and audience targeting strategies.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><CheckCircle2 size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Statistical Validation</h5>
                  <p>Rigorous statistical significance testing that prevents false positive optimization decisions and ensures reliable performance improvements.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">Agile Marketing & Testing Methodology</h3>
            <p className="details-text">
              We apply agile principles to marketing optimization, running structured testing sprints that systematically improve campaign performance. Each two-week sprint focuses on specific hypotheses about audience targeting, creative messaging, landing page design, or bidding strategy that are tested through statistically rigorous A/B experiments. Our testing framework ensures sufficient sample sizes, proper randomization, and statistical significance validation before any optimization is implemented permanently. We maintain a testing roadmap that prioritizes experiments based on potential impact and implementation effort, ensuring that your marketing budget is continuously optimized through data-driven decisions rather than gut feelings.
            </p>
          </div>
        </div>
      </section>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">Marketing Technology Stack Integration</h3>
            <p className="details-text">
              Effective digital marketing requires a cohesive technology stack where all tools share data and work together seamlessly. We integrate your marketing platforms including Google Ads, LinkedIn Campaign Manager, Meta Ads Manager, HubSpot, Salesforce, and your custom CRM into a unified data ecosystem. Our integration architecture uses APIs and webhook connections that synchronize audience segments, conversion data, and lead information across platforms in real time. We implement customer data platform (CDP) architectures using tools like Segment or Snowplow that create unified customer profiles from across your marketing channels, enabling sophisticated audience targeting and personalization that increases conversion rates.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Terminal size={14} /></div>
                <div className="vertical-item-content">
                  <h5>CDP Integration</h5>
                  <p>Customer data platform architecture that creates unified profiles from across all marketing channels for sophisticated audience targeting.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><FileSpreadsheet size={14} /></div>
                <div className="vertical-item-content">
                  <h5>CRM Sync Pipeline</h5>
                  <p>Real-time synchronization of leads, conversions, and attribution data between ad platforms and your Salesforce or HubSpot CRM.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Layers size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Channel Audit</h5>
                  <p>Comprehensive review of your current marketing channels, campaign structures, tracking implementations, and conversion paths.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Shield size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Competitive Analysis</h5>
                  <p>Analysis of competitor marketing strategies, keyword gaps, ad copy approaches, and content positioning to identify opportunities.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">Diagnostic Onboarding & Marketing Maturity Assessment</h3>
            <p className="details-text">
              Before we optimize your marketing, we conduct a comprehensive audit of your current marketing operations, tracking infrastructure, and performance baseline. Our senior analysts review your campaign structures, conversion tracking implementations, attribution models, and reporting dashboards to identify gaps and opportunities. We analyze your competitive landscape, keyword coverage, ad copy effectiveness, and landing page conversion rates to establish a clear baseline and prioritize improvements. The diagnostic phase produces a detailed marketing maturity assessment with prioritized recommendations, accurate budget allocation guidance, and a phased optimization roadmap aligned with your growth objectives.
            </p>
          </div>
        </div>
      </section>

      <MarketingProjectsSection />

    </div>
  );
};

export default Digital_Marketing;
