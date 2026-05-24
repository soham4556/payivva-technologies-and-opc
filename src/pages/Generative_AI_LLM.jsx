import { CheckCircle2, AlertTriangle, ShieldCheck, Sparkles, Database, Network, ShieldAlert, Cpu, HeartHandshake, GitBranch, Terminal, FileSpreadsheet, Shield, Layers } from 'lucide-react';
import './styles/ServicePagePremium.css';
import ProjectsSection from '../components/ProjectsSection';

const Generative_AI_LLM = () => {
  return (
    <div className="srv-page-wrapper animate-fade-in">

      <section className="srv-hero-section container">
        <div className="srv-hero-grid">
          <div>
            <span className="srv-badge">AGENTIC SYSTEMS</span>
            <h1 className="srv-title">Deploy Custom <span>Generative AI & LLMs</span></h1>
            <p className="srv-desc">
              Scale operations safely with custom LLM environments and multi-agent systems. We build isolated, sandboxed RAG architectures and custom pipelines that automate enterprise workflows without data leakage.
            </p>
            <div className="tech-pill-row">
              <span className="tech-pill">Isolated RAG Systems</span>
              <span className="tech-pill">Multi-Agent Networks</span>
              <span className="tech-pill">LangChain / LlamaIndex</span>
              <span className="tech-pill">Vector DBs (Pinecone)</span>
            </div>
          </div>
          <div className="premium-glass-graphic-wrapper">
            <img src="/project_img/gen_ai_llm_one.png" alt="Generative AI" className="floating-glowing-graphic" />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="srv-split-showcase">
          <div className="showcase-pane pane-warn">
            <span className="pane-tag red"><AlertTriangle size={14} /> The Enterprise Friction</span>
            <h3 className="pane-title">The Danger of Public LLMs</h3>
            <p className="pane-desc">
              Relying on public cloud APIs leaks sensitive customer data, generates unpredictable hallucinations, and lacks the internal context needed to execute complex processes safely and accurately.
            </p>
          </div>
          <div className="showcase-pane pane-solve">
            <span className="pane-tag cyan"><ShieldCheck size={14} /> The PAYIVVA Solution</span>
            <h3 className="pane-title">Private-Tenant Intelligence</h3>
            <p className="pane-desc">
              We construct isolated RAG networks and sovereign agents. We secure your database connections and utilize semantic vector routing to ensure AI produces reliable, verified decisions grounded in your enterprise knowledge.
            </p>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      <section className="srv-matrix-section container">
        <div className="services-title-area text-center">
          <span className="section-tag-modern-light">CAPABILITIES MATRIX</span>
          <h2 className="section-title-modern-light">Generative Intelligence Frameworks</h2>
        </div>
        <div className="matrix-grid">
          <div className="matrix-card">
            <div className="matrix-icon-box"><Database size={22} /></div>
            <h3 className="matrix-title">Private Enterprise RAG</h3>
            <p className="matrix-desc">Automated semantic search networks that connect your company's files directly to private local LLM interfaces safely. Hybrid search combines dense vectors with keyword matching for maximum retrieval precision.</p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Semantic Vector Routing</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Automated Context Isolation</li>
            </ul>
          </div>
          <div className="matrix-card">
            <div className="matrix-icon-box"><Network size={22} /></div>
            <h3 className="matrix-title">Autonomous Multi-Agents</h3>
            <p className="matrix-desc">Specialized AI agents configured to collaborate, distribute complex tasks, and coordinate enterprise workflows automatically with human-in-the-loop verification gates at critical decision points.</p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Collaborative Multi-Agent Pools</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Safe Executive Verification</li>
            </ul>
          </div>
          <div className="matrix-card">
            <div className="matrix-icon-box"><Sparkles size={22} /></div>
            <h3 className="matrix-title">Custom Fine-Tuning</h3>
            <p className="matrix-desc">Tuning open source weights like LLaMA 3 or Mistral to operate with your custom terminology and database schemas using parameter-efficient LoRA and QLoRA techniques.</p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Domain Weight Training</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Prompt & Output Guardrails</li>
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
            <h4 className="step-title">Knowledge Auditing</h4>
            <p className="step-desc">Analyzing and cleaning corporate databases and unstructured files for high-value knowledge sources.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">02</div>
            <h4 className="step-title">Vector Indexing</h4>
            <p className="step-desc">Parsing documents into high-dimensional vector representations for low-latency similarity search.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">03</div>
            <h4 className="step-title">Agent Configuration</h4>
            <p className="step-desc">Defining specific agent personas, tooling interfaces, and validation parameters for each business function.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">04</div>
            <h4 className="step-title">Production SLA</h4>
            <p className="step-desc">Deploying to highly secure staging environments with comprehensive monitoring and automated failover.</p>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      <section className="srv-outcomes-section">
        <div className="container">
          <div className="outcomes-grid">
            <div className="outcome-card">
              <div className="outcome-val">100%</div>
              <span className="outcome-label">Sovereign Data Security</span>
              <p className="outcome-desc">Your company IP stays inside your private database cloud. Zero data leakage to external model providers.</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-val">+220%</div>
              <span className="outcome-label">Task Velocity</span>
              <p className="outcome-desc">Drastically accelerated execution speeds across automated multi-agent workflows operating around the clock.</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-val">&lt; 1%</div>
              <span className="outcome-label">Hallucination Rate</span>
              <p className="outcome-desc">Ensured by rigorous RAG grounding in your verified knowledge base and multi-source response validation.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">LLM Infrastructure & Private Deployment Architecture</h3>
            <p className="details-text">
              Deploying large language models at enterprise scale requires a carefully architected infrastructure that balances computational requirements with data security. We design private LLM deployments using vLLM and TensorRT-LLM serving frameworks that achieve high throughput inference on NVIDIA A100 and H100 GPU clusters deployed within your virtual private cloud. Our architecture supports multiple concurrent models with isolated memory spaces, ensuring that different business units can operate their own LLM instances without cross-contamination of data or compute resources. We implement intelligent request routing that dispatches queries to the most cost-effective model size based on complexity, reducing operational costs while maintaining response quality across diverse use cases.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num">01</div>
                <div className="vertical-item-content">
                  <h5>Private VPC Deployment</h5>
                  <p>Isolating LLM serving infrastructure within your virtual private cloud with no external network dependencies for inference.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num">02</div>
                <div className="vertical-item-content">
                  <h5>Intelligent Model Routing</h5>
                  <p>Dispatching queries to the optimal model size based on complexity, balancing cost and quality across all use cases.</p>
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
                  <h5>Prompt Injection Defense</h5>
                  <p>Multi-layer guardrails that detect and block prompt injection attacks, jailbreak attempts, and unauthorized data extraction queries.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><ShieldCheck size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Output Content Filtering</h5>
                  <p>Automated scanning of all model outputs for prohibited content, hallucinated information, and compliance violations before delivery.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">LLM Security & Content Governance Framework</h3>
            <p className="details-text">
              Generative AI systems introduce unique security and governance challenges that must be addressed through comprehensive protective measures. We implement multi-layer prompt injection defense systems that detect and block jailbreak attempts, indirect injection attacks, and unauthorized data extraction queries before they reach your LLM. Our output content filtering layer scans every model response for prohibited content, factual inconsistencies, and compliance violations before the response is delivered to the user. All interactions are logged with complete prompt and response payloads, enabling retrospective analysis and audit for security incidents or compliance investigations while maintaining strict access controls on the audit data itself.
            </p>
          </div>
        </div>
      </section>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">LLM Operations Support & Reliability Guarantees</h3>
            <p className="details-text">
              Production LLM systems require dedicated operational support to maintain response quality, latency targets, and service availability. We provide 24/7 monitoring of your LLM endpoints including response quality scoring, latency percentiles, and throughput capacity utilization. Our quality assurance pipelines use LLM-as-judge techniques to automatically evaluate response quality across multiple dimensions including factual accuracy, helpfulness, and safety. We guarantee SLA-backed response times for all service tiers with automated failover to standby model instances if primary infrastructure experiences degradation, ensuring that your generative AI applications remain available and responsive even under adverse conditions.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><HeartHandshake size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Quality Scoring Pipeline</h5>
                  <p>Automated LLM-as-judge evaluation of response quality across factual accuracy, helpfulness, and safety dimensions.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Cpu size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Automated Failover</h5>
                  <p>Instantaneous failover to standby model instances when primary infrastructure experiences latency degradation or service interruption.</p>
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
                  <h5>RAG Pipeline Sprints</h5>
                  <p>Two-week development cycles focused on expanding knowledge base coverage and improving retrieval precision for your specific domain.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><CheckCircle2 size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Agent Behavior Validation</h5>
                  <p>Automated test suites that validate multi-agent coordination, tool selection accuracy, and output quality before each release.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">Agile GenAI Delivery & Agent Improvement Cycles</h3>
            <p className="details-text">
              We deliver generative AI solutions through structured agile sprints that continuously improve model performance and knowledge base coverage. Each two-week development cycle focuses on specific improvements such as expanding vector index coverage, refining retrieval precision, or adding new agent capabilities based on user feedback and usage analytics. Our automated evaluation framework runs comprehensive test suites against every agent configuration change, validating tool selection accuracy, response quality, and safety compliance before any update reaches production. Stakeholder demo sessions at the end of each sprint provide visibility into progress and enable rapid course correction based on real user feedback.
            </p>
          </div>
        </div>
      </section>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">Enterprise System Integration & API Architecture</h3>
            <p className="details-text">
              LLM and agent systems must integrate with your existing enterprise tooling to deliver practical business value. We design API layers that expose agent capabilities through well-documented interfaces consumable by your internal applications, Slack channels, and custom portals. Our integration architecture supports tool-calling patterns that allow agents to query your CRM, update support tickets, retrieve documents from your knowledge base, and trigger workflows in your ERP system through secure, auditable API connections. Each integration is implemented with proper authentication, rate limiting, and payload validation to ensure that agent actions respect your existing security policies and system constraints.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Terminal size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Agent API Gateway</h5>
                  <p>Secure, authenticated API endpoints that expose agent capabilities to internal applications with rate limiting and audit logging.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><FileSpreadsheet size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Enterprise Tool Integration</h5>
                  <p>Pre-built connectors for Salesforce, ServiceNow, Jira, and custom APIs that allow agents to execute real business actions.</p>
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
                  <h5>Knowledge Base Audit</h5>
                  <p>Comprehensive review of your enterprise documents, databases, and knowledge sources to assess RAG readiness and coverage gaps.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Shield size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Security Architecture Review</h5>
                  <p>Assessment of your data isolation requirements, access control policies, and compliance obligations for generative AI deployment.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">Diagnostic Onboarding & GenAI Readiness Assessment</h3>
            <p className="details-text">
              Before deploying generative AI, we conduct a thorough readiness assessment that evaluates your knowledge infrastructure, security requirements, and use case suitability. Our senior architects review your enterprise document repositories, database schemas, and API surfaces to determine the optimal RAG architecture and identify knowledge coverage gaps that must be addressed. We assess your data sensitivity classification, access control policies, and regulatory obligations to design an isolation architecture that satisfies your security requirements. The diagnostic phase produces a detailed deployment roadmap with prioritized use cases, infrastructure requirements, and realistic timelines for delivering measurable business value.
            </p>
          </div>
        </div>
      </section>

      <ProjectsSection />

    </div>
  );
};

export default Generative_AI_LLM;
