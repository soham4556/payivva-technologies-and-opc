import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  TrendingUp,
  BarChart3,
  Target,
  Link as LinkIcon,
  Files,
  Settings,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Star,
  ChevronDown,
  Globe,
  Zap,
  Shield,
  Clock,
  Users,
  Award,
  MapPin,
  FileText,
  Eye,
} from "lucide-react";

/* ─── TOKENS ─── */
const C = {
  bg: "#0f172a",
  bg2: "#0f172a",
  bg3: "#1e293b111",
  gold: "#10b981",
  goldLight: "#22d3ee",
  goldDim: "rgba(16,185,129,0.12)",
  goldBorder: "rgba(16,185,129,0.18)",
  goldBorder2: "rgba(16,185,129,0.38)",
  text: "rgba(255,255,255,0.88)",
  muted: "rgba(255,255,255,0.45)",
  faint: "rgba(255,255,255,0.04)",
  border: "rgba(255,255,255,0.06)",
};

const glass = {
  background: "rgba(255,255,255,0.03)",
  border: `1px solid ${C.goldBorder}`,
  backdropFilter: "blur(12px)",
  borderRadius: 20,
};

const tag = {
  display: "inline-block",
  padding: "5px 16px",
  borderRadius: 100,
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  background: C.goldDim,
  border: `1px solid ${C.goldBorder2}`,
  color: C.gold,
  marginBottom: 16,
};

const iconBox = (size = 48) => ({
  width: size,
  height: size,
  borderRadius: 14,
  flexShrink: 0,
  background: C.goldDim,
  border: `1px solid ${C.goldBorder2}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: C.gold,
});

/* ─── DATA ─── */
const CAPABILITIES = [
  {
    icon: Settings,
    title: "Technical SEO",
    desc: "We audit and fix crawl errors, page speed issues, broken links, structured data, canonical tags, and Core Web Vitals — the invisible foundation that determines how well you rank.",
  },
  {
    icon: Target,
    title: "Keyword Strategy",
    desc: "In-depth research to uncover high-volume, low-competition terms your customers are actively searching. We map keywords to intent so every page serves a clear purpose.",
  },
  {
    icon: Files,
    title: "On-Page Mastery",
    desc: "Optimising content, meta titles, H-tags, schema markup, and internal linking architecture to signal relevance and topical authority to search algorithms.",
  },
  {
    icon: LinkIcon,
    title: "Authority Building",
    desc: "Ethical, white-hat link-building strategies — guest posts, digital PR, and niche placements — to grow your domain authority and drive qualified referral traffic.",
  },
  {
    icon: BarChart3,
    title: "Performance Reporting",
    desc: "Monthly custom dashboards tracking keyword rankings, organic traffic, CTR, and conversion goals. You always know exactly what's working and what we're improving.",
  },
  {
    icon: TrendingUp,
    title: "Local SEO",
    desc: "Dominating local search through Google Business Profile optimisation, local citations, geo-targeted content, and map pack strategies to capture nearby customers.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Full Site Audit",
    desc: "We run a comprehensive 150-point audit covering technical health, on-page signals, backlink profile, site speed, mobile usability, and competitor gap analysis.",
    tags: [
      "Technical Audit",
      "Competitor Gap",
      "Backlink Analysis",
      "Speed Check",
    ],
  },
  {
    step: "02",
    title: "Keyword Mapping",
    desc: "We build a complete keyword universe — segmented by intent (informational, navigational, transactional) — and map every target keyword to the right page on your site.",
    tags: [
      "Intent Mapping",
      "Long-Tail Research",
      "Competitor Keywords",
      "Content Gaps",
    ],
  },
  {
    step: "03",
    title: "On-Page & Technical Fixes",
    desc: "We implement all technical recommendations, rewrite meta data, restructure headings, build internal links, and add schema markup — all within the first 30 days.",
    tags: [
      "Meta Rewrites",
      "Schema Markup",
      "Internal Linking",
      "Core Web Vitals",
    ],
  },
  {
    step: "04",
    title: "Content & Link Building",
    desc: "We create SEO-optimised content clusters, blog posts, and landing pages. Simultaneously, we run outreach campaigns to earn high-authority backlinks.",
    tags: [
      "Content Creation",
      "Link Outreach",
      "Digital PR",
      "Cluster Strategy",
    ],
  },
  {
    step: "05",
    title: "Monitor, Report & Refine",
    desc: "Monthly performance reviews with custom dashboards. We track rankings, traffic, and conversions — and continuously refine strategy based on what the data tells us.",
    tags: [
      "Monthly Reports",
      "Rank Tracking",
      "A/B Testing",
      "Continuous Refinement",
    ],
  },
];

const STATS = [
  { value: "300%", label: "Avg. Traffic Growth" },
  { value: "10k+", label: "Keywords Ranked #1" },
  { value: "4.8×", label: "ROI Achieved" },
  { value: "50×", label: "Local Lead Increase" },
];

const INCLUDED = [
  {
    icon: Eye,
    title: "150-Point SEO Audit",
    desc: "A deep diagnostic covering every technical, on-page, and off-page factor that affects your visibility.",
  },
  {
    icon: Target,
    title: "Keyword Universe Report",
    desc: "A full keyword map with volume, difficulty, and intent data for every target opportunity we identify.",
  },
  {
    icon: FileText,
    title: "Monthly SEO Content",
    desc: "Optimised blog posts, pillar pages, and landing page copy crafted to rank and convert simultaneously.",
  },
  {
    icon: LinkIcon,
    title: "Quality Link Building",
    desc: "Manual outreach to acquire high-DR backlinks from relevant, authoritative websites in your niche.",
  },
  {
    icon: MapPin,
    title: "Local SEO Management",
    desc: "Google Business Profile setup, citation building, and local keyword targeting to own your area.",
  },
  {
    icon: BarChart3,
    title: "Custom Analytics Dashboard",
    desc: "Real-time visibility into rankings, organic traffic, click-through rates, and conversion attribution.",
  },
  {
    icon: Shield,
    title: "Penalty Recovery",
    desc: "If you've been hit by a Google update or manual action, we diagnose and resolve it with a recovery plan.",
  },
  {
    icon: Globe,
    title: "Competitor Monitoring",
    desc: "Ongoing tracking of what your top 5 competitors are doing so we can outmanoeuvre them proactively.",
  },
];

const TESTIMONIALS = [
  {
    name: "Vikram Patel",
    role: "Director, LegalEdge India",
    text: "Within 4 months we went from page 3 to page 1 for our most valuable keywords. Organic leads doubled. The team is thorough, transparent, and results-obsessed.",
    stars: 5,
  },
  {
    name: "Sneha Kulkarni",
    role: "Founder, BloomBotanicals",
    text: "Our Google Business profile went from invisible to the top 3 in our city. Foot traffic increased by 60% in under 3 months. Absolutely phenomenal ROI.",
    stars: 5,
  },
  {
    name: "Arun Joshi",
    role: "CMO, FinSense Technologies",
    text: "They rebuilt our entire site structure and content strategy. Organic traffic grew 280% in 6 months. Best SEO investment we've ever made.",
    stars: 5,
  },
];

const FAQS = [
  {
    q: "How long does SEO take to show results?",
    a: "SEO is a compounding investment. Most clients see measurable ranking improvements within 60–90 days. Significant traffic growth typically comes at the 4–6 month mark and accelerates from there.",
  },
  {
    q: "Is your link building safe from Google penalties?",
    a: "100%. We use only white-hat, manual outreach to acquire links from relevant, high-authority sites. We never use link farms, PBNs, or any technique that violates Google's guidelines.",
  },
  {
    q: "Do you work with e-commerce websites?",
    a: "Yes. We have deep expertise in e-commerce SEO — including product page optimisation, category architecture, structured data, and international SEO for scaling stores.",
  },
  {
    q: "Can you recover a site hit by a Google penalty?",
    a: "Yes. Penalty recovery is one of our specialisations. We conduct a full manual and algorithmic penalty audit, disavow toxic links, fix content issues, and submit reconsideration requests where needed.",
  },
  {
    q: "How do you measure and report on SEO success?",
    a: "We track keyword rankings, organic sessions, conversion rates, and revenue attributed to organic traffic. You receive a custom dashboard plus a monthly written report with clear commentary.",
  },
  {
    q: "Do you offer local SEO separately?",
    a: "Yes. We offer standalone local SEO packages covering Google Business Profile management, local citation building, geo-targeted content, and map pack ranking strategies.",
  },
];

/* ─── SUBCOMPONENTS ─── */
function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        ...glass,
        marginBottom: 10,
        overflow: "hidden",
        borderColor: open ? C.goldBorder2 : C.goldBorder,
        transition: "border-color 0.3s",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "20px 24px",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: open ? "#fff" : C.text,
          fontFamily: "inherit",
          fontSize: 15,
          fontWeight: 600,
          textAlign: "left",
        }}
      >
        <span>{faq.q}</span>
        <ChevronDown
          size={16}
          style={{
            color: C.gold,
            flexShrink: 0,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
          }}
        />
      </button>
      {open && (
        <div
          style={{
            padding: "0 24px 20px",
            paddingTop: 16,
            color: C.muted,
            fontSize: 14,
            lineHeight: 1.8,
            borderTop: `1px solid ${C.border}`,
          }}
        >
          {faq.a}
        </div>
      )}
    </div>
  );
}

function HoverCard({ children, style = {} }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        ...glass,
        borderColor: hov ? C.goldBorder2 : C.goldBorder,
        boxShadow: hov ? "0 0 40px rgba(16,185,129,0.07)" : "none",
        transition: "border-color 0.35s, box-shadow 0.35s",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionHead({ badge, title, goldWord, sub, center = false }) {
  return (
    <div style={{ marginBottom: 56, textAlign: center ? "center" : "left" }}>
      <span style={tag}>{badge}</span>
      <h2
        style={{
          fontSize: "clamp(2rem,4vw,3rem)",
          fontWeight: 900,
          color: "#fff",
          margin: "0 0 12px",
          lineHeight: 1.1,
        }}
      >
        {title} <span style={{ color: C.gold }}>{goldWord}</span>
      </h2>
      {sub && (
        <p
          style={{
            color: C.muted,
            fontSize: 15,
            lineHeight: 1.7,
            maxWidth: center ? 520 : 500,
            margin: center ? "0 auto" : 0,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

/* ─── MAIN ─── */
export default function SEOOptimization() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
      .seo-root * { box-sizing: border-box; }
      .seo-root { font-family: 'Outfit', sans-serif !important; }
      .seo-reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1); }
      .seo-reveal.visible { opacity: 1; transform: translateY(0); }
      .seo-marquee { display: flex; animation: seo-scroll 30s linear infinite; width: max-content; }
      .seo-marquee:hover { animation-play-state: paused; }
      @keyframes seo-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      .seo-cta-main:hover { background: #22d3ee !important; transform: scale(1.04) translateY(-2px) !important; box-shadow: 0 20px 50px rgba(16,185,129,0.45) !important; }
      .seo-cta-ghost:hover { border-color: rgba(16,185,129,0.4) !important; color: #fff !important; }
      .seo-back:hover { color: #10b981 !important; }
    `;
    document.head.appendChild(style);
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.08 },
    );
    sectionRef.current
      ?.querySelectorAll(".seo-reveal")
      .forEach((el) => obs.observe(el));
    return () => {
      obs.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  const wrap = { maxWidth: 1200, margin: "0 auto", padding: "0 28px" };

  return (
    <div
      ref={sectionRef}
      className="seo-root"
      style={{ background: C.bg, minHeight: "100vh", color: C.text }}
    >
      <Helmet>
        <title>Expert SEO Services | Rank Higher on Google | PAYIVVA Technologies</title>
        <meta
          name="description"
          content="Dominate search results with our data-driven SEO strategies. Technical audit, keyword strategy, and authority building for maximum visibility."
        />
      </Helmet>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          paddingTop: 128,
          paddingBottom: 96,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(16,185,129,0.06), transparent)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 40,
            right: -60,
            width: 520,
            height: 520,
            background:
              "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 68%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: -80,
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div style={wrap}>
          <Link
            to="/services"
            className="seo-back"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "rgba(16,185,129,0.6)",
              textDecoration: "none",
              marginBottom: 48,
              fontSize: 14,
              fontWeight: 500,
              transition: "color 0.2s",
            }}
          >
            <ArrowLeft size={15} /> Back to Services
          </Link>
          <div className="seo-reveal">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div style={iconBox(48)}>
                <Search size={22} />
              </div>
              <span
                style={{
                  color: C.gold,
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  fontSize: 11,
                  textTransform: "uppercase",
                }}
              >
                Service Detail
              </span>
            </div>
            <h1
              style={{
                fontSize: "clamp(2.8rem,7vw,5.5rem)",
                fontWeight: 900,
                lineHeight: 1.05,
                margin: "0 0 24px",
                letterSpacing: "-0.02em",
              }}
            >
              SEO{" "}
              <span
                style={{
                  color: C.gold,
                  textShadow: "0 0 30px rgba(16,185,129,0.3)",
                }}
              >
                Optimisation
              </span>
            </h1>
            <p
              style={{
                fontSize: 18,
                color: C.muted,
                maxWidth: 640,
                lineHeight: 1.8,
                margin: "0 0 36px",
              }}
            >
              Dominate search results and capture high-intent traffic. Our
              data-driven SEO strategies blend technical precision with content
              authority to ensure your brand stands out where it matters most —
              on page one.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link
                to="/contact"
                className="seo-cta-main"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 32px",
                  background: C.gold,
                  color: "#0f172a",
                  fontWeight: 800,
                  borderRadius: 14,
                  textDecoration: "none",
                  fontSize: 15,
                  transition: "all 0.3s",
                  letterSpacing: "0.02em",
                }}
              >
                Boost My Rankings <ArrowRight size={18} />
              </Link>
              <a
                href="#process"
                className="seo-cta-ghost"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 32px",
                  ...glass,
                  color: C.muted,
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 600,
                  transition: "all 0.3s",
                }}
              >
                See Our Process
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div
        style={{
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
          background: C.bg2,
        }}
      >
        <div style={{ ...wrap, padding: "40px 28px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 16,
              textAlign: "center",
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                className="seo-reveal"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  ...glass,
                  padding: "28px 20px",
                }}
              >
                <div
                  style={{
                    fontSize: 38,
                    fontWeight: 900,
                    color: C.gold,
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: C.muted,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CAPABILITIES ── */}
      <section style={{ background: C.bg2, padding: "96px 0" }}>
        <div style={wrap}>
          <div className="seo-reveal">
            <SectionHead
              badge="What We Do"
              title="Core"
              goldWord="Capabilities"
              sub="Six pillars of SEO excellence — each one engineered to move the needle on your rankings."
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {CAPABILITIES.map((cap, i) => (
              <div
                key={i}
                className="seo-reveal"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <HoverCard style={{ padding: "40px 32px", height: "100%" }}>
                  <div
                    style={{
                      ...iconBox(52),
                      marginBottom: 24,
                      borderRadius: 16,
                    }}
                  >
                    <cap.icon size={26} />
                  </div>
                  <h3
                    style={{
                      fontSize: 21,
                      fontWeight: 800,
                      color: "#fff",
                      margin: "0 0 12px",
                    }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    style={{
                      color: C.muted,
                      lineHeight: 1.78,
                      fontSize: 14,
                      margin: 0,
                    }}
                  >
                    {cap.desc}
                  </p>
                </HoverCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div
        style={{
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
          background: "#0f172a",
          padding: "18px 0",
          overflow: "hidden",
        }}
      >
        <div className="seo-marquee">
          {[
            ...[
              "Technical SEO",
              "On-Page SEO",
              "Link Building",
              "Keyword Research",
              "Local SEO",
              "Content Strategy",
              "Core Web Vitals",
              "Schema Markup",
              "Google Analytics",
              "Page Speed",
              "E-Commerce SEO",
              "Penalty Recovery",
            ],
            ...[
              "Technical SEO",
              "On-Page SEO",
              "Link Building",
              "Keyword Research",
              "Local SEO",
              "Content Strategy",
              "Core Web Vitals",
              "Schema Markup",
              "Google Analytics",
              "Page Speed",
              "E-Commerce SEO",
              "Penalty Recovery",
            ],
          ].map((t, i) => (
            <span
              key={i}
              style={{
                padding: "0 36px",
                fontSize: 28,
                fontWeight: 900,
                fontStyle: "italic",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.1)",
                whiteSpace: "nowrap",
                letterSpacing: "0.04em",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── WHAT'S INCLUDED ── */}
      <section style={{ padding: "96px 0" }}>
        <div style={wrap}>
          <div className="seo-reveal">
            <SectionHead
              badge="Deliverables"
              title="What's"
              goldWord="Included"
              sub="Every SEO engagement comes with a full suite of deliverables — no à la carte surprises."
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: 16,
            }}
          >
            {INCLUDED.map((item, i) => (
              <div
                key={i}
                className="seo-reveal"
                style={{ transitionDelay: `${i * 55}ms` }}
              >
                <HoverCard
                  style={{
                    padding: "24px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 18,
                  }}
                >
                  <div style={iconBox(42)}>
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#fff",
                        margin: "0 0 6px",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{
                        color: C.muted,
                        fontSize: 13,
                        lineHeight: 1.72,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </HoverCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" style={{ background: C.bg2, padding: "96px 0" }}>
        <div style={wrap}>
          <div className="seo-reveal">
            <SectionHead
              badge="How We Work"
              title="Our"
              goldWord="Process"
              sub="A transparent, 5-step SEO methodology that consistently delivers measurable growth."
            />
          </div>
          <div>
            {PROCESS.map((item, i) => (
              <div
                key={i}
                className="seo-reveal"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  display: "flex",
                  gap: 28,
                  alignItems: "flex-start",
                  paddingBottom: i < PROCESS.length - 1 ? 48 : 0,
                  borderBottom:
                    i < PROCESS.length - 1 ? `1px solid ${C.border}` : "none",
                  marginBottom: i < PROCESS.length - 1 ? 48 : 0,
                }}
              >
                <div
                  style={{ ...iconBox(56), borderRadius: 18, flexShrink: 0 }}
                >
                  <span
                    style={{ color: C.gold, fontWeight: 900, fontSize: 14 }}
                  >
                    {item.step}
                  </span>
                </div>
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#fff",
                      margin: "0 0 10px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: C.muted,
                      lineHeight: 1.8,
                      fontSize: 14,
                      margin: "0 0 16px",
                      maxWidth: 640,
                    }}
                  >
                    {item.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {item.tags.map((tg, j) => (
                      <span
                        key={j}
                        style={{
                          padding: "4px 14px",
                          borderRadius: 100,
                          fontSize: 11,
                          fontWeight: 600,
                          background: C.goldDim,
                          border: `1px solid ${C.goldBorder2}`,
                          color: C.gold,
                          letterSpacing: "0.06em",
                        }}
                      >
                        {tg}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "96px 0" }}>
        <div style={wrap}>
          <div className="seo-reveal">
            <SectionHead
              badge="Client Results"
              title="What Clients"
              goldWord="Say"
              sub="Real businesses. Real rankings. Real revenue growth."
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="seo-reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <HoverCard
                  style={{
                    padding: "32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                    height: "100%",
                  }}
                >
                  <div style={{ display: "flex", gap: 4 }}>
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        style={{ color: C.gold, fill: C.gold }}
                      />
                    ))}
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      fontSize: 14,
                      lineHeight: 1.8,
                      flex: 1,
                      margin: 0,
                    }}
                  >
                    "{t.text}"
                  </p>
                  <div
                    style={{
                      borderTop: `1px solid ${C.border}`,
                      paddingTop: 20,
                    }}
                  >
                    <div
                      style={{ fontWeight: 700, color: "#fff", fontSize: 15 }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        color: "rgba(16,185,129,0.65)",
                        fontSize: 12,
                        marginTop: 4,
                      }}
                    >
                      {t.role}
                    </div>
                  </div>
                </HoverCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: C.bg2, padding: "96px 0" }}>
        <div style={{ ...wrap, maxWidth: 860 }}>
          <div className="seo-reveal">
            <SectionHead
              badge="Common Questions"
              title="Frequently Asked"
              goldWord="Questions"
              sub="Everything you need to know before we start building your SEO strategy."
            />
          </div>
          {FAQS.map((faq, i) => (
            <FaqItem key={i} faq={faq} />
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section
        style={{
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
          padding: "72px 0",
        }}
      >
        <div style={wrap}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 24,
              textAlign: "center",
            }}
          >
            {[
              {
                icon: Zap,
                title: "Fast Implementation",
                desc: "All technical and on-page fixes are delivered within the first 30 days — no waiting months to start.",
              },
              {
                icon: Clock,
                title: "Consistent Reporting",
                desc: "Monthly reports every single month without fail — clear data, clear commentary, clear next steps.",
              },
              {
                icon: Shield,
                title: "100% White-Hat",
                desc: "We never use techniques that risk your site. Every link and tactic is fully Google-compliant.",
              },
              {
                icon: Award,
                title: "Long-Term Growth",
                desc: "SEO compounds over time. Our strategies are built for lasting results, not short-lived spikes.",
              },
            ].map((w, i) => (
              <div
                key={i}
                className="seo-reveal"
                style={{
                  transitionDelay: `${i * 70}ms`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 12,
                  padding: "24px 16px",
                }}
              >
                <div style={iconBox(48)}>
                  <w.icon size={22} />
                </div>
                <h4
                  style={{
                    fontSize: 17,
                    fontWeight: 800,
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  {w.title}
                </h4>
                <p
                  style={{
                    color: C.muted,
                    fontSize: 13,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(16,185,129,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(16,185,129,0.35), transparent)",
          }}
        />
        <div
          style={{
            ...wrap,
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="seo-reveal">
            <Sparkles
              style={{ color: C.gold, margin: "0 auto 24px", display: "block" }}
              size={52}
            />
            <h2
              style={{
                fontSize: "clamp(2.2rem,5vw,4rem)",
                fontWeight: 900,
                color: "#fff",
                margin: "0 0 24px",
                lineHeight: 1.1,
              }}
            >
              Stop being{" "}
              <span
                style={{
                  color: C.gold,
                  textShadow: "0 0 30px rgba(16,185,129,0.35)",
                }}
              >
                invisible.
              </span>
            </h2>
            <p
              style={{
                fontSize: 17,
                color: C.muted,
                margin: "0 auto 48px",
                maxWidth: 560,
                lineHeight: 1.8,
              }}
            >
              Your customers are searching for you right now. If you aren't on
              page one, you're handing business directly to your competitors.
              Let's fix that — permanently.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                justifyContent: "center",
              }}
            >
              <Link
                to="/contact"
                className="seo-cta-main"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "16px 40px",
                  background: C.gold,
                  color: "#0f172a",
                  fontWeight: 800,
                  borderRadius: 16,
                  textDecoration: "none",
                  fontSize: 16,
                  transition: "all 0.35s",
                  letterSpacing: "0.03em",
                }}
              >
                Boost My Rankings <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="seo-cta-ghost"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "16px 40px",
                  ...glass,
                  color: C.muted,
                  textDecoration: "none",
                  fontSize: 16,
                  fontWeight: 600,
                  transition: "all 0.35s",
                }}
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
