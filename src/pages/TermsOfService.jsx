import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ScrollText, FileText, UserCheck, CreditCard, Shield,
  AlertTriangle, Globe, RefreshCw, Mail, ChevronRight,
  ArrowRight, Scale, Lock, CheckCircle2, Bell, XCircle,
  Briefcase, Clock,
} from "lucide-react";

const C = {
  bg: "#040810",
  gold: "#10b981",
  goldLight: "#34d399",
  cyan: "#22d3ee",
  purple: "#a78bfa",
  amber: "#f59e0b",
  rose: "#ec4899",
  goldDim: "rgba(16,185,129,0.08)",
  goldBorder: "rgba(16,185,129,0.15)",
  goldBorder2: "rgba(16,185,129,0.3)",
  text: "rgba(255,255,255,0.88)",
  muted: "rgba(255,255,255,0.48)",
  muted2: "rgba(255,255,255,0.22)",
  border: "rgba(255,255,255,0.06)",
};

const SECTIONS = [
  {
    id: "acceptance",
    icon: CheckCircle2,
    color: C.gold,
    title: "Acceptance of Terms",
    content: [
      {
        heading: "Agreement to Terms",
        text: "By accessing or using PAYIVVA Technologies' website, services, or digital products, you confirm that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree, please discontinue use immediately.",
      },
      {
        heading: "Capacity to Contract",
        text: "You represent that you are at least 18 years of age and have the legal capacity to enter into a binding agreement. If acting on behalf of a company, you confirm you have authority to bind that entity.",
      },
      {
        heading: "Updates to Terms",
        text: "We reserve the right to modify these Terms at any time. Continued use of our services after changes are posted constitutes acceptance of the revised Terms. We will make reasonable efforts to notify you of material changes.",
      },
    ],
  },
  {
    id: "services",
    icon: Briefcase,
    color: C.cyan,
    title: "Services & Scope",
    content: [
      {
        heading: "Service Description",
        text: "PAYIVVA Technologies provides digital marketing, website development, SEO optimisation, social media management, paid advertising, brand promotion, and lead generation services as agreed in individual project contracts or proposals.",
      },
      {
        heading: "Scope of Engagement",
        text: "The specific scope, deliverables, timelines, and pricing for each engagement are defined in a signed proposal, statement of work, or service agreement. These Terms apply alongside and supplement those documents.",
      },
      {
        heading: "Service Modifications",
        text: "We reserve the right to modify, suspend, or discontinue any aspect of our services with reasonable notice. For active client engagements, changes will be communicated directly and agreed upon before implementation.",
      },
    ],
  },
  {
    id: "obligations",
    icon: UserCheck,
    color: C.purple,
    title: "Client Obligations",
    content: [
      {
        heading: "Accurate Information",
        text: "Clients are responsible for providing accurate, complete, and timely information required for service delivery. Delays or deficiencies caused by inaccurate client-provided information are not our liability.",
      },
      {
        heading: "Timely Approvals",
        text: "Clients must provide feedback, approvals, and content in accordance with agreed timelines. Delays in client approvals may affect project delivery schedules and do not constitute a breach on our part.",
      },
      {
        heading: "Lawful Use",
        text: "Clients agree not to use our services for any unlawful purpose, including but not limited to spam, fraud, defamation, infringement of third-party rights, or any activity that violates applicable laws or regulations.",
      },
    ],
  },
  {
    id: "payments",
    icon: CreditCard,
    color: C.amber,
    title: "Payments & Fees",
    content: [
      {
        heading: "Payment Terms",
        text: "All fees are as specified in the project proposal or service agreement. Unless otherwise agreed, payments are due as per the schedule outlined therein. All prices are exclusive of applicable taxes.",
      },
      {
        heading: "Late Payments",
        text: "Late payments may result in suspension of services. PAYIVVA Technologies reserves the right to charge interest on overdue amounts at the rate specified in the service agreement or as permitted by applicable law.",
      },
      {
        heading: "Refund Policy",
        text: "Refunds, where applicable, are governed by our separate Refund Policy. Service fees for work already completed or in progress are generally non-refundable unless otherwise specified in writing.",
      },
    ],
  },
  {
    id: "ip",
    icon: Shield,
    color: C.rose,
    title: "Intellectual Property",
    content: [
      {
        heading: "Our Intellectual Property",
        text: "All proprietary tools, frameworks, methodologies, templates, and pre-existing intellectual property used in delivering services remain the sole property of PAYIVVA Technologies.",
      },
      {
        heading: "Client Deliverables",
        text: "Upon full payment, clients receive ownership of agreed final deliverables (e.g. website code, creative assets) as specified in the project agreement. Underlying tools and third-party components are licensed, not transferred.",
      },
      {
        heading: "Client Materials",
        text: "Clients grant us a non-exclusive licence to use their provided materials (logos, content, data) solely for the purpose of delivering the contracted services.",
      },
    ],
  },
  {
    id: "liability",
    icon: AlertTriangle,
    color: C.amber,
    title: "Limitation of Liability",
    content: [
      {
        heading: "No Guarantee of Results",
        text: "While we strive for measurable outcomes, we do not guarantee specific results such as search rankings, lead volumes, or revenue figures. Digital marketing results depend on many factors outside our control.",
      },
      {
        heading: "Liability Cap",
        text: "To the maximum extent permitted by law, PAYIVVA Technologies' total liability for any claim arising from our services shall not exceed the total fees paid by the client in the three months preceding the claim.",
      },
      {
        heading: "Exclusions",
        text: "We shall not be liable for indirect, incidental, consequential, or punitive damages including loss of profits, data, or business opportunity, even if advised of the possibility of such damages.",
      },
    ],
  },
  {
    id: "confidentiality",
    icon: Lock,
    color: C.cyan,
    title: "Confidentiality",
    content: [
      {
        heading: "Mutual Confidentiality",
        text: "Both parties agree to keep confidential any non-public information shared during the engagement. This obligation survives termination of the agreement for a period of two years.",
      },
      {
        heading: "Exceptions",
        text: "Confidentiality obligations do not apply to information that is publicly known, independently developed, received from a third party without restriction, or required to be disclosed by law.",
      },
    ],
  },
  {
    id: "termination",
    icon: XCircle,
    color: C.rose,
    title: "Termination",
    content: [
      {
        heading: "Termination by Either Party",
        text: "Either party may terminate an engagement with written notice as specified in the service agreement. Termination does not relieve the client of payment obligations for services already rendered.",
      },
      {
        heading: "Termination for Cause",
        text: "We may suspend or terminate services immediately for material breach, non-payment, or use of our services for unlawful purposes, without prejudice to any other rights or remedies available.",
      },
      {
        heading: "Effect of Termination",
        text: "Upon termination, all licences granted herein cease. Clients will receive deliverables completed to date (subject to payment). Each party will return or destroy the other's confidential information.",
      },
    ],
  },
  {
    id: "governing",
    icon: Scale,
    color: C.gold,
    title: "Governing Law",
    content: [
      {
        heading: "Jurisdiction",
        text: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.",
      },
      {
        heading: "Dispute Resolution",
        text: "Before initiating legal proceedings, both parties agree to attempt good-faith negotiation to resolve any dispute. If unresolved within 30 days, disputes may be referred to arbitration under applicable Indian arbitration law.",
      },
    ],
  },
];

function SectionCard({ section, index }) {
  const [hov, setHov] = useState(false);
  const Icon = section.icon;
  return (
    <div
      id={section.id}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative", borderRadius: 22,
        background: hov ? section.color + "06" : "rgba(255,255,255,0.02)",
        border: `1px solid ${hov ? section.color + "44" : C.border}`,
        padding: "36px 32px", overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        boxShadow: hov ? "0 20px 50px rgba(0,0,0,0.3)" : "none",
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: "absolute", top: 0, left: "15%", right: "15%", height: 2,
        background: `linear-gradient(90deg, transparent, ${section.color}${hov ? "88" : "44"}, transparent)`,
        transition: "opacity 0.3s",
      }} />

      {/* Watermark number */}
      <div style={{
        position: "absolute", top: 16, right: 24,
        fontSize: 80, fontWeight: 900, color: section.color + "05",
        fontFamily: "Syne, sans-serif", lineHeight: 1, userSelect: "none",
        pointerEvents: "none",
      }}>
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Header row */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
        <div style={{
          width: 52, height: 52, borderRadius: 16, flexShrink: 0,
          background: section.color + "18", border: `1px solid ${section.color}33`,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
          transform: hov ? "scale(1.1) rotate(-5deg)" : "scale(1)",
        }}>
          <Icon size={24} style={{ color: section.color }} />
        </div>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", margin: 0, fontFamily: "Syne, sans-serif" }}>
            {section.title}
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 5 }}>
            <div style={{ width: 24, height: 2, background: `linear-gradient(90deg, ${section.color}, transparent)`, borderRadius: 2 }} />
            <span style={{ fontSize: 11, color: section.color, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Section {index + 1}
            </span>
          </div>
        </div>
      </div>

      {/* Content items */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {section.content.map((item, i) => (
          <div key={i} style={{
            padding: "18px 20px", borderRadius: 14,
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", left: 0, top: "15%", bottom: "15%", width: 2,
              background: `linear-gradient(to bottom, transparent, ${section.color}88, transparent)`,
              borderRadius: 2,
            }} />
            <h4 style={{ fontSize: 14, fontWeight: 700, color: section.color, margin: "0 0 7px" }}>{item.heading}</h4>
            <p style={{ fontSize: 13.5, color: C.muted, lineHeight: 1.8, margin: 0 }}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TOCLink({ section, index }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={`#${section.id}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "9px 12px", borderRadius: 10, textDecoration: "none",
        background: hov ? section.color + "10" : "transparent",
        border: `1px solid ${hov ? section.color + "33" : "transparent"}`,
        transition: "all 0.25s",
      }}
    >
      <div style={{
        width: 26, height: 26, borderRadius: 7, flexShrink: 0,
        background: section.color + "18", border: `1px solid ${section.color}30`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <section.icon size={12} style={{ color: section.color }} />
      </div>
      <span style={{ fontSize: 12.5, color: hov ? "#fff" : C.muted, fontWeight: 500, flex: 1, transition: "color 0.25s", lineHeight: 1.3 }}>
        {section.title}
      </span>
      <ChevronRight size={12} style={{ color: hov ? section.color : C.muted2, transition: "color 0.25s", flexShrink: 0 }} />
    </a>
  );
}

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | PAYIVVA Technologies</title>
        <meta name="description" content="Terms of Service governing use of PAYIVVA Technologies' website and digital services." />
      </Helmet>

      <div style={{ background: C.bg, minHeight: "100vh", color: C.text, fontFamily: "'DM Sans','Segoe UI',sans-serif" }}>

        {/* Top glow line */}
        <div style={{ height: 2, background: "linear-gradient(90deg, transparent 0%, #10b981 30%, #22d3ee 50%, #10b981 70%, transparent 100%)", boxShadow: "0 0 20px rgba(16,185,129,0.5)" }} />

        {/* ── HERO ── */}
        <section style={{ position: "relative", padding: "clamp(72px,10vw,110px) 28px clamp(56px,7vw,80px)", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(16,185,129,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(16,185,129,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.6) 1px, transparent 1px)", backgroundSize: "55px 55px", opacity: 0.018, pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "5%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "0%", right: "8%", width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ maxWidth: 740, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>

            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24,
              padding: "7px 20px", borderRadius: 100,
              background: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(34,211,238,0.06))",
              border: `1px solid ${C.goldBorder2}`,
              fontSize: 10, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: C.gold,
            }}>
              <ScrollText size={10} />
              Legal Agreement
            </div>

            <h1 style={{
              fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 800, color: "#fff",
              margin: "0 0 20px", lineHeight: 1.06, letterSpacing: "-0.025em",
              fontFamily: "Syne, sans-serif",
            }}>
              Terms of{" "}
              <span style={{ background: "linear-gradient(135deg, #10b981, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Service
              </span>
            </h1>

            <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.8, maxWidth: 520, margin: "0 auto 32px" }}>
              These Terms govern your use of PAYIVVA Technologies' website and services. Please read them carefully before engaging with us.
            </p>

            {/* Meta pills */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 12 }}>
              {[
                { icon: RefreshCw, text: `Effective: ${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}`, color: C.gold },
                { icon: Globe, text: "Jurisdiction: Pune, India", color: C.cyan },
                { icon: Clock, text: "Version 1.0", color: C.purple },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  padding: "8px 16px", borderRadius: 8,
                  background: "rgba(255,255,255,0.03)", border: `1px solid ${C.border}`,
                  fontSize: 12.5, color: C.muted, fontWeight: 500,
                }}>
                  <item.icon size={13} style={{ color: item.color }} />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BODY ── */}
        <section style={{ padding: "0 28px clamp(80px,10vw,110px)" }}>
          <div style={{
            maxWidth: 1200, margin: "0 auto",
            display: "grid", gridTemplateColumns: "260px 1fr",
            gap: 32, alignItems: "start",
          }}>

            {/* ── SIDEBAR TOC ── */}
            <div style={{
              position: "sticky", top: 100,
              background: "rgba(255,255,255,0.02)",
              border: `1px solid ${C.border}`,
              borderRadius: 20, padding: "22px 14px",
            }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, margin: "0 0 14px 4px" }}>
                Contents
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {SECTIONS.map((s, i) => <TOCLink key={s.id} section={s} index={i} />)}
              </div>

              {/* Sidebar CTA */}
              <div style={{ marginTop: 20, padding: "16px 14px", borderRadius: 14, background: C.goldDim, border: `1px solid ${C.goldBorder2}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.gold, boxShadow: `0 0 8px ${C.gold}` }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>Have questions?</span>
                </div>
                <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.6, margin: "0 0 10px" }}>
                  We're happy to clarify any clause in plain language.
                </p>
                <Link to="/contact" style={{
                  display: "inline-flex", alignItems: "center", gap: 5,
                  fontSize: 12, fontWeight: 700, color: C.gold, textDecoration: "none",
                }}>
                  Contact Us <ArrowRight size={11} />
                </Link>
              </div>
            </div>

            {/* ── SECTION CARDS ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

              {/* Intro notice */}
              <div style={{
                display: "flex", alignItems: "flex-start", gap: 14,
                padding: "20px 24px", borderRadius: 16,
                background: "rgba(16,185,129,0.05)",
                border: `1px solid ${C.goldBorder2}`,
              }}>
                <FileText size={18} style={{ color: C.gold, flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: 13.5, color: C.muted, lineHeight: 1.8, margin: 0 }}>
                  By using PAYIVVA Technologies' website or engaging our services, you agree to the following terms. These Terms form a legally binding agreement between you and <strong style={{ color: "rgba(255,255,255,0.75)" }}>PAYIVVA Technologies (OPC) Pvt Ltd</strong>, registered in Pune, Maharashtra, India.
                </p>
              </div>

              {SECTIONS.map((section, i) => (
                <SectionCard key={section.id} section={section} index={i} />
              ))}

              {/* Footer note */}
              <div style={{
                display: "flex", alignItems: "flex-start", gap: 14,
                padding: "22px 26px", borderRadius: 16,
                background: "rgba(255,255,255,0.02)", border: `1px solid ${C.border}`,
              }}>
                <Bell size={18} style={{ color: C.gold, flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: 13.5, color: C.muted, lineHeight: 1.78, margin: 0 }}>
                  If you have any questions regarding these Terms of Service, please{" "}
                  <Link to="/contact" style={{ color: C.cyan, textDecoration: "none", fontWeight: 600 }}>contact us</Link>
                  . We are committed to addressing your concerns clearly and promptly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom glow line */}
        <div style={{ height: 2, background: "linear-gradient(90deg, transparent 0%, #10b981 30%, #22d3ee 50%, #10b981 70%, transparent 100%)", boxShadow: "0 0 16px rgba(16,185,129,0.4)" }} />
      </div>
    </>
  );
}