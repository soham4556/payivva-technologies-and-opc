import { CheckCircle2, AlertTriangle, ShieldCheck, Database, Cpu, Layers, ShieldAlert, HeartHandshake, GitBranch, Terminal, FileSpreadsheet, Shield } from 'lucide-react';
import './styles/ServicePagePremium.css';
import ProjectsSection from '../components/ProjectsSection';

const Software_Development = () => {
  return (
    <div className="srv-page-wrapper animate-fade-in">

      <section className="srv-hero-section container">
        <div className="srv-hero-grid">
          <div>
            <span className="srv-badge">SCALABLE SYSTEMS</span>
            <h1 className="srv-title">Bespoke Enterprise <span>Software Development</span></h1>
            <p className="srv-desc">
              We design and construct scalable enterprise systems. From robust microservices architectures to secure transactional backends, we deliver clean custom code bases engineered to handle high throughputs securely.
            </p>
            <div className="tech-pill-row">
              <span className="tech-pill">React / Next.js</span>
              <span className="tech-pill">Node / Go / Java</span>
              <span className="tech-pill">Microservices Architecture</span>
              <span className="tech-pill">Kubernetes Mesh</span>
            </div>
          </div>
          <div className="premium-glass-graphic-wrapper">
            <img src="/project_img/software_dev_one.png" alt="Software Engineering" className="floating-glowing-graphic" />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="srv-split-showcase">
          <div className="showcase-pane pane-warn">
            <span className="pane-tag red"><AlertTriangle size={14} /> The Enterprise Friction</span>
            <h3 className="pane-title">The Limit of Template Stacks</h3>
            <p className="pane-desc">
              Relying on standard generic frameworks limits operational speed, creates massive technical debt, and leads to codebases that are highly vulnerable to security breaches and costly maintenance cycles.
            </p>
          </div>
          <div className="showcase-pane pane-solve">
            <span className="pane-tag cyan"><ShieldCheck size={14} /> The PAYIVVA Solution</span>
            <h3 className="pane-title">Clean, Secure Architectures</h3>
            <p className="pane-desc">
              We construct custom, scalable platforms from scratch. We leverage modern microservices, implement strict API security boundaries, and ensure systems scale smoothly to meet rising demands.
            </p>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      <section className="srv-matrix-section container">
        <div className="services-title-area text-center">
          <span className="section-tag-modern-light">CAPABILITIES MATRIX</span>
          <h2 className="section-title-modern-light">Software Engineering Competencies</h2>
        </div>
        <div className="matrix-grid">
          <div className="matrix-card">
            <div className="matrix-icon-box"><Cpu size={22} /></div>
            <h3 className="matrix-title">Backend Microservices</h3>
            <p className="matrix-desc">Developing fast backend systems using Go, Node, or Java to ensure low-latency processing across services with circuit breaker patterns and distributed tracing for resilience.</p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Distributed APIs (gRPC/GraphQL)</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Message Broker Routing</li>
            </ul>
          </div>
          <div className="matrix-card">
            <div className="matrix-icon-box"><Layers size={22} /></div>
            <h3 className="matrix-title">Cloud Native Deployment</h3>
            <p className="matrix-desc">Leveraging containerized systems (Docker/Kubernetes) to allow seamless vertical scaling across clouds with service mesh and canary deployment strategies.</p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Kubernetes Mesh Design</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Infrastructure as Code (Terraform)</li>
            </ul>
          </div>
          <div className="matrix-card">
            <div className="matrix-icon-box"><Database size={22} /></div>
            <h3 className="matrix-title">Data Storage Architectures</h3>
            <p className="matrix-desc">Structuring reliable relational and NoSQL databases to secure transaction logs and support queries at scale with proper sharding and read replica strategies.</p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> PostgreSQL & Redis Caching</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Sharding & Replication Pipelines</li>
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
            <h4 className="step-title">System Analysis</h4>
            <p className="step-desc">Analyzing requirements and detailing microservice database parameters and security compliance needs.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">02</div>
            <h4 className="step-title">Design Architecture</h4>
            <p className="step-desc">Mapping API routing maps, data flow diagrams, and defining database boundaries with C4 modeling approach.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">03</div>
            <h4 className="step-title">CI/CD Pipeline</h4>
            <p className="step-desc">Automating testing and validation stages across deployment branches with quality gates and security scans.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">04</div>
            <h4 className="step-title">SLA Production</h4>
            <p className="step-desc">Deploying to highly secure staging environments and establishing absolute support guarantees with monitoring.</p>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      <section className="srv-outcomes-section">
        <div className="container">
          <div className="outcomes-grid">
            <div className="outcome-card">
              <div className="outcome-val">99.9%</div>
              <span className="outcome-label">System Uptime SLA</span>
              <p className="outcome-desc">Continuous service availability backed by automated clustering engines and multi-region failover capabilities.</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-val">100%</div>
              <span className="outcome-label">Custom Codebases</span>
              <p className="outcome-desc">Zero reliance on heavy pre-made template blocks. Full ownership and unrestricted customization of proprietary IP.</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-val">ISO</div>
              <span className="outcome-label">27001 Security Ready</span>
              <p className="outcome-desc">Rigorous encryption layers built directly into all API interfaces ensuring security certification readiness.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">Cloud Infrastructure & Deployment Architecture</h3>
            <p className="details-text">
              Enterprise software demands a robust and scalable infrastructure foundation. We design cloud-native architectures using Kubernetes orchestration with auto-scaling node pools that span multiple availability zones for high availability. Our infrastructure-as-code approach using Terraform and Helm ensures that your entire environment can be reproduced consistently across development, staging, and production with zero configuration drift. We implement service mesh architectures using Istio for fine-grained traffic control, mutual TLS encryption between all services, and comprehensive observability through distributed tracing with OpenTelemetry, centralized logging with Elasticsearch, and real-time metrics dashboards with Prometheus and Grafana.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num">01</div>
                <div className="vertical-item-content">
                  <h5>Multi-AZ Kubernetes</h5>
                  <p>Orchestrating containerized services across multiple availability zones with automated pod scaling and self-healing cluster management.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num">02</div>
                <div className="vertical-item-content">
                  <h5>Observability Stack</h5>
                  <p>Comprehensive monitoring with distributed tracing, centralized logging, and real-time metrics dashboards for full system visibility.</p>
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
                  <h5>Vulnerability Scanning</h5>
                  <p>Automated dependency scanning, container image analysis, and runtime threat detection integrated into the CI/CD pipeline.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><ShieldCheck size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Access Control Audit</h5>
                  <p>Fine-grained RBAC policies with regular access reviews and automated audit logging of all system access events.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">Enterprise Security & Compliance Framework</h3>
            <p className="details-text">
              Security is embedded into every layer of our software architecture rather than added as an afterthought. We implement defense-in-depth strategies that include network segmentation, encrypted data storage at rest and in transit, and comprehensive API security with OAuth 2.0 and OpenID Connect authentication. Our automated vulnerability scanning pipeline analyzes every dependency, container image, and code commit for known security issues before they reach production. We maintain detailed security documentation and compliance artifacts that support SOC 2, ISO 27001, and HIPAA certification processes, including incident response runbooks, access control matrices, and data flow diagrams that demonstrate complete coverage of your security requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">Production Operations & Support Guarantees</h3>
            <p className="details-text">
              Enterprise software requires enterprise-grade operational support to maintain availability, performance, and reliability. We provide 24/7 production monitoring with automated incident detection and escalation procedures that ensure rapid response to any system anomaly. Our SRE practices include error budget tracking, capacity planning, and chaos engineering experiments that proactively identify weaknesses before they cause user-facing incidents. We guarantee SLA-backed response times across all severity levels with dedicated support engineers who know your architecture intimately. Automated runbooks handle common operational procedures like database failover, cache warming, and deployment rollbacks without requiring manual intervention.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><HeartHandshake size={14} /></div>
                <div className="vertical-item-content">
                  <h5>24/7 SRE Monitoring</h5>
                  <p>Continuous production surveillance with automated incident detection, root cause analysis, and SLA-backed response times.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Cpu size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Chaos Engineering</h5>
                  <p>Proactive resilience testing through controlled failure injection experiments that validate system recovery capabilities.</p>
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
                  <h5>Two-Week Sprints</h5>
                  <p>Structured agile development cycles with automated testing, code review gates, and stakeholder demo presentations.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><CheckCircle2 size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Quality Gates</h5>
                  <p>Automated code quality, test coverage, and security scan gates that prevent substandard code from reaching production environments.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">Agile Development & Delivery Methodology</h3>
            <p className="details-text">
              We deliver custom software through disciplined agile sprints that maintain predictable velocity while adapting to evolving requirements. Our two-week development cycles include comprehensive automated testing, peer code reviews, and security scanning at every stage. We follow GitFlow branching strategies with feature flags that allow safe, incremental releases without deployment risk. Each sprint concludes with a stakeholder demo where working software is presented and feedback is gathered for prioritization in the next cycle. Our project management dashboards provide real-time visibility into sprint progress, burndown metrics, and blocker tracking so your team always knows exactly where the project stands.
            </p>
          </div>
        </div>
      </section>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">Technology Stack Integration & Legacy Compatibility</h3>
            <p className="details-text">
              New software must coexist with existing enterprise systems without disrupting ongoing operations. We design integration layers that connect modern microservices with legacy mainframes, monolithic applications, and third-party SaaS platforms through carefully defined anti-corruption layers. Our API gateway architecture provides a unified entry point for all services with authentication, rate limiting, and request transformation capabilities. We implement strangler fig patterns for gradually migrating functionality from legacy systems without big-bang cutovers, reducing risk while delivering incremental value. Database migration tooling with schema versioning and reversible migrations ensures that data layer changes are safe and auditable.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Terminal size={14} /></div>
                <div className="vertical-item-content">
                  <h5>API Gateway Layer</h5>
                  <p>Unified API entry point with authentication, rate limiting, request transformation, and legacy system protocol adaptation.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><FileSpreadsheet size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Strangler Fig Migration</h5>
                  <p>Incremental legacy system migration pattern that replaces functionality piece by piece without disruptive cutover events.</p>
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
                <div className="vertical-item-num"><FileSpreadsheet size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Architecture Review</h5>
                  <p>Comprehensive assessment of your current system architecture, technical debt, integration points, and scalability constraints.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Shield size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Security Posture Audit</h5>
                  <p>Evaluation of existing security controls, authentication mechanisms, and data protection measures to identify remediation priorities.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">Diagnostic Onboarding & System Architecture Audit</h3>
            <p className="details-text">
              Before beginning any software development engagement, we conduct a comprehensive audit of your existing architecture, technical debt, and integration landscape. Our senior architects analyze your current codebase quality, deployment infrastructure, and team workflows to identify improvement opportunities and establish baseline metrics. We review your security posture, authentication mechanisms, and data protection measures to identify critical remediation priorities. The diagnostic phase produces a detailed transformation roadmap with prioritized recommendations, accurate effort estimates, and a realistic delivery timeline aligned with your business priorities and operational constraints.
            </p>
          </div>
        </div>
      </section>

      <ProjectsSection />

    </div>
  );
};

export default Software_Development;
