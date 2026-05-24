import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, X, AlertTriangle, ShieldCheck, TrendingUp } from 'lucide-react';

const portfolioByPath = {
  '/services/ai-consulting-strategy': {
    title: 'AI Consulting & Strategy',
    kicker: 'AI systems portfolio',
    summary:
      'Five deep-dive case studies focused on strategy, governance, private LLMs, ML forecasting, and document intelligence.',
    metrics: [
      { value: '5', label: 'Deep Dives', note: 'Per service' },
      { value: '100%', label: 'Private', note: 'Data-safe design' },
      { value: 'ROI+', label: 'Outcome-led', note: 'Business aligned' },
    ],
    studies: [
      {
        title: 'AI Readiness & Operating Model Audit',
        tag: 'Strategy',
        image: '/project_img/ai_strategy_one.png',
        overview:
          'A board-level diagnostic for enterprise AI maturity, data readiness, governance gaps, and operating model design.',
        problem:
          'Leadership teams often approve AI initiatives before understanding data quality, process ownership, or compliance constraints.',
        engineering:
          'We map business objectives to a phased AI operating model, create governance checkpoints, and define implementation boundaries before any build starts.',
        roi:
          'Outcome: a realistic roadmap, a reduced risk profile, and clearer budget allocation across pilot, proof-of-value, and scale phases.',
        stack: ['Discovery workshops', 'Data audits', 'Governance'],
      },
      {
        title: 'Private LLM Governance Blueprint',
        tag: 'LLM',
        image: '/project_img/ai_strategy_two.png',
        overview:
          'A secure framework for adopting private-tenant LLMs without leaking company knowledge or exposing regulated data.',
        problem:
          'Public model usage can expose sensitive prompts, encourage shadow AI behavior, and create compliance blind spots.',
        engineering:
          'We design private routing, access tiers, prompt boundaries, and audit trails for enterprise-grade LLM deployment.',
        roi:
          'Outcome: safer adoption, higher team confidence, and an internal AI layer that can scale across business units.',
        stack: ['Private tenants', 'Prompt controls', 'Audit trails'],
      },
      {
        title: 'Forecasting Engine for Demand Planning',
        tag: 'ML',
        image: '/project_img/overview_cybersecurity.png',
        overview:
          'Predictive systems that turn operating history into forward-looking demand, staffing, and revenue signals.',
        problem:
          'Manual forecasting is slow, inconsistent, and misses trends that are visible in enterprise telemetry.',
        engineering:
          'We combine feature engineering, model selection, validation, and monitoring into a repeatable forecasting pipeline.',
        roi:
          'Outcome: quicker planning cycles, stronger inventory decisions, and better leadership visibility into future load.',
        stack: ['Feature engineering', 'Forecasting', 'Monitoring'],
      },
      {
        title: 'Document Intelligence & Extraction Layer',
        tag: 'Vision',
        image: '/project_img/blog_explainable_ai.png',
        overview:
          'A vision-plus-NLP workflow for invoices, contracts, forms, and internal archives that need structured extraction.',
        problem:
          'Teams waste time moving data from PDFs and scanned documents into systems by hand.',
        engineering:
          'We build extraction pipelines with confidence scoring, human review gates, and downstream API handoff.',
        roi:
          'Outcome: less manual work, fewer data-entry errors, and faster downstream operational processing.',
        stack: ['OCR', 'Field mapping', 'Confidence gates'],
      },
      {
        title: 'AI Delivery Governance Program',
        tag: 'Delivery',
        image: '/project_img/1.png',
        overview:
          'A delivery framework for keeping AI projects predictable, measurable, and aligned to leadership goals.',
        problem:
          'Many AI builds drift after proof-of-concept because ownership, metrics, and release criteria are unclear.',
        engineering:
          'We create weekly review rhythms, KPI scorecards, and deployment controls that keep the initiative on track.',
        roi:
          'Outcome: smoother delivery, faster stakeholder alignment, and a better chance of turning pilots into production.',
        stack: ['KPI scorecards', 'Release gates', 'Weekly reviews'],
      },
    ],
  },
  '/services/machine-learning-solutions': {
    title: 'Machine Learning Solutions',
    kicker: 'Intelligent engines portfolio',
    summary:
      'Five deep-dive case studies for predictive lead engines, anomaly trackers, churn analysis, price optimization, and smart IoT.',
    metrics: [
      { value: '5', label: 'Deep Dives', note: 'Per service' },
      { value: '99.2%', label: 'Accuracy', note: 'Neural pipelines' },
      { value: 'Automated', label: 'Decisions', note: 'Data-driven yield' },
    ],
    studies: [
      {
        title: 'Predictive B2B Lead Scoring Engine',
        tag: 'Lead scoring',
        image: '/project_img/ml_solutions_one.png',
        overview:
          'A machine learning engine that scores and prioritizes incoming corporate pipelines based on behavioral intent telemetry.',
        problem:
          'Sales departments lose massive hours pursuing unqualified corporate leads that fail to meet baseline budget metrics.',
        engineering:
          'We built an automated pipeline using custom random forest regression, clustering sales traits, and scoring intent patterns.',
        roi:
          'Outcome: B2B pipeline conversion yield multiplied by 2.2x, saving sales teams 30 hours weekly on unqualified calls.',
        stack: ['Random Forest', 'XGBoost', 'HubSpot API'],
      },
      {
        title: 'Real-time Transaction Anomaly Detection',
        tag: 'Security',
        image: '/project_img/ml_solutions_two.png',
        overview:
          'A secure neural engine tracking transaction histories to identify fraud or database anomalies instantly.',
        problem:
          'Financial operations face high risk from silent anomalies that bypass classic pattern-matching firewalls.',
        engineering:
          'We deployed isolation forests and convolutional autoencoders that analyze multi-dimension payload structures live.',
        roi:
          'Outcome: anomaly identification velocity accelerated to <45ms, blocking unauthorized transactions.',
        stack: ['PyTorch', 'Autoencoders', 'Real-time APIs'],
      },
      {
        title: 'SaaS Churn Prediction & Retention Analytics',
        tag: 'Retention',
        image: '/project_img/blog_deep_learning.png',
        overview:
          'A predictive telemetry pipeline flagging customer churn risk triggers before contracts expire.',
        problem:
          'Customer success teams are reactive, discovering customer dissatisfaction only after account closures are filed.',
        engineering:
          'We wired churn telemetry using logistic regression and SHAP attribution to explain precise customer health scores.',
        roi:
          'Outcome: client churn slashed by 35% in three months via targeted, pre-emptive customer retention campaigns.',
        stack: ['Logistic Regression', 'SHAP values', 'CS Scoring'],
      },
      {
        title: 'Dynamic Price Optimization Engine',
        tag: 'Optimization',
        image: '/project_img/blog_quantum.png',
        overview:
          'A dynamic pricing neural system optimizing profit yields based on inventory rates and regional demand changes.',
        problem:
          'Fixed retail schemas leave margin cash on the table during periods of high demand and inventory velocity.',
        engineering:
          'We designed pricing algorithms powered by reinforcement learning models, continuously adjusting SKU coefficients.',
        roi:
          'Outcome: average gross margin yield optimized by 18% with zero drop in total customer transaction volumes.',
        stack: ['RL Networks', 'Demand Elasticity', 'SKU Engines'],
      },
      {
        title: 'Equipment Preventive Maintenance Telemetry',
        tag: 'IoT Analytics',
        image: '/project_img/2.png',
        overview:
          'An IoT time-series neural engine that analyzes machine vibration and temperature telemetry to forecast system failures.',
        problem:
          'Unscheduled machinery downtime breaks production schedules, creating heavy logistics backlogs.',
        engineering:
          'We integrated LSTM networks connected to hardware sensor streams, triggering alert thresholds before failure limits.',
        roi:
          'Outcome: unplanned hardware downtime reduced by 60%, saving corporate clients substantial mechanical repair bills.',
        stack: ['LSTMs', 'Time-series telemetry', 'Sensor APIs'],
      },
    ],
  },
  '/services/computer-vision-nlp': {
    title: 'Computer Vision & NLP',
    kicker: 'Semantic & Visual portfolio',
    summary:
      'Five deep-dive case studies for defect visual scanning, medical diagnostic assistants, semantic document extractors, audio sentiment streams, and shelf trackers.',
    metrics: [
      { value: '5', label: 'Deep Dives', note: 'Per service' },
      { value: '10x', label: 'Speed', note: 'Data extraction' },
      { value: '99.8%', label: 'Fidelity', note: 'OCR & Parsing' },
    ],
    studies: [
      {
        title: 'Industrial Optical Defect Detection',
        tag: 'Vision QA',
        image: '/project_img/vision_nlp_one.png',
        overview:
          'An edge-deployed computer vision engine running quality control scans on production lines to spot structural defects.',
        problem:
          'Manual optical inspections are slow and prone to fatigue, allowing defective components to escape.',
        engineering:
          'We trained and deployed localized YOLOv8 models connected to high-resolution cameras to capture micro-faults.',
        roi:
          'Outcome: quality assurance processing speed increased by 400%, maintaining a pristine 99.8% defect detection rate.',
        stack: ['YOLOv8', 'PyTorch', 'Edge Systems'],
      },
      {
        title: 'Medical Imaging Segmentation Assistant',
        tag: 'Healthcare',
        image: '/project_img/vision_nlp_two.png',
        overview:
          'A UNet image segmentation assistant helping doctors identify anatomical abnormalities in DICOM scans.',
        problem:
          'Radiologists face massive manual workloads, leading to latency in patient diagnostic reports.',
        engineering:
          'We built custom UNet image classification models capable of processing and highlighting micro-anomalies.',
        roi:
          'Outcome: average diagnostic queue processing times reduced by 40%, accelerating early-stage anomaly detection.',
        stack: ['UNet Segmentation', 'ResNet Classifier', 'DICOM'],
      },
      {
        title: 'Multilingual Semantic Document Extractor',
        tag: 'NLP OCR',
        image: '/project_img/blog_nlp.png',
        overview:
          'A document intelligence engine converting complex multi-lingual corporate files into structured JSON schemas.',
        problem:
          'Operations divisions waste thousands of hours manually copying details from inconsistent invoice files.',
        engineering:
          'We configured layout-aware transformer networks to extract unstructured values with context-based field matching.',
        roi:
          'Outcome: document extraction operations automated, cutting administrative operational overhead by 70%.',
        stack: ['LayoutLMv3', 'Tesseract OCR', 'Python parser'],
      },
      {
        title: 'Real-time Customer Voice Sentiment Stream',
        tag: 'Speech NLP',
        image: '/project_img/blog_drones.png',
        overview:
          'An audio stream analyzer that processes live call logs to map semantic tone, intent shifts, and customer satisfaction.',
        problem:
          'Support executives lack live feedback, failing to identify frustrated customers before they hang up.',
        engineering:
          'We connected Whisper speech-to-text nodes to BERT classifiers to generate live, tokenized sentiment metrics.',
        roi:
          'Outcome: escalation rates cut by 25% due to immediate, real-time alert triggers routed directly to call leads.',
        stack: ['Whisper ASR', 'BERT Sentiment', 'gRPC streams'],
      },
      {
        title: 'Autonomous Retail Shelf Tracker',
        tag: 'Retail Vision',
        image: '/project_img/3.png',
        overview:
          'A computer vision shelf monitor tracking stock availability and product placement compliance automatically.',
        problem:
          'Out-of-stock items lead to substantial revenue leaks that remain unnoticed during shifts.',
        engineering:
          'We deployed localized object detection scripts across retail edge cameras, reporting real-time inventory counts.',
        roi:
          'Outcome: product availability levels optimized to 99.1%, boosting overall retail sales conversion.',
        stack: ['Object Detection', 'Edge Hardware', 'SKU Mapping'],
      },
    ],
  },
  '/services/generative-ai-llm': {
    title: 'Generative AI & LLM',
    kicker: 'Agentic & GPT portfolio',
    summary:
      'Five deep-dive case studies for secure RAG databases, multi-agent networks, email automation, support co-pilots, and dynamic copy creators.',
    metrics: [
      { value: '5', label: 'Deep Dives', note: 'Per service' },
      { value: '+220%', label: 'Velocity', note: 'Task automation' },
      { value: 'Private', label: 'Tenants', note: 'Absolute security' },
    ],
    studies: [
      {
        title: 'Sovereign RAG on Legal Archives',
        tag: 'Private RAG',
        image: '/project_img/gen_ai_llm_one.png',
        overview:
          'A private-tenant retrieval-augmented database system querying thousand-page contracts without public leaks.',
        problem:
          'Corporate legal firms risk extreme IP leaks when utilizing public cloud language endpoints for audits.',
        engineering:
          'We established private localized LLM instances, routing indexing models through safe vector database clusters.',
        roi:
          'Outcome: auditing cycles accelerated to seconds with absolute verification that no client IP traverses external servers.',
        stack: ['LlamaIndex', 'Pinecone Vector DB', 'Claude 3.5'],
      },
      {
        title: 'Multi-Agent Network for Code Refactoring',
        tag: 'Agentic',
        image: '/project_img/gen_ai_llm_two.png',
        overview:
          'An autonomous multi-agent engineering network that reviews and upgrades outdated monolithic code patterns.',
        problem:
          'Legacy system code audits consume weeks of manual senior developer hours, slowing down feature shipping.',
        engineering:
          'We built LangGraph agent loops that write, execute, test, and refactor code modules inside safe sandbox environments.',
        roi:
          'Outcome: microservice conversion velocity accelerated, scaling team code coverage benchmarks.',
        stack: ['LangGraph', 'CrewAI', 'Secure Sandboxes'],
      },
      {
        title: 'Automated Corporate Email Responder',
        tag: 'Automation',
        image: '/project_img/blog_cloud_sovereignty.png',
        overview:
          'A generative system analyzing incoming customer emails, matching context, and drafting accurate response proposals.',
        problem:
          'Support backlogs leave incoming corporate prospects waiting hours for initial operational replies.',
        engineering:
          'We integrated specialized API layers that context-match emails against internal databases and draft compliant responses.',
        roi:
          'Outcome: average customer response delays slashed, accelerating corporate client acquisition timelines.',
        stack: ['GPT-4o API', 'Context Embeddings', 'Outlook API'],
      },
      {
        title: 'High-Fidelity AI Customer Support Co-pilot',
        tag: 'Co-pilot',
        image: '/project_img/llm.png',
        overview:
          'An interactive support helper giving customer service agents immediate, accurate answers to client queries.',
        problem:
          'New support agents take weeks to onboard, giving incorrect or slow answers to complex tech issues.',
        engineering:
          'We deployed high-speed semantic cache backends matching agent questions to verified knowledge assets.',
        roi:
          'Outcome: agent ticket resolution speed improved by 50% with customer satisfaction scores rising.',
        stack: ['FastAPI', 'Semantic Cache', 'Knowledge Base'],
      },
      {
        title: 'Dynamic Corporate Copy Generator',
        tag: 'Creative AI',
        image: '/project_img/4.png',
        overview:
          'A custom LLM platform that instantly generates brand-aligned corporate marketing copy and social creatives.',
        problem:
          'Content creation pipelines are bottlenecks, delaying product launch schedules and ad campaigns.',
        engineering:
          'We fine-tuned Llama-3 endpoints to align strictly with corporate brand manuals and copy templates.',
        roi:
          'Outcome: marketing campaign deployment time reduced, cutting content production costs.',
        stack: ['Fine-tuned Llama-3', 'Brand Alignment', 'Templates'],
      },
    ],
  },
  '/services/software-development': {
    title: 'Software Development',
    kicker: 'Product engineering portfolio',
    summary:
      'Five deep-dive case studies for core platform rebuilds, web systems, mobile products, delivery, and analytics loops.',
    metrics: [
      { value: '5', label: 'Deep Dives', note: 'Per service' },
      { value: '99.9%', label: 'Stability', note: 'Operational focus' },
      { value: 'Fast', label: 'Delivery', note: 'Lean process' },
    ],
    studies: [
      {
        title: 'Core Platform Rebuild',
        tag: 'Software',
        image: '/project_img/software_dev_one.png',
        overview:
          'A clean, modular rebuild of a legacy business platform into a maintainable architecture.',
        problem:
          'Monolithic systems are difficult to scale, expensive to maintain, and hard to adapt to new requirements.',
        engineering:
          'We split the platform into clear modules, stabilize APIs, and simplify release processes for faster iteration.',
        roi:
          'Outcome: lower maintenance overhead, faster feature delivery, and a clearer product roadmap.',
        stack: ['Modular architecture', 'API design', 'Release strategy'],
      },
      {
        title: 'High-Conversion Website System',
        tag: 'Web',
        image: '/project_img/software_dev_two.png',
        overview:
          'A website system designed for premium presentation, search visibility, and responsiveness.',
        problem:
          'Template-based websites often feel generic, load slowly, and fail to communicate brand value.',
        engineering:
          'We design bespoke sections, strong SEO structure, and refined motion with a performance-first build.',
        roi:
          'Outcome: cleaner brand perception, improved conversions, and better organic discoverability.',
        stack: ['Responsive grids', 'SEO structure', 'Performance tuning'],
      },
      {
        title: 'Mobile Product Experience',
        tag: 'App',
        image: '/project_img/blog_serverless.png',
        overview:
          'A mobile experience blueprint for premium iOS and Android journeys.',
        problem:
          'Poor mobile UX leads to low retention, weak app-store ratings, and high churn.',
        engineering:
          'We focus on fluid navigation, offline support, polished UI states, and robust integration paths.',
        roi:
          'Outcome: higher retention, stronger app-store trust, and better daily usage.',
        stack: ['Native UX', 'Offline sync', 'Gesture design'],
      },
      {
        title: 'Release Engineering & QA Flow',
        tag: 'Delivery',
        image: '/project_img/software_dev.png',
        overview:
          'A dependable engineering workflow that keeps releases predictable and safe.',
        problem:
          'Fast-moving teams often ship without enough validation or release control.',
        engineering:
          'We define sprint rituals, test gates, and deployment checks that reduce risk while preserving speed.',
        roi:
          'Outcome: fewer regressions, stronger stakeholder trust, and smoother launches.',
        stack: ['QA gates', 'Sprint rituals', 'Deployment checks'],
      },
      {
        title: 'Product Analytics & Improvement Loop',
        tag: 'Ops',
        image: '/project_img/overview_logistics.png',
        overview:
          'A feedback loop that keeps the product evolving after launch.',
        problem:
          'Teams often ship once and stop measuring whether the product is improving.',
        engineering:
          'We define metrics, track usage patterns, and maintain a living backlog tied to measurable outcomes.',
        roi:
          'Outcome: continuous improvement instead of one-off delivery.',
        stack: ['Analytics', 'Backlog governance', 'Iteration'],
      },
    ],
  },
  '/services/app-development': {
    title: 'App Development',
    kicker: 'Mobile product portfolio',
    summary:
      'Five deep-dive case studies for native app UX, offline resilience, app performance, release flow, and business integration.',
    metrics: [
      { value: '5', label: 'Deep Dives', note: 'Per service' },
      { value: 'Fluid', label: 'UX', note: 'Touch-first' },
      { value: 'Reliable', label: 'Sync', note: 'Offline-ready' },
    ],
    studies: [
      {
        title: 'Native iOS & Android Experience',
        tag: 'UX',
        image: '/project_img/app_dev_one.png',
        overview:
          'A premium interface system designed for fast, intuitive mobile interactions.',
        problem:
          'Clunky mobile experiences reduce retention and make brands feel less premium.',
        engineering:
          'We design crisp mobile UI states, navigation flow, and interaction feedback tuned for real devices.',
        roi:
          'Outcome: stronger engagement, better usability, and a more polished product impression.',
        stack: ['Gesture design', 'Mobile UI', 'Interaction states'],
      },
      {
        title: 'Offline-First Application Flow',
        tag: 'Sync',
        image: '/project_img/appdev.png',
        overview:
          'A data model that keeps the app useful even when connectivity drops.',
        problem:
          'Without offline support, mobile apps fail in real-world network conditions.',
        engineering:
          'We implement local persistence, queued sync, and conflict handling for smoother continuity.',
        roi:
          'Outcome: fewer user interruptions and stronger reliability.',
        stack: ['Local storage', 'Queued sync', 'Conflict handling'],
      },
      {
        title: 'App Performance & Launch Speed',
        tag: 'Speed',
        image: '/project_img/app_dev_three.png',
        overview:
          'A performance-focused build strategy to keep startup and screen transitions fast.',
        problem:
          'Slow startup and laggy transitions reduce user confidence.',
        engineering:
          'We optimize bundle size, rendering flow, and platform-specific performance bottlenecks.',
        roi:
          'Outcome: faster launch behavior and smoother daily use.',
        stack: ['Startup tuning', 'Render flow', 'Asset optimization'],
      },
      {
        title: 'Release & QA Workflow',
        tag: 'Delivery',
        image: '/project_img/app_dev_four.png',
        overview:
          'A deployment pipeline that keeps app releases controlled and predictable.',
        problem:
          'App updates often break because release gates are too weak.',
        engineering:
          'We create validation checkpoints, staged rollouts, and review cycles before public release.',
        roi:
          'Outcome: safer launches and fewer app-store issues.',
        stack: ['Staged rollout', 'QA gates', 'Release review'],
      },
      {
        title: 'Enterprise Integration Layer',
        tag: 'Systems',
        image: '/project_img/app_dev_five.png',
        overview:
          'A backend integration design for connecting mobile apps with enterprise systems.',
        problem:
          'Apps fail to deliver value when they cannot speak clearly to core business systems.',
        engineering:
          'We shape APIs, syncing rules, and secure handoff patterns for enterprise compatibility.',
        roi:
          'Outcome: better business alignment and a more useful mobile product.',
        stack: ['API design', 'Security', 'Sync rules'],
      },
    ],
  },
  '/services/website-development': {
    title: 'Website Development',
    kicker: 'Web product portfolio',
    summary:
      'Five deep-dive case studies for high-performance websites, SEO structure, content hierarchy, and operational reliability.',
    metrics: [
      { value: '5', label: 'Deep Dives', note: 'Per service' },
      { value: 'Fast', label: 'Load', note: 'Performance first' },
      { value: 'SEO', label: 'Ready', note: 'Structure-led' },
    ],
    studies: [
      {
        title: 'High-Performance Brand Website',
        tag: 'Web',
        image: '/project_img/webdev.png',
        overview:
          'A bespoke website system focused on visual clarity, speed, and brand authority.',
        problem:
          'Template websites look generic and often underperform in search and conversion.',
        engineering:
          'We build custom sections, lightweight assets, and a responsive grid system that feels premium.',
        roi:
          'Outcome: stronger first impressions and better user trust.',
        stack: ['Custom sections', 'Responsive grid', 'Asset tuning'],
      },
      {
        title: 'SEO Architecture & Content Flow',
        tag: 'SEO',
        image: '/project_img/overview_ecommerce.png',
        overview:
          'A site structure designed to help search engines understand and rank content efficiently.',
        problem:
          'Poor hierarchy makes content harder to discover and weaker in search.',
        engineering:
          'We define page intent, navigation flow, and semantic hierarchy before launching pages.',
        roi:
          'Outcome: better indexing, stronger search performance, and more useful journeys.',
        stack: ['Hierarchy', 'Semantic markup', 'Internal links'],
      },
      {
        title: 'Core Web Vitals Improvement Plan',
        tag: 'Speed',
        image: '/project_img/web_dev_three.png',
        overview:
          'A performance strategy that keeps pages fast and interaction-friendly.',
        problem:
          'Slow interactions and unstable layouts reduce both ranking and trust.',
        engineering:
          'We audit asset weight, layout stability, and loading order to improve the user experience.',
        roi:
          'Outcome: smoother browsing and stronger technical scores.',
        stack: ['LCP', 'CLS', 'Interaction speed'],
      },
      {
        title: 'Lead Capture & CTA System',
        tag: 'Conversion',
        image: '/project_img/web_dev_four.png',
        overview:
          'A page structure built to drive leads without feeling pushy.',
        problem:
          'Many websites fail because they do not guide visitors toward the next step clearly.',
        engineering:
          'We shape CTA timing, message hierarchy, and supporting content for clean conversion flow.',
        roi:
          'Outcome: more qualified enquiries and better page effectiveness.',
        stack: ['CTA flow', 'Content hierarchy', 'Conversion layout'],
      },
      {
        title: 'Website Governance & Updates',
        tag: 'Ops',
        image: '/project_img/web_dev_five.png',
        overview:
          'A long-term maintenance model for keeping websites stable and current.',
        problem:
          'Websites decay when content updates and performance checks are not systematic.',
        engineering:
          'We define update routines, ownership, and review flows that keep the site healthy.',
        roi:
          'Outcome: easier maintenance and less performance drift over time.',
        stack: ['Governance', 'Reviews', 'Maintenance'],
      },
    ],
  },
  '/services/digital-marketing': {
    title: 'Digital Marketing',
    kicker: 'Growth portfolio',
    summary:
      'Five deep-dive case studies for B2B pipeline funnel setups, technical schema SEO layouts, dynamic retargeting paths, dynamic media bids, and live HubSpot CRM API routing.',
    metrics: [
      { value: '5', label: 'Deep Dives', note: 'Per service' },
      { value: 'ROI', label: 'Tracked', note: 'Every channel' },
      { value: 'Lead', label: 'Qualified', note: 'Pipeline first' },
    ],
    studies: [
      {
        title: 'B2B Lead Acquisition Funnel',
        tag: 'Lead Gen',
        image: '/project_img/supplychain.png',
        overview:
          'A technical setup mapping online traffic streams to direct CRM sales funnels, maximizing corporate lead counts.',
        problem:
          'Traditional marketing campaigns burn massive cash on empty clicks without capturing trackable lead queries.',
        engineering:
          'We built rapid landing pages, set up custom GA4 events, and aligned API routing parameters to track CRM handoffs.',
        roi:
          'Outcome: landing page lead conversion yield optimized to 4.5%, creating substantial new sales opportunities.',
        stack: ['CRM handoffs', 'GA4 Events', 'Fast Landing Pages'],
      },
      {
        title: 'Organic Search Authority Program',
        tag: 'SEO Schema',
        image: '/project_img/finanace.png',
        overview:
          'An organic optimization sprint refactoring page structure and injecting rich JSON-LD financial tags to lead Google queries.',
        problem:
          'Fintech software portals struggle to capture organic search impressions, losing premium keyword ranks to local rivals.',
        engineering:
          'We cleaned core page nesting to pass speed metrics, injected JSON-LD schema layers, and ran targeted backlink pipelines.',
        roi:
          'Outcome: multiple premium keywords secured in top organic positions, boosting monthly inbound visits.',
        stack: ['JSON-LD tags', 'Backlink sprint', 'Nesting cleanups'],
      },
      {
        title: 'Programmatic Pipeline Performance',
        tag: 'Retargeting',
        image: '/project_img/bio.png',
        overview:
          'An optimized ad retargeting network using custom dynamic triggers to convert digital visitors into active system demo requests.',
        problem:
          'Enterprise software platforms struggle to secure qualified sales call schedules, suffering high customer acquisition costs.',
        engineering:
          'We automated programmatic ad bids, developed precise retargeting routes, and refined conversion forms.',
        roi:
          'Outcome: software demo bookings surged in 60 days, slashing average customer acquisition costs.',
        stack: ['Bid automations', 'Form tuning', 'Pixel triggers'],
      },
      {
        title: 'Content & Landing Page System',
        tag: 'Conversion',
        image: '/project_img/blog_business.png',
        overview:
          'A conversion rate optimization review aligning marketing copies, visual structures, and page CTA triggers.',
        problem:
          'Websites with substantial web traffic suffer poor inquiries due to loose conversion paths and weak messaging layers.',
        engineering:
          'We refactored page hierarchy, focused page copy, and optimized the strategic placement of all lead capture CTA buttons.',
        roi:
          'Outcome: corporate lead quality and monthly inquiry submissions optimized, raising operational margins.',
        stack: ['CTA routing', 'CRO copy', 'Visual cleanups'],
      },
      {
        title: 'CRM-Native Lead Delivery',
        tag: 'API Routing',
        image: '/project_img/blog_crowd.png',
        overview:
          'An API integration mesh executing live database record routing and immediate sales representative assignments.',
        problem:
          'Manual handling of online inbound inquiries creates operational delays, lowering sales conversion potential.',
        engineering:
          'We configured secure backend APIs to map inbound details to dedicated sales specialists instantly.',
        roi:
          'Outcome: sales call response time accelerated to <3 minutes, increasing overall lead close yields.',
        stack: ['HubSpot Integration', 'Node.js middleware', 'Fast routes'],
      },
    ],
  },
};

const ProjectsSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeStudyIndex, setActiveStudyIndex] = useState(0);
  const { pathname: path } = useLocation();
  const currentService = portfolioByPath[path] || portfolioByPath['/services/ai-consulting-strategy'];
  const currentStudy = currentService.studies[activeStudyIndex];

  const openStudy = (index) => {
    setActiveStudyIndex(index);
    setModalOpen(true);
  };

  return (
    <section className="srv-projects-section">
      <div className="container">
        <div className="services-title-area text-center">
          <span className="section-tag-modern-light">REAL-WORLD IMPACT</span>
          <h2 className="section-title-modern-light">Enterprise Case Studies</h2>
        </div>

        <div className="industries-container-box service-case-container">
          <div className="industries-showcase-grid">
            <div className="industries-image-col">
              <div className="industries-img-card">
                {currentService.studies.map((study, index) => (
                  <img
                    key={study.title}
                    src={study.image}
                    alt={study.title}
                    className={`industry-showcase-img ${activeStudyIndex === index ? 'active' : ''}`}
                  />
                ))}
                <div className="industry-img-gradient-cover"></div>
              </div>
            </div>

            <div className="industries-info-col">
              {currentService.studies.map((study, index) => (
                <div key={study.title} className={`industry-info-details ${activeStudyIndex === index ? 'active' : ''}`}>
                  <h3 className="industry-details-title">{study.title}</h3>
                  <p className="industry-details-text">{study.overview}</p>

                  <div className="service-case-compact-cards">
                    <div className="service-case-compact-card">
                      <span className="service-case-compact-label">Operational Pain</span>
                      <p>{study.problem}</p>
                    </div>
                    <div className="service-case-compact-card">
                      <span className="service-case-compact-label">Engineering Response</span>
                      <p>{study.engineering}</p>
                    </div>
                    <div className="service-case-compact-card">
                      <span className="service-case-compact-label">Outcome Summary</span>
                      <p>{study.roi}</p>
                    </div>
                  </div>

                  <button className="btn btn-primary industry-read-btn" onClick={() => openStudy(index)}>
                    Read Deep-Dive Case Study <ChevronRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="industries-tabs-bar">
            {currentService.studies.map((study, index) => (
              <button
                key={study.title}
                className={`industry-tab-btn ${activeStudyIndex === index ? 'active' : ''}`}
                onClick={() => setActiveStudyIndex(index)}
              >
                {study.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {modalOpen && currentStudy && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content-shell" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setModalOpen(false)}>
              <X size={18} />
            </button>

            <span className="srv-badge">DEEP DIVE REPORT</span>
            <h2 className="srv-title" style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>{currentStudy.title}</h2>
            <p className="srv-desc" style={{ fontSize: '1rem' }}>{currentStudy.overview}</p>

            <div className="service-portfolio-modal">
              <div className="service-portfolio-modal-panel">
                <h4><AlertTriangle size={15} /> Operational Pain</h4>
                <p>{currentStudy.problem}</p>
              </div>
              <div className="service-portfolio-modal-panel">
                <h4><ShieldCheck size={15} /> Engineering Response</h4>
                <p>{currentStudy.engineering}</p>
              </div>
            </div>

            <div className="service-portfolio-modal-panel" style={{ marginTop: '16px' }}>
              <h4><TrendingUp size={15} /> Outcome Summary</h4>
              <p>{currentStudy.roi}</p>
            </div>

            <div className="service-portfolio-modal-panel" style={{ marginTop: '16px' }}>
              <h4>Stack</h4>
              <div className="service-portfolio-modal-stack">
                {currentStudy.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
