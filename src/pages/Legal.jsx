import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Scale, Shield, FileText, Mail, ArrowRight, ChevronRight, BookOpen, Lock, AlertCircle } from "lucide-react";

const C = {
  bg: "#040810",
  gold: "#10b981",
  goldLight: "#34d399",
  cyan: "#22d3ee",
  goldDim: "rgba(16,185,129,0.08)",
  goldBorder: "rgba(16,185,129,0.15)",
  goldBorder2: "rgba(16,185,129,0.3)",
  text: "rgba(255,255,255,0.88)",
  muted: "rgba(255,255,255,0.48)",
  muted2: "rgba(255,255,255,0.22)",
  border: "rgba(255,255,255,0.06)",
};

const LEGAL_SECTIONS = [
  {
    icon: FileText,
    color: C.gold,
    title: "Terms of Service",
    description: "Our terms govern the use of PAYIVVA Technologies' services, website, and digital products. By engaging with us, you agree to these terms.",
    link: "/terms",
    linkLabel: "Read Terms",
  },
  {
    icon: Lock,
    color: C.cyan,
    title: "Privacy Policy",
    description: "We are committed to protecting your personal data. Our Privacy Policy outlines how we collect, use, and safeguard your information.",
    link: "/refund",
    linkLabel: "Read Policy",
  },
  {
    icon: Shield,
    color: "#a78bfa",
    title: "Data Protection",
    description: "PAYIVVA Technologies follows ISO-certified processes and complies with applicable data protection regulations to keep your information secure.",
    link: "/contact",
    linkLabel: "Learn More",
  },
  {
    icon: AlertCircle,
    color: "#f59e0b",
    title: "Disclaimer",
    description: "Content on this website is for informational purposes only. Results may vary based on project scope, market conditions, and client-specific factors.",
    link: "/contact",
    linkLabel: "Contact Us",
  },
];

function LegalCard({ icon: Icon, color, title, description, link, linkLabel }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative", borderRadius: 20,
        background: hov ? color + "07" : "rgba(255,255,255,0.02)",
        border: `1px solid ${hov ? color + "44" : C.border}`,
        padding: "32px 28px", overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hov ? `0 20px 40px rgba(0,0,0,0.3)` : "none",
        cursor: "default",
      }}
    >
      {/* Top accent */}
      <div style={{
        position: "absolute", top: 0, left: "20%", right: "20%", height: 2,
        background: `linear-gradient(90deg, transparent, ${color}${hov ? "99" : "44"}, transparent)`,
        transition: "opacity 0.3s",
      }} />

      {/* Number watermark */}
      <div style={{
        position: "absolute", bottom: 16, right: 20,
        fontSize: 72, fontWeight: 900, color: color + "06",
        fontFamily: "Syne, sans-serif", lineHeight: 1, userSelect: "none",
      }}>
        <Icon size={64} style={{ color: color + "08" }} />
      </div>

      <div style={{
        width: 48, height: 48, borderRadius: 14, marginBottom: 20,
        background: color + "18", border: `1px solid ${color}33`,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
        transform: hov ? "scale(1.1) rotate(-5deg)" : "scale(1)",
      }}>
        <Icon size={22} style={{ color }} />
      </div>

      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: "0 0 12px", fontFamily: "Syne, sans-serif" }}>{title}</h3>
      <p style={{ fontSize: 13.5, color: C.muted, lineHeight: 1.78, margin: "0 0 22px" }}>{description}</p>

      <Link to={link} style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        fontSize: 13, fontWeight: 600, color: hov ? color : C.muted,
        textDecoration: "none",
        transition: "color 0.25s, gap 0.25s",
      }}>
        {linkLabel} <ArrowRight size={13} />
      </Link>
    </div>
  );
}

export default function Legal() {
  return (
    <>
      <Helmet>
        <title>Legal | PAYIVVA Technologies</title>
        <meta name="description" content="Legal information for PAYIVVA Technologies — Terms, Privacy Policy, Data Protection, and Disclaimer." />
      </Helmet>

      <div style={{ background: C.bg, minHeight: "100vh", color: C.text, fontFamily: "'DM Sans','Segoe UI',sans-serif" }}>

        {/* ── TOP LINE ── */}
        <div style={{ height: 2, background: "linear-gradient(90deg, transparent 0%, #10b981 30%, #22d3ee 50%, #10b981 70%, transparent 100%)", boxShadow: "0 0 20px rgba(16,185,129,0.5)" }} />

        {/* ── HERO ── */}
        <section style={{ position: "relative", padding: "clamp(72px,10vw,110px) 28px clamp(56px,7vw,80px)", overflow: "hidden" }}>

          {/* BG effects */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(16,185,129,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(16,185,129,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.6) 1px, transparent 1px)", backgroundSize: "55px 55px", opacity: 0.02, pointerEvents: "none" }} />

          {/* Orbs */}
          <div style={{ position: "absolute", top: "10%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "0%", right: "5%", width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>

            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24,
              padding: "7px 20px", borderRadius: 100,
              background: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(34,211,238,0.06))",
              border: `1px solid ${C.goldBorder2}`,
              fontSize: 10, fontWeight: 700, letterSpacing: "0.25em",
              textTransform: "uppercase", color: C.gold,
            }}>
              <Scale size={11} />
              Legal Information
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 800, color: "#fff",
              margin: "0 0 20px", lineHeight: 1.06, letterSpacing: "-0.025em",
              fontFamily: "Syne, sans-serif",
            }}>
              Legal &{" "}
              <span style={{
                background: "linear-gradient(135deg, #10b981, #22d3ee)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                Compliance
              </span>
            </h1>

            <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.8, maxWidth: 540, margin: "0 auto 36px" }}>
              This page contains legal information about PAYIVVA Technologies — our terms, privacy practices, data protection commitments, and more.
            </p>

            {/* Contact pill */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              padding: "14px 24px", borderRadius: 14,
              background: "rgba(255,255,255,0.02)",
              border: `1px solid ${C.border}`,
              fontSize: 13.5, color: C.muted,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.gold, boxShadow: `0 0 10px ${C.gold}` }} />
              For legal requests,{" "}
              <Link to="/contact" style={{
                color: C.cyan, textDecoration: "none", fontWeight: 600,
                display: "inline-flex", alignItems: "center", gap: 4,
              }}>
                contact us <ChevronRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── LEGAL CARDS GRID ── */}
        <section style={{ padding: "0 28px clamp(72px,10vw,104px)", position: "relative" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
              {LEGAL_SECTIONS.map((s) => (
                <LegalCard key={s.title} {...s} />
              ))}
            </div>
          </div>
        </section>

        {/* ── INFO BANNER ── */}
        <section style={{ padding: "0 28px clamp(72px,10vw,104px)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{
              position: "relative", borderRadius: 24, overflow: "hidden",
              background: "rgba(16,185,129,0.05)",
              border: `1px solid ${C.goldBorder2}`,
              padding: "clamp(32px,5vw,48px) clamp(28px,4vw,56px)",
              display: "flex", flexWrap: "wrap", alignItems: "center",
              justifyContent: "space-between", gap: 28,
            }}>
              {/* BG glow */}
              <div style={{ position: "absolute", top: 0, right: 0, width: 300, height: "100%", background: "radial-gradient(circle at 80% 50%, rgba(34,211,238,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.5), rgba(34,211,238,0.4), transparent)" }} />

              <div style={{ display: "flex", alignItems: "flex-start", gap: 18, flex: 1, minWidth: 260 }}>
                <div style={{ width: 52, height: 52, borderRadius: 16, flexShrink: 0, background: "rgba(16,185,129,0.14)", border: `1px solid ${C.goldBorder2}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <BookOpen size={24} style={{ color: C.gold }} />
                </div>
                <div>
                  <h3 style={{ fontSize: 19, fontWeight: 700, color: "#fff", margin: "0 0 8px", fontFamily: "Syne, sans-serif" }}>Have a legal question?</h3>
                  <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.72, margin: 0, maxWidth: 460 }}>
                    Our team is happy to address any legal or compliance concerns regarding your engagement with PAYIVVA Technologies. Reach out and we'll respond within one business day.
                  </p>
                </div>
              </div>

              <Link
                to="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  padding: "14px 28px", borderRadius: 12, flexShrink: 0,
                  background: "linear-gradient(135deg, #10b981, #22d3ee)",
                  color: "#040810", fontWeight: 700, fontSize: 14.5,
                  textDecoration: "none", letterSpacing: "0.02em",
                  boxShadow: "0 8px 28px rgba(16,185,129,0.3)",
                  fontFamily: "inherit",
                  transition: "all 0.3s",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04) translateY(-2px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(16,185,129,0.45)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "scale(1) translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(16,185,129,0.3)"; }}
              >
                <Mail size={16} /> Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* ── BOTTOM LINE ── */}
        <div style={{ height: 2, background: "linear-gradient(90deg, transparent 0%, #10b981 30%, #22d3ee 50%, #10b981 70%, transparent 100%)", boxShadow: "0 0 16px rgba(16,185,129,0.4)" }} />
      </div>
    </>
  );
}