import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Eye, MessageCircle, Share2, Sparkles, ZoomIn, Minus, Plus } from 'lucide-react';
import './styles/Blog.css';

const uniqueBlogImages = [
  "/project_img/blog_kitting.png",
  "/project_img/blog_crowd.png",
  "/project_img/blog_business.png",
  "/project_img/blog_nlp.png",
  "/project_img/blog_deep_learning.png",
  "/project_img/blog_cloud_sovereignty.png",
  "/project_img/blog_drones.png",
  "/project_img/blog_quantum.png",
  "/project_img/blog_serverless.png",
  "/project_img/blog_explainable_ai.png"
];

const blogDatePool = [
  'January 8, 2025',
  'February 14, 2025',
  'March 21, 2025',
  'April 10, 2025',
  'May 19, 2025',
  'June 6, 2025',
  'July 18, 2025',
  'August 27, 2025',
  'September 9, 2025',
  'October 16, 2025',
  'November 24, 2025',
  'December 12, 2025',
  'January 15, 2026',
  'February 11, 2026',
  'March 7, 2026',
  'April 18, 2026',
  'May 2, 2026',
];

const blogsData = [
  {
    id: 1,
    title: "Real-Time Kitting Validation with AI & Raspberry Pi 5",
    category: "AIML",
    date: blogDatePool[0],
    readTime: "5 min read",
    author: "Dr. Ashley Vance",
    image: uniqueBlogImages[0],
    summary: "How edge computing models and light-weight neural networks on compact hardware are automating defect tracking on factory conveyor belts.",
    content: "Industrial manufacturing plants have historically struggled with real-time assembly line errors due to high processing latencies in centralized cloud pipelines. By pairing the robust processing capabilities of the newly deployed Raspberry Pi 5 with highly optimized MobileNet-SSD architectures, we have established a real-time kitting validation system capable of 99.4% tracking accuracy.\n\nThis setup monitors packaging containers on a moving conveyor belt, analyzing object presence, coordinates, and physical dimensions. Telemetries are computed directly at the edge, cutting down latency from 450ms to a mere 12ms. This zero-delay validation ensures defective shipments are flagged and routed away before leaving the factory floor, bringing permanent cost-reductions to manufacturing margins."
  },
  {
    id: 2,
    title: "Harnessing AI for Crowd Safety and Intelligence",
    category: "Computer Vision",
    date: blogDatePool[1],
    readTime: "7 min read",
    author: "Marcus Chen",
    image: uniqueBlogImages[1],
    summary: "Leveraging deep visual learning models and thermal dashboards to coordinate rapid emergency responses in crowded smart stadiums.",
    content: "Modern crowd control requires more than just reactive physical security. Harnessing the predictive power of multi-object tracking (MOT) algorithms coupled with custom YOLOv8 structures, security commanders can now predict crowd bottlenecks up to 10 minutes before they occur.\n\nOur system processes thousands of high-definition video frames across stadium terminals, mapping optical densities, directional vectors, and rapid heat expansions. By feeding these metrics into localized safety dashboards, emergency responders are automatically deployed to congested exits. The system maintains strict localized privacy compliance protocols, ensuring zero personal identity data is stored while maximizing public safety."
  },
  {
    id: 3,
    title: "Transforming Business Operations with AI and Gen AI",
    category: "Gen AI",
    date: blogDatePool[2],
    readTime: "6 min read",
    author: "Elena Rostova",
    image: uniqueBlogImages[2],
    summary: "How autonomous software agents and parameter-tuned transformers are orchestrating and scaling daily corporate administrative workflows.",
    content: "Corporate administrations are undergoing a permanent structural shift. Instead of simple automated templates, enterprises are now deploying Agentic AI networks capable of handling complex multi-variable tasks.\n\nBy fine-tuning proprietary LLaMA parameters on secure local business data, these agents can read incoming emails, parse operational intents, fetch relevant database files, draft context-aware replies, and trigger backend API actions. We have witnessed operations teams save up to 72% of their administrative hours, redirecting human talent toward high-level strategy and client relations."
  },
  {
    id: 4,
    title: "The Future of NLP: Scaling Large Language Models for Enterprise",
    category: "NLP",
    date: blogDatePool[3],
    readTime: "8 min read",
    author: "Dr. Sarah Jenkins",
    image: uniqueBlogImages[3],
    summary: "Diving deep into model quantization and retrieval-augmented generation (RAG) to deploy fast, reliable LLMs on local server hardware.",
    content: "Enterprise adoption of NLP has entered a new phase. Standard off-the-shelf APIs often fall short due to data sovereignty concerns and latency overheads. This article explores how model quantization (reducing precision from FP16 to INT8/INT4) allows companies to run 70-billion parameter models directly on compact local GPU clusters.\n\nAdditionally, by constructing robust Retrieval-Augmented Generation (RAG) structures, models are anchored to fresh internal company databases. This eliminates standard model hallucinations, providing customer support and engineering teams with absolute, factual answers derived from trusted proprietary resources."
  },
  {
    id: 5,
    title: "Deep Learning Breakthroughs in Automated Medical Diagnostics",
    category: "Deep Learning",
    date: blogDatePool[4],
    readTime: "9 min read",
    author: "Dr. Rajiv Mehta",
    image: uniqueBlogImages[4],
    summary: "How convolutional neural networks and 3D imaging visual fields are assisting radiologists in pinpointing anomalies with absolute precision.",
    content: "Automating medical diagnostics requires unprecedented precision. Recent deep learning architectures, specifically 3D UNet and ResNet variants, have achieved accuracy rates that match senior clinical radiologists. By feeding volumetric CT and MRI scans into these deep visual pipelines, the systems isolate micro-anomalies as small as 1mm.\n\nThe AI highlights suspicious regions, calculates volumetric growth over time, and alerts the clinical staff. This collaborative workflow has reduced screening times by 40%, allowing physicians to initiate early-stage treatments and significantly improve clinical outcomes worldwide."
  },
  {
    id: 6,
    title: "Cloud Sovereignty: The Future of Distributed AI Infrastructure",
    category: "Cloud Future",
    date: blogDatePool[5],
    readTime: "7 min read",
    author: "David Miller",
    image: uniqueBlogImages[5],
    summary: "Navigating local data residency laws and microservice architectures to host scalable deep learning engines securely.",
    content: "As nations tighten data residency laws, global tech companies are forced to redesign their AI scaling models. Distributed AI infrastructures are the solution, allowing computational workloads to spin up serverless GPU pipelines in specific local regions.\n\nUsing Kubernetes clusters configured with custom load-balancing logic, pipelines can dynamically route training workloads to regions with excess green energy, while storing sensitive customer data strictly within localized physical boundaries. This ensures absolute compliance with international GDPR and HIPAA acts without sacrificing system speed."
  },
  ...Array.from({ length: 24 }).map((_, idx) => {
    const topics = ["AIML", "Computer Vision", "Gen AI", "NLP", "Deep Learning", "Cloud Future"];
    const topic = topics[idx % topics.length];
    const id = idx + 7;
    const imageIndex = (idx + 6) % 10;
    return {
      id,
      title: `Scaling ${topic} Systems: Key Considerations for Enterprise Architecture (Part ${idx + 1})`,
      category: topic,
      date: blogDatePool[(idx + 6) % blogDatePool.length],
      readTime: `${4 + (idx % 5)} min read`,
      author: "PAYIVVA Engineering Team",
      image: uniqueBlogImages[imageIndex],
      summary: `A thorough analysis of engineering constraints and latency benchmarks in modern distributed ${topic} systems.`,
      content: `As businesses scale, hosting robust ${topic} systems becomes a core engineering challenge. Developers must balance high parameter sizes with localized hardware latency thresholds to maintain stable performance.\n\nIn this comprehensive analysis, our PAYIVVA engineering team walks through model pipeline optimizations, memory management benchmarks, and low-latency API wrappers (such as FastAPI and gRPC) designed to serve millions of concurrent token inputs. Discover how setting up asynchronous queue systems and distributed memory caches like Redis can elevate your systems to enterprise-grade stability.`
    };
  })
];

const buildDeepDiveSections = (blog) => {
  const intro = blog.content.split('\n\n');
  const focusAreas = {
    AIML: ['Model selection', 'Edge latency', 'Deployment controls'],
    'Computer Vision': ['Frame processing', 'Object tracking', 'Safety alerts'],
    'Gen AI': ['Workflow orchestration', 'Prompt design', 'Tool execution'],
    NLP: ['Retrieval quality', 'Context windows', 'Answer grounding'],
    'Deep Learning': ['Architecture depth', 'Training stability', 'Clinical validation'],
    'Cloud Future': ['Regional routing', 'Data residency', 'Elastic compute'],
  };

  const focus = focusAreas[blog.category] || ['System design', 'Execution flow', 'Business impact'];

  return [
    { heading: 'Executive Summary', body: intro[0] },
    {
      heading: 'What Changed',
      body: `The delivery moved from broad experimentation to a controlled, measurable workflow. The team gained tighter feedback loops, stronger reliability, and clearer operating boundaries for production use.`,
    },
    {
      heading: 'Core Execution Areas',
      bullets: focus,
    },
    {
      heading: 'Deep Dive',
      body: intro[1] || intro[0],
    },
    {
      heading: 'Outcome',
      body: `This article frames the implementation as a repeatable system rather than a one-off success. The result is easier scaling, better governance, and a cleaner path from insight to delivery.`,
    },
  ];
};

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeBlog, setActiveBlog] = useState(null);
  const [fontScale, setFontScale] = useState(1);

  const filteredBlogs = useMemo(() => {
    return blogsData
      .filter((b) => selectedCategory === "All" || b.category === selectedCategory)
      .filter((b) => b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.summary.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, selectedCategory]);

  const featuredBlog = filteredBlogs[0] || blogsData[0];
  const sideBlogs = filteredBlogs.slice(1, 5);
  const activeBlogSections = activeBlog ? buildDeepDiveSections(activeBlog) : [];

  return (
    <div className="blog-page-wrapper">
      <div className="premium-edge-section blog-hero-section">
        <div className="blog-hero-shell">
          <div>
            <Link to="/" className="blog-back-link">
              <ArrowLeft size={16} /> Back to Home
            </Link>
            <h1 className="blog-main-title">PAYIVVA Tech Insights</h1>
            <p className="blog-main-desc">
              Explore system architectures, advanced machine learning tutorials, and delivery notes built for modern teams.
            </p>
          </div>
          <div className="blog-hero-metrics">
            <div><strong>30</strong><span>articles</span></div>
            <div><strong>6</strong><span>topics</span></div>
            <div><strong>Live</strong><span>reader modal</span></div>
          </div>
        </div>
      </div>

      <div className="premium-edge-section blog-toolbar-container">
        <div className="blog-categories-list">
          {["All", "AIML", "Computer Vision", "Gen AI", "NLP", "Deep Learning", "Cloud Future"].map((cat) => (
            <button
              key={cat}
              className={`blog-cat-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="blog-toolbar-actions">
          <div className="blog-search-box">
            <input
              type="text"
              placeholder="Search articles..."
              className="blog-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="blog-font-controls">
            <button onClick={() => setFontScale((v) => Math.max(0.9, v - 0.1))}><Minus size={15} /></button>
            <button onClick={() => setFontScale(1)}><Sparkles size={15} /></button>
            <button onClick={() => setFontScale((v) => Math.min(1.2, v + 0.1))}><Plus size={15} /></button>
          </div>
        </div>
      </div>

      <div className="premium-edge-section blog-feature-layout">
        <article className="blog-featured-article">
          <img src={featuredBlog.image} alt={featuredBlog.title} className="blog-featured-image" loading="lazy" />
          <div className="blog-featured-content">
            <div className="blog-featured-meta">
              <span className="blog-card-category">{featuredBlog.category}</span>
              <span><CalendarDays size={14} /> {featuredBlog.date}</span>
              <span><Eye size={14} /> {featuredBlog.readTime}</span>
            </div>
            <h2>{featuredBlog.title}</h2>
            <p style={{ fontSize: `${fontScale}rem` }}>{featuredBlog.summary}</p>
            <div className="blog-featured-actions">
              <button className="blog-feature-read" onClick={() => setActiveBlog(featuredBlog)}>
                Read feature <ZoomIn size={15} />
              </button>
              <button className="blog-feature-share">
                <Share2 size={15} /> Share
              </button>
            </div>
          </div>
        </article>

        <aside className="blog-side-stack">
          {sideBlogs.map((blog) => (
            <button key={blog.id} className="blog-side-card" onClick={() => setActiveBlog(blog)}>
              <img src={blog.image} alt={blog.title} loading="lazy" />
              <div>
                <span>{blog.category}</span>
                <h3>{blog.title}</h3>
                <p>{blog.summary}</p>
              </div>
            </button>
          ))}
        </aside>
      </div>

      <div className="premium-edge-section blog-page-grid">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="glass-card blog-card-premium explorer-card">
            <div className="blog-card-img-wrapper" onClick={() => setActiveBlog(blog)}>
              <img src={blog.image} alt={blog.title} className="blog-card-img" loading="lazy" />
            </div>
            <div className="blog-card-content">
              <div className="explorer-card-meta-top">
                <span className="blog-card-category">{blog.category}</span>
                <span className="explorer-readtime">{blog.readTime}</span>
              </div>
              <h4 className="blog-card-title" onClick={() => setActiveBlog(blog)}>
                {blog.title}
              </h4>
              <p className="explorer-card-summary">{blog.summary}</p>
              <button
                className="blog-card-link-btn"
                onClick={() => setActiveBlog(blog)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', padding: '0.7rem 1rem', borderRadius: '999px', background: '#0f172a', color: '#ffffff', border: '1px solid rgba(15, 23, 42, 0.12)', cursor: 'pointer', fontWeight: 700 }}
              >
                Read More »
              </button>
            </div>
          </div>
        ))}
      </div>

      {activeBlog && (
        <div className="blog-reader-overlay" onClick={() => setActiveBlog(null)}>
          <div className="blog-reader-modal animate-slide-up" onClick={(e) => e.stopPropagation()} style={{ width: 'min(88vw, 680px)', height: 'min(88vh, 760px)', borderRadius: '18px', overflow: 'hidden', position: 'relative' }}>
            <button className="reader-close-btn" onClick={() => setActiveBlog(null)} style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 6, width: '34px', height: '34px', borderRadius: '50%', border: 'none', background: 'rgba(15, 23, 42, 0.9)', color: '#fff', display: 'grid', placeItems: 'center', cursor: 'pointer', boxShadow: '0 8px 20px rgba(15, 23, 42, 0.18)' }}>✕</button>
            <div className="reader-content-scroll">
              <div className="reader-banner-wrapper">
                <img src={activeBlog.image} alt={activeBlog.title} className="reader-banner-img" loading="lazy" style={{ width: '100%', height: '90px', objectFit: 'cover', display: 'block' }} />
                <div className="reader-banner-gradient"></div>
                <span className="reader-badge-cat">{activeBlog.category}</span>
              </div>
              <div className="reader-article-body">
                <div className="reader-meta-info">
                  <span>By {activeBlog.author}</span>
                  <span className="meta-dot">•</span>
                  <span>{activeBlog.date}</span>
                  <span className="meta-dot">•</span>
                  <span>{activeBlog.readTime}</span>
                  <span className="meta-dot">•</span>
                  <span><MessageCircle size={14} /> Expert notes</span>
                </div>
                {/* Keep a single page-level H1; modal uses H2 for heading hierarchy */}
                <h2 className="reader-article-title">{activeBlog.title}</h2>
                <p className="reader-article-lead">{activeBlog.summary}</p>

                <div className="reader-deep-dive-grid">
                  {activeBlogSections.map((section) => (
                    <section key={section.heading} className="reader-deep-section">
                      <h3>{section.heading}</h3>
                      {section.body && <p className="reader-paragraph">{section.body}</p>}
                      {section.bullets && (
                        <ul className="reader-bullet-list">
                          {section.bullets.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </section>
                  ))}
                </div>

                <div className="reader-article-text-container">
                  {activeBlog.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="reader-paragraph">{paragraph}</p>
                  ))}
                </div>
                <div className="reader-footer-actions">
                  <button className="btn btn-secondary" onClick={() => setActiveBlog(null)}>
                    Close Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
