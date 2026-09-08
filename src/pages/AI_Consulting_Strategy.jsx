import { CheckCircle2, AlertTriangle, ShieldCheck, FileSpreadsheet, Network, Layers, ShieldAlert, Cpu, HeartHandshake, GitBranch, Terminal, Shield } from 'lucide-react';
import './styles/ServicePagePremium.css';
import ProjectsSection from '../components/ProjectsSection';

const AI_Consulting_Strategy = () => {
  return (
    <div className="srv-page-wrapper animate-fade-in">

      {/* 1: Strategic Hero */}
      <section className="srv-hero-section container">
        <div className="srv-hero-grid">
          <div>
            <span className="srv-badge">AI ARCHITECTURE</span>
            <h1 className="srv-title">AI Consulting and <span>Strategy for Enterprise Transformation</span></h1>
            <p className="srv-desc">
              AI transformation is not one-size-fits-all. We audit your existing data structures and construct rigorous, compliance-first, and ROI-aligned roadmaps that scale your competitive advantage. Our deep expertise bridges the gap between C-suite objectives and production deployment, preparing you to lead the market with custom systems built for growth.
            </p>
            <div className="tech-pill-row">
              <span className="tech-pill">Maturity Auditing</span>
              <span className="tech-pill">EU AI Act / HIPAA</span>
              <span className="tech-pill">ROI Mapping</span>
              <span className="tech-pill">Ecosystem Design</span>
            </div>
          </div>
          <div className="premium-glass-graphic-wrapper">
            <img src="/project_img/ai_strategy_one.png" alt="Strategic Roadmap" className="floating-glowing-graphic" />
          </div>
        </div>
      </section>

      {/* 2: Problem Diagnostic */}
      <section className="container">
        <div className="srv-split-showcase">
          <div className="showcase-pane pane-warn">
            <span className="pane-tag red"><AlertTriangle size={14} /> The Enterprise Friction</span>
            <h3 className="pane-title">Why 70% of Enterprise AI Sprints Fail</h3>
            <p className="pane-desc">
              Most firms jump directly into LLMs without analyzing their underlying data pipelines, resulting in massive API overhead, insecure IP leaks, and solutions that fail to align with real business metrics. Our diagnostics show that without a structured schema definition and data readiness validation, automated workflows generate severe hallucinations that disrupt operations.
            </p>
          </div>

          {/* 3: PAYIVVA Solution */}
          <div className="showcase-pane pane-solve">
            <span className="pane-tag cyan"><ShieldCheck size={14} /> The PAYIVVA Solution</span>
            <h3 className="pane-title">Sovereign Roadmap Construction</h3>
            <p className="pane-desc">
              We build a sandboxed blueprint. We evaluate build vs. buy decisions, select compliance-safe foundation models, and secure your internal data layers so AI operates as a proprietary asset. By setting up strict local routing and data scrubbing models, we shield your intellectual property while giving teams access to highly tuned private intelligence.
            </p>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      {/* 4: Capabilities Matrix */}
      <section className="srv-matrix-section container">
        <div className="services-title-area text-center">
          <span className="section-tag-modern-light">CAPABILITIES MATRIX</span>
          <h2 className="section-title-modern-light">Technical Strategy Frameworks</h2>
        </div>
        <div className="matrix-grid">
          <div className="matrix-card">
            <div className="matrix-icon-box"><FileSpreadsheet size={22} /></div>
            <h3 className="matrix-title">Data Readiness & Auditing</h3>
            <p className="matrix-desc">
              We map, clean, and profile your relational and unstructured data silos, ensuring they are high-fidelity and structured for retrieval augmented systems. Our engineers build custom cleaning scripts to eradicate duplicate schemas, consolidate inconsistent attributes, and establish structured databases that allow local models to query information without processing lag.
            </p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Schema & Pipeline Mapping</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Leakage & Anonymity Controls</li>
            </ul>
          </div>
          <div className="matrix-card">
            <div className="matrix-icon-box"><Network size={22} /></div>
            <h3 className="matrix-title">Sovereign Architecture Design</h3>
            <p className="matrix-desc">
              We design isolated hybrid infrastructures to support training without sharing proprietary intelligence models. By decoupling model endpoints from external services, we construct highly secure middleware layers that proxy all traffic, intercept data leaks, and route heavy vector searches to secure local databases hosted in your private cloud.
            </p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Model Selection Protocols</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Vector Database Routing</li>
            </ul>
          </div>
          <div className="matrix-card">
            <div className="matrix-icon-box"><Layers size={22} /></div>
            <h3 className="matrix-title">Risk & Compliance Strategy</h3>
            <p className="matrix-desc">
              We guarantee absolute compliance with global AI regulations, including GDPR, EU AI Act, and HIPAA mandates. We build custom filter pipelines that audit model outputs, redact personally identifiable information (PII) before transmission, and log system operations so your firm meets strict compliance criteria without slowing down processing pipelines.
            </p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Ethical Guardrail Auditing</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Governance Layer Protocol</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      {/* 5: Execution Pipeline */}
      <section className="srv-pipeline-section container">
        <div className="services-title-area text-center">
          <span className="section-tag-modern-light">THE WORKFLOW</span>
          <h2 className="section-title-modern-light">Zero-Friction Integration Pipeline</h2>
        </div>
        <div className="pipeline-grid">
          <div className="pipeline-step">
            <div className="step-num-node">01</div>
            <h4 className="step-title">Diagnostic Audit</h4>
            <p className="step-desc">We review database schemas, assess server loads, and map business targets to define high-impact AI opportunities.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">02</div>
            <h4 className="step-title">System Architecture</h4>
            <p className="step-desc">Drafting formal microservice structures, secure API routes, database schemas, and compliance boundaries.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">03</div>
            <h4 className="step-title">Proof-of-Concept</h4>
            <p className="step-desc">Deploying a sandboxed, private-tenant prototype in 3 weeks to validate data retrieval speeds and accuracy levels.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">04</div>
            <h4 className="step-title">Scaling & SLA</h4>
            <p className="step-desc">Migrating systems to secure staging networks, running penetration audits, and guaranteeing absolute system uptime SLAs.</p>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      {/* 6: Outcomes & SLA */}
      <section className="srv-outcomes-section">
        <div className="container">
          <div className="outcomes-grid">
            <div className="outcome-card">
              <div className="outcome-val">100%</div>
              <span className="outcome-label">Compliance Guarantee</span>
              <p className="outcome-desc">We guarantee absolute data security. All strategy layouts strictly respect global privacy rules and protect corporate datasets.</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-val">3 - 6 Wks</div>
              <span className="outcome-label">Prototype Delivery</span>
              <p className="outcome-desc">We deliver a working, sandboxed AI model to your engineering team rapidly so you can audit system feasibility and data speeds.</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-val">2.5x</div>
              <span className="outcome-label">Process Velocity</span>
              <p className="outcome-desc">Average yield improvement across automated enterprise tasks, slashing manual backlog issues and accelerating pipeline scale.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      {/* 7: Operational Architecture & Infra Mapping */}
      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">Sovereign Cloud & Edge Infrastructure Mapping</h3>
            <p className="details-text">
              An elite strategic plan requires a flawless hardware layout. We map your data routing pathways across private hybrid cloud networks and localized GPU processing endpoints. By planning secure virtual private clouds (VPCs) and routing intensive vector embeddings through dedicated local server configurations, we eliminate the need to transmit your core business intelligence across public internet channels. This custom setup provides your enterprise with absolute control over processor latency, blocks unauthorized third-party logging loops, and guarantees that model inference loads scale horizontally without inflating your cloud operational bills.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num">01</div>
                <div className="vertical-item-content">
                  <h5>Private Cloud VPC Planning</h5>
                  <p>Isolating AI model runtimes within dedicated, fully encrypted virtual private networks to secure active operational metrics.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num">02</div>
                <div className="vertical-item-content">
                  <h5>GPU Core Load Balancing</h5>
                  <p>Distributing massive computation requests across dedicated local tensor cores to maintain rapid response speeds during high traffic.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8: Enterprise Compliance & Security Protocols */}
      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><ShieldAlert size={14} /></div>
                <div className="vertical-item-content">
                  <h5>PII Anonymization Layer</h5>
                  <p>Custom parsing filters scrub database records to remove names, social numbers, and credit details before AI data queries.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><ShieldCheck size={14} /></div>
                <div className="vertical-item-content">
                  <h5>EU AI Act Compliance</h5>
                  <p>Continuous audit logs record system parameters, training sets, and model adjustments to satisfy global safety criteria.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">Rigorous Corporate Compliance & Data Scrubbing</h3>
            <p className="details-text">
              We construct custom data scrubbing nodes that run before any AI query is processed. These secure endpoints analyze input structures and automatically mask personally identifiable information (PII) such as customer account numbers, addresses, and transaction logs, satisfying strict GDPR, HIPAA, and EU AI Act regulations. We guarantee that your enterprise audits will pass smoothly, as we maintain rigorous logs of model configurations, vector database parameters, and testing metrics, ensuring your AI systems operate with absolute safety, integrity, and total compliance transparency at all times.
            </p>
          </div>
        </div>
      </section>

      {/* 9: SLA Uptime & Support Guarantee */}
      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">Engineering Uptime & Dedicated SLA Support</h3>
            <p className="details-text">
              We back our strategic designs with absolute support agreements. PAYIVVA provides dedicated engineering desks to monitor your local models, run continuous system checks, and deploy automated failover rules to prevent downtime. Our service level agreements (SLAs) guarantee active monitoring around the clock, with rapid response times for L1, L2, and L3 support issues. By setting up automated model fallback layers and isolated backup database replicas, we ensure your operations run without interruption, maintaining pristine performance indexes and supporting your customer acquisition funnels at maximum efficiency.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><HeartHandshake size={14} /></div>
                <div className="vertical-item-content">
                  <h5>24/7 Dedicated Support Desk</h5>
                  <p>Our senior engineers actively monitor database queries and model health, resolving anomalies before they affect users.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Cpu size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Automated System Failover</h5>
                  <p>Isolated backup nodes activate instantly if primary processing servers experience connection spikes, ensuring continuous operations.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 10: Agile Phase Progression */}
      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><GitBranch size={14} /></div>
                <div className="vertical-item-content">
                  <h5>GitFlow Development Cycles</h5>
                  <p>All software updates pass through strict regression tests, peer code reviews, and sandboxed staging deployments before launch.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><CheckCircle2 size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Stakeholder Live Demos</h5>
                  <p>We present working features in two-week intervals, gathering immediate feedback to align systems with your core objectives.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">Agile Engineering & Sprint Iterations</h3>
            <p className="details-text">
              We operate in structured, two-week development sprints to maintain high speed and complete alignment with your corporate goals. Our team follows modern GitFlow release patterns, ensuring that every code update passes through automated testing suites, static analysis checks, and rigorous peer code reviews. We coordinate closely with your internal IT leaders, presenting live sprint demos at the end of each development cycle to gather immediate input, optimize system features, and ensure that final systems integrate seamlessly with your operational processes.
            </p>
          </div>
        </div>
      </section>

      {/* 11: Tech Stack Compatibility & Decoupling */}
      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">Sovereign Tech Integration & Architecture Decoupling</h3>
            <p className="details-text">
              We design modular, decoupled software architectures that integrate seamlessly with your existing technology stacks. By building lightweight, secure API layers and gRPC routing nodes, we connect new AI features to your legacy systems without requiring a complete infrastructure redesign. We deploy database sharding rules and Redis caching nodes to handle high-frequency queries easily, ensuring that your core transactions operate independently of vector search workflows and maintaining pristine system speed metrics across all operational units.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Terminal size={14} /></div>
                <div className="vertical-item-content">
                  <h5>gRPC Microservices Mesh</h5>
                  <p>Decoupling core processes using lightweight RPC routing to minimize CPU overhead and accelerate internal communication speed.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><FileSpreadsheet size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Sharded SQL Caching</h5>
                  <p>Partitioning large data tables and caching queries inside high-speed Redis nodes to maintain fast database response times.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 12: Diagnostic Audit Flow */}
      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Layers size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Pipeline Bandwidth Analysis</h5>
                  <p>We stress-test your existing server frameworks to measure database access lag and plan secure, scalable microservice nodes.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Shield size={14} /></div>
                <div className="vertical-item-content">
                  <h5>IP Leakage Diagnostics</h5>
                  <p>We audit data pathways to identify potential exposure points, ensuring proprietary information remains isolated within secure boundaries.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">Diagnostic Onboarding & System Intake Auditing</h3>
            <p className="details-text">
              Before we write a single line of custom code, we run a comprehensive system intake audit to map all operational metrics. Our senior architects stress-test your legacy backends, audit data access speeds, and analyze system bandwidth parameters to identify potential security exposure points. By locating data leakage risks early, we establish a robust plan to insulate your data, planning customized integration paths that connect new technology to your systems smoothly, safely, and with zero disruption to your active daily transactions.
            </p>
          </div>
        </div>
      </section>

      <ProjectsSection />

    </div>
  );
};

export default AI_Consulting_Strategy;
