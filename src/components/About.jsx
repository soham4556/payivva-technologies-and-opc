import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Target,
  Lightbulb,
  Award,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Users,
  Globe,
  Zap,
  Shield,
  Heart,
  Star,
  MapPin,
  Clock,
  MessageSquare,
  BarChart3,
  Layers,
  ChevronDown,
  Sparkles,
  Code2,
  Rocket,
  Trophy,
  Cpu,
  BrainCircuit,
} from "lucide-react";
import logo from "../assets/logo.png";

/* ─── DESIGN TOKENS ─── */
const C = {
  bg: "#040810",
  bg2: "#060c14",
  surface: "#0a1628",
  surfaceHigh: "#0d1f38",
  gold: "#10b981",
  goldLight: "#34d399",
  goldGlow: "#6ee7b7",
  cyan: "#22d3ee",
  cyanDim: "rgba(34,211,238,0.08)",
  goldDim: "rgba(16,185,129,0.08)",
  goldBorder: "rgba(16,185,129,0.15)",
  goldBorder2: "rgba(16,185,129,0.3)",
  goldBorder3: "rgba(16,185,129,0.5)",
  text: "rgba(255,255,255,0.92)",
  muted: "rgba(255,255,255,0.48)",
  muted2: "rgba(255,255,255,0.28)",
  border: "rgba(255,255,255,0.05)",
  borderMid: "rgba(255,255,255,0.1)",
};

const glass = (strong = false) => ({
  background: strong ? "rgba(16,185,129,0.06)" : "rgba(255,255,255,0.02)",
  border: `1px solid ${strong ? C.goldBorder2 : C.goldBorder}`,
  backdropFilter: "blur(20px)",
  borderRadius: 24,
});

const tagStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  padding: "6px 18px",
  borderRadius: 100,
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: "0.25em",
  textTransform: "uppercase",
  background:
    "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(34,211,238,0.08))",
  border: `1px solid ${C.goldBorder2}`,
  color: C.gold,
  marginBottom: 20,
};

/* ─── DATA ─── */
const VALUES = [
  {
    icon: Target,
    title: "Mission-Driven",
    gradient: "135deg, #10b981, #22d3ee",
    description:
      "We empower businesses of all sizes to thrive in the digital landscape through creative innovation and data-backed strategies that deliver measurable, lasting impact.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    gradient: "135deg, #22d3ee, #a78bfa",
    description:
      "We stay ahead of emerging technologies and trends, constantly evolving our approach to deliver cutting-edge digital solutions that keep you ahead of the curve.",
  },
  {
    icon: Award,
    title: "Excellence Standard",
    gradient: "135deg, #f59e0b, #10b981",
    description:
      "Every project we undertake meets the highest standards of quality, performance, and creativity — no shortcuts, no exceptions, no compromises.",
  },
  {
    icon: TrendingUp,
    title: "Growth Oriented",
    gradient: "135deg, #ec4899, #10b981",
    description:
      "Your success is our success. We measure performance by tangible growth we generate — revenue, leads, brand equity, and long-term market position.",
  },
];

const MILESTONES = [
  "Founded in 2023 with a vision to transform digital marketing in India",
  "Served 500+ clients across diverse industries nationwide",
  "Team of 50+ experts in development, design, and marketing",
  "ISO-certified quality management processes and delivery standards",
  "Award-winning campaigns generating millions in client revenue",
];

const BIG_STATS = [
  {
    value: "500+",
    label: "Projects Completed",
    icon: Layers,
    color: "#10b981",
  },
  {
    value: "₹50Cr+",
    label: "Revenue Generated",
    icon: TrendingUp,
    color: "#22d3ee",
  },
  { value: "98%", label: "Client Retention", icon: Heart, color: "#f59e0b" },
  { value: "50+", label: "Digital Experts", icon: Users, color: "#a78bfa" },
  { value: "15+", label: "Industries Served", icon: Globe, color: "#ec4899" },
  {
    value: "2023",
    label: "Founded, Pune India",
    icon: MapPin,
    color: "#10b981",
  },
];

const TEAM_VALUES = [
  {
    icon: Shield,
    title: "Radical Transparency",
    color: "#10b981",
    desc: "No hidden fees, no vague reports. You see exactly what we do, why we do it, and what it delivers — every single month.",
  },
  {
    icon: Clock,
    title: "On-Time, Always",
    color: "#22d3ee",
    desc: "We don't miss deadlines. 97% of our projects are delivered on or ahead of schedule. Your timeline is a commitment, not a suggestion.",
  },
  {
    icon: MessageSquare,
    title: "Dedicated Communication",
    color: "#a78bfa",
    desc: "A dedicated project manager is your single point of contact — responsive, accountable, and always aligned with your goals.",
  },
  {
    icon: Zap,
    title: "Speed to Impact",
    color: "#f59e0b",
    desc: "We move fast without breaking things. Most engagements show measurable impact within the first 30–45 days.",
  },
  {
    icon: Heart,
    title: "Long-Term Partnership",
    color: "#ec4899",
    desc: "98% of our clients renew. We build relationships, not just campaigns. Your long-term growth is always the north star.",
  },
  {
    icon: Award,
    title: "Certified Excellence",
    color: "#10b981",
    desc: "ISO-certified processes, Google & Meta certified specialists, and award-winning creative work that consistently exceeds expectations.",
  },
];

const WHY_US = [
  {
    icon: Cpu,
    title: "Full-Service Under One Roof",
    desc: "Web development, SEO, social media, paid ads, brand building, and lead generation — all handled by one cohesive team that understands your entire digital ecosystem.",
  },
  {
    icon: BarChart3,
    title: "Data First, Always",
    desc: "Every strategy begins with research and ends with measurement. We don't guess — we analyse, test, and optimise based on real performance data.",
  },
  {
    icon: Globe,
    title: "Industry-Agnostic Expertise",
    desc: "We've built winning strategies for real estate, healthcare, e-commerce, education, SaaS, legal, and F&B — our frameworks adapt to any market, any audience.",
  },
  {
    icon: Shield,
    title: "No Lock-In Contracts",
    desc: "We earn your business every month. All accounts, assets, and campaigns belong to you from day one. Zero lock-in, total transparency, complete ownership.",
  },
];

const SERVICES = [
  {
    icon: Globe,
    name: "Website Development",
    desc: "High-performance, conversion-optimised web solutions built for growth.",
    link: "/services/website-development",
    color: "#10b981",
  },
  {
    icon: BarChart3,
    name: "SEO Optimisation",
    desc: "Data-driven strategies to dominate search rankings and grow organic traffic.",
    link: "/services/seo",
    color: "#22d3ee",
  },
  {
    icon: MessageSquare,
    name: "Social Media Marketing",
    desc: "Content and community management that builds brand loyalty and engagement.",
    link: "/services/social-media",
    color: "#a78bfa",
  },
  {
    icon: Target,
    name: "Google & Facebook Ads",
    desc: "Precision paid campaigns engineered for maximum ROAS and lead volume.",
    link: "/services/ads",
    color: "#f59e0b",
  },
  {
    icon: Star,
    name: "Brand Promotion",
    desc: "End-to-end brand building that makes your business the obvious choice.",
    link: "/services/brand",
    color: "#ec4899",
  },
  {
    icon: Users,
    name: "Lead Generation",
    desc: "Systematic lead funnels that keep your pipeline full and your team busy.",
    link: "/services/leads",
    color: "#10b981",
  },
];

/* ─── MICRO COMPONENTS ─── */
function HoverCard({ children, style = {}, accentColor = C.gold }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        ...glass(),
        position: "relative",
        overflow: "hidden",
        borderColor: hov ? accentColor + "55" : C.goldBorder,
        boxShadow: hov
          ? `0 0 50px ${accentColor}12, inset 0 1px 0 rgba(255,255,255,0.05)`
          : "inset 0 1px 0 rgba(255,255,255,0.03)",
        transform: hov ? "translateY(-3px)" : "translateY(0)",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        ...style,
      }}
    >
      {hov && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            background: `radial-gradient(circle at 30% 30%, ${accentColor}, transparent 60%)`,
            pointerEvents: "none",
          }}
        />
      )}
      {children}
    </div>
  );
}

function GlowDot({ color = C.gold }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: color,
        boxShadow: `0 0 12px ${color}, 0 0 24px ${color}55`,
        flexShrink: 0,
        animation: "pulseDot 2.5s ease-in-out infinite",
      }}
    />
  );
}

function SectionHead({
  badge,
  title,
  goldWord,
  sub,
  center = false,
  icon: Icon,
}) {
  return (
    <div style={{ marginBottom: 64, textAlign: center ? "center" : "left" }}>
      <span style={tagStyle}>
        {Icon && <Icon size={10} />}
        {badge}
      </span>
      <h2
        style={{
          fontSize: "clamp(2rem,4vw,3.2rem)",
          fontWeight: 900,
          color: "#fff",
          margin: "0 0 16px",
          lineHeight: 1.08,
          letterSpacing: "-0.025em",
        }}
      >
        {title}{" "}
        <span
          style={{
            background: `linear-gradient(135deg, ${C.gold}, ${C.cyan})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {goldWord}
        </span>
      </h2>
      {sub && (
        <p
          style={{
            color: C.muted,
            fontSize: 15.5,
            lineHeight: 1.75,
            maxWidth: center ? 540 : 520,
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
export default function About() {
  const rootRef = useRef(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');
      .ab-root * { box-sizing: border-box; }
      .ab-root { font-family: 'DM Sans', sans-serif !important; }
      .ab-root h1,.ab-root h2,.ab-root h3,.ab-root h4 { font-family: 'Syne', sans-serif !important; }
      .ab-reveal { opacity:0; transform:translateY(40px); transition:opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1); }
      .ab-reveal.visible { opacity:1; transform:translateY(0); }
      .ab-reveal-left { opacity:0; transform:translateX(-40px); transition:opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1); }
      .ab-reveal-left.visible { opacity:1; transform:translateX(0); }
      .ab-reveal-right { opacity:0; transform:translateX(40px); transition:opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1); }
      .ab-reveal-right.visible { opacity:1; transform:translateX(0); }
      .ab-marquee { display:flex; animation:ab-scroll 30s linear infinite; width:max-content; }
      .ab-marquee:hover { animation-play-state:paused; }
      @keyframes ab-scroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }
      @keyframes pulseDot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.6;transform:scale(1.4)} }
      @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
      @keyframes spinSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      @keyframes gradientShift { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
      @keyframes scanline { 0%{transform:translateY(-100%)} 100%{transform:translateY(400%)} }
      @keyframes borderGlow { 0%,100%{opacity:0.3} 50%{opacity:1} }
      .ab-cta-btn { transition: all 0.35s cubic-bezier(0.16,1,0.3,1) !important; }
      .ab-cta-btn:hover { transform:scale(1.05) translateY(-3px) !important; box-shadow:0 24px 60px rgba(16,185,129,0.5) !important; }
      .ab-ghost-btn { transition: all 0.35s !important; }
      .ab-ghost-btn:hover { border-color:rgba(16,185,129,0.5) !important; color:#fff !important; background:rgba(16,185,129,0.08) !important; }
      .stat-card:hover .stat-icon { transform:scale(1.15) rotate(-5deg); }
      .stat-icon { transition: transform 0.4s cubic-bezier(0.16,1,0.3,1); }
    `;
    document.head.appendChild(style);

    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.07 },
    );
    rootRef.current
      ?.querySelectorAll(".ab-reveal, .ab-reveal-left, .ab-reveal-right")
      .forEach((el) => obs.observe(el));
    return () => {
      obs.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  const wrap = { maxWidth: 1200, margin: "0 auto", padding: "0 28px" };

  return (
    <div
      ref={rootRef}
      className="ab-root"
      style={{ background: C.bg, minHeight: "100vh", color: C.text }}
    >
      {/* ── TOP ACCENT LINE ── */}
      <div
        style={{
          height: 2,
          background:
            "linear-gradient(90deg, transparent 0%, #10b981 30%, #22d3ee 50%, #10b981 70%, transparent 100%)",
          boxShadow: "0 0 20px rgba(16,185,129,0.6)",
        }}
      />

      {/* ══════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════ */}
      <section
        style={{
          position: "relative",
          paddingTop: "clamp(70px,10vw,110px)",
          paddingBottom: "clamp(60px,8vw,96px)",
          overflow: "hidden",
        }}
      >
        {/* Background effects */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(16,185,129,0.06) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 50% at 80% 100%, rgba(34,211,238,0.04) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        {/* Animated grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.025,
            backgroundImage:
              "linear-gradient(rgba(16,185,129,1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating orbs */}
        {[
          {
            top: "10%",
            left: "5%",
            size: 320,
            color: "rgba(16,185,129,0.07)",
            delay: "0s",
          },
          {
            top: "60%",
            right: "-5%",
            size: 280,
            color: "rgba(34,211,238,0.05)",
            delay: "1.5s",
          },
          {
            bottom: "10%",
            left: "30%",
            size: 200,
            color: "rgba(167,139,250,0.04)",
            delay: "0.8s",
          },
        ].map((orb, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              ...orb,
              width: orb.size,
              height: orb.size,
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
              borderRadius: "50%",
              pointerEvents: "none",
              animation: `float 6s ease-in-out infinite`,
              animationDelay: orb.delay,
            }}
          />
        ))}

        <div style={wrap}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "clamp(40px,6vw,96px)",
              alignItems: "center",
            }}
          >
            {/* LEFT COLUMN */}
            <div className="ab-reveal-left">
              <div style={tagStyle}>
                <Sparkles size={10} />
                Who We Are
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.6rem,5.5vw,4.4rem)",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1.04,
                  margin: "0 0 8px",
                  letterSpacing: "-0.03em",
                }}
              >
                Pioneers of
              </h1>
              <h1
                style={{
                  fontSize: "clamp(2.6rem,5.5vw,4.4rem)",
                  fontWeight: 800,
                  lineHeight: 1.04,
                  margin: "0 0 28px",
                  letterSpacing: "-0.03em",
                  background:
                    "linear-gradient(135deg, #10b981 0%, #22d3ee 50%, #a78bfa 100%)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "gradientShift 4s ease infinite",
                }}
              >
                Digital Excellence
              </h1>

              <p
                style={{
                  fontSize: 16,
                  color: C.muted,
                  lineHeight: 1.85,
                  margin: "0 0 18px",
                  maxWidth: 500,
                }}
              >
                PAYIVVA Technologies (OPC) Pvt Ltd is a premium digital
                solutions company dedicated to transforming how businesses
                connect, grow, and thrive online. Founded on the principles of
                innovation, integrity, and impact.
              </p>
              <p
                style={{
                  fontSize: 16,
                  color: C.muted,
                  lineHeight: 1.85,
                  margin: "0 0 36px",
                  maxWidth: 500,
                }}
              >
                From ambitious startups to established enterprises, we partner
                with brands that dare to think differently — combining deep
                technical expertise with creative storytelling.
              </p>

              {/* Milestones */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {MILESTONES.map((m, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      fontSize: 14.5,
                      color: "rgba(255,255,255,0.72)",
                      lineHeight: 1.6,
                    }}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 6,
                        background: "rgba(16,185,129,0.15)",
                        border: "1px solid rgba(16,185,129,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      <CheckCircle2 size={12} style={{ color: C.gold }} />
                    </div>
                    {m}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                <button
                  className="ab-cta-btn"
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "15px 32px",
                    background: "linear-gradient(135deg, #10b981, #22d3ee)",
                    color: "#040810",
                    fontWeight: 700,
                    borderRadius: 14,
                    border: "none",
                    cursor: "pointer",
                    fontSize: 15,
                    fontFamily: "inherit",
                    letterSpacing: "0.02em",
                    boxShadow: "0 8px 32px rgba(16,185,129,0.35)",
                  }}
                >
                  Work With Us <ArrowRight size={18} />
                </button>
                <Link
                  to="/services"
                  className="ab-ghost-btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "15px 32px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: C.muted,
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: 600,
                    borderRadius: 14,
                    fontFamily: "inherit",
                  }}
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN — Company Card */}
            <div className="ab-reveal-right" style={{ position: "relative" }}>
              {/* Spinning ring */}
              <div
                style={{
                  position: "absolute",
                  top: -24,
                  right: -24,
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  border: "1px dashed rgba(16,185,129,0.2)",
                  animation: "spinSlow 20s linear infinite",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -16,
                  left: -16,
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  border: "1px dashed rgba(34,211,238,0.15)",
                  animation: "spinSlow 15s linear infinite reverse",
                  pointerEvents: "none",
                }}
              />

              {/* Main card */}
              <div
                style={{
                  ...glass(true),
                  borderRadius: 28,
                  padding: "40px 36px",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow:
                    "0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                {/* Scanline effect */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    height: "20%",
                    background:
                      "linear-gradient(to bottom, transparent, rgba(16,185,129,0.03), transparent)",
                    animation: "scanline 5s linear infinite",
                    pointerEvents: "none",
                  }}
                />

                {/* Corner accents */}
                {[
                  {
                    top: 0,
                    left: 0,
                    borderTop: `2px solid ${C.gold}`,
                    borderLeft: `2px solid ${C.gold}`,
                    borderRadius: "28px 0 0 0",
                  },
                  {
                    top: 0,
                    right: 0,
                    borderTop: `2px solid ${C.cyan}`,
                    borderRight: `2px solid ${C.cyan}`,
                    borderRadius: "0 28px 0 0",
                  },
                  {
                    bottom: 0,
                    left: 0,
                    borderBottom: `2px solid ${C.cyan}`,
                    borderLeft: `2px solid ${C.cyan}`,
                    borderRadius: "0 0 0 28px",
                  },
                  {
                    bottom: 0,
                    right: 0,
                    borderBottom: `2px solid ${C.gold}`,
                    borderRight: `2px solid ${C.gold}`,
                    borderRadius: "0 0 28px 0",
                  },
                ].map((corner, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      width: 28,
                      height: 28,
                      ...corner,
                      animation: `borderGlow 3s ease-in-out infinite`,
                      animationDelay: `${i * 0.75}s`,
                    }}
                  />
                ))}

                <div style={{ position: "relative" }}>
                  {/* Logo */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      marginBottom: 28,
                    }}
                  >
                    <div
                      style={{
                        width: 72,
                        height: 72,
                        borderRadius: 20,
                        background:
                          "linear-gradient(135deg, rgba(16,185,129,0.2), rgba(34,211,238,0.1))",
                        border: `1px solid ${C.goldBorder2}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 0 30px rgba(16,185,129,0.25)",
                      }}
                    >
                      <img
                        src={logo}
                        alt="PAYIVVA"
                        style={{ width: 52, height: 52, objectFit: "contain" }}
                      />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: 18,
                          fontWeight: 800,
                          color: "#fff",
                          margin: "0 0 3px",
                          fontFamily: "Syne, sans-serif",
                        }}
                      >
                        PAYIVVA Technologies
                      </p>
                      <p
                        style={{
                          fontSize: 10,
                          color: C.gold,
                          fontWeight: 700,
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                          margin: 0,
                        }}
                      >
                        Inspiring Innovations
                      </p>
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 10,
                      marginBottom: 20,
                    }}
                  >
                    {[
                      { number: "500+", label: "Projects", color: C.gold },
                      { number: "98%", label: "Satisfaction", color: C.cyan },
                      { number: "50+", label: "Experts", color: "#a78bfa" },
                      { number: "5+", label: "Years", color: "#f59e0b" },
                    ].map((s, i) => (
                      <div
                        key={i}
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: `1px solid rgba(255,255,255,0.06)`,
                          borderRadius: 16,
                          padding: "18px 14px",
                          textAlign: "center",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: 2,
                            background: `linear-gradient(90deg, transparent, ${s.color}, transparent)`,
                          }}
                        />
                        <div
                          style={{
                            fontSize: 26,
                            fontWeight: 900,
                            color: s.color,
                            lineHeight: 1,
                            fontFamily: "Syne, sans-serif",
                          }}
                        >
                          {s.number}
                        </div>
                        <div
                          style={{
                            fontSize: 11,
                            color: C.muted,
                            marginTop: 5,
                            fontWeight: 500,
                          }}
                        >
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Live badge */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 18px",
                      background: "rgba(16,185,129,0.06)",
                      border: `1px solid rgba(16,185,129,0.2)`,
                      borderRadius: 12,
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                    >
                      <GlowDot color="#4ade80" />
                      <span
                        style={{
                          fontSize: 13,
                          color: "rgba(255,255,255,0.65)",
                          fontWeight: 500,
                        }}
                      >
                        Accepting new projects
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: 11,
                        color: C.gold,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                      }}
                    >
                      LIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════ */}
      <div
        style={{
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
          background: C.bg2,
          padding: "52px 0",
        }}
      >
        <div style={wrap}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 14,
            }}
          >
            {BIG_STATS.map((s, i) => (
              <div
                key={i}
                className="ab-reveal stat-card"
                style={{
                  transitionDelay: `${i * 60}ms`,
                  position: "relative",
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${C.border}`,
                  borderRadius: 20,
                  padding: "28px 16px",
                  textAlign: "center",
                  cursor: "default",
                  overflow: "hidden",
                  transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = s.color + "44";
                  e.currentTarget.style.background = s.color + "08";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: `linear-gradient(90deg, transparent, ${s.color}66, transparent)`,
                  }}
                />
                <div
                  className="stat-icon"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    margin: "0 auto 14px",
                    background: s.color + "18",
                    border: `1px solid ${s.color}33`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <s.icon size={20} style={{ color: s.color }} />
                </div>
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 900,
                    color: s.color,
                    lineHeight: 1,
                    fontFamily: "Syne, sans-serif",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: C.muted,
                    fontWeight: 500,
                    marginTop: 7,
                    lineHeight: 1.4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          VALUES
      ══════════════════════════════════════════ */}
      <section
        style={{ padding: "104px 0", position: "relative", overflow: "hidden" }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={wrap}>
          <div className="ab-reveal" style={{ textAlign: "center" }}>
            <SectionHead
              badge="Core Values"
              title="What We"
              goldWord="Stand For"
              icon={Trophy}
              sub="The principles that guide every decision, every campaign, and every client relationship we build."
              center
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
              gap: 18,
            }}
          >
            {VALUES.map((val, i) => (
              <div
                key={i}
                className="ab-reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  style={{
                    position: "relative",
                    borderRadius: 24,
                    padding: "40px 28px",
                    background: "rgba(255,255,255,0.02)",
                    border: `1px solid ${C.goldBorder}`,
                    textAlign: "center",
                    height: "100%",
                    overflow: "hidden",
                    transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = C.goldBorder2;
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 30px 60px rgba(0,0,0,0.3)";
                    e.currentTarget.querySelector(".val-icon").style.transform =
                      "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.goldBorder;
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.querySelector(".val-icon").style.transform =
                      "scale(1)";
                  }}
                >
                  {/* Gradient top bar */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "20%",
                      right: "20%",
                      height: 2,
                      background: `linear-gradient(90deg, transparent, ${val.gradient.includes("cyan") ? C.cyan : C.gold}, transparent)`,
                      borderRadius: 1,
                    }}
                  />

                  <div
                    className="val-icon"
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 20,
                      margin: "0 auto 22px",
                      background: `linear-gradient(${val.gradient})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 8px 32px rgba(16,185,129,0.2)`,
                      transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
                    }}
                  >
                    <val.icon size={26} style={{ color: "#040810" }} />
                  </div>
                  <h3
                    style={{
                      fontSize: 19,
                      fontWeight: 700,
                      color: "#fff",
                      margin: "0 0 14px",
                    }}
                  >
                    {val.title}
                  </h3>
                  <p
                    style={{
                      color: C.muted,
                      fontSize: 14,
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MARQUEE
      ══════════════════════════════════════════ */}
      <div
        style={{
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
          background: "#020609",
          padding: "22px 0",
          overflow: "hidden",
        }}
      >
        <div className="ab-marquee">
          {[...Array(4)].flatMap(() =>
            [
              "Website Development",
              "SEO Optimisation",
              "Social Media Marketing",
              "Google Ads",
              "Brand Promotion",
              "Lead Generation",
            ].map((t, j) => (
              <span
                key={t + j}
                style={{
                  padding: "0 48px",
                  fontSize: 24,
                  fontWeight: 800,
                  fontStyle: "italic",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.07)",
                  whiteSpace: "nowrap",
                  letterSpacing: "0.06em",
                  fontFamily: "Syne, sans-serif",
                }}
              >
                {t}
                <span
                  style={{ marginLeft: 48, color: C.goldBorder3, fontSize: 16 }}
                >
                  ◆
                </span>
              </span>
            )),
          )}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          HOW WE WORK (Team Values)
      ══════════════════════════════════════════ */}
      <section style={{ background: C.bg2, padding: "104px 0" }}>
        <div style={wrap}>
          <div className="ab-reveal">
            <SectionHead
              badge="How We Operate"
              title="The Way We"
              goldWord="Work"
              icon={Rocket}
              sub="Six operating principles that define how we treat every client, every project, every day."
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 16,
            }}
          >
            {TEAM_VALUES.map((item, i) => (
              <div
                key={i}
                className="ab-reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  style={{
                    position: "relative",
                    borderRadius: 20,
                    background: "rgba(255,255,255,0.02)",
                    border: `1px solid ${C.border}`,
                    padding: "28px 24px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 18,
                    overflow: "hidden",
                    transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = item.color + "44";
                    e.currentTarget.style.background = item.color + "06";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Left accent stripe */}
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "20%",
                      bottom: "20%",
                      width: 2,
                      background: `linear-gradient(to bottom, transparent, ${item.color}, transparent)`,
                      borderRadius: 2,
                    }}
                  />
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 14,
                      flexShrink: 0,
                      background: item.color + "18",
                      border: `1px solid ${item.color}33`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <item.icon size={20} style={{ color: item.color }} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#fff",
                        margin: "0 0 8px",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{
                        color: C.muted,
                        fontSize: 13.5,
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY PAYIVVA — Bento-style grid
      ══════════════════════════════════════════ */}
      <section style={{ padding: "104px 0", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 40% at 50% 50%, rgba(34,211,238,0.03) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={wrap}>
          <div className="ab-reveal">
            <SectionHead
              badge="Why Choose Us"
              title="Why"
              goldWord="PAYIVVA"
              icon={BrainCircuit}
              sub="We're not just another digital agency. Here's what makes the difference."
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 16,
            }}
          >
            {WHY_US.map((item, i) => (
              <div
                key={i}
                className="ab-reveal"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div
                  style={{
                    position: "relative",
                    borderRadius: 22,
                    background: "rgba(255,255,255,0.02)",
                    border: `1px solid ${C.border}`,
                    padding: "36px 30px",
                    overflow: "hidden",
                    transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = C.goldBorder2;
                    e.currentTarget.style.background = "rgba(16,185,129,0.04)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(0,0,0,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Number watermark */}
                  <div
                    style={{
                      position: "absolute",
                      top: 20,
                      right: 24,
                      fontSize: 64,
                      fontWeight: 900,
                      color: "rgba(16,185,129,0.04)",
                      fontFamily: "Syne, sans-serif",
                      lineHeight: 1,
                      userSelect: "none",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      marginBottom: 20,
                      background: "rgba(16,185,129,0.1)",
                      border: `1px solid ${C.goldBorder2}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <item.icon size={22} style={{ color: C.gold }} />
                  </div>

                  <h4
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#fff",
                      margin: "0 0 12px",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      color: C.muted,
                      fontSize: 14,
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      marginTop: 20,
                    }}
                  >
                    <GlowDot color={C.gold} />
                    <span
                      style={{
                        fontSize: 11,
                        color: C.gold,
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      Our commitment
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════ */}
      <section style={{ background: C.bg2, padding: "88px 0" }}>
        <div style={wrap}>
          <div className="ab-reveal" style={{ textAlign: "center" }}>
            <SectionHead
              badge="What We Offer"
              title="Our"
              goldWord="Services"
              icon={Code2}
              sub="Everything you need to grow your digital presence — under one roof."
              center
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 14,
            }}
          >
            {SERVICES.map((svc, i) => (
              <div
                key={i}
                className="ab-reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <Link
                  to={svc.link}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <div
                    style={{
                      position: "relative",
                      borderRadius: 20,
                      background: "rgba(255,255,255,0.02)",
                      border: `1px solid ${C.border}`,
                      padding: "28px 24px",
                      overflow: "hidden",
                      transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = svc.color + "55";
                      e.currentTarget.style.background = svc.color + "07";
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.3)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = C.border;
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.02)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {/* Top accent */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: "25%",
                        right: "25%",
                        height: 2,
                        background: `linear-gradient(90deg, transparent, ${svc.color}88, transparent)`,
                      }}
                    />

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 16,
                      }}
                    >
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 12,
                          background: svc.color + "18",
                          border: `1px solid ${svc.color}33`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <svc.icon size={20} style={{ color: svc.color }} />
                      </div>
                      <ArrowRight size={16} style={{ color: C.muted2 }} />
                    </div>

                    <h4
                      style={{
                        fontSize: 15.5,
                        fontWeight: 700,
                        color: "#fff",
                        margin: "0 0 8px",
                      }}
                    >
                      {svc.name}
                    </h4>
                    <p
                      style={{
                        color: C.muted,
                        fontSize: 13,
                        lineHeight: 1.72,
                        margin: 0,
                      }}
                    >
                      {svc.desc}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA
      ══════════════════════════════════════════ */}
      <section
        style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}
      >
        {/* Background effects */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(16,185,129,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(16,185,129,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.015,
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
              "linear-gradient(90deg, transparent, rgba(16,185,129,0.4), transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(34,211,238,0.3), transparent)",
          }}
        />

        {/* Large background text */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            fontSize: "clamp(80px,15vw,180px)",
            fontWeight: 900,
            fontFamily: "Syne, sans-serif",
            color: "rgba(16,185,129,0.03)",
            whiteSpace: "nowrap",
            letterSpacing: "-0.05em",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          PAYIVVA
        </div>

        <div
          style={{
            ...wrap,
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="ab-reveal">
            {/* Icon cluster */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                marginBottom: 32,
              }}
            >
              {[Trophy, Rocket, Star].map((Icon, i) => (
                <div
                  key={i}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background:
                      i === 1
                        ? "linear-gradient(135deg, #10b981, #22d3ee)"
                        : "rgba(16,185,129,0.1)",
                    border: `1px solid ${i === 1 ? "transparent" : C.goldBorder2}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: i === 1 ? "scale(1.15)" : "scale(1)",
                  }}
                >
                  <Icon
                    size={20}
                    style={{ color: i === 1 ? "#040810" : C.gold }}
                  />
                </div>
              ))}
            </div>

            <h2
              style={{
                fontSize: "clamp(2.4rem,5vw,4.2rem)",
                fontWeight: 900,
                color: "#fff",
                margin: "0 0 20px",
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
              }}
            >
              Ready to grow with{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #10b981, #22d3ee, #a78bfa)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "gradientShift 4s ease infinite",
                }}
              >
                PAYIVVA?
              </span>
            </h2>

            <p
              style={{
                fontSize: 17,
                color: C.muted,
                margin: "0 auto 48px",
                maxWidth: 520,
                lineHeight: 1.8,
              }}
            >
              Let's build something remarkable together. Whether you need a new
              website, more leads, stronger SEO, or a brand that commands
              attention — we have the team and the track record.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                justifyContent: "center",
              }}
            >
              <button
                className="ab-cta-btn"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "18px 44px",
                  background: "linear-gradient(135deg, #10b981, #22d3ee)",
                  color: "#040810",
                  fontWeight: 800,
                  borderRadius: 16,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 16,
                  fontFamily: "inherit",
                  letterSpacing: "0.03em",
                  boxShadow: "0 12px 40px rgba(16,185,129,0.4)",
                }}
              >
                Start a Project <ArrowRight size={20} />
              </button>
              <Link
                to="/services"
                className="ab-ghost-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "18px 44px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: C.muted,
                  textDecoration: "none",
                  fontSize: 16,
                  fontWeight: 600,
                  borderRadius: 16,
                  fontFamily: "inherit",
                }}
              >
                Explore Services
              </Link>
            </div>

            {/* Trust line */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 24,
                marginTop: 52,
                flexWrap: "wrap",
              }}
            >
              {[
                "No lock-in contracts",
                "Free consultation",
                "Dedicated support",
              ].map((text, i) => (
                <div
                  key={i}
                  style={{ display: "flex", alignItems: "center", gap: 8 }}
                >
                  <CheckCircle2 size={14} style={{ color: C.gold }} />
                  <span
                    style={{ fontSize: 13, color: C.muted, fontWeight: 500 }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM EDGE ── */}
      <div
        style={{
          height: 2,
          background:
            "linear-gradient(90deg, transparent 0%, #10b981 30%, #22d3ee 50%, #10b981 70%, transparent 100%)",
          boxShadow: "0 0 20px rgba(16,185,129,0.4)",
        }}
      />
    </div>
  );
}
