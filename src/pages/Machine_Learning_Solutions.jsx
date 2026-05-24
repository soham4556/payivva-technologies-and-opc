import { CheckCircle2, AlertTriangle, ShieldCheck, Activity, LineChart, Cpu, ShieldAlert, HeartHandshake, GitBranch, Terminal, FileSpreadsheet, Shield, Layers } from 'lucide-react';
import './styles/ServicePagePremium.css';
import ProjectsSection from '../components/ProjectsSection';

const Machine_Learning_Solutions = () => {
  return (
    <div className="srv-page-wrapper animate-fade-in">

      <section className="srv-hero-section container">
        <div className="srv-hero-grid">
          <div>
            <span className="srv-badge">PREDICTIVE ENGINES</span>
            <h1 className="srv-title">Deploy Advanced <span>Machine Learning Models</span></h1>
            <p className="srv-desc">
              Convert high-frequency data streams into real-time business decisions. We design, optimize, and deploy neural predictive engines engineered for high scalability and sub-millisecond inference speeds.
            </p>
            <div className="tech-pill-row">
              <span className="tech-pill">TensorFlow / PyTorch</span>
              <span className="tech-pill">Anomaly Engines</span>
              <span className="tech-pill">Regression Models</span>
              <span className="tech-pill">GPU Optimization</span>
            </div>
          </div>
          <div className="premium-glass-graphic-wrapper">
            <img src="/project_img/ml_solutions_one.png" alt="Machine Learning Engine" className="floating-glowing-graphic" />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="srv-split-showcase">
          <div className="showcase-pane pane-warn">
            <span className="pane-tag red"><AlertTriangle size={14} /> The Enterprise Friction</span>
            <h3 className="pane-title">The Cost of Stagnant Data</h3>
            <p className="pane-desc">
              Many companies build standard dashboard grids that merely display past events. Without real-time, automated predictive logic, your organization loses massive volume optimizations and scale potential. Our diagnostics reveal that manual data analysis leads to undetected anomalies and missed opportunities.
            </p>
          </div>
          <div className="showcase-pane pane-solve">
            <span className="pane-tag cyan"><ShieldCheck size={14} /> The PAYIVVA Solution</span>
            <h3 className="pane-title">Real-Time ML Inferences</h3>
            <p className="pane-desc">
              We build specialized algorithmic models that actively parse telemetry, forecast demand curves, flag anomalous transactions, and dynamically adjust system balances at high frequency. By setting up automated feature engineering pipelines, we ensure your models continuously learn from fresh data.
            </p>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      <section className="srv-matrix-section container">
        <div className="services-title-area text-center">
          <span className="section-tag-modern-light">CAPABILITIES MATRIX</span>
          <h2 className="section-title-modern-light">Machine Intelligence Frameworks</h2>
        </div>
        <div className="matrix-grid">
          <div className="matrix-card">
            <div className="matrix-icon-box"><LineChart size={22} /></div>
            <h3 className="matrix-title">Predictive Forecasting</h3>
            <p className="matrix-desc">Dynamic multi-variable forecasting models that predict market shifts, inventory demands, and resource constraints with high accuracy. Our ensembles combine ARIMA, Prophet, and LSTM architectures to produce robust predictions with calibrated confidence intervals across multiple time horizons.</p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> High-frequency Time-Series</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Seasonality & Drift Control</li>
            </ul>
          </div>
          <div className="matrix-card">
            <div className="matrix-icon-box"><Activity size={22} /></div>
            <h3 className="matrix-title">Anomaly Detection</h3>
            <p className="matrix-desc">Sleek autoencoder networks that continuously audit transaction pipelines to secure systems from malicious attacks. Our adaptive thresholding minimizes false positives while our isolation forest algorithms catch novel attack patterns that signature-based systems miss entirely.</p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Real-time Fraud Spotting</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Isolation Forests Deployment</li>
            </ul>
          </div>
          <div className="matrix-card">
            <div className="matrix-icon-box"><Cpu size={22} /></div>
            <h3 className="matrix-title">Model Tuning & Optimization</h3>
            <p className="matrix-desc">Scaling model weight metrics, accelerating latency values, and compiling models to operate directly on edge systems. We use TensorRT and ONNX quantization to achieve 4x speed improvements without measurable accuracy degradation.</p>
            <ul className="matrix-list">
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> CUDA Tensor RT Tuning</li>
              <li className="matrix-list-item"><CheckCircle2 size={13} style={{ color: '#10b981' }} /> Quantization & Scale Tuning</li>
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
            <h4 className="step-title">Data Preparation</h4>
            <p className="step-desc">Cleaning database layers and structuring reliable validation splits to ensure training data accurately represents production distributions.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">02</div>
            <h4 className="step-title">Model Training</h4>
            <p className="step-desc">Deploying distributed GPU nodes to converge specialized neural architectures with optimal hyperparameter configurations.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">03</div>
            <h4 className="step-title">Quantization</h4>
            <p className="step-desc">Scaling weights down to optimize millisecond inference speeds on your production servers using INT8 precision.</p>
          </div>
          <div className="pipeline-step">
            <div className="step-num-node">04</div>
            <h4 className="step-title">DevOps Deployment</h4>
            <p className="step-desc">Deploying as dockerized REST nodes inside scalable Kubernetes clusters with canary release strategies.</p>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      <section className="srv-outcomes-section">
        <div className="container">
          <div className="outcomes-grid">
            <div className="outcome-card">
              <div className="outcome-val">99.2%</div>
              <span className="outcome-label">Inference Accuracy</span>
              <p className="outcome-desc">Pristine target hit-rate across all trained predictive models validated through rigorous cross-validation protocols.</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-val">&lt; 12ms</div>
              <span className="outcome-label">Inference Speed</span>
              <p className="outcome-desc">Sub-millisecond query responses optimized for live production flows with high-throughput serving infrastructure.</p>
            </div>
            <div className="outcome-card">
              <div className="outcome-val">+34%</div>
              <span className="outcome-label">Operational Yield</span>
              <p className="outcome-desc">Average baseline improvement across automated workflow setups replacing manual review processes.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator container"></div>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">Distributed ML Infrastructure & GPU Orchestration</h3>
            <p className="details-text">
              A high-performance ML operation demands a robust computational backbone. We design and deploy distributed training clusters that span cloud GPU instances and on-premise tensor cores, orchestrated through Kubernetes with auto-scaling node pools. Our architecture supports multi-node training jobs with dynamic resource allocation, ensuring that model convergence happens at maximum speed without manual intervention. We implement automated checkpointing, experiment tracking, and model registry systems that give your data science team full visibility into every training run while maintaining strict cost controls on cloud compute spending across all active projects.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num">01</div>
                <div className="vertical-item-content">
                  <h5>GPU Cluster Scheduling</h5>
                  <p>Orchestrating distributed training jobs across multi-GPU nodes with automated resource allocation and preemptible instance management.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num">02</div>
                <div className="vertical-item-content">
                  <h5>Experiment Tracking</h5>
                  <p>Centralized MLflow and Weights & Biases integration to log hyperparameters, metrics, and model artifacts across all experiments.</p>
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
                  <h5>Data Drift Monitoring</h5>
                  <p>Automated statistical tests that compare production data distributions against training baselines to detect concept drift early.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><ShieldCheck size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Model Governance Logs</h5>
                  <p>Immutable audit trails recording every model version, training dataset hash, and production performance metric for compliance.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">Enterprise Compliance & Data Governance Protocols</h3>
            <p className="details-text">
              Deploying machine learning at scale requires rigorous governance frameworks that ensure model reliability, data privacy, and regulatory compliance. We implement automated data drift detection systems that continuously compare production feature distributions against training baselines, triggering retraining workflows when statistical significance thresholds are breached. Our model governance layer maintains immutable audit logs of every model version, training dataset composition, hyperparameter configuration, and production performance metric. This comprehensive traceability ensures that your ML operations satisfy the most stringent audit requirements while maintaining the agility needed to respond quickly to changing market conditions and data patterns.
            </p>
          </div>
        </div>
      </section>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">Production ML Support & Uptime Guarantees</h3>
            <p className="details-text">
              Production machine learning systems require dedicated operational support to maintain prediction quality and service reliability. We provide 24/7 monitoring of your model endpoints, tracking latency distributions, throughput rates, and prediction confidence scores in real time. Our automated alerting systems detect performance degradation before it impacts your users, triggering investigation workflows that include model comparison against shadow deployments. We guarantee SLA-backed response times for all severity levels, with automated rollback procedures that can revert to the previous model version within seconds if performance benchmarks are breached, ensuring uninterrupted service for your critical business operations.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><HeartHandshake size={14} /></div>
                <div className="vertical-item-content">
                  <h5>24/7 Model Monitoring</h5>
                  <p>Continuous surveillance of prediction accuracy, latency, and throughput with automated incident response and escalation protocols.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Cpu size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Automated Rollback</h5>
                  <p>Instantaneous model version rollback triggered by performance metric breaches, ensuring prediction quality never degrades in production.</p>
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
                  <h5>Sprint-Based Delivery</h5>
                  <p>Two-week development cycles with automated testing, model validation gates, and stakeholder demo presentations for continuous alignment.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><CheckCircle2 size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Model Validation Gates</h5>
                  <p>Automated quality checks that validate accuracy, fairness, and performance before any model is promoted to production environments.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">Agile ML Engineering & Iterative Delivery</h3>
            <p className="details-text">
              We deliver machine learning solutions through structured agile sprints that maintain alignment with your evolving business requirements. Our two-week development cycles include comprehensive model validation gates, automated testing suites, and live demonstration sessions where stakeholders can interact with prototype predictions and provide immediate feedback. Every sprint produces a potentially deployable increment, allowing you to realize value early while maintaining the flexibility to adapt to new data sources or changing business priorities. We track progress through transparent dashboards that show model accuracy improvements, data coverage expansion, and remaining work items so you always know exactly where your project stands.
            </p>
          </div>
        </div>
      </section>

      <section className="container srv-details-pane">
        <div className="srv-details-grid">
          <div>
            <h3 className="details-title">Tech Stack Integration & Pipeline Decoupling</h3>
            <p className="details-text">
              Modern ML systems must integrate cleanly with existing enterprise infrastructure without requiring disruptive migrations. We design modular ML pipelines that communicate with your existing data warehouses, CRM systems, and business intelligence tools through well-defined API contracts and event-driven architectures. Our feature store architecture decouples feature engineering from model training, allowing data scientists to develop and register new features that are automatically served to both training and production inference pipelines. We implement data versioning and lineage tracking that connects every prediction back to the specific features and training data that produced it, enabling full auditability and rapid root cause analysis when unexpected behavior occurs.
            </p>
          </div>
          <div>
            <ul className="details-list-vertical">
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Terminal size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Feature Store Architecture</h5>
                  <p>Centralized feature registry that serves consistent, versioned features to both training pipelines and production inference endpoints.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><FileSpreadsheet size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Data Lineage Tracking</h5>
                  <p>End-to-end provenance tracking connecting every prediction to the specific features, model version, and training data that produced it.</p>
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
                  <h5>Infrastructure Stress Testing</h5>
                  <p>Load testing your data pipelines and model serving infrastructure to identify bottlenecks before they impact production traffic.</p>
                </div>
              </li>
              <li className="details-list-vertical-item">
                <div className="vertical-item-num"><Shield size={14} /></div>
                <div className="vertical-item-content">
                  <h5>Data Quality Auditing</h5>
                  <p>Automated profiling of incoming data streams to detect schema violations, missing values, and distribution shifts at ingestion time.</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="details-title">Diagnostic Onboarding & ML Pipeline Audit</h3>
            <p className="details-text">
              Before we begin model development, we conduct a comprehensive audit of your existing data infrastructure and ML readiness. Our senior engineers analyze data pipeline throughput, storage architecture, and compute resource availability to identify constraints that could impact model performance. We profile your datasets for quality issues including missing values, label inconsistencies, and class imbalances that must be addressed before training begins. The diagnostic phase produces a detailed readiness report that includes infrastructure recommendations, data preparation requirements, and a realistic timeline for delivering production-ready models aligned with your specific business use cases and performance targets.
            </p>
          </div>
        </div>
      </section>

      <ProjectsSection />

    </div>
  );
};

export default Machine_Learning_Solutions;
