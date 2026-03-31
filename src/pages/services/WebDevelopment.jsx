import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Code,
  Layout,
  Cpu,
  Zap,
  Shield,
  Smartphone,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Star,
  TrendingUp,
  Clock,
  Users,
  Award,
  MessageSquare,
  BarChart3,
  Layers,
  Database,
  GitBranch,
  Rocket,
  ChevronDown,
} from "lucide-react";

/* ─── DESIGN TOKENS ─── */
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
  faint: "rgba(255,255,255,0.06)",
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
    icon: Layout,
    title: "Modern UI/UX",
    desc: "Intuitive interfaces designed to guide users toward conversion while reflecting your brand's unique identity and values.",
  },
  {
    icon: Cpu,
    title: "Full-Stack Power",
    desc: "Robust backend architectures integrated with seamless frontend experiences using the latest battle-tested tech stacks.",
  },
  {
    icon: Zap,
    title: "Performance First",
    desc: "Zero-lag experiences with optimised assets, lazy loading, and Core Web Vitals mastery for better SEO rankings.",
  },
  {
    icon: Shield,
    title: "Security Focused",
    desc: "Enterprise-grade security protocols to protect your data and maintain user trust across every interaction.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Flawless performance across all devices — your brand looks premium on mobile, tablet, and desktop.",
  },
  {
    icon: Code,
    title: "Clean Architecture",
    desc: "Maintainable, well-documented codebases built for easy updates and long-term scalability as your business grows.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We dive deep into your business goals, target audience, and competitors to map out a clear digital roadmap. We define KPIs before writing a single line of code.",
    tags: [
      "Business Analysis",
      "Competitor Research",
      "Goal Mapping",
      "KPI Definition",
    ],
  },
  {
    step: "02",
    title: "Design & Prototyping",
    desc: "We visualise the full user journey through high-fidelity designs, wireframes, and interactive prototypes — approved by you before development begins.",
    tags: ["Wireframing", "High-Fidelity UI", "Design System", "User Testing"],
  },
  {
    step: "03",
    title: "Agile Development",
    desc: "Sprint-based development with clean code, regular demos, and thorough QA at every milestone so you always know where your project stands.",
    tags: ["Sprint Planning", "Code Reviews", "QA Testing", "Client Demos"],
  },
  {
    step: "04",
    title: "Launch & Optimisation",
    desc: "Zero-downtime deployment with full analytics setup, speed audits, and SEO baseline configuration so your site launches performing from day one.",
    tags: [
      "Zero-Downtime Deploy",
      "Analytics Setup",
      "Speed Audit",
      "SEO Baseline",
    ],
  },
  {
    step: "05",
    title: "Ongoing Support & Growth",
    desc: "Your website is a living asset. Our retainer plans cover updates, feature additions, security patches, and monthly performance reports.",
    tags: [
      "Monthly Reports",
      "Feature Additions",
      "Security Patches",
      "Priority Support",
    ],
  },
];

const STATS = [
  { icon: Rocket, value: "150+", label: "Websites Delivered" },
  { icon: TrendingUp, value: "3.8×", label: "Avg. Conversion Lift" },
  { icon: Clock, value: "< 2s", label: "Average Load Time" },
  { icon: Users, value: "98%", label: "Client Retention Rate" },
];

const INCLUDED = [
  {
    icon: Layers,
    title: "Custom Design System",
    desc: "A full design language — typography, color tokens, spacing rules — tailored to your brand.",
  },
  {
    icon: Database,
    title: "Database Architecture",
    desc: "Scalable, normalised database schemas designed for performance at any user volume.",
  },
  {
    icon: GitBranch,
    title: "Version-Controlled Codebase",
    desc: "Full Git history, branching strategy, and developer documentation for your team.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Conversion Tracking",
    desc: "Google Analytics 4, event tracking, funnel visualisation, and goal configuration.",
  },
  {
    icon: Shield,
    title: "SSL & Security Hardening",
    desc: "HTTPS, CSRF protection, rate limiting, input sanitisation, and regular vulnerability scans.",
  },
  {
    icon: Rocket,
    title: "CI/CD Pipeline",
    desc: "Automated deployment pipelines so every update goes live seamlessly without downtime.",
  },
  {
    icon: Smartphone,
    title: "Cross-Browser & Device Testing",
    desc: "Tested on Chrome, Safari, Firefox, Edge, iOS, and Android before every release.",
  },
  {
    icon: MessageSquare,
    title: "Post-Launch Handover Training",
    desc: "Live walkthrough and documentation so your team can manage the site confidently.",
  },
];

const PACKAGES = [
  {
    name: "Starter",
    price: "₹29,999",
    tag: "Perfect for new businesses",
    highlight: false,
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "Google Analytics",
      "1 month support",
    ],
  },
  {
    name: "Growth",
    price: "₹74,999",
    tag: "Most popular choice",
    highlight: true,
    features: [
      "Up to 15 pages",
      "Custom UI/UX design",
      "CMS integration",
      "Advanced SEO & performance",
      "Blog & portfolio setup",
      "E-commerce ready",
      "Social media integration",
      "3 months support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    tag: "For scaling businesses",
    highlight: false,
    features: [
      "Unlimited pages",
      "Full-stack web application",
      "Custom backend & API",
      "Third-party integrations",
      "Multi-language support",
      "Advanced security audit",
      "Dedicated project manager",
      "12 months priority support",
    ],
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Founder, NestBridge Realty",
    text: "They redesigned our entire platform in under 4 weeks. Our lead conversions jumped 240% in the first month. Exceptional work, exceptional team.",
    stars: 5,
  },
  {
    name: "Rahul Mehta",
    role: "CEO, TechFlow Solutions",
    text: "The attention to detail is unmatched. Our new website loads in under 1.5 seconds and our bounce rate dropped by 60%. Pure professionals.",
    stars: 5,
  },
  {
    name: "Anjali Desai",
    role: "Head of Marketing, StyleVault",
    text: "From discovery to launch in 6 weeks. The design is stunning, the code is clean, and post-launch support has been incredible. Highly recommend.",
    stars: 5,
  },
];

const FAQS = [
  {
    q: "How long does it take to build a website?",
    a: "Timelines vary by scope. A standard 5–10 page business website typically takes 3–4 weeks. E-commerce and custom web apps range from 6–12 weeks depending on complexity.",
  },
  {
    q: "Do you provide maintenance after launch?",
    a: "Absolutely. All packages include a support period post-launch. We also offer monthly retainer plans for updates, security monitoring, and performance optimisation.",
  },
  {
    q: "Will my website rank on Google?",
    a: "Every site we build is SEO-ready — proper meta tags, schema markup, fast load times, and mobile optimisation. We also offer dedicated SEO services to accelerate rankings.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We specialise in redesigns that preserve your SEO equity while modernising the look, feel, and performance. We audit your current site before proposing a strategy.",
  },
  {
    q: "What technologies do you use?",
    a: "We work with React, Next.js, Node.js, PostgreSQL, MongoDB, Supabase, and more. We recommend the best stack based on your specific business needs and long-term goals.",
  },
];

const TECH = [
  "React.js",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "Vercel",
  "Tailwind CSS",
  "TypeScript",
  "Redis",
  "AWS",
  "Docker",
  "GraphQL",
  "Prisma",
  "Stripe",
];

/* ─── FAQ ITEM ─── */
function FaqItem({ faq, i }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      key={i}
      style={{
        ...glass,
        marginBottom: 12,
        overflow: "hidden",
        transition: "border-color 0.3s",
        borderColor: open ? C.goldBorder2 : C.goldBorder,
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
            color: C.muted,
            fontSize: 14,
            lineHeight: 1.8,
            borderTop: `1px solid ${C.border}`,
            paddingTop: 16,
          }}
        >
          {faq.a}
        </div>
      )}
    </div>
  );
}

/* ─── CARD HOVER ─── */
function HoverCard({ children, style = {}, highlight = false }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...glass,
        ...(highlight
          ? {
              background: "rgba(16,185,129,0.06)",
              borderColor: C.goldBorder2,
              boxShadow: `0 0 50px rgba(16,185,129,0.1)`,
            }
          : {}),
        ...(hovered && !highlight
          ? {
              borderColor: C.goldBorder2,
              boxShadow: `0 0 40px rgba(16,185,129,0.07)`,
            }
          : {}),
        transition: "border-color 0.35s, box-shadow 0.35s",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ─── SECTION HEADING ─── */
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
            maxWidth: center ? 520 : 480,
            margin: center ? "0 auto" : 0,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

/* ─── MAIN COMPONENT ─── */
export default function WebDevelopment() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
      .wd-root * { box-sizing: border-box; }
      .wd-root { font-family: 'Outfit', sans-serif !important; }
      .wd-reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1); }
      .wd-reveal.visible { opacity: 1; transform: translateY(0); }
      .wd-marquee-track { display: flex; animation: wd-marquee 28s linear infinite; width: max-content; }
      .wd-marquee-track:hover { animation-play-state: paused; }
      @keyframes wd-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      .wd-cta-main:hover { background: #22d3ee !important; transform: scale(1.04) translateY(-2px) !important; box-shadow: 0 20px 50px rgba(16,185,129,0.45) !important; }
      .wd-cta-ghost:hover { border-color: rgba(16,185,129,0.4) !important; color: #fff !important; }
      .wd-back:hover { color: #10b981 !important; }
      .wd-pkg-btn-main:hover { background: #22d3ee !important; box-shadow: 0 0 30px rgba(16,185,129,0.4) !important; }
      .wd-pkg-btn-ghost:hover { border-color: rgba(16,185,129,0.4) !important; color: #fff !important; }
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
      ?.querySelectorAll(".wd-reveal")
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
      className="wd-root"
      style={{ background: C.bg, minHeight: "100vh", color: C.text }}
    >
      <Helmet>
        <title>Premium Web Development | Custom Business Solutions | PAYIVVA Technologies</title>
        <meta
          name="description"
          content="We build high-performance, conversion-optimised websites that scale. Custom designs, modern tech stack, and seamless user experiences."
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
            top: 60,
            right: 0,
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div style={wrap}>
          <Link
            to="/services"
            className="wd-back"
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

          <div className="wd-reveal">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div style={iconBox(48)}>
                <Globe size={22} />
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
              Website{" "}
              <span
                style={{
                  color: C.gold,
                  textShadow: "0 0 30px rgba(16,185,129,0.3)",
                }}
              >
                Development
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
              We build high-performance, secure, and infinitely scalable web
              solutions that don't just look good — they drive measurable
              business growth. From complex enterprise systems to
              high-converting landing pages.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link
                to="/contact"
                className="wd-cta-main"
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
                Start Your Project <ArrowRight size={18} />
              </Link>
              <a
                href="#packages"
                className="wd-cta-ghost"
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
                View Packages
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
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
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 16,
            }}
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                className="wd-reveal"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  ...glass,
                  padding: "20px 22px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div style={iconBox(44)}>
                  <s.icon size={20} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 26,
                      fontWeight: 900,
                      color: C.gold,
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: C.muted,
                      fontWeight: 500,
                      marginTop: 4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CAPABILITIES ── */}
      <section style={{ background: C.bg2, padding: "96px 0" }}>
        <div style={wrap}>
          <div className="wd-reveal">
            <SectionHead
              badge="What We Build"
              title="Core"
              goldWord="Capabilities"
              sub="Every project is engineered from first principles — no templates, no shortcuts."
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
                className="wd-reveal"
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
                      fontSize: 22,
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
                      lineHeight: 1.75,
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
          padding: "20px 0",
          overflow: "hidden",
        }}
      >
        <div className="wd-marquee-track">
          {[...TECH, ...TECH].map((t, i) => (
            <span
              key={i}
              style={{
                padding: "0 36px",
                fontSize: 32,
                fontWeight: 900,
                fontStyle: "italic",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.12)",
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
          <div className="wd-reveal">
            <SectionHead
              badge="Deliverables"
              title="What's"
              goldWord="Included"
              sub="Every website we deliver comes fully loaded — no hidden extras, no surprise add-ons."
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
                className="wd-reveal"
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
                        lineHeight: 1.7,
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
      <section style={{ background: C.bg2, padding: "96px 0" }}>
        <div style={wrap}>
          <div className="wd-reveal">
            <SectionHead
              badge="How We Work"
              title="Our"
              goldWord="Process"
              sub="A structured, transparent approach to digital excellence — no surprises, ever."
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {PROCESS.map((item, i) => (
              <div
                key={i}
                className="wd-reveal"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  display: "flex",
                  gap: 28,
                  alignItems: "flex-start",
                  paddingBottom: 48,
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

      {/* ── PACKAGES ── */}
      <section id="packages" style={{ padding: "96px 0" }}>
        <div style={wrap}>
          <div className="wd-reveal">
            <SectionHead
              badge="Transparent Pricing"
              title="Choose Your"
              goldWord="Package"
              sub="No hidden fees. No vague quotes. Just clear, honest pricing for exceptional work."
              center
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {PACKAGES.map((pkg, i) => (
              <div
                key={i}
                className="wd-reveal"
                style={{
                  transitionDelay: `${i * 100}ms`,
                  position: "relative",
                }}
              >
                {pkg.highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: -14,
                      left: "50%",
                      transform: "translateX(-50%)",
                      padding: "6px 20px",
                      background: C.gold,
                      color: "#0f172a",
                      fontSize: 10,
                      fontWeight: 800,
                      borderRadius: 100,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                      zIndex: 2,
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <HoverCard
                  highlight={pkg.highlight}
                  style={{
                    padding: "36px 28px",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div style={{ marginBottom: 28 }}>
                    <div
                      style={{
                        fontSize: 11,
                        color: C.muted,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.18em",
                        marginBottom: 8,
                      }}
                    >
                      {pkg.tag}
                    </div>
                    <div
                      style={{
                        fontSize: 28,
                        fontWeight: 900,
                        color: "#fff",
                        marginBottom: 4,
                      }}
                    >
                      {pkg.name}
                    </div>
                    <div
                      style={{ fontSize: 36, fontWeight: 900, color: C.gold }}
                    >
                      {pkg.price}
                    </div>
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      margin: "0 0 28px",
                      padding: 0,
                      flex: 1,
                    }}
                  >
                    {pkg.features.map((f, j) => (
                      <li
                        key={j}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          marginBottom: 12,
                          fontSize: 13,
                          color: C.muted,
                        }}
                      >
                        <CheckCircle2
                          size={14}
                          style={{ color: C.gold, flexShrink: 0, marginTop: 2 }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={
                      pkg.highlight ? "wd-pkg-btn-main" : "wd-pkg-btn-ghost"
                    }
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "14px",
                      borderRadius: 14,
                      fontWeight: 800,
                      fontSize: 14,
                      textDecoration: "none",
                      transition: "all 0.3s",
                      ...(pkg.highlight
                        ? { background: C.gold, color: "#0f172a", border: "none" }
                        : {
                            background: "transparent",
                            color: C.muted,
                            border: `1px solid ${C.goldBorder}`,
                          }),
                    }}
                  >
                    Get Started
                  </Link>
                </HoverCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: C.bg2, padding: "96px 0" }}>
        <div style={wrap}>
          <div className="wd-reveal">
            <SectionHead
              badge="Client Voices"
              title="What Clients"
              goldWord="Say"
              sub="Real results, real feedback from businesses we've transformed."
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
                className="wd-reveal"
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
      <section style={{ padding: "96px 0" }}>
        <div style={{ ...wrap, maxWidth: 860 }}>
          <div className="wd-reveal">
            <SectionHead
              badge="Common Questions"
              title="Frequently Asked"
              goldWord="Questions"
              sub="Everything you need to know before we start building."
            />
          </div>
          {FAQS.map((faq, i) => (
            <FaqItem key={i} faq={faq} i={i} />
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section
        style={{
          background: C.bg2,
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
                icon: Award,
                title: "Award-Winning Design",
                desc: "UI crafted by experienced designers who understand both aesthetics and conversion.",
              },
              {
                icon: Clock,
                title: "On-Time Delivery",
                desc: "We honour deadlines. 97% of our projects are delivered on or before schedule.",
              },
              {
                icon: Users,
                title: "Dedicated Team",
                desc: "A project manager, designer, and developer assigned to you from day one.",
              },
              {
                icon: TrendingUp,
                title: "Results-Driven",
                desc: "Every decision is tied to a metric — traffic, conversions, or revenue growth.",
              },
            ].map((w, i) => (
              <div
                key={i}
                className="wd-reveal"
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
          <div className="wd-reveal">
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
              Ready to build something{" "}
              <span
                style={{
                  color: C.gold,
                  textShadow: "0 0 30px rgba(16,185,129,0.35)",
                }}
              >
                legendary?
              </span>
            </h2>
            <p
              style={{
                fontSize: 17,
                color: C.muted,
                margin: "0 auto 48px",
                maxWidth: 580,
                lineHeight: 1.8,
              }}
            >
              Stop losing potential customers to a slow, outdated website. Let's
              create a digital experience that's truly representative of your
              brand's quality — and converts visitors into loyal customers.
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
                className="wd-cta-main"
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
                Start Your Project <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="wd-cta-ghost"
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
