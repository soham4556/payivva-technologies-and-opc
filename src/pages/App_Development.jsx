import { CheckCircle2, AlertTriangle, ShieldCheck, Smartphone, Cpu, RefreshCw, ShieldAlert, HeartHandshake, GitBranch, Terminal, FileSpreadsheet, Shield, Layers } from 'lucide-react';
import './styles/ServicePagePremium.css';
import ProjectsSection from '../components/ProjectsSection';

const App_Development = () => {
  return (
    <div className="srv-page-wrapper animate-fade-in">

      <section className="srv-hero-section container">
        <div className="srv-hero-grid">
          <div>
            <span className="srv-badge">MOBILE SYSTEMS</span>
            <h1 className="srv-title">Crafting Premium <span>iOS & Android Apps</span></h1>
            <p className="srv-desc">
              We design and engineer high-performance mobile applications. By leveraging native frameworks, customized UI renderers, and robust offline databases, we build mobile software that retains customers.
            </p>
            <div className="tech-pill-row">
              <span className="tech-pill">SwiftUI / Kotlin</span>
              <span className="tech-pill">Hybrid Flutter / RN</span>
              <span className="tech-pill">Fluid Gestures</span>
              <span className="tech-pill">Offline SQL Databases</span>
            </div>
          </div>
          <div className="premium-glass-graphic-wrapper">
            <img src="/project_img/app_dev_one.png" alt="Mobile App Development" className="floating-glowing-graphic" />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="srv-split-showcase">
          <div className="showcase-pane pane-warn">
            <span className="pane-tag red"><AlertTriangle size={14} /> The Enterprise Friction</span>
            <h3 className="pane-title">Why Mobile Apps Lose Users</h3>
            <p className="pane-desc">
              Heavy hybrid wrappers lead to sluggish launch times, clunky gestures, and battery-draining sync processes. Slow performance damages your brand authority and drives churn rapidly.
            </p>
          </div>
          <div className="showcase-pane pane-solve">
            <span className="pane-tag cyan"><ShieldCheck size={14} /> The PAYIVVA Solution</span>
            <h3 className="pane-title">High-Fidelity Native Engines</h3>
            <p className="pane-desc">
              We focus on speed. We build mobile software using highly optimized native modules, custom gestures, and lightweight local storage layers to keep applications responsive.
            </p>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      <section className="srv-matrix-section container">
        <div className="services-title-area text-center">
          <span className="section-tag-modern-light">CAPABILITIES MATRIX</span>
          <h2 className="section-title-modern-light">Mobile Engineering Specializations</h2>
        </div>
        <div className="matrix-grid">
          <div className="matrix-card">
            <div className="matrix-icon-box"><Smartphone size={22} /></div>
            <h3 className="matrix-title">Fluid iOS & Android Builds</h3>
            <p className="matrix-desc">Developing native interfaces using SwiftUI and Jetpack Compose to ensure smooth, 120Hz rendering speeds with sub-two-second cold start times.</p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Native Swift / Kotlin Builds</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> 120Hz Fluid Gestures</li>
            </ul>
          </div>
          <div className="matrix-card">
            <div className="matrix-icon-box"><RefreshCw size={22} /></div>
            <h3 className="matrix-title">Offline-First Architectures</h3>
            <p className="matrix-desc">Building local SQLite databases and data sync engines that ensure apps operate smoothly without connections using intelligent delta synchronization.</p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> SQLite & WatermelonDB</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Delta Synchronizations</li>
            </ul>
          </div>
          <div className="matrix-card">
            <div className="matrix-icon-box"><Cpu size={22} /></div>
            <h3 className="matrix-title">Secure Enterprise Sync</h3>
            <p className="matrix-desc">Developing custom secure APIs and integration layers to connect mobile interfaces directly to your company's CRM with OAuth 2.0 and biometric authentication.</p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> OAuth2 & Biometric Logins</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Encrypted SQL Local Storage</li>
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
            <h4 className="step-title">UX Mapping</h4>
            <p className="step-desc">Creating wireframes and optimizing mobile user interaction flows with usability testing validation.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">02</div>
            <h4 className="step-title">Core Development</h4>
            <p className="step-desc">Building clean native frontends and robust data sync backends with comprehensive test coverage.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">03</div>
            <h4 className="step-title">Security Audit</h4>
            <p className="step-desc">Running penetration tests and optimizing biometric authentication and API security stages.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">04</div>
            <h4 className="step-title">Store Launch</h4>
            <p className="step-desc">Managing listing deployments on the Apple App Store and Google Play Store with phased rollouts.</p>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      <section className="srv-outcomes-section">
        <div className="container">
          <div className="outcomes-grid">
            <div className="outcome-card">
              <div className="outcome-val">4.8★</div>
              <span className="outcome-label">Average App Store Rating</span>
              <p className="outcome-desc">High rating metrics reflecting responsive performance and intuitive user interface design quality.</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-val">&lt; 1.5s</div>
              <span className="outcome-label">Cold Boot Times</span>
              <p className="outcome-desc">Ultra-fast application launching that prevents early user dropout through optimized initialization.</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-val">99.9%</div>
              <span className="outcome-label">Crash-Free Sessions</span>
              <p className="outcome-desc">Rock-solid runtime reliability backed by rigorous automated test suites across device configurations.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">Mobile Infrastructure & CI/CD Pipeline Architecture</h3>
            <p className="details-text">
              Professional mobile development requires a sophisticated infrastructure that supports rapid iteration while maintaining quality. We build automated CI/CD pipelines using GitHub Actions and Bitrise that compile, test, and distribute your mobile application to both iOS and Android platforms with every code commit. Our infrastructure includes device farm testing across hundreds of real device configurations to catch platform-specific issues before they reach users. We implement feature flag systems that allow gradual rollout of new capabilities, with remote configuration management that enables you to update app behavior without requiring users to install new versions through the app store review process.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num">01</div>
                <div className="vertical-item-content">
                  <h5>Cross-Platform CI/CD</h5>
                  <p>Automated build, test, and distribution pipelines for simultaneous iOS and Android releases with every code change.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num">02</div>
                <div className="vertical-item-content">
                  <h5>Device Farm Testing</h5>
                  <p>Comprehensive testing across hundreds of real device configurations to ensure consistent behavior on every screen size.</p>
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
                  <h5>Data Encryption Layer</h5>
                  <p>SQLCipher encrypted local databases with platform keychain integration for secure credential and sensitive data storage.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><ShieldCheck size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Certificate Pinning</h5>
                  <p>SSL certificate pinning prevents man-in-the-middle attacks by validating server certificates against known public keys.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">Mobile Security & Data Protection Framework</h3>
            <p className="details-text">
              Mobile applications face unique security challenges including device compromise, network interception, and unauthorized data access. We implement defense-in-depth security starting with encrypted local storage using SQLCipher and platform-specific keychain services that protect data even if the device is compromised. Our network communication layer uses certificate pinning to prevent man-in-the-middle attacks and implements OAuth 2.0 with PKCE flow for secure authentication. We follow Apple and Google secure coding guidelines including code obfuscation, runtime integrity checks, and jailbreak detection that prevent unauthorized tampering. Regular penetration testing and vulnerability assessments ensure that your mobile application maintains a strong security posture against evolving threats.
            </p>
          </div>
        </div>
      </section>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">Mobile Operations Support & Performance Monitoring</h3>
            <p className="details-text">
              Mobile applications require specialized monitoring that captures real user interactions across diverse devices and network conditions. We implement real user monitoring (RUM) using tools like Firebase Performance Monitoring and Sentry that track app start times, screen rendering performance, API call latency, and crash rates across all device types and OS versions. Our crash reporting system captures detailed stack traces, device state, and user actions leading up to failures, enabling rapid root cause analysis and hotfix deployment. We provide SLA-backed support for critical issues with the ability to push emergency fixes through app store expedited review processes when necessary.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><HeartHandshake size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Real User Monitoring</h5>
                  <p>Tracking app performance metrics across real devices, OS versions, and network conditions to identify optimization opportunities.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Cpu size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Crash Analytics</h5>
                  <p>Detailed crash reporting with stack traces, device state, and user action sequences for rapid root cause analysis.</p>
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
                  <h5>Bi-Weekly Releases</h5>
                  <p>Regular sprint cycles with automated testing, beta distribution through TestFlight, and stakeholder review sessions.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><CheckCircle2 size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Feature Flag Rollouts</h5>
                  <p>Gradual feature activation through remote configuration flags that enable safe, controlled rollouts without full releases.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">Agile Mobile Development & Release Cycles</h3>
            <p className="details-text">
              Mobile development requires a disciplined release process that balances feature velocity with app store quality standards. We deliver through structured two-week sprints with automated build and test pipelines that validate every commit across both platforms. Our release process includes staged rollouts through TestFlight and Google Play open testing tracks that gather real user feedback before full production release. Feature flags and remote configuration enable safe activation of new capabilities without requiring app store updates, decoupling deployment from release. Each sprint concludes with a stakeholder demo showing working features on real devices, enabling continuous alignment with your business objectives.
            </p>
          </div>
        </div>
      </section>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">Enterprise Integration & Backend Connectivity</h3>
            <p className="details-text">
              Mobile applications must connect securely and reliably to your enterprise backend systems. We design API integration layers that use GraphQL for flexible data fetching and WebSockets for real-time updates, minimizing bandwidth usage on mobile networks. Our offline-first architecture implements local data stores with intelligent conflict resolution that handles concurrent edits gracefully. We provide pre-built connectors for popular enterprise systems including Salesforce, SAP, Oracle, and custom REST APIs through configurable adapter interfaces. Each integration implements retry logic with exponential backoff, request queuing for offline scenarios, and comprehensive error handling that provides clear feedback to users when operations cannot be completed.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Terminal size={14} /></div>
                <div className="vertical-item-content">
                  <h5>GraphQL Data Layer</h5>
                  <p>Efficient mobile data fetching with GraphQL that minimizes payload size and reduces bandwidth consumption on cellular networks.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><FileSpreadsheet size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Enterprise Connectors</h5>
                  <p>Pre-built integration adapters for Salesforce, SAP, and custom backends with offline request queuing and conflict resolution.</p>
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
                  <h5>UX Research Audit</h5>
                  <p>Comprehensive review of your user personas, journey maps, and competitor apps to establish design foundations and experience goals.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Shield size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Technical Feasibility</h5>
                  <p>Assessment of platform requirements, device capabilities, and integration complexity to validate your mobile product vision.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">Diagnostic Onboarding & Mobile Strategy Audit</h3>
            <p className="details-text">
              Before we begin mobile development, we conduct a thorough discovery phase that validates your product vision against technical realities. Our team reviews your user personas, competitor landscape, and success metrics to establish clear design and engineering goals. We assess platform requirements, device compatibility needs, and integration complexity with your existing systems to identify potential challenges early. The diagnostic phase produces a comprehensive mobile strategy document that includes UX research findings, technical architecture recommendations, performance targets, and a phased delivery roadmap with accurate effort and timeline estimates aligned with your business objectives.
            </p>
          </div>
        </div>
      </section>

      <ProjectsSection />

    </div>
  );
};

export default App_Development;
