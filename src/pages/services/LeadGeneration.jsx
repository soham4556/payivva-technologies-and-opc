import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Target,
  Layers,
  Zap,
  Database,
  Mail,
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Star,
  ChevronDown,
  Shield,
  Clock,
  Award,
  BarChart3,
  FileText,
  RefreshCw,
  Eye,
  Phone,
  CheckCircle2,
  MessageSquare,
  Filter,
} from "lucide-react";

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
    icon: Layers,
    title: "Funnel Strategy",
    desc: "Mapping the full customer journey — from first impression to closed sale — and engineering every stage for maximum retention, conversion, and deal velocity.",
  },
  {
    icon: Target,
    title: "Ideal Client Profile",
    desc: "Building data-backed buyer personas so every rupee of ad and content spend targets decision-makers and high-value prospects genuinely likely to convert.",
  },
  {
    icon: Database,
    title: "CRM Integration",
    desc: "Seamlessly connecting all lead sources to your CRM — with automated assignment, tagging, and follow-up triggers — so no lead ever falls through the cracks.",
  },
  {
    icon: Mail,
    title: "Nurture Campaigns",
    desc: "Automated email and WhatsApp/SMS sequences that educate, build trust, and warm prospects over time — so when they're ready to buy, you're the obvious choice.",
  },
  {
    icon: Zap,
    title: "AI-Driven Lead Scoring",
    desc: "Advanced scoring algorithms that rank every incoming lead by conversion likelihood — so your sales team focuses only on the prospects most likely to close.",
  },
  {
    icon: TrendingUp,
    title: "Performance Scaling",
    desc: "Continuous channel analysis to identify your highest-performing lead sources and systematically scale investment in what works, eliminating what doesn't.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Audience & Market Research",
    desc: "We define your ideal customer profile with precision — demographics, psychographics, buying triggers, objections, and the channels they're most active on. No assumptions, only data.",
    tags: [
      "ICP Definition",
      "Buyer Persona",
      "Channel Research",
      "Competitor Lead Audit",
    ],
  },
  {
    step: "02",
    title: "Funnel Architecture & Lead Magnets",
    desc: "We design your full funnel — landing pages, lead magnets (guides, calculators, demos), thank-you sequences, and the complete journey from cold visitor to warm, sales-ready lead.",
    tags: [
      "Landing Page Design",
      "Lead Magnet Creation",
      "Funnel Mapping",
      "CTA Optimisation",
    ],
  },
  {
    step: "03",
    title: "Traffic & Lead Capture",
    desc: "We drive targeted traffic to your funnel through the right mix of paid ads, SEO, social media, and outbound outreach — capturing lead details with minimal friction at every touchpoint.",
    tags: [
      "Paid Traffic",
      "Organic SEO",
      "LinkedIn Outreach",
      "Form Optimisation",
    ],
  },
  {
    step: "04",
    title: "Nurture & Qualification",
    desc: "Every captured lead enters an automated nurture sequence — emails, WhatsApp, retargeting ads — that educates them and scores their readiness, delivering only qualified leads to your sales team.",
    tags: [
      "Email Sequences",
      "Lead Scoring",
      "WhatsApp Automation",
      "Retargeting",
    ],
  },
  {
    step: "05",
    title: "Reporting, Optimisation & Scale",
    desc: "Monthly performance reviews covering lead volume, quality scores, cost per lead, and conversion rates. We continuously refine and scale what's working to compound your pipeline growth.",
    tags: ["Monthly Reports", "CPL Tracking", "A/B Testing", "Channel Scaling"],
  },
];

const STATS = [
  { value: "10k+", label: "Leads Delivered" },
  { value: "240%", label: "Avg. Conversion Lift" },
  { value: "85%", label: "Qualified Lead Rate" },
  { value: "₹320", label: "Avg. Cost Per Lead" },
];

const PIPELINE_METRICS = [
  { l: "Leads Delivered", v: "10,000+" },
  { l: "Average Conversion Lift", v: "240%" },
  { l: "Qualified Lead Rate", v: "85%" },
  { l: "Average Cost Per Lead", v: "₹320" },
  { l: "Average Sales Cycle Reduction", v: "38%" },
];

const INCLUDED = [
  {
    icon: Target,
    title: "ICP & Persona Development",
    desc: "Detailed ideal customer profiles and buyer personas that guide every targeting and messaging decision in the campaign.",
  },
  {
    icon: Layers,
    title: "Full Funnel Architecture",
    desc: "Landing pages, lead capture forms, thank-you flows, and a complete conversion-optimised funnel built for your audience.",
  },
  {
    icon: FileText,
    title: "Lead Magnet Creation",
    desc: "High-value content offers — guides, checklists, calculators, or demos — designed to incentivise sign-ups from quality prospects.",
  },
  {
    icon: Mail,
    title: "Email & WhatsApp Nurture Sequences",
    desc: "Multi-step automated nurture flows that educate leads and move them through your pipeline toward a sales conversation.",
  },
  {
    icon: Database,
    title: "CRM Setup & Integration",
    desc: "Full CRM configuration with lead routing, tagging, automated assignment, and pipeline stage management.",
  },
  {
    icon: Zap,
    title: "AI Lead Scoring System",
    desc: "Automated scoring that ranks every lead by conversion likelihood so your sales team always works the hottest prospects first.",
  },
  {
    icon: Filter,
    title: "Lead Qualification Framework",
    desc: "Custom qualification criteria and sales handoff SOPs so your team only receives prospects who meet your quality threshold.",
  },
  {
    icon: BarChart3,
    title: "Monthly Pipeline Report",
    desc: "Detailed monthly reporting covering lead volume, CPL, quality score, funnel drop-off rates, and scaling recommendations.",
  },
];

const TESTIMONIALS = [
  {
    name: "Karan Verma",
    role: "Sales Director, BuildRight Constructions",
    text: "We used to rely entirely on referrals. Within 3 months of the new lead system going live, we had 180 qualified leads in the pipeline and closed 22 new projects. Transformational for our business.",
    stars: 5,
  },
  {
    name: "Sunita Rao",
    role: "Founder, HealthFirst Clinics",
    text: "The lead nurture sequences they built are extraordinary. Our cost per appointment dropped by 62% and the leads that reach us are already educated about our services — sales cycles halved.",
    stars: 5,
  },
  {
    name: "Vikrant Joshi",
    role: "CEO, CloudStack Technologies",
    text: "Our B2B lead generation was completely unpredictable. They rebuilt our entire outbound and inbound system — we now have a consistent 40–60 qualified SQLs per month from near zero.",
    stars: 5,
  },
];

const FAQS = [
  {
    q: "What types of businesses do you generate leads for?",
    a: "We work across B2B and B2C verticals — including real estate, healthcare, education, legal, financial services, SaaS, e-commerce, and professional services. The strategy differs by sector, but the systematic approach is consistent.",
  },
  {
    q: "How quickly will we start receiving leads?",
    a: "Initial lead flow typically begins within 7–14 days of funnel launch. Volume and quality improve significantly over the first 30–45 days as we optimise based on performance data and refine audience targeting.",
  },
  {
    q: "What makes your leads different from purchased lead lists?",
    a: "Every lead we generate has actively opted in and engaged with your brand's content or offer — they know who you are before your team contacts them. This produces dramatically higher conversion rates than cold purchased lists.",
  },
  {
    q: "Do you integrate with our existing CRM?",
    a: "Yes. We integrate with HubSpot, Salesforce, Zoho, Freshsales, and most major CRM platforms. We also handle the full setup — pipeline stages, lead routing rules, automated tasks, and reporting dashboards.",
  },
  {
    q: "How do you ensure the quality of leads — not just volume?",
    a: "Through ICP filtering at the ad targeting level, multi-step qualification in the funnel, lead scoring on behaviour signals, and a human qualification checkpoint before handoff to your sales team. We optimise for CPL quality, not just quantity.",
  },
  {
    q: "Can you handle both B2B and B2C lead generation?",
    a: "Yes. B2B lead gen typically uses LinkedIn outreach, content marketing, and email sequences. B2C uses paid social, search ads, and WhatsApp automation. We build the right mix based on your market and average deal size.",
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
            padding: "16px 24px 20px",
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
export default function LeadGeneration() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
      .lg-root * { box-sizing: border-box; }
      .lg-root { font-family: 'Outfit', sans-serif !important; }
      .lg-reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1); }
      .lg-reveal.visible { opacity: 1; transform: translateY(0); }
      .lg-marquee { display: flex; animation: lg-scroll 32s linear infinite; width: max-content; }
      .lg-marquee:hover { animation-play-state: paused; }
      @keyframes lg-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      .lg-cta-main:hover { background: #F0D060 !important; transform: scale(1.04) translateY(-2px) !important; box-shadow: 0 20px 50px rgba(212,175,55,0.45) !important; }
      .lg-cta-ghost:hover { border-color: rgba(212,175,55,0.4) !important; color: #fff !important; }
      .lg-back:hover { color: #D4AF37 !important; }
      .lg-users-pulse { animation: lg-pulse 3s ease-in-out infinite; }
      @keyframes lg-pulse { 0%,100%{opacity:0.2;transform:scale(1)} 50%{opacity:0.35;transform:scale(1.05)} }
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
      ?.querySelectorAll(".lg-reveal")
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
      className="lg-root"
      style={{ background: C.bg, minHeight: "100vh", color: C.text }}
    >
      <Helmet>
        <title>Lead Generation Services | Fill Your Pipeline | PAYIVVA Technologies</title>
        <meta
          name="description"
          content="Fill your pipeline with high-quality, conversion-ready leads. AI-driven targeting and strategic multi-channel funnels for predictable growth."
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
              "linear-gradient(to bottom, rgba(212,175,55,0.06), transparent)",
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
              "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 68%)",
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
              "radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
        <div style={wrap}>
          <Link
            to="/services"
            className="lg-back"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "rgba(212,175,55,0.6)",
              textDecoration: "none",
              marginBottom: 48,
              fontSize: 14,
              fontWeight: 500,
              transition: "color 0.2s",
            }}
          >
            <ArrowLeft size={15} /> Back to Services
          </Link>
          <div className="lg-reveal">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div style={iconBox(48)}>
                <Users size={22} />
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
              Lead{" "}
              <span
                style={{
                  color: C.gold,
                  textShadow: "0 0 30px rgba(212,175,55,0.3)",
                }}
              >
                Generation
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
              Fill your pipeline with high-quality, conversion-ready leads. We
              combine AI-driven targeting with strategic multi-channel funnels
              to find, capture, and warm your ideal customers — before they ever
              speak to your sales team.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link
                to="/contact"
                className="lg-cta-main"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 32px",
                  background: C.gold,
                  color: "#000",
                  fontWeight: 800,
                  borderRadius: 14,
                  textDecoration: "none",
                  fontSize: 15,
                  transition: "all 0.3s",
                  letterSpacing: "0.02em",
                }}
              >
                Generate Leads Now <ArrowRight size={18} />
              </Link>
              <a
                href="#process"
                className="lg-cta-ghost"
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
                className="lg-reveal"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  ...glass,
                  padding: "28px 20px",
                }}
              >
                <div
                  style={{
                    fontSize: 34,
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
          <div className="lg-reveal">
            <SectionHead
              badge="What We Do"
              title="Core"
              goldWord="Capabilities"
              sub="Six systems that transform your marketing from a cost centre into a predictable revenue engine."
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
                className="lg-reveal"
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
          background: "#000",
          padding: "18px 0",
          overflow: "hidden",
        }}
      >
        <div className="lg-marquee">
          {[
            ...[
              "Funnel Strategy",
              "Lead Magnets",
              "CRM Integration",
              "Email Nurture",
              "Lead Scoring",
              "WhatsApp Automation",
              "Landing Pages",
              "Paid Traffic",
              "LinkedIn Outreach",
              "Pipeline Reporting",
              "Conversion Optimisation",
              "Qualified Leads",
            ],
            ...[
              "Funnel Strategy",
              "Lead Magnets",
              "CRM Integration",
              "Email Nurture",
              "Lead Scoring",
              "WhatsApp Automation",
              "Landing Pages",
              "Paid Traffic",
              "LinkedIn Outreach",
              "Pipeline Reporting",
              "Conversion Optimisation",
              "Qualified Leads",
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

      {/* ── PIPELINE BLOCK (original enhanced) ── */}
      <section style={{ padding: "96px 0" }}>
        <div style={wrap}>
          <div className="lg-reveal">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 64,
                alignItems: "center",
              }}
            >
              {/* Left */}
              <div>
                <span style={tag}>Results That Compound</span>
                <h2
                  style={{
                    fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
                    fontWeight: 900,
                    color: "#fff",
                    margin: "0 0 20px",
                    lineHeight: 1.15,
                    fontStyle: "italic",
                  }}
                >
                  Predictable{" "}
                  <span style={{ color: C.gold }}>Pipeline Growth.</span>
                </h2>
                <p
                  style={{
                    fontSize: 15,
                    color: C.muted,
                    lineHeight: 1.85,
                    margin: "0 0 32px",
                  }}
                >
                  We specialise in the bridge between marketing and sales. Our
                  systems deliver warm, educated leads who already understand
                  your value proposition — so your sales conversations start
                  from a position of trust, not cold persuasion.
                </p>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 0 }}
                >
                  {PIPELINE_METRICS.map((s, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "16px 0",
                        borderBottom: `1px solid ${C.border}`,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 12,
                          color: C.muted,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          fontWeight: 600,
                        }}
                      >
                        {s.l}
                      </span>
                      <span
                        style={{ fontSize: 22, fontWeight: 900, color: C.gold }}
                      >
                        {s.v}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right — visual */}
              <div
                style={{
                  ...glass,
                  borderRadius: 32,
                  padding: "48px",
                  minHeight: 400,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, transparent 60%)",
                    borderRadius: 32,
                  }}
                />
                <Users
                  className="lg-users-pulse"
                  style={{
                    color: C.gold,
                    position: "relative",
                    zIndex: 1,
                    marginBottom: 32,
                  }}
                  size={100}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    width: "100%",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {[
                    { label: "Lead Captured", pct: 100 },
                    { label: "Nurtured & Scored", pct: 85 },
                    { label: "Sales Qualified", pct: 68 },
                    { label: "Converted to Client", pct: 42 },
                  ].map((row, i) => (
                    <div key={i}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: 5,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 12,
                            color: C.muted,
                            fontWeight: 500,
                          }}
                        >
                          {row.label}
                        </span>
                        <span
                          style={{
                            fontSize: 12,
                            color: C.gold,
                            fontWeight: 700,
                          }}
                        >
                          {row.pct}%
                        </span>
                      </div>
                      <div
                        style={{
                          height: 6,
                          background: "rgba(255,255,255,0.06)",
                          borderRadius: 100,
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            width: `${row.pct}%`,
                            background: `linear-gradient(90deg, ${C.gold}, ${C.goldLight})`,
                            borderRadius: 100,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section style={{ background: C.bg2, padding: "96px 0" }}>
        <div style={wrap}>
          <div className="lg-reveal">
            <SectionHead
              badge="Deliverables"
              title="What's"
              goldWord="Included"
              sub="Every lead generation engagement comes fully built — funnel, automation, CRM, and reporting all in one."
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
                className="lg-reveal"
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
      <section id="process" style={{ padding: "96px 0" }}>
        <div style={wrap}>
          <div className="lg-reveal">
            <SectionHead
              badge="How We Work"
              title="Our"
              goldWord="Process"
              sub="A 5-stage lead generation system built to fill your pipeline consistently, month after month."
            />
          </div>
          <div>
            {PROCESS.map((item, i) => (
              <div
                key={i}
                className="lg-reveal"
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
      <section style={{ background: C.bg2, padding: "96px 0" }}>
        <div style={wrap}>
          <div className="lg-reveal">
            <SectionHead
              badge="Client Results"
              title="What Clients"
              goldWord="Say"
              sub="Real pipelines. Real revenue. Real businesses that stopped waiting for customers."
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
                className="lg-reveal"
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
                        color: "rgba(212,175,55,0.65)",
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
          <div className="lg-reveal">
            <SectionHead
              badge="Common Questions"
              title="Frequently Asked"
              goldWord="Questions"
              sub="Everything you need to know before we start building your lead engine."
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
                icon: Filter,
                title: "Quality Over Volume",
                desc: "We optimise for qualified lead rate — not just raw volume. Every lead meets a minimum quality threshold before reaching your sales team.",
              },
              {
                icon: Clock,
                title: "Leads Within 14 Days",
                desc: "Your funnel goes live and starts generating leads within 7–14 days of kickoff. No months-long wait before results appear.",
              },
              {
                icon: Shield,
                title: "Full Funnel Ownership",
                desc: "All assets — landing pages, automations, CRM workflows — are built in your accounts and owned by you, with zero lock-in.",
              },
              {
                icon: Award,
                title: "B2B & B2C Expertise",
                desc: "Proven lead generation systems across real estate, healthcare, SaaS, education, legal, and professional services sectors.",
              },
            ].map((w, i) => (
              <div
                key={i}
                className="lg-reveal"
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
          <div className="lg-reveal">
            <Target
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
              Stop waiting for{" "}
              <span
                style={{
                  color: C.gold,
                  textShadow: "0 0 30px rgba(212,175,55,0.35)",
                }}
              >
                customers.
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
              Let's build a systematic lead engine that keeps your sales team
              busy, your pipeline full, and your revenue growing predictably —
              month after month, compounding every quarter.
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
                className="lg-cta-main"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "16px 40px",
                  background: C.gold,
                  color: "#000",
                  fontWeight: 800,
                  borderRadius: 16,
                  textDecoration: "none",
                  fontSize: 16,
                  transition: "all 0.35s",
                  letterSpacing: "0.03em",
                }}
              >
                Generate Leads Now <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="lg-cta-ghost"
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
