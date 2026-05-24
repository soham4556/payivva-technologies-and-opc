import { CheckCircle2, AlertTriangle, ShieldCheck, Globe, Code, Zap, ShieldAlert, Cpu, HeartHandshake, GitBranch, Terminal, FileSpreadsheet, Shield, Layers } from 'lucide-react';
import './styles/ServicePagePremium.css';
import ProjectsSection from '../components/ProjectsSection';

const Website_Development = () => {
  return (
    <div className="srv-page-wrapper animate-fade-in">

      <section className="srv-hero-section container">
        <div className="srv-hero-grid">
          <div>
            <span className="srv-badge">ELITE WEB</span>
            <h1 className="srv-title">High-Performance <span>Custom Web Development</span></h1>
            <p className="srv-desc">
              We design and engineer lightning-fast custom web platforms. By replacing heavy pre-made templates with optimized React systems and vanilla CSS code bases, we ensure elite SEO structures and flawless displays.
            </p>
            <div className="tech-pill-row">
              <span className="tech-pill">React / Vite</span>
              <span className="tech-pill">Vanilla CSS Stylesheets</span>
              <span className="tech-pill">SSR & Static Generation</span>
              <span className="tech-pill">Lighthouse SEO Audits</span>
            </div>
          </div>
          <div className="premium-glass-graphic-wrapper">
            <img src="/project_img/webdev.png" alt="Web Development" className="floating-glowing-graphic" />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="srv-split-showcase">
          <div className="showcase-pane pane-warn">
            <span className="pane-tag red"><AlertTriangle size={14} /> The Enterprise Friction</span>
            <h3 className="pane-title">The Downside of Heavy Templates</h3>
            <p className="pane-desc">
              Standard site builders bundle massive scripts that drag down page speed, ruin your Google page rankings, and lower conversion metrics because of slow loading times.
            </p>
          </div>
          <div className="showcase-pane pane-solve">
            <span className="pane-tag cyan"><ShieldCheck size={14} /> The PAYIVVA Solution</span>
            <h3 className="pane-title">Bespoke Zero-Bloat Webbases</h3>
            <p className="pane-desc">
              We build custom web systems designed specifically for performance. We guarantee clean markup, high speed index pass rates, and clean layouts that convert active pipelines.
            </p>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      <section className="srv-matrix-section container">
        <div className="services-title-area text-center">
          <span className="section-tag-modern-light">CAPABILITIES MATRIX</span>
          <h2 className="section-title-modern-light">Web Engineering Specializations</h2>
        </div>
        <div className="matrix-grid">
          <div className="matrix-card">
            <div className="matrix-icon-box"><Code size={22} /></div>
            <h3 className="matrix-title">Bespoke Frontends</h3>
            <p className="matrix-desc">Constructing custom web interfaces using Vite, React, and modular CSS configurations to maximize rendering speed with zero-bloat architectures.</p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Zero-Bloat Vanilla CSS</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Modular Component Stacks</li>
            </ul>
          </div>
          <div className="matrix-card">
            <div className="matrix-icon-box"><Zap size={22} /></div>
            <h3 className="matrix-title">Performance Optimization</h3>
            <p className="matrix-desc">Tuning image scaling, caching rules, and server configurations to secure highly fluid browser metrics with modern WebP and AVIF image formats.</p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Pristine Core Web Vitals</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> CDN Assets Edge Routing</li>
            </ul>
          </div>
          <div className="matrix-card">
            <div className="matrix-icon-box"><Globe size={22} /></div>
            <h3 className="matrix-title">SEO Schema Taxonomies</h3>
            <p className="matrix-desc">Structuring correct technical schemas and page hierarchies to secure prime indexing positions on Google with multi-stage JSON-LD structured data.</p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Semantic SEO Code Layers</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Multi-stage JSON-LD Schemas</li>
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
            <h4 className="step-title">Page Taxonomy Mapping</h4>
            <p className="step-desc">Designing clean site schemas and defining target content structures with proper URL hierarchies.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">02</div>
            <h4 className="step-title">Interface Engineering</h4>
            <p className="step-desc">Coding clean, responsive web layers with modular CSS frameworks and accessible component design.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">03</div>
            <h4 className="step-title">SEO & Speed Tuning</h4>
            <p className="step-desc">Tuning asset size, caching directives, and indexing markup for optimal search engine visibility.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">04</div>
            <h4 className="step-title">CDN Deployment</h4>
            <p className="step-desc">Hosting web systems on secure edge CDNs to minimize loading times globally with DDoS protection.</p>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      <section className="srv-outcomes-section">
        <div className="container">
          <div className="outcomes-grid">
            <div className="outcome-card">
              <div className="outcome-val">99/100</div>
              <span className="outcome-label">Lighthouse Speed Rating</span>
              <p className="outcome-desc">Pristine performance scoring reflecting optimized script loads and efficient render strategies.</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-val">PASSED</div>
              <span className="outcome-label">Core Web Vitals Audit</span>
              <p className="outcome-desc">Ensures perfect layout stability and rapid response metrics in Google browser audits.</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-val">100%</div>
              <span className="outcome-label">Responsive Fidelity</span>
              <p className="outcome-desc">Flawless page rendering across mobile screens, tablets, and desktop displays.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">Web Infrastructure & Hosting Architecture</h3>
            <p className="details-text">
              A high-performance website requires an infrastructure optimized for speed, reliability, and global reach. We deploy web applications on edge CDN networks like Cloudflare and Fastly that cache content at hundreds of points of presence worldwide, ensuring instant load times regardless of user geography. Our hosting architecture separates static assets from dynamic application logic, serving pre-built pages through CDN edge workers while API requests route to auto-scaled origin servers. We implement automated cache invalidation strategies that ensure content updates propagate globally within seconds, and our infrastructure includes DDoS protection, WAF rules, and bot management that keep your site secure and performant under all traffic conditions.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num">01</div>
                <div className="vertical-item-content">
                  <h5>Edge CDN Distribution</h5>
                  <p>Serving cached content from hundreds of global points of presence for instant page loads anywhere in the world.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num">02</div>
                <div className="vertical-item-content">
                  <h5>Auto-Scaled Origins</h5>
                  <p>Dynamic origin servers that automatically scale based on traffic patterns, ensuring consistent performance during traffic spikes.</p>
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
                  <h5>WAF & Bot Protection</h5>
                  <p>Web application firewall rules and bot detection that block malicious traffic while allowing legitimate search engine crawlers.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><ShieldCheck size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Form Data Encryption</h5>
                  <p>End-to-end encryption of user-submitted data with TLS 1.3 and server-side validation that prevents injection attacks.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">Web Security & Data Protection Standards</h3>
            <p className="details-text">
              Web applications face constant security threats from automated attacks, data breaches, and compliance violations. We implement comprehensive security measures including Web Application Firewall (WAF) rules that block SQL injection, cross-site scripting, and other OWASP Top 10 attack vectors before they reach your application. Our Content Security Policy (CSP) headers prevent unauthorized resource loading and mitigate XSS risks. All user data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We implement strict form validation, CSRF protection, and rate limiting on all user-facing endpoints to prevent automated abuse while maintaining a smooth experience for legitimate users.
            </p>
          </div>
        </div>
      </section>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">Website Operations & Performance Monitoring</h3>
            <p className="details-text">
            Maintaining peak website performance requires continuous monitoring and proactive optimization. We implement real user monitoring (RUM) using tools like Lighthouse CI and WebPageTest that track Core Web Vitals metrics across real user sessions, including LCP, FID, CLS, and INP. Our synthetic monitoring runs hourly performance audits from multiple global locations, alerting your team if any metric falls below target thresholds. We provide SLA-backed response times for performance regressions, with automated rollback capabilities that can restore the previous version within minutes if a deployment negatively impacts user experience. Regular performance budgets ensure that new features never degrade the browsing experience.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><HeartHandshake size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Core Web Vitals Monitoring</h5>
                  <p>Continuous tracking of real user LCP, FID, CLS, and INP metrics with automated alerts at configurable threshold breaches.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Cpu size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Performance Budgets</h5>
                  <p>Automated CI checks that enforce bundle size limits, image weight budgets, and request count thresholds on every deployment.</p>
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
                  <h5>Iterative Web Delivery</h5>
                  <p>Two-week sprints with automated Lighthouse audits, visual regression testing, and stakeholder review sessions for continuous improvement.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><CheckCircle2 size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Visual Regression Tests</h5>
                  <p>Automated screenshot comparison testing that catches unintended visual changes before they reach production across all viewports.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">Agile Web Development & Release Process</h3>
            <p className="details-text">
              We deliver web solutions through disciplined agile sprints that maintain quality while enabling rapid iteration. Our two-week development cycles include automated Lighthouse performance audits, visual regression testing across all viewports, and comprehensive accessibility checks that ensure WCAG 2.1 AA compliance. Each release is deployed through a staged pipeline with preview environments that allow stakeholders to review changes in a production-like setting before they go live. Our feature flag infrastructure enables gradual rollouts with real-time performance monitoring, allowing us to detect and address issues before they impact a significant portion of your users.
            </p>
          </div>
        </div>
      </section>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">CMS & Third-Party Integration Architecture</h3>
            <p className="details-text">
              Modern websites must integrate with content management systems, marketing tools, analytics platforms, and ecommerce engines to deliver complete business functionality. We design headless CMS architectures using Sanity, Strapi, or Contentful that decouple content management from presentation, enabling your marketing team to update content independently while developers maintain the frontend experience. Our integration layer connects analytics platforms including Google Analytics 4, HubSpot, and Mixpanel through server-side tracking that survives ad blockers. Ecommerce integrations with Shopify, Stripe, and custom payment gateways are implemented with PCI-compliant data handling that keeps sensitive financial information secure.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Terminal size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Headless CMS Integration</h5>
                  <p>Decoupled content management with Sanity or Strapi that enables marketing team autonomy without developer dependencies.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><FileSpreadsheet size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Server-Side Analytics</h5>
                  <p>Ad-blocker resistant analytics tracking through server-side Google Tag Manager that captures complete user interaction data.</p>
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
                  <h5>Performance Benchmarking</h5>
                  <p>Current site performance audit against competitors with detailed Lighthouse, WebPageTest, and Core Web Vitals baseline measurements.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Shield size={14} /></div>
                <div className="vertical-item-content">
                  <h5>SEO & Content Audit</h5>
                  <p>Comprehensive review of your current SEO structure, content hierarchy, schema markup, and backlink profile to identify optimization opportunities.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">Diagnostic Onboarding & Web Performance Audit</h3>
            <p className="details-text">
              Before we build your new website, we conduct a comprehensive audit of your current digital presence to establish baselines and identify opportunities. Our performance team runs detailed Lighthouse, WebPageTest, and Core Web Vitals assessments that measure every aspect of your current site speed and user experience. We audit your SEO structure, content hierarchy, schema markup, and backlink profile to identify quick wins and strategic opportunities. The diagnostic phase produces a prioritized roadmap with accurate effort estimates, performance targets, and a phased delivery plan that balances quick improvements with longer-term strategic initiatives aligned with your business goals.
            </p>
          </div>
        </div>
      </section>

      <ProjectsSection />

    </div>
  );
};

export default Website_Development;
