import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Shield, Lock, Server, Eye, AlertTriangle, CheckCircle2,
  RefreshCw, Globe, Bell, ArrowRight, ChevronRight,
  ShieldCheck, KeyRound, Fingerprint, Wifi, FileWarning,
  Bug, Clock, Mail, Zap, Database, MonitorCheck,
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
    id: "infrastructure",
    icon: Server,
    color: C.gold,
    title: "Infrastructure Security",
    content: [
      {
        heading: "Secure Hosting",
        text: "All PAYIVVA Technologies systems are hosted on enterprise-grade cloud infrastructure with physical access controls, redundant power, and 24/7 monitoring. We use only ISO 27001-compliant data centres.",
      },
      {
        heading: "Network Protection",
        text: "Our network perimeter is protected by enterprise firewalls, intrusion detection systems (IDS), and DDoS mitigation services. Unnecessary ports and services are disabled by default.",
      },
      {
        heading: "Uptime & Redundancy",
        text: "We maintain redundant systems and regular backups to ensure continuity. Critical services are distributed across availability zones to prevent single points of failure.",
      },
    ],
  },
  {
    id: "data",
    icon: Database,
    color: C.cyan,
    title: "Data Protection",
    content: [
      {
        heading: "Encryption in Transit",
        text: "All data transmitted between clients and our systems is encrypted using TLS 1.2 or higher. We enforce HTTPS across all web properties and reject insecure connections.",
      },
      {
        heading: "Encryption at Rest",
        text: "Sensitive data stored on our systems is encrypted at rest using AES-256. Database backups are encrypted and stored in geographically separate, access-controlled locations.",
      },
      {
        heading: "Data Minimisation",
        text: "We collect only the data necessary to deliver our services. Data that is no longer required is securely deleted in accordance with our data retention policy.",
      },
    ],
  },
  {
    id: "access",
    icon: KeyRound,
    color: C.purple,
    title: "Access Control",
    content: [
      {
        heading: "Least Privilege Principle",
        text: "All internal access to systems and client data is governed by role-based access control (RBAC). Employees are granted only the minimum access required to perform their duties.",
      },
      {
        heading: "Multi-Factor Authentication",
        text: "MFA is enforced for all internal systems, admin panels, and cloud infrastructure. We do not permit access to sensitive systems without a second authentication factor.",
      },
      {
        heading: "Access Reviews",
        text: "We conduct quarterly access reviews to ensure permissions remain appropriate. Access is immediately revoked upon role change or employee offboarding.",
      },
    ],
  },
  {
    id: "appsec",
    icon: MonitorCheck,
    color: C.amber,
    title: "Application Security",
    content: [
      {
        heading: "Secure Development",
        text: "Our development team follows OWASP secure coding guidelines. Code is reviewed for security vulnerabilities before deployment, and dependencies are regularly updated to patch known issues.",
      },
      {
        heading: "Penetration Testing",
        text: "We conduct periodic penetration testing of our web applications and infrastructure by qualified security professionals to identify and remediate vulnerabilities proactively.",
      },
      {
        heading: "Vulnerability Scanning",
        text: "Automated vulnerability scanning is integrated into our CI/CD pipeline. Critical and high-severity findings are triaged and resolved within defined SLA timeframes.",
      },
    ],
  },
  {
    id: "incident",
    icon: AlertTriangle,
    color: C.rose,
    title: "Incident Response",
    content: [
      {
        heading: "Response Plan",
        text: "We maintain a documented incident response plan covering detection, containment, eradication, recovery, and post-incident review. The plan is tested and updated annually.",
      },
      {
        heading: "Breach Notification",
        text: "In the event of a confirmed data breach affecting client information, we will notify affected parties within 72 hours of discovery, in line with applicable data protection regulations.",
      },
      {
        heading: "24/7 Monitoring",
        text: "Our systems are monitored continuously for anomalous activity. Automated alerts trigger immediate investigation and escalation to our security team when thresholds are breached.",
      },
    ],
  },
  {
    id: "compliance",
    icon: ShieldCheck,
    color: C.cyan,
    title: "Compliance & Certifications",
    content: [
      {
        heading: "ISO-Certified Processes",
        text: "Our internal quality and security management processes are ISO-certified, ensuring consistent, auditable, and compliant handling of client information and operational data.",
      },
      {
        heading: "GDPR Alignment",
        text: "We have implemented technical and organisational measures aligned with GDPR principles — including data minimisation, purpose limitation, and data subject rights — even for non-EU clients.",
      },
      {
        heading: "Regular Audits",
        text: "Internal and external security audits are conducted on a scheduled basis to validate compliance posture and identify areas for improvement before they become risks.",
      },
    ],
  },
  {
    id: "disclosure",
    icon: Bug,
    color: C.amber,
    title: "Responsible Disclosure",
    content: [
      {
        heading: "Reporting a Vulnerability",
        text: "If you believe you have discovered a security vulnerability in any PAYIVVA Technologies system, please report it to us promptly via our contact page. We appreciate responsible disclosure and will respond within 48 hours.",
      },
      {
        heading: "Our Commitment",
        text: "We commit to acknowledging your report, investigating it thoroughly, and keeping you informed of our progress. We will not take legal action against researchers who act in good faith under this policy.",
      },
      {
        heading: "Out of Scope",
        text: "Social engineering attacks, denial of service, physical security, and vulnerabilities in third-party services outside our direct control are outside the scope of our responsible disclosure programme.",
      },
    ],
  },
];

const TRUST_BADGES = [
  { icon: Lock, label: "TLS 1.2+ Encryption", color: C.gold },
  { icon: Shield, label: "ISO-Certified", color: C.cyan },
  { icon: Fingerprint, label: "MFA Enforced", color: C.purple },
  { icon: Wifi, label: "DDoS Protection", color: C.amber },
  { icon: Eye, label: "24/7 Monitoring", color: C.rose },
  { icon: RefreshCw, label: "Regular Audits", color: C.gold },
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
      <div style={{
        position: "absolute", top: 0, left: "15%", right: "15%", height: 2,
        background: `linear-gradient(90deg, transparent, ${section.color}${hov ? "88" : "44"}, transparent)`,
        transition: "opacity 0.3s",
      }} />
      <div style={{
        position: "absolute", top: 16, right: 24, fontSize: 80, fontWeight: 900,
        color: section.color + "05", fontFamily: "Syne, sans-serif",
        lineHeight: 1, userSelect: "none", pointerEvents: "none",
      }}>
        {String(index + 1).padStart(2, "0")}
      </div>

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

export default function Security() {
  return (
    <>
      <Helmet>
        <title>Security | PAYIVVA Technologies</title>
        <meta name="description" content="Security practices, data protection, and responsible disclosure for PAYIVVA Technologies." />
      </Helmet>

      <div style={{ background: C.bg, minHeight: "100vh", color: C.text, fontFamily: "'DM Sans','Segoe UI',sans-serif" }}>

        {/* Top glow line */}
        <div style={{ height: 2, background: "linear-gradient(90deg, transparent 0%, #10b981 30%, #22d3ee 50%, #10b981 70%, transparent 100%)", boxShadow: "0 0 20px rgba(16,185,129,0.5)" }} />

        {/* ── HERO ── */}
        <section style={{ position: "relative", padding: "clamp(72px,10vw,110px) 28px clamp(56px,7vw,80px)", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(16,185,129,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(16,185,129,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.6) 1px, transparent 1px)", backgroundSize: "55px 55px", opacity: 0.018, pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "5%", left: "5%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: 0, right: "5%", width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ maxWidth: 740, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24,
              padding: "7px 20px", borderRadius: 100,
              background: "linear-gradient(135deg, rgba(16,185,129,0.12), rgba(34,211,238,0.06))",
              border: `1px solid ${C.goldBorder2}`,
              fontSize: 10, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: C.gold,
            }}>
              <Shield size={10} />
              Trust & Security
            </div>

            <h1 style={{
              fontSize: "clamp(2.4rem,5vw,4rem)", fontWeight: 800, color: "#fff",
              margin: "0 0 20px", lineHeight: 1.06, letterSpacing: "-0.025em",
              fontFamily: "Syne, sans-serif",
            }}>
              Security &{" "}
              <span style={{ background: "linear-gradient(135deg, #10b981, #22d3ee)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Data Protection
              </span>
            </h1>

            <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.8, maxWidth: 520, margin: "0 auto 32px" }}>
              We take the security of our systems and your data seriously. Here's an overview of our practices, controls, and how to responsibly report a vulnerability.
            </p>

            {/* Meta pills */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 12 }}>
              {[
                { icon: RefreshCw, text: `Updated: ${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}`, color: C.gold },
                { icon: Globe, text: "ISO-Certified Infrastructure", color: C.cyan },
                { icon: Clock, text: "48h Vulnerability Response", color: C.purple },
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

        {/* ── TRUST BADGES ── */}
        <div style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, background: "rgba(255,255,255,0.01)", padding: "36px 28px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
              {TRUST_BADGES.map((badge, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "14px 16px", borderRadius: 14,
                  background: "rgba(255,255,255,0.02)", border: `1px solid ${C.border}`,
                  transition: "all 0.3s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = badge.color + "44"; e.currentTarget.style.background = badge.color + "07"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
                >
                  <div style={{
                    width: 32, height: 32, borderRadius: 9, flexShrink: 0,
                    background: badge.color + "18", border: `1px solid ${badge.color}33`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <badge.icon size={15} style={{ color: badge.color }} />
                  </div>
                  <span style={{ fontSize: 12.5, color: C.muted, fontWeight: 600, lineHeight: 1.3 }}>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── BODY ── */}
        <section style={{ padding: "clamp(48px,6vw,72px) 28px clamp(80px,10vw,110px)" }}>
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

              {/* Disclosure CTA */}
              <div style={{ marginTop: 20, padding: "16px 14px", borderRadius: 14, background: "rgba(236,72,153,0.08)", border: "1px solid rgba(236,72,153,0.25)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                  <Bug size={13} style={{ color: C.rose }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>Found a bug?</span>
                </div>
                <p style={{ fontSize: 12, color: C.muted, lineHeight: 1.6, margin: "0 0 10px" }}>
                  Report vulnerabilities responsibly. We respond within 48 hours.
                </p>
                <Link to="/contact" style={{
                  display: "inline-flex", alignItems: "center", gap: 5,
                  fontSize: 12, fontWeight: 700, color: C.rose, textDecoration: "none",
                }}>
                  Report Now <ArrowRight size={11} />
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
                <ShieldCheck size={18} style={{ color: C.gold, flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: 13.5, color: C.muted, lineHeight: 1.8, margin: 0 }}>
                  Security is a core part of how <strong style={{ color: "rgba(255,255,255,0.75)" }}>PAYIVVA Technologies</strong> operates. We continuously invest in infrastructure, processes, and training to protect our systems and the data entrusted to us by our clients.
                </p>
              </div>

              {SECTIONS.map((section, i) => (
                <SectionCard key={section.id} section={section} index={i} />
              ))}

              {/* Disclosure CTA banner */}
              <div style={{
                position: "relative", borderRadius: 22, overflow: "hidden",
                background: "rgba(236,72,153,0.05)",
                border: "1px solid rgba(236,72,153,0.25)",
                padding: "clamp(28px,4vw,40px) clamp(24px,3vw,48px)",
                display: "flex", flexWrap: "wrap", alignItems: "center",
                justifyContent: "space-between", gap: 24,
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, rgba(236,72,153,0.5), rgba(251,191,36,0.4), transparent)" }} />
                <div style={{ position: "absolute", top: 0, right: 0, width: 250, height: "100%", background: "radial-gradient(circle at 80% 50%, rgba(236,72,153,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

                <div style={{ display: "flex", alignItems: "flex-start", gap: 16, flex: 1, minWidth: 240 }}>
                  <div style={{ width: 50, height: 50, borderRadius: 15, flexShrink: 0, background: "rgba(236,72,153,0.15)", border: "1px solid rgba(236,72,153,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <FileWarning size={22} style={{ color: C.rose }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: "0 0 7px", fontFamily: "Syne, sans-serif" }}>Report a Security Vulnerability</h3>
                    <p style={{ fontSize: 13.5, color: C.muted, lineHeight: 1.72, margin: 0, maxWidth: 420 }}>
                      If you've discovered a potential security issue in any of our systems, please reach out immediately. We take all reports seriously and respond within 48 hours.
                    </p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    padding: "14px 28px", borderRadius: 12, flexShrink: 0,
                    background: "linear-gradient(135deg, #ec4899, #f59e0b)",
                    color: "#040810", fontWeight: 700, fontSize: 14.5,
                    textDecoration: "none", letterSpacing: "0.02em",
                    boxShadow: "0 8px 28px rgba(236,72,153,0.25)",
                    fontFamily: "inherit",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04) translateY(-2px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(236,72,153,0.4)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "scale(1) translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(236,72,153,0.25)"; }}
                >
                  <Mail size={16} /> Contact Security Team
                </Link>
              </div>

              {/* Footer note */}
              <div style={{
                display: "flex", alignItems: "flex-start", gap: 14,
                padding: "22px 26px", borderRadius: 16,
                background: "rgba(255,255,255,0.02)", border: `1px solid ${C.border}`,
              }}>
                <Bell size={18} style={{ color: C.gold, flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: 13.5, color: C.muted, lineHeight: 1.78, margin: 0 }}>
                  For general security questions or concerns, please{" "}
                  <Link to="/contact" style={{ color: C.cyan, textDecoration: "none", fontWeight: 600 }}>contact us</Link>
                  . We are committed to maintaining the highest standards of security for our clients and partners.
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