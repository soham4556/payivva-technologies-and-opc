import { CheckCircle2, AlertTriangle, ShieldCheck, Eye, Terminal, ScanFace, ShieldAlert, Cpu, HeartHandshake, GitBranch, FileSpreadsheet, Shield, Layers } from 'lucide-react';
import './styles/ServicePagePremium.css';
import ProjectsSection from '../components/ProjectsSection';

const Computer_Vision_NLP = () => {
  return (
    <div className="srv-page-wrapper animate-fade-in">

      <section className="srv-hero-section container">
        <div className="srv-hero-grid">
          <div>
            <span className="srv-badge">SEMANTIC PARSING</span>
            <h1 className="srv-title">Deploy Elite <span>Vision & NLP Systems</span></h1>
            <p className="srv-desc">
              Automate visual detection and unstructured data extraction. We build advanced YOLO visual models and transformers that parse documents, images, and video streams with absolute semantic accuracy.
            </p>
            <div className="tech-pill-row">
              <span className="tech-pill">YOLOv8 Object Tracking</span>
              <span className="tech-pill">BERT & T5 Transformers</span>
              <span className="tech-pill">Sovereign OCR Engines</span>
              <span className="tech-pill">Semantic Pipelines</span>
            </div>
          </div>
          <div className="premium-glass-graphic-wrapper">
            <img src="/project_img/vision_nlp_one.png" alt="Computer Vision Scanner" className="floating-glowing-graphic" />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="srv-split-showcase">
          <div className="showcase-pane pane-warn">
            <span className="pane-tag red"><AlertTriangle size={14} /> The Enterprise Friction</span>
            <h3 className="pane-title">Manual Processing Gaps</h3>
            <p className="pane-desc">
              Companies spend thousands of hours manually copying document values, verifying photos, or moderating feeds. This leads to operational bottlenecks, formatting errors, and massive compliance risks that scale linearly with business growth.
            </p>
          </div>
          <div className="showcase-pane pane-solve">
            <span className="pane-tag cyan"><ShieldCheck size={14} /> The PAYIVVA Solution</span>
            <h3 className="pane-title">Automated Detection Nodes</h3>
            <p className="pane-desc">
              We deploy spatial models that scan feeds and semantic parsing pipelines that convert unstructured PDFs, invoices, and contracts into highly organized databases instantly with greater than 99 percent extraction accuracy.
            </p>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      <section className="srv-matrix-section container">
        <div className="services-title-area text-center">
          <span className="section-tag-modern-light">CAPABILITIES MATRIX</span>
          <h2 className="section-title-modern-light">Visual & Textual Intelligence</h2>
        </div>
        <div className="matrix-grid">
          <div className="matrix-card">
            <div className="matrix-icon-box"><ScanFace size={22} /></div>
            <h3 className="matrix-title">Spatial Object Tracking</h3>
            <p className="matrix-desc">Deploying real-time video nodes that recognize, classify, and track specific spatial targets automatically. Our YOLOv8 models are fine-tuned on your specific environment for minimal false positives.</p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> YOLO v8 / OpenCV Builds</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Edge GPU Integration</li>
            </ul>
          </div>
          <div className="matrix-card">
            <div className="matrix-icon-box"><Eye size={22} /></div>
            <h3 className="matrix-title">Intelligent Document OCR</h3>
            <p className="matrix-desc">Extracting text fields from low-quality scanned papers, invoices, and legal contracts with semantic mapping. Our layout-aware OCR handles skewed scans, handwritten annotations, and multi-language documents.</p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Layout Parsing Systems</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Dynamic Field Extraction</li>
            </ul>
          </div>
          <div className="matrix-card">
            <div className="matrix-icon-box"><Terminal size={22} /></div>
            <h3 className="matrix-title">NLP Sentiment Pipelines</h3>
            <p className="matrix-desc">Parsing social streams and email chains to dynamically detect client satisfaction and key topics. Our fine-tuned transformer models understand domain-specific terminology and multi-language text.</p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Transformer Classifiers</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Multi-language Extraction</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      <section className="srv-pipeline-section container">
        <div className="services-title-area text-center">
          <span className="section-tag-modern-light">THE WORKFLOW</span>
          <h2 className="section-title-modern-light">Spatial Pipeline Integration</h2>
        </div>
        <div className="pipeline-grid">
          <div className="pipeline-step">
            <div className="step-num-node">01</div>
            <h4 className="step-title">Source Mapping</h4>
            <p className="step-desc">Connecting raw camera feeds, file caches, and secure REST sources to establish a unified ingestion layer.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">02</div>
            <h4 className="step-title">Spatial Training</h4>
            <p className="step-desc">Optimizing bounding boxes and tuning model accuracy thresholds for your specific objects or document layouts.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">03</div>
            <h4 className="step-title">Semantic Parser</h4>
            <p className="step-desc">Adding intelligent schemas to format the extracted information correctly with cross-reference validation.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">04</div>
            <h4 className="step-title">API Execution</h4>
            <p className="step-desc">Routing structured JSON feeds directly to your main ERP database with idempotency guarantees and error logging.</p>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      <section className="srv-outcomes-section">
        <div className="container">
          <div className="outcomes-grid">
            <div className="outcome-card">
              <div className="outcome-val">10x</div>
              <span className="outcome-label">Speed Multiplier</span>
              <p className="outcome-desc">Processing time reduced from days to seconds through fully automated vision and NLP pipelines.</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-val">99.5%</div>
              <span className="outcome-label">Extraction Accuracy</span>
              <p className="outcome-desc">Highly reliable data parsing even on messy scanned assets with layout-aware OCR models.</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-val">Zero</div>
              <span className="outcome-label">Manual Failure Loop</span>
              <p className="outcome-desc">Automated validation stages block formatting anomalies completely from reaching production databases.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">Distributed Vision Infrastructure & Edge Deployment</h3>
            <p className="details-text">
              High-throughput computer vision systems require carefully architected infrastructure that balances processing power with cost efficiency. We design distributed vision pipelines that span edge GPU devices for real-time inference at the camera source and cloud-based nodes for batch processing and model training. Our edge deployment strategy uses NVIDIA Jetson and Intel OpenVINO optimized models that achieve full framerate processing without requiring constant cloud connectivity. The centralized management layer coordinates model updates, collects inference metrics, and manages failover across the distributed node network, ensuring that your vision operations continue uninterrupted even if individual edge devices experience connectivity issues or hardware failures.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num">01</div>
                <div className="vertical-item-content">
                  <h5>Edge GPU Inference Nodes</h5>
                  <p>Deploying optimized YOLO and OCR models on NVIDIA Jetson devices for real-time processing at the network edge.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num">02</div>
                <div className="vertical-item-content">
                  <h5>Centralized Model Management</h5>
                  <p>Coordinating model updates, inference metrics collection, and device health monitoring from a single management console.</p>
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
                  <h5>PII Redaction Pipeline</h5>
                  <p>Automated detection and masking of faces, license plates, and personal identifiers in images and document scans before storage.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><ShieldCheck size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Data Retention Governance</h5>
                  <p>Configurable policies that automatically archive or delete processed visual data according to your compliance requirements.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">Vision Data Compliance & Privacy Protection</h3>
            <p className="details-text">
              Processing visual and textual data at scale introduces significant privacy and compliance obligations that must be addressed proactively. We implement automated PII redaction pipelines that detect and mask faces, license plates, ID numbers, and other personally identifiable information in images and documents before they are stored or transmitted. Our data governance layer enforces configurable retention policies that automatically archive or delete processed data according to your regulatory requirements, including GDPR right-to-erasure compliance. All processing logs are maintained in immutable audit trails that demonstrate exactly what data was processed, by which model version, and what redaction actions were applied at each stage of the pipeline.
            </p>
          </div>
        </div>
      </section>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">Production Vision Support & SLA Framework</h3>
            <p className="details-text">
              Computer vision and NLP systems are mission-critical infrastructure that must operate reliably under varying load conditions. We provide comprehensive production support including 24/7 monitoring of inference accuracy, processing latency, and throughput volumes across all deployed models. Our automated quality assurance pipelines continuously sample processed outputs and compare them against human-verified ground truth data, triggering retraining workflows when accuracy falls below defined thresholds. We guarantee SLA-backed response times for accuracy degradation, system outages, and data pipeline failures, with automated escalation procedures that ensure the right engineering resources are engaged within minutes of any incident being detected by our monitoring systems.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><HeartHandshake size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Accuracy Monitoring</h5>
                  <p>Continuous sampling and validation of model outputs against ground truth data to detect accuracy drift in real time.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Cpu size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Automated Retraining</h5>
                  <p>Triggering model retraining workflows automatically when accuracy metrics fall below configured performance thresholds.</p>
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
                  <h5>Iterative Model Releases</h5>
                  <p>Two-week development cycles with automated model validation, A/B testing, and stakeholder review gates for continuous improvement.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><CheckCircle2 size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Accuracy Benchmarks</h5>
                  <p>Automated validation against predefined accuracy, precision, and recall benchmarks before any model is promoted to production.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">Agile Vision Delivery & Continuous Improvement</h3>
            <p className="details-text">
              We deliver computer vision and NLP solutions through structured agile sprints that keep your team engaged and aligned throughout the development process. Each two-week sprint produces measurable improvements in model accuracy, processing speed, or data coverage that are demonstrated in live stakeholder review sessions. Our continuous integration pipeline automatically validates every model update against your predefined accuracy benchmarks, ensuring that only improvements are deployed to production. We track model performance metrics on executive dashboards that show accuracy trends, processing volumes, and business impact KPIs, giving your leadership team complete visibility into the value being delivered by your AI investment.
            </p>
          </div>
        </div>
      </section>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">System Integration & API Architecture</h3>
            <p className="details-text">
              Vision and NLP capabilities must integrate seamlessly with your existing enterprise applications to deliver maximum value. We design RESTful and gRPC API layers that expose your model capabilities as well-documented services consumable by any internal application. Our API architecture includes configurable webhook notifications that trigger downstream workflows when specific document types are processed or when detection confidence exceeds configurable thresholds. We provide native integrations with popular enterprise platforms including Salesforce, SAP, and custom ERP systems through pre-built connectors that map extracted data fields directly to your database schemas without requiring custom integration development effort.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Terminal size={14} /></div>
                <div className="vertical-item-content">
                  <h5>REST & gRPC APIs</h5>
                  <p>Well-documented service endpoints that expose vision and NLP capabilities to any internal or external application.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><FileSpreadsheet size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Enterprise Connectors</h5>
                  <p>Pre-built integrations with Salesforce, SAP, and custom ERP systems for automatic data field mapping and ingestion.</p>
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
                  <h5>Data Pipeline Audit</h5>
                  <p>Comprehensive review of your existing document workflows, data formats, and processing volumes to design optimal automation.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Shield size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Format Compatibility</h5>
                  <p>Testing your specific document types, image formats, and video codecs to ensure complete format coverage before deployment.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">Diagnostic Onboarding & Document Workflow Audit</h3>
            <p className="details-text">
              Before implementing any vision or NLP solution, we conduct a thorough audit of your existing document workflows, data formats, and processing requirements. Our senior engineers analyze your current manual processes to identify the highest-impact automation opportunities, measuring baseline processing times and error rates that will be used to quantify return on investment. We test your specific document types, image formats, and video codecs to ensure complete format coverage and identify any preprocessing requirements. The diagnostic phase produces a detailed implementation plan with accurate effort estimates, expected accuracy ranges, and measurable success criteria aligned with your operational objectives.
            </p>
          </div>
        </div>
      </section>

      <ProjectsSection />

    </div>
  );
};

export default Computer_Vision_NLP;
