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
} from "lucide-react";
import logo from "../assets/logo.png";

/* ─── TOKENS ─── */
const C = {
  bg: "#080808",
  bg2: "#0a0a0a",
  gold: "#D4AF37",
  goldLight: "#F0D060",
  goldDim: "rgba(212,175,55,0.12)",
  goldBorder: "rgba(212,175,55,0.18)",
  goldBorder2: "rgba(212,175,55,0.38)",
  text: "rgba(255,255,255,0.88)",
  muted: "rgba(255,255,255,0.45)",
  border: "rgba(255,255,255,0.06)",
};
const glass = {
  background: "rgba(255,255,255,0.03)",
  border: `1px solid ${C.goldBorder}`,
  backdropFilter: "blur(12px)",
  borderRadius: 20,
};
const tagStyle = {
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
const VALUES = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "Our mission is to empower businesses of all sizes to thrive in the digital landscape through creative innovation and data-backed strategies that deliver measurable impact.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay ahead of emerging technologies and trends, constantly evolving our approach to deliver cutting-edge digital solutions that keep you ahead of the curve.",
  },
  {
    icon: Award,
    title: "Excellence Standard",
    description:
      "Every project we undertake meets the highest standards of quality, performance, and creativity — no shortcuts, no exceptions, no compromises.",
  },
  {
    icon: TrendingUp,
    title: "Growth Oriented",
    description:
      "Your success is our success. We measure our performance by the tangible growth we generate — revenue, leads, brand equity, and long-term market position.",
  },
];

const MILESTONES = [
  "Founded in 2023 with a vision to transform digital marketing in India",
  "Served 500+ clients across diverse industries nationwide",
  "Team of 50+ experts in development, design, and marketing",
  "ISO-certified quality management processes and delivery standards",
  "Award-winning campaigns generating millions in client revenue",
];

const STATS_CARD = [
  { number: "500+", label: "Projects" },
  { number: "98%", label: "Satisfaction" },
  { number: "50+", label: "Experts" },
  { number: "5+", label: "Years" },
];

const BIG_STATS = [
  { value: "500+", label: "Projects Completed", icon: Layers },
  { value: "₹50Cr+", label: "Revenue Generated for Clients", icon: TrendingUp },
  { value: "98%", label: "Client Retention Rate", icon: Heart },
  { value: "50+", label: "Digital Experts", icon: Users },
  { value: "15+", label: "Industries Served", icon: Globe },
  { value: "2023", label: "Founded in Pune, India", icon: MapPin },
];

const TEAM_VALUES = [
  {
    icon: Shield,
    title: "Radical Transparency",
    desc: "No hidden fees, no vague reports. You see exactly what we do, why we do it, and what it delivers — every single month.",
  },
  {
    icon: Clock,
    title: "On-Time, Always",
    desc: "We don't miss deadlines. 97% of our projects are delivered on or ahead of schedule. Your timeline is a commitment, not a suggestion.",
  },
  {
    icon: MessageSquare,
    title: "Dedicated Communication",
    desc: "A dedicated project manager is your single point of contact — responsive, accountable, and always aligned with your goals.",
  },
  {
    icon: Zap,
    title: "Speed to Impact",
    desc: "We move fast without breaking things. Most engagements show measurable impact within the first 30–45 days.",
  },
  {
    icon: Heart,
    title: "Long-Term Partnership",
    desc: "98% of our clients renew. We build relationships, not just campaigns. Your long-term growth is always the north star.",
  },
  {
    icon: Award,
    title: "Certified Excellence",
    desc: "ISO-certified processes, Google & Meta certified specialists, and award-winning creative work that consistently exceeds expectations.",
  },
];

const WHY_US = [
  {
    title: "Full-Service Under One Roof",
    desc: "Web development, SEO, social media, paid ads, brand building, and lead generation — all handled by one cohesive team that understands your entire digital ecosystem.",
  },
  {
    title: "Data First, Always",
    desc: "Every strategy begins with research and ends with measurement. We don't guess — we analyse, test, and optimise based on real performance data from your campaigns.",
  },
  {
    title: "Industry-Agnostic Expertise",
    desc: "We've built winning strategies for real estate, healthcare, e-commerce, education, SaaS, legal, and F&B — our frameworks adapt to any market, any audience.",
  },
  {
    title: "No Lock-In Contracts",
    desc: "We earn your business every month. All accounts, assets, and campaigns belong to you from day one. Zero lock-in, total transparency, complete ownership.",
  },
];

const SERVICES_QUICK = [
  "Website Development",
  "SEO Optimisation",
  "Social Media Marketing",
  "Google & Facebook Ads",
  "Brand Promotion",
  "Lead Generation",
];

function HoverCard({ children, style = {} }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        ...glass,
        borderColor: hov ? C.goldBorder2 : C.goldBorder,
        boxShadow: hov ? "0 0 40px rgba(212,175,55,0.07)" : "none",
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
      <span style={tagStyle}>{badge}</span>
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

/* ─── MAIN ─── */
export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
      .ab-root * { box-sizing: border-box; }
      .ab-root { font-family: 'Outfit', sans-serif !important; }
      .ab-reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1); }
      .ab-reveal.visible { opacity: 1; transform: translateY(0); }
      .ab-marquee { display: flex; animation: ab-scroll 28s linear infinite; width: max-content; }
      .ab-marquee:hover { animation-play-state: paused; }
      @keyframes ab-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      .ab-cta-main:hover { background: #F0D060 !important; transform: scale(1.04) translateY(-2px) !important; box-shadow: 0 20px 50px rgba(212,175,55,0.45) !important; }
      .ab-cta-ghost:hover { border-color: rgba(212,175,55,0.4) !important; color: #fff !important; }
      .ab-pulse { animation: ab-p 2.5s ease-in-out infinite; }
      @keyframes ab-p { 0%,100%{opacity:0.12;transform:scale(1)} 50%{opacity:0.22;transform:scale(1.06)} }
      .ab-dot { animation: ab-dot 2s ease-in-out infinite; }
      @keyframes ab-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.5)} }
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
      ?.querySelectorAll(".ab-reveal")
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
      className="ab-root"
      style={{ background: C.bg, minHeight: "100vh", color: C.text }}
    >
      {/* ── TOP EDGE ── */}
      <div
        style={{
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,55,0.4) 30%, rgba(212,175,55,0.6) 50%, rgba(212,175,55,0.4) 70%, transparent)",
        }}
      />

      {/* ── HERO / INTRO ── */}
      <section
        style={{
          position: "relative",
          paddingTop: "clamp(60px, 10vw, 100px)",
          paddingBottom: "clamp(60px, 10vw, 96px)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(212,175,55,0.05), transparent)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 60,
            left: -60,
            width: 480,
            height: 480,
            background:
              "radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 68%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: -80,
            width: 420,
            height: 420,
            background:
              "radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div style={wrap}>
          <div
            style={{ textAlign: "center", marginBottom: 72 }}
            className="ab-reveal"
          >
            <span style={tagStyle}>Who We Are</span>
          </div>

          {/* Two-col layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "clamp(32px, 6vw, 80px)",
              alignItems: "center",
              marginBottom: 80,
            }}
          >
            {/* Left */}
            <div className="ab-reveal">
              <h1
                style={{
                  fontSize: "clamp(2.4rem,5vw,4rem)",
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1.06,
                  margin: "0 0 24px",
                  letterSpacing: "-0.02em",
                }}
              >
                Pioneers of
                <br />
                <span
                  style={{
                    color: C.gold,
                    textShadow: "0 0 28px rgba(212,175,55,0.3)",
                  }}
                >
                  Digital Excellence
                </span>
              </h1>
              <p
                style={{
                  fontSize: 16,
                  color: C.muted,
                  lineHeight: 1.85,
                  margin: "0 0 20px",
                }}
              >
                PAYIVVA Technologies (OPC) Pvt Ltd is a premium digital
                solutions company dedicated to transforming how businesses
                connect, grow, and thrive online. Founded on the principles of
                innovation, integrity, and impact, we bring together a
                world-class team of developers, designers, and digital
                strategists.
              </p>
              <p
                style={{
                  fontSize: 16,
                  color: C.muted,
                  lineHeight: 1.85,
                  margin: "0 0 32px",
                }}
              >
                From ambitious startups to established enterprises, we partner
                with brands that dare to think differently. Our holistic
                approach combines deep technical expertise with creative
                storytelling to build digital experiences that don't just look
                beautiful — they deliver measurable, lasting results.
              </p>

              {/* Milestones */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {MILESTONES.map((m, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      fontSize: 14,
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.6,
                    }}
                  >
                    <CheckCircle2
                      size={17}
                      style={{ color: C.gold, flexShrink: 0, marginTop: 2 }}
                    />
                    {m}
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="ab-cta-main"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 30px",
                  background: C.gold,
                  color: "#000",
                  fontWeight: 800,
                  borderRadius: 12,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 15,
                  fontFamily: "inherit",
                  transition: "all 0.3s",
                  letterSpacing: "0.02em",
                }}
              >
                Work With Us <ArrowRight size={18} />
              </button>
            </div>

            {/* Right — Company Card */}
            <div className="ab-reveal" style={{ position: "relative" }}>
              <div
                className="ab-pulse"
                style={{
                  position: "absolute",
                  inset: -20,
                  background:
                    "radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 65%)",
                  borderRadius: 40,
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  ...glass,
                  borderRadius: 28,
                  padding: "40px 36px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* grid texture */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.03,
                    backgroundImage:
                      "linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                    borderRadius: 28,
                  }}
                />
                <div style={{ position: "relative" }}>
                  {/* Logo */}
                  <div
                    style={{
                      width: 84,
                      height: 84,
                      marginBottom: 20,
                      filter: "drop-shadow(0 0 18px rgba(212,175,55,0.4))",
                    }}
                  >
                    <img
                      src={logo}
                      alt="PAYIVVA Technologies logo"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: 18,
                      }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#fff",
                      margin: "0 0 4px",
                    }}
                  >
                    PAYIVVA Technologies
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      color: C.gold,
                      fontWeight: 700,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      margin: "0 0 28px",
                    }}
                  >
                    Inspiring Innovations
                  </p>

                  {/* Stats grid */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 12,
                      marginBottom: 20,
                    }}
                  >
                    {STATS_CARD.map((s, i) => (
                      <div
                        key={i}
                        style={{
                          background: C.goldDim,
                          border: `1px solid ${C.goldBorder}`,
                          borderRadius: 14,
                          padding: "16px 12px",
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            fontSize: 24,
                            fontWeight: 900,
                            color: C.gold,
                            lineHeight: 1,
                          }}
                        >
                          {s.number}
                        </div>
                        <div
                          style={{
                            fontSize: 11,
                            color: C.muted,
                            marginTop: 4,
                            fontWeight: 500,
                          }}
                        >
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Status */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "12px 16px",
                      background: C.goldDim,
                      border: `1px solid ${C.goldBorder}`,
                      borderRadius: 10,
                    }}
                  >
                    <div
                      className="ab-dot"
                      style={{
                        width: 8,
                        height: 8,
                        background: "#4ade80",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.6)",
                        fontWeight: 500,
                      }}
                    >
                      Currently accepting new projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BIG STATS BAR ── */}
      <div
        style={{
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
          background: C.bg2,
        }}
      >
        <div style={{ ...wrap, padding: "48px 28px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 16,
            }}
          >
            {BIG_STATS.map((s, i) => (
              <div
                key={i}
                className="ab-reveal"
                style={{
                  transitionDelay: `${i * 70}ms`,
                  ...glass,
                  padding: "24px 18px",
                  textAlign: "center",
                }}
              >
                <div style={iconBox(40)} className={undefined}>
                  <s.icon size={18} style={{ color: C.gold }} />
                </div>
                <div
                  style={{
                    marginTop: 12,
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
                    fontSize: 11,
                    color: C.muted,
                    fontWeight: 500,
                    marginTop: 6,
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

      {/* ── VALUES GRID ── */}
      <section style={{ padding: "96px 0" }}>
        <div style={wrap}>
          <div className="ab-reveal">
            <SectionHead
              badge="Core Values"
              title="What We"
              goldWord="Stand For"
              sub="The principles that guide every decision, every campaign, and every client relationship we build."
              center
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {VALUES.map((val, i) => (
              <div
                key={i}
                className="ab-reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <HoverCard
                  style={{
                    padding: "36px 28px",
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      ...iconBox(50),
                      margin: "0 auto 20px",
                      borderRadius: 16,
                    }}
                  >
                    <val.icon size={24} />
                  </div>
                  <h3
                    style={{
                      fontSize: 19,
                      fontWeight: 800,
                      color: "#fff",
                      margin: "0 0 12px",
                    }}
                  >
                    {val.title}
                  </h3>
                  <p
                    style={{
                      color: C.muted,
                      fontSize: 14,
                      lineHeight: 1.78,
                      margin: 0,
                    }}
                  >
                    {val.description}
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
          background: "#000",
          padding: "18px 0",
          overflow: "hidden",
        }}
      >
        <div className="ab-marquee">
          {[
            ...SERVICES_QUICK,
            ...SERVICES_QUICK,
            ...SERVICES_QUICK,
            ...SERVICES_QUICK,
          ].map((t, i) => (
            <span
              key={i}
              style={{
                padding: "0 40px",
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

      {/* ── TEAM VALUES ── */}
      <section style={{ background: C.bg2, padding: "96px 0" }}>
        <div style={wrap}>
          <div className="ab-reveal">
            <SectionHead
              badge="How We Operate"
              title="The Way We"
              goldWord="Work"
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
                <HoverCard
                  style={{
                    padding: "28px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 18,
                  }}
                >
                  <div style={iconBox(44)}>
                    <item.icon size={20} />
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
                        fontSize: 13,
                        lineHeight: 1.75,
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

      {/* ── WHY PAYIVVA ── */}
      <section style={{ padding: "96px 0" }}>
        <div style={wrap}>
          <div className="ab-reveal">
            <SectionHead
              badge="Why Choose Us"
              title="Why"
              goldWord="PAYIVVA"
              sub="We're not just another digital agency. Here's what makes the difference."
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: 16,
            }}
          >
            {WHY_US.map((item, i) => (
              <div
                key={i}
                className="ab-reveal"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <HoverCard style={{ padding: "32px 28px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 14,
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: C.gold,
                        boxShadow: `0 0 10px ${C.gold}`,
                        flexShrink: 0,
                      }}
                    />
                    <h4
                      style={{
                        fontSize: 17,
                        fontWeight: 800,
                        color: "#fff",
                        margin: 0,
                      }}
                    >
                      {item.title}
                    </h4>
                  </div>
                  <p
                    style={{
                      color: C.muted,
                      fontSize: 14,
                      lineHeight: 1.78,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </HoverCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES QUICK LOOK ── */}
      <section style={{ background: C.bg2, padding: "80px 0" }}>
        <div style={wrap}>
          <div
            className="ab-reveal"
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <span style={tagStyle}>What We Offer</span>
            <h2
              style={{
                fontSize: "clamp(1.8rem,3.5vw,2.6rem)",
                fontWeight: 900,
                color: "#fff",
                margin: "0 0 12px",
                lineHeight: 1.1,
              }}
            >
              Our <span style={{ color: C.gold }}>Services</span>
            </h2>
            <p
              style={{
                color: C.muted,
                fontSize: 15,
                lineHeight: 1.7,
                maxWidth: 480,
                margin: "0 auto",
              }}
            >
              Everything you need to grow your digital presence — under one
              roof.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 14,
            }}
          >
            {[
              {
                icon: Globe,
                name: "Website Development",
                desc: "High-performance, conversion-optimised web solutions built for growth.",
                link: "/services/website-development",
              },
              {
                icon: BarChart3,
                name: "SEO Optimisation",
                desc: "Data-driven strategies to dominate search rankings and grow organic traffic.",
                link: "/services/seo",
              },
              {
                icon: MessageSquare,
                name: "Social Media Marketing",
                desc: "Content and community management that builds brand loyalty and engagement.",
                link: "/services/social-media",
              },
              {
                icon: Target,
                name: "Google & Facebook Ads",
                desc: "Precision paid campaigns engineered for maximum ROAS and lead volume.",
                link: "/services/ads",
              },
              {
                icon: Star,
                name: "Brand Promotion",
                desc: "End-to-end brand building that makes your business the obvious choice.",
                link: "/services/brand",
              },
              {
                icon: Users,
                name: "Lead Generation",
                desc: "Systematic lead funnels that keep your pipeline full and your team busy.",
                link: "/services/leads",
              },
            ].map((svc, i) => (
              <div
                key={i}
                className="ab-reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <HoverCard
                  style={{
                    padding: "24px 22px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <div style={iconBox(40)}>
                      <svc.icon size={18} />
                    </div>
                    <h4
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#fff",
                        margin: 0,
                      }}
                    >
                      {svc.name}
                    </h4>
                  </div>
                  <p
                    style={{
                      color: C.muted,
                      fontSize: 13,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {svc.desc}
                  </p>
                  <Link
                    to={svc.link}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 12,
                      fontWeight: 600,
                      color: C.gold,
                      textDecoration: "none",
                      marginTop: 4,
                    }}
                  >
                    Learn more <ArrowRight size={12} />
                  </Link>
                </HoverCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{ padding: "110px 0", position: "relative", overflow: "hidden" }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)",
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
              "linear-gradient(90deg, transparent, rgba(212,175,55,0.35), transparent)",
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
          <div className="ab-reveal">
            <Award
              style={{ color: C.gold, margin: "0 auto 24px", display: "block" }}
              size={52}
            />
            <h2
              style={{
                fontSize: "clamp(2.2rem,5vw,4rem)",
                fontWeight: 900,
                color: "#fff",
                margin: "0 0 22px",
                lineHeight: 1.1,
              }}
            >
              Ready to grow with{" "}
              <span
                style={{
                  color: C.gold,
                  textShadow: "0 0 30px rgba(212,175,55,0.35)",
                }}
              >
                PAYIVVA?
              </span>
            </h2>
            <p
              style={{
                fontSize: 17,
                color: C.muted,
                margin: "0 auto 44px",
                maxWidth: 540,
                lineHeight: 1.8,
              }}
            >
              Let's build something remarkable together. Whether you need a new
              website, more leads, stronger SEO, or a brand that commands
              attention — we have the team and the track record to deliver.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                justifyContent: "center",
              }}
            >
              <button
                className="ab-cta-main"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "16px 40px",
                  background: C.gold,
                  color: "#000",
                  fontWeight: 800,
                  borderRadius: 16,
                  border: "none",
                  cursor: "pointer",
                  fontSize: 16,
                  fontFamily: "inherit",
                  transition: "all 0.35s",
                  letterSpacing: "0.03em",
                }}
              >
                Work With Us <ArrowRight size={20} />
              </button>
              <Link
                to="/services"
                className="ab-cta-ghost"
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
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM EDGE ── */}
      <div
        style={{
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,55,0.4) 30%, rgba(212,175,55,0.6) 50%, rgba(212,175,55,0.4) 70%, transparent)",
        }}
      />
    </div>
  );
}
