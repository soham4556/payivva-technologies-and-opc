import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Star, Award, Palette, Megaphone, Globe, Heart, Sparkles,
  ArrowLeft, ArrowRight, Eye, ChevronDown, TrendingUp,
  Shield, Clock, Zap, Users, FileText, Target,
  Layers, MessageSquare, BarChart3, CheckCircle2,
} from "lucide-react";

/* ─── TOKENS ─── */
const C = {
  bg: "#080808", bg2: "#0a0a0a",
  gold: "#D4AF37", goldLight: "#F0D060", goldDim: "rgba(212,175,55,0.12)",
  goldBorder: "rgba(212,175,55,0.18)", goldBorder2: "rgba(212,175,55,0.38)",
  text: "rgba(255,255,255,0.88)", muted: "rgba(255,255,255,0.45)",
  border: "rgba(255,255,255,0.06)",
};
const glass = { background: "rgba(255,255,255,0.03)", border: `1px solid ${C.goldBorder}`, backdropFilter: "blur(12px)", borderRadius: 20 };
const tag = { display: "inline-block", padding: "5px 16px", borderRadius: 100, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", background: C.goldDim, border: `1px solid ${C.goldBorder2}`, color: C.gold, marginBottom: 16 };
const iconBox = (size = 48) => ({ width: size, height: size, borderRadius: 14, flexShrink: 0, background: C.goldDim, border: `1px solid ${C.goldBorder2}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.gold });

/* ─── DATA ─── */
const CAPABILITIES = [
  { icon: Palette, title: "Visual Identity", desc: "Logos, color systems, typography hierarchies, and iconography — crafted to convey premium quality, build instant recognition, and signal credibility at every touchpoint." },
  { icon: Award, title: "Market Positioning", desc: "Defining your unique value proposition, competitive differentiation, and brand promise — so you stand out with clarity in even the most saturated markets." },
  { icon: Megaphone, title: "PR & Media Coverage", desc: "Placing your brand in front of the right publications, podcasts, and industry platforms to build third-party authority, press credibility, and organic trust." },
  { icon: Eye, title: "Awareness Campaigns", desc: "High-reach multi-channel campaigns designed to make your name synonymous with quality — so when your customer is ready to buy, yours is the first brand they recall." },
  { icon: Heart, title: "Brand Voice & Narrative", desc: "Developing a consistent, emotionally resonant brand story, tone of voice guidelines, and messaging framework that speaks directly to your ideal customer's values." },
  { icon: Globe, title: "Reputation Management", desc: "Proactively monitoring and shaping your digital footprint — reviews, mentions, and online sentiment — so your brand always presents its most credible, compelling face." },
];

const PROCESS = [
  { step: "01", title: "Brand Discovery & Audit", desc: "We conduct an in-depth brand audit — analysing your current identity, competitive landscape, customer perceptions, and market positioning gaps. This forms the strategic foundation everything else is built on.", tags: ["Brand Audit", "Competitor Mapping", "Perception Research", "Positioning Gaps"] },
  { step: "02", title: "Strategy & Positioning", desc: "We define your brand architecture: core values, mission, unique value proposition, target audience personas, and a clear positioning statement that differentiates you from every competitor in your space.", tags: ["Brand Pillars", "UVP Definition", "Audience Personas", "Positioning Statement"] },
  { step: "03", title: "Identity & Visual Design", desc: "Our designers translate your strategy into a full visual identity system — logo suite, color palette, typography, imagery direction, and brand guidelines document that governs every future execution.", tags: ["Logo Design", "Color System", "Typography", "Brand Guidelines"] },
  { step: "04", title: "Activation & Campaign Launch", desc: "We execute your brand across all relevant channels — website, social, ads, print, and PR — ensuring absolute consistency in voice, visuals, and messaging from day one of launch.", tags: ["Multi-Channel Launch", "Content Creation", "PR Outreach", "Campaign Management"] },
  { step: "05", title: "Monitor, Evolve & Protect", desc: "Brands are living entities. We continuously monitor brand sentiment, review performance metrics, manage reputation, and evolve your strategy so your brand equity compounds over time.", tags: ["Sentiment Monitoring", "Brand Reporting", "Review Management", "Strategy Evolution"] },
];

const STATS = [
  { value: "150+", label: "Brands Built" },
  { value: "98%", label: "Client Trust Rate" },
  { value: "4×", label: "Avg. Premium Pricing Lift" },
  { value: "10yr+", label: "Combined Brand Experience" },
];

const INCLUDED = [
  { icon: Palette, title: "Full Visual Identity System", desc: "Logo suite, color palette, typography, iconography, and a complete brand guidelines document." },
  { icon: FileText, title: "Brand Strategy Document", desc: "Positioning statement, UVP, brand pillars, mission, vision, and audience persona documentation." },
  { icon: Heart, title: "Tone of Voice Guide", desc: "A comprehensive messaging framework defining how your brand communicates across every channel." },
  { icon: Megaphone, title: "PR & Media Outreach", desc: "Identification and outreach to relevant publications, podcasts, and industry platforms for earned coverage." },
  { icon: Eye, title: "Brand Awareness Campaigns", desc: "Multi-channel awareness campaigns across social, display, and content to grow brand recognition." },
  { icon: Globe, title: "Reputation Monitoring", desc: "Ongoing tracking of reviews, mentions, and online sentiment with proactive management responses." },
  { icon: BarChart3, title: "Brand Equity Reporting", desc: "Monthly reports tracking brand sentiment, share of voice, mention volume, and audience growth." },
  { icon: Users, title: "Influencer Strategy", desc: "Identifying, vetting, and coordinating with relevant micro and macro influencers aligned to your brand values." },
];

const TESTIMONIALS = [
  { name: "Neha Kapoor", role: "Founder, Lumière Skincare", text: "They didn't just design a logo — they built an entire brand world. From the visual identity to the brand voice guide, every detail was considered. We now command premium pricing that we couldn't justify before.", stars: 5 },
  { name: "Arjun Malhotra", role: "CEO, Pinnacle Realty Group", text: "Our rebrand transformed client perception entirely. Within 6 months of the new identity launch, we secured three high-ticket partnerships purely on brand credibility. The investment paid back 10× over.", stars: 5 },
  { name: "Priya Iyer", role: "Director, ClearPath Legal", text: "The PR strategy alone generated ₹12L worth of earned media in the first quarter. Our name is now recognised in publications we never imagined we'd appear in. This team understands brand equity deeply.", stars: 5 },
];

const FAQS = [
  { q: "What's the difference between branding and marketing?", a: "Branding is who you are — your identity, values, and the emotional impression you leave. Marketing is how you communicate that identity to attract customers. Strong branding makes all marketing more effective and reduces its cost over time." },
  { q: "How long does a full brand build take?", a: "A complete brand identity project — strategy through visual design — typically takes 4–6 weeks. Full brand activation campaigns run over 3–6 months. We always establish a clear timeline and milestone schedule upfront." },
  { q: "Do you work with businesses that already have a brand?", a: "Absolutely. Many of our engagements are brand refreshes or repositioning projects — where the core business is strong but the brand identity no longer reflects its quality or ambitions. We conduct a full audit before recommending any changes." },
  { q: "What's included in the brand guidelines document?", a: "Logo usage rules, colour palette (Hex, RGB, CMYK, Pantone), typography hierarchy, imagery and photography direction, tone of voice, messaging do's and don'ts, and templates for key collateral. Everything a designer or agency needs to execute on-brand work." },
  { q: "Can you help manage our online reputation?", a: "Yes. We offer ongoing reputation management covering review monitoring (Google, Justdial, Trustpilot), response strategy, negative content suppression, and proactive sentiment analysis to maintain your brand's credibility." },
  { q: "How do you measure brand success?", a: "We track brand sentiment score, share of voice, branded search volume, earned media value, review ratings, and audience growth. We also track downstream business metrics — pricing power, referral rates, and inbound lead quality — since strong brands improve all of these." },
];

/* ─── SUBCOMPONENTS ─── */
function FaqItem({ faq }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ ...glass, marginBottom: 10, overflow: "hidden", borderColor: open ? C.goldBorder2 : C.goldBorder, transition: "border-color 0.3s" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "20px 24px", background: "none", border: "none", cursor: "pointer", color: open ? "#fff" : C.text, fontFamily: "inherit", fontSize: 15, fontWeight: 600, textAlign: "left" }}>
        <span>{faq.q}</span>
        <ChevronDown size={16} style={{ color: C.gold, flexShrink: 0, transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }} />
      </button>
      {open && <div style={{ padding: "16px 24px 20px", color: C.muted, fontSize: 14, lineHeight: 1.8, borderTop: `1px solid ${C.border}` }}>{faq.a}</div>}
    </div>
  );
}

function HoverCard({ children, style = {} }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ ...glass, borderColor: hov ? C.goldBorder2 : C.goldBorder, boxShadow: hov ? "0 0 40px rgba(212,175,55,0.07)" : "none", transition: "border-color 0.35s, box-shadow 0.35s", ...style }}>
      {children}
    </div>
  );
}

function SectionHead({ badge, title, goldWord, sub, center = false }) {
  return (
    <div style={{ marginBottom: 56, textAlign: center ? "center" : "left" }}>
      <span style={tag}>{badge}</span>
      <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.1 }}>
        {title} <span style={{ color: C.gold }}>{goldWord}</span>
      </h2>
      {sub && <p style={{ color: C.muted, fontSize: 15, lineHeight: 1.7, maxWidth: center ? 520 : 500, margin: center ? "0 auto" : 0 }}>{sub}</p>}
    </div>
  );
}

/* ─── MAIN ─── */
export default function BrandPromotion() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
      .bp-root * { box-sizing: border-box; }
      .bp-root { font-family: 'Outfit', sans-serif !important; }
      .bp-reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1); }
      .bp-reveal.visible { opacity: 1; transform: translateY(0); }
      .bp-marquee { display: flex; animation: bp-scroll 32s linear infinite; width: max-content; }
      .bp-marquee:hover { animation-play-state: paused; }
      @keyframes bp-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      .bp-cta-main:hover { background: #F0D060 !important; transform: scale(1.04) translateY(-2px) !important; box-shadow: 0 20px 50px rgba(212,175,55,0.45) !important; }
      .bp-cta-ghost:hover { border-color: rgba(212,175,55,0.4) !important; color: #fff !important; }
      .bp-back:hover { color: #D4AF37 !important; }
      .bp-sparkle { animation: bp-float 3s ease-in-out infinite; }
      @keyframes bp-float { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-12px) rotate(8deg)} }
      .bp-pulse-ring { animation: bp-pulse 2.5s ease-in-out infinite; }
      @keyframes bp-pulse { 0%,100%{opacity:0.15;transform:scale(1)} 50%{opacity:0.3;transform:scale(1.08)} }
    `;
    document.head.appendChild(style);
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".bp-reveal").forEach((el) => obs.observe(el));
    return () => { obs.disconnect(); document.head.removeChild(style); };
  }, []);

  const wrap = { maxWidth: 1200, margin: "0 auto", padding: "0 28px" };

  return (
    <div ref={sectionRef} className="bp-root" style={{ background: C.bg, minHeight: "100vh", color: C.text }}>
      <Helmet>
        <title>Brand Promotion | Become Unforgettable | PAYIVVA Technologies</title>
        <meta
          name="description"
          content="We build iconic brands blending high-end aesthetics with powerful storytelling. Identity, promotion, and reputation management."
        />
      </Helmet>
      {/* ── HERO ── */}
      <section style={{ position: "relative", paddingTop: 128, paddingBottom: 96, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(212,175,55,0.06), transparent)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 40, right: -60, width: 520, height: 520, background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 68%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: -80, width: 400, height: 400, background: "radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={wrap}>
          <Link to="/services" className="bp-back" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(212,175,55,0.6)", textDecoration: "none", marginBottom: 48, fontSize: 14, fontWeight: 500, transition: "color 0.2s" }}>
            <ArrowLeft size={15} /> Back to Services
          </Link>
          <div className="bp-reveal">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={iconBox(48)}><Star size={22} /></div>
              <span style={{ color: C.gold, fontWeight: 700, letterSpacing: "0.22em", fontSize: 11, textTransform: "uppercase" }}>Service Detail</span>
            </div>
            <h1 style={{ fontSize: "clamp(2.8rem,7vw,5.5rem)", fontWeight: 900, lineHeight: 1.05, margin: "0 0 24px", letterSpacing: "-0.02em" }}>
              Brand <span style={{ color: C.gold, textShadow: "0 0 30px rgba(212,175,55,0.3)" }}>Promotion</span>
            </h1>
            <p style={{ fontSize: 18, color: C.muted, maxWidth: 640, lineHeight: 1.8, margin: "0 0 36px" }}>
              Become unforgettable. We build iconic brands by blending high-end aesthetics with powerful storytelling — ensuring yours is the name people remember, trust, and are willing to pay a premium for.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link to="/contact" className="bp-cta-main" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 32px", background: C.gold, color: "#000", fontWeight: 800, borderRadius: 14, textDecoration: "none", fontSize: 15, transition: "all 0.3s", letterSpacing: "0.02em" }}>
                Build My Brand <ArrowRight size={18} />
              </Link>
              <a href="#process" className="bp-cta-ghost" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 32px", ...glass, color: C.muted, textDecoration: "none", fontSize: 15, fontWeight: 600, transition: "all 0.3s" }}>
                See Our Process
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, background: C.bg2 }}>
        <div style={{ ...wrap, padding: "40px 28px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, textAlign: "center" }}>
            {STATS.map((s, i) => (
              <div key={i} className="bp-reveal" style={{ transitionDelay: `${i * 80}ms`, ...glass, padding: "28px 20px" }}>
                <div style={{ fontSize: 34, fontWeight: 900, color: C.gold, lineHeight: 1, marginBottom: 8 }}>{s.value}</div>
                <div style={{ fontSize: 11, color: C.muted, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CAPABILITIES ── */}
      <section style={{ background: C.bg2, padding: "96px 0" }}>
        <div style={wrap}>
          <div className="bp-reveal">
            <SectionHead badge="What We Do" title="Core" goldWord="Capabilities" sub="Six brand-building disciplines that transform businesses into category leaders." />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {CAPABILITIES.map((cap, i) => (
              <div key={i} className="bp-reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                <HoverCard style={{ padding: "40px 32px", height: "100%" }}>
                  <div style={{ ...iconBox(52), marginBottom: 24, borderRadius: 16 }}><cap.icon size={26} /></div>
                  <h3 style={{ fontSize: 21, fontWeight: 800, color: "#fff", margin: "0 0 12px" }}>{cap.title}</h3>
                  <p style={{ color: C.muted, lineHeight: 1.78, fontSize: 14, margin: 0 }}>{cap.desc}</p>
                </HoverCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, background: "#000", padding: "18px 0", overflow: "hidden" }}>
        <div className="bp-marquee">
          {[...["Brand Identity", "Visual Design", "Market Positioning", "PR Campaigns", "Brand Voice", "Reputation Mgmt", "Awareness Campaigns", "Influencer Strategy", "Brand Architecture", "Storytelling", "Brand Equity", "Category Leadership"],
            ...["Brand Identity", "Visual Design", "Market Positioning", "PR Campaigns", "Brand Voice", "Reputation Mgmt", "Awareness Campaigns", "Influencer Strategy", "Brand Architecture", "Storytelling", "Brand Equity", "Category Leadership"]
          ].map((t, i) => (
            <span key={i} style={{ padding: "0 36px", fontSize: 28, fontWeight: 900, fontStyle: "italic", textTransform: "uppercase", color: "rgba(255,255,255,0.1)", whiteSpace: "nowrap", letterSpacing: "0.04em" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── PHILOSOPHY BLOCK (original section, enhanced) ── */}
      <section style={{ padding: "96px 0" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            {/* Left */}
            <div className="bp-reveal">
              <span style={tag}>Our Philosophy</span>
              <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 900, color: "#fff", margin: "0 0 20px", lineHeight: 1.15, fontStyle: "italic" }}>
                "Brands are stories told through <span style={{ color: C.gold }}>excellence.</span>"
              </h2>
              <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.85, margin: "0 0 32px" }}>
                We don't believe in vanity metrics. Brand promotion is about building long-term equity. We ensure every touchpoint — from your website to your social presence to your PR — tells a cohesive story of quality that commands trust and premium pricing.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {["Consistency across every channel", "Emotion-first brand storytelling", "Strategy before aesthetics, always", "Built for long-term equity growth"].map((pt, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <CheckCircle2 size={16} style={{ color: C.gold, flexShrink: 0 }} />
                    <span style={{ fontSize: 15, color: C.text, fontWeight: 500 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right — visual block */}
            <div className="bp-reveal" style={{ position: "relative" }}>
              <div className="bp-pulse-ring" style={{ position: "absolute", inset: 0, background: "radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />
              <div style={{ ...glass, borderRadius: 32, padding: "48px", aspectRatio: "1/1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                <Star style={{ color: C.gold, opacity: 0.15, position: "absolute", top: 24, right: 24 }} size={100} />
                <Star style={{ color: C.gold, opacity: 0.08, position: "absolute", bottom: 20, left: 20 }} size={60} />
                <Sparkles className="bp-sparkle" style={{ color: C.gold, marginBottom: 28 }} size={72} />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, width: "100%" }}>
                  {[{ v: "98%", l: "Client Trust" }, { v: "150+", l: "Brands Built" }, { v: "4×", l: "Pricing Power" }, { v: "50+", l: "Industries" }].map((s, i) => (
                    <div key={i} style={{ textAlign: "center", padding: "16px 12px", background: "rgba(212,175,55,0.06)", borderRadius: 12, border: `1px solid ${C.goldBorder}` }}>
                      <div style={{ fontSize: 22, fontWeight: 900, color: C.gold, lineHeight: 1 }}>{s.v}</div>
                      <div style={{ fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4, fontWeight: 600 }}>{s.l}</div>
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
          <div className="bp-reveal">
            <SectionHead badge="Deliverables" title="What's" goldWord="Included" sub="Every brand engagement is comprehensive — strategy, design, activation, and ongoing protection." />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 16 }}>
            {INCLUDED.map((item, i) => (
              <div key={i} className="bp-reveal" style={{ transitionDelay: `${i * 55}ms` }}>
                <HoverCard style={{ padding: "24px", display: "flex", alignItems: "flex-start", gap: 18 }}>
                  <div style={iconBox(42)}><item.icon size={18} /></div>
                  <div>
                    <h4 style={{ fontSize: 16, fontWeight: 700, color: "#fff", margin: "0 0 6px" }}>{item.title}</h4>
                    <p style={{ color: C.muted, fontSize: 13, lineHeight: 1.72, margin: 0 }}>{item.desc}</p>
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
          <div className="bp-reveal">
            <SectionHead badge="How We Work" title="Our" goldWord="Process" sub="A 5-stage brand-building methodology that creates lasting equity, not just a pretty logo." />
          </div>
          <div>
            {PROCESS.map((item, i) => (
              <div key={i} className="bp-reveal" style={{ transitionDelay: `${i * 80}ms`, display: "flex", gap: 28, alignItems: "flex-start", paddingBottom: i < PROCESS.length - 1 ? 48 : 0, borderBottom: i < PROCESS.length - 1 ? `1px solid ${C.border}` : "none", marginBottom: i < PROCESS.length - 1 ? 48 : 0 }}>
                <div style={{ ...iconBox(56), borderRadius: 18, flexShrink: 0 }}>
                  <span style={{ color: C.gold, fontWeight: 900, fontSize: 14 }}>{item.step}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: "#fff", margin: "0 0 10px" }}>{item.title}</h3>
                  <p style={{ color: C.muted, lineHeight: 1.8, fontSize: 14, margin: "0 0 16px", maxWidth: 640 }}>{item.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {item.tags.map((tg, j) => (
                      <span key={j} style={{ padding: "4px 14px", borderRadius: 100, fontSize: 11, fontWeight: 600, background: C.goldDim, border: `1px solid ${C.goldBorder2}`, color: C.gold, letterSpacing: "0.06em" }}>{tg}</span>
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
          <div className="bp-reveal">
            <SectionHead badge="Client Results" title="What Clients" goldWord="Say" sub="Brands we've built. Stories that speak for themselves." />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bp-reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <HoverCard style={{ padding: "32px", display: "flex", flexDirection: "column", gap: 20, height: "100%" }}>
                  <div style={{ display: "flex", gap: 4 }}>
                    {Array.from({ length: t.stars }).map((_, j) => <Star key={j} size={14} style={{ color: C.gold, fill: C.gold }} />)}
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.8, flex: 1, margin: 0 }}>"{t.text}"</p>
                  <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 20 }}>
                    <div style={{ fontWeight: 700, color: "#fff", fontSize: 15 }}>{t.name}</div>
                    <div style={{ color: "rgba(212,175,55,0.65)", fontSize: 12, marginTop: 4 }}>{t.role}</div>
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
          <div className="bp-reveal">
            <SectionHead badge="Common Questions" title="Frequently Asked" goldWord="Questions" sub="Everything you need to know before we start building your brand equity." />
          </div>
          {FAQS.map((faq, i) => <FaqItem key={i} faq={faq} />)}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ background: C.bg2, borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: "72px 0" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24, textAlign: "center" }}>
            {[
              { icon: Target, title: "Strategy Before Design", desc: "We never open a design tool until the brand strategy is locked. Aesthetics without strategy is decoration, not branding." },
              { icon: Clock, title: "Timely Delivery", desc: "Brand projects delivered on schedule with clear milestones — no scope creep, no mystery timelines." },
              { icon: Shield, title: "Brand Protection", desc: "Ongoing reputation monitoring and guidelines enforcement ensure your brand equity is never diluted." },
              { icon: Award, title: "Proven Brand Builders", desc: "A team with 10+ years of combined brand strategy experience across FMCG, tech, real estate, and retail." },
            ].map((w, i) => (
              <div key={i} className="bp-reveal" style={{ transitionDelay: `${i * 70}ms`, display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "24px 16px" }}>
                <div style={iconBox(48)}><w.icon size={22} /></div>
                <h4 style={{ fontSize: 17, fontWeight: 800, color: "#fff", margin: 0 }}>{w.title}</h4>
                <p style={{ color: C.muted, fontSize: 13, lineHeight: 1.7, margin: 0 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.35), transparent)" }} />
        <div style={{ ...wrap, textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="bp-reveal">
            <Award style={{ color: C.gold, margin: "0 auto 24px", display: "block" }} size={52} />
            <h2 style={{ fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 900, color: "#fff", margin: "0 0 24px", lineHeight: 1.1 }}>
              Ready to lead your{" "}
              <span style={{ color: C.gold, textShadow: "0 0 30px rgba(212,175,55,0.35)" }}>category?</span>
            </h2>
            <p style={{ fontSize: 17, color: C.muted, margin: "0 auto 48px", maxWidth: 560, lineHeight: 1.8 }}>
              Generic is the enemy of growth. Let's craft a brand identity that commands respect, drives premium pricing, and builds the kind of long-term equity that compounds every single year.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
              <Link to="/contact" className="bp-cta-main" style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "16px 40px", background: C.gold, color: "#000", fontWeight: 800, borderRadius: 16, textDecoration: "none", fontSize: 16, transition: "all 0.35s", letterSpacing: "0.03em" }}>
                Build Your Brand <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="bp-cta-ghost" style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "16px 40px", ...glass, color: C.muted, textDecoration: "none", fontSize: 16, fontWeight: 600, transition: "all 0.35s" }}>
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}