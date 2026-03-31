import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Lock, Shield, Eye, Database, UserCheck, Bell,
  Mail, ChevronRight, ArrowRight, FileSearch, RefreshCw,
  Globe, Server, AlertCircle,
} from "lucide-react";

const C = {
  bg: "#040810",
  gold: "#10b981",
  goldLight: "#34d399",
  cyan: "#22d3ee",
  purple: "#a78bfa",
  amber: "#f59e0b",
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
    id: "collect",
    icon: Database,
    color: C.gold,
    title: "Information We Collect",
    content: [
      { heading: "Personal Information", text: "When you contact us or engage our services, we may collect your name, email address, phone number, and company details to fulfil your request and communicate effectively." },
      { heading: "Usage Data", text: "We automatically collect information about how you interact with our website — including pages visited, time spent, referring URLs, IP address, browser type, and device identifiers." },
      { heading: "Communications", text: "Any information you provide via forms, emails, or chat — including project briefs, queries, and feedback — is retained to serve you better." },
    ],
  },
  {
    id: "use",
    icon: Eye,
    color: C.cyan,
    title: "How We Use Your Information",
    content: [
      { heading: "Service Delivery", text: "To provide, manage, and improve the digital services you've engaged us for — including website development, SEO, advertising, and brand campaigns." },
      { heading: "Communication", text: "To respond to enquiries, send project updates, and share relevant information about our services. We do not send unsolicited marketing without your consent." },
      { heading: "Analytics & Improvement", text: "To analyse site performance and user behaviour so we can optimise our website and deliver better outcomes for our clients." },
    ],
  },
  {
    id: "share",
    icon: Globe,
    color: C.purple,
    title: "Information Sharing",
    content: [
      { heading: "No Sale of Data", text: "We do not sell, trade, or rent your personal information to third parties under any circumstances." },
      { heading: "Trusted Partners", text: "We may share data with vetted service providers (hosting, analytics, payments) who are contractually obligated to handle your data securely and only for specified purposes." },
      { heading: "Legal Obligations", text: "We may disclose information if required by law, court order, or regulatory authority — always within the limits of applicable data protection legislation." },
    ],
  },
  {
    id: "security",
    icon: Server,
    color: C.amber,
    title: "Data Security",
    content: [
      { heading: "Technical Safeguards", text: "We implement industry-standard security measures including SSL encryption, secure servers, access controls, and regular security audits to protect your data." },
      { heading: "ISO-Certified Processes", text: "Our internal data handling processes follow ISO-certified quality standards to ensure consistent, secure, and compliant treatment of all client information." },
      { heading: "Breach Response", text: "In the unlikely event of a data breach, we have a defined incident response plan and will notify affected individuals in accordance with applicable regulations." },
    ],
  },
  {
    id: "rights",
    icon: UserCheck,
    color: "#ec4899",
    title: "Your Rights",
    content: [
      { heading: "Access & Correction", text: "You have the right to request access to the personal data we hold about you, and to request correction of any inaccurate or incomplete information." },
      { heading: "Deletion", text: "You may request that we delete your personal data. We will comply unless retention is required by law or legitimate business necessity." },
      { heading: "Opt-Out", text: "You can opt out of marketing communications at any time by clicking 'unsubscribe' in any email or contacting us directly. Core service communications may still be sent." },
    ],
  },
  {
    id: "cookies",
    icon: FileSearch,
    color: C.gold,
    title: "Cookies & Tracking",
    content: [
      { heading: "Essential Cookies", text: "We use necessary cookies to ensure our website functions correctly. These cannot be disabled as they are essential to site operation." },
      { heading: "Analytics Cookies", text: "With your consent, we use analytics cookies (e.g. Google Analytics) to understand how visitors use our site and improve our content and performance." },
      { heading: "Managing Cookies", text: "You can control or disable cookies through your browser settings at any time. Note that disabling certain cookies may affect website functionality." },
    ],
  },
  {
    id: "updates",
    icon: RefreshCw,
    color: C.cyan,
    title: "Policy Updates",
    content: [
      { heading: "Changes", text: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The effective date at the top of this page will be updated accordingly." },
      { heading: "Notification", text: "For significant changes, we will make reasonable efforts to notify active clients via email or a prominent notice on our website prior to the change taking effect." },
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
      {/* Top accent */}
      <div style={{
        position: "absolute", top: 0, left: "15%", right: "15%", height: 2,
        background: `linear-gradient(90deg, transparent, ${section.color}${hov ? "88" : "44"}, transparent)`,
        transition: "opacity 0.3s",
      }} />

      {/* Index watermark */}
      <div style={{
        position: "absolute", top: 20, right: 24,
        fontSize: 80, fontWeight: 900, color: section.color + "06",
        fontFamily: "Syne, sans-serif", lineHeight: 1, userSelect: "none",
        pointerEvents: "none",
      }}>
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Header */}
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
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#fff", margin: 0, fontFamily: "Syne, sans-serif" }}>{section.title}</h2>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 5 }}>
            <div style={{ width: 24, height: 2, background: `linear-gradient(90deg, ${section.color}, transparent)`, borderRadius: 2 }} />
            <span style={{ fontSize: 11, color: section.color, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Section {index + 1}</span>
          </div>
        </div>
      </div>

      {/* Content items */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {section.content.map((item, i) => (
          <div key={i} style={{
            padding: "18px 20px", borderRadius: 14,
            background: "rgba(255,255,255,0.02)",
            border: `1px solid rgba(255,255,255,0.05)`,
            position: "relative", overflow: "hidden",
          }}>
            {/* Left stripe */}
            <div style={{
              position: "absolute", left: 0, top: "15%", bottom: "15%", width: 2,
              background: `linear-gradient(to bottom, transparent, ${section.color}88, transparent)`,
              borderRadius: 2,
            }} />
            <h4 style={{ fontSize: 14, fontWeight: 700, color: section.color, margin: "0 0 7px", letterSpacing: "0.01em" }}>{item.heading}</h4>
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
        padding: "10px 14px", borderRadius: 10, textDecoration: "none",
        background: hov ? section.color + "10" : "transparent",
        border: `1px solid ${hov ? section.color + "33" : "transparent"}`,
        transition: "all 0.25s",
      }}
    >
      <div style={{
        width: 28, height: 28, borderRadius: 8, flexShrink: 0,
        background: section.color + "18", border: `1px solid ${section.color}33`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <section.icon size={13} style={{ color: section.color }} />
      </div>
      <span style={{ fontSize: 13, color: hov ? "#fff" : C.muted, fontWeight: 500, flex: 1, transition: "color 0.25s" }}>
        {section.title}
      </span>
      <ChevronRight size={13} style={{ color: hov ? section.color : C.muted2, transition: "color 0.25s" }} />
    </a>
  );
}

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | PAYIVVA Technologies</title>
        <meta name="description" content="PAYIVVA Technologies privacy policy — how we collect, use, and protect your data." />
      </Helmet>

      <div style={{ background: C.bg, minHeight: "100vh", color: C.text, fontFamily: "'DM Sans','Segoe UI',sans-serif" }}>

        {/* ── TOP LINE ── */}
        <div style={{ height: 2, background: "linear-gradient(90deg, transparent 0%, #10b981 30%, #22d3ee 50%, #10b981 70%, transparent 100%)", boxShadow: "0 0 20px rgba(16,185,129,0.5)" }} />

        {/* ── HERO ── */}
        <section style={{ position: "relative", padding: "clamp(72px,10vw,110px) 28px clamp(56px,7vw,80px)", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(16,185,129,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(16,185,129,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.6) 1px, transparent 1px)", backgroundSize: "55px 55px", opacity: 0.018, pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "5%", right: "8%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ maxWidth: 740, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24,
              padding: "7px 20px", borderRadius: 100,
              background: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(34,211,238,0.06))",
              border: `1px solid ${C.goldBorder2}`,
              fontSize: 10, fontWeight: 700, letterSpacing: "0.25em",
              textTransform: "uppercase", color: C.gold,
            }}>
              <Lock size={10} />
              Your Privacy Matters
            </div>

            <h1 style={{
              fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 800,
              color: "#fff", margin: "0 0 20px", lineHeight: 1.06, letterSpacing: "-0.025em",
              fontFamily: "Syne, sans-serif",
            }}>
              Privacy{" "}
              <span style={{ background: "linear-gradient(135deg, #10b981, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Policy
              </span>
            </h1>

            <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.8, maxWidth: 520, margin: "0 auto 32px" }}>
              Your privacy matters to us. This policy explains what data we collect, how we use it, and the rights you have over your information.
            </p>

            {/* Meta row */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 16 }}>
              {[
                { icon: RefreshCw, text: `Last updated: ${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}`, color: C.gold },
                { icon: Shield, text: "ISO-Certified Processes", color: C.cyan },
                { icon: AlertCircle, text: "GDPR Aligned", color: C.purple },
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
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "260px 1fr", gap: 32, alignItems: "start" }}>

            {/* ── TOC SIDEBAR ── */}
            <div style={{
              position: "sticky", top: 100,
              background: "rgba(255,255,255,0.02)",
              border: `1px solid ${C.border}`,
              borderRadius: 20, padding: "24px 16px",
            }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.gold, margin: "0 0 16px 4px" }}>Contents</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {SECTIONS.map((s, i) => <TOCLink key={s.id} section={s} index={i} />)}
              </div>

              {/* Contact card in sidebar */}
              <div style={{ marginTop: 24, padding: "18px 16px", borderRadius: 14, background: C.goldDim, border: `1px solid ${C.goldBorder2}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.gold, boxShadow: `0 0 8px ${C.gold}` }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>Questions?</span>
                </div>
                <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.65, margin: "0 0 12px" }}>Reach out and we'll respond within one business day.</p>
                <Link to="/contact" style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 12, fontWeight: 700, color: C.gold, textDecoration: "none",
                }}>
                  Contact Us <ArrowRight size={11} />
                </Link>
              </div>
            </div>

            {/* ── SECTION CARDS ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
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
                  If you have any questions about this Privacy Policy or how we handle your data, please{" "}
                  <Link to="/contact" style={{ color: C.cyan, textDecoration: "none", fontWeight: 600 }}>contact us</Link>
                  {" "}directly. We are committed to addressing your concerns promptly and transparently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM LINE ── */}
        <div style={{ height: 2, background: "linear-gradient(90deg, transparent 0%, #10b981 30%, #22d3ee 50%, #10b981 70%, transparent 100%)", boxShadow: "0 0 16px rgba(16,185,129,0.4)" }} />
      </div>
    </>
  );
}