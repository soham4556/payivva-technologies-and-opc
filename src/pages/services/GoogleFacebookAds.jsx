import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Megaphone, Target, TrendingUp, BarChart4, MousePointerClick,
  Layers, Sparkles, ArrowLeft, ArrowRight, Calculator,
  Star, ChevronDown, Zap, Shield, Clock, Award,
  Eye, FileText, RefreshCw, DollarSign, PieChart, Settings,
} from "lucide-react";

/* ─── TOKENS ─── */
const C = {
  bg: "#0f172a", bg2: "#0f172a",
  gold: "#10b981", goldLight: "#22d3ee", goldDim: "rgba(16,185,129,0.12)",
  goldBorder: "rgba(16,185,129,0.18)", goldBorder2: "rgba(16,185,129,0.38)",
  text: "rgba(255,255,255,0.88)", muted: "rgba(255,255,255,0.45)",
  border: "rgba(255,255,255,0.06)",
};
const glass = { background: "rgba(255,255,255,0.03)", border: `1px solid ${C.goldBorder}`, backdropFilter: "blur(12px)", borderRadius: 20 };
const tag = { display: "inline-block", padding: "5px 16px", borderRadius: 100, fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", background: C.goldDim, border: `1px solid ${C.goldBorder2}`, color: C.gold, marginBottom: 16 };
const iconBox = (size = 48) => ({ width: size, height: size, borderRadius: 14, flexShrink: 0, background: C.goldDim, border: `1px solid ${C.goldBorder2}`, display: "flex", alignItems: "center", justifyContent: "center", color: C.gold });

/* ─── DATA ─── */
const CAPABILITIES = [
  { icon: Target, title: "Precision Targeting", desc: "Finding your exact audience based on real-time behaviours, purchase intent, life events, and demographics — so every rupee reaches someone genuinely likely to convert." },
  { icon: Calculator, title: "ROI Mastery", desc: "Every rupee tracked. We focus on the metrics that move your bottom line — CPA, ROAS, CAC, and revenue. Vanity metrics don't pay salaries; conversions do." },
  { icon: MousePointerClick, title: "High-Intent Search", desc: "Capturing customers at the exact moment they're searching for your service on Google Search, Shopping, and Maps — when purchase intent is at its peak." },
  { icon: Layers, title: "Retargeting Funnels", desc: "Strategically timed ads that bring previous visitors back through a conversion funnel — warming cold audiences and recovering abandoned carts with precision." },
  { icon: Sparkles, title: "Creative A/B Testing", desc: "Continuous testing of headlines, visuals, hooks, and CTAs to identify winning combinations — and scaling only what the data proves converts best." },
  { icon: BarChart4, title: "Daily Optimisation", desc: "Our specialists monitor your campaigns every single day — adjusting bids, pausing underperformers, and reallocating budget to maximise every rupee in real time." },
];

const PROCESS = [
  { step: "01", title: "Account Audit & Strategy", desc: "We audit your existing ad accounts (or build from scratch), analyse your competitors' ad strategies, define your ideal customer profiles, and map out a full-funnel campaign architecture before spending a single rupee.", tags: ["Account Audit", "Competitor Ad Spy", "Audience Mapping", "Funnel Architecture"] },
  { step: "02", title: "Campaign Build & Creative", desc: "We set up your campaigns — Search, Display, Shopping, Reels Ads, or Lead Ads — with precise targeting, compelling ad creative, and conversion-optimised landing page recommendations.", tags: ["Campaign Setup", "Ad Copywriting", "Creative Design", "Landing Page CRO"] },
  { step: "03", title: "Launch & Baseline Collection", desc: "We launch with controlled budgets to collect initial performance data, establish baselines, and identify which ad sets, audiences, and creatives show the strongest early signals.", tags: ["Controlled Launch", "Baseline CTR", "Audience Testing", "Creative Testing"] },
  { step: "04", title: "Optimise & Scale", desc: "Once winning combinations are identified, we scale budgets intelligently — increasing spend on proven performers, killing poor performers, and iterating creatives to prevent ad fatigue.", tags: ["Budget Scaling", "Bid Optimisation", "Ad Refresh", "Lookalike Audiences"] },
  { step: "05", title: "Monthly Reporting & Strategy Review", desc: "Every month you receive a detailed performance report covering spend, impressions, clicks, conversions, ROAS, and strategic recommendations for the next cycle.", tags: ["Monthly Report", "ROAS Analysis", "Next-Month Strategy", "Budget Planning"] },
];

const STATS = [
  { value: "4.8×", label: "Average ROAS" },
  { value: "62%", label: "Lower Cost Per Lead" },
  { value: "₹50Cr+", label: "Ad Spend Managed" },
  { value: "300+", label: "Campaigns Launched" },
];

const INCLUDED = [
  { icon: Settings, title: "Full Account Setup & Structure", desc: "Campaign architecture, ad group strategy, keyword research, and conversion tracking installed from day one." },
  { icon: Target, title: "Audience Research & Segmentation", desc: "Detailed custom audience builds, lookalike audiences, and intent-based targeting layers for maximum relevance." },
  { icon: Eye, title: "Ad Creative & Copywriting", desc: "High-converting ad copy, headlines, descriptions, and visual creative produced entirely by our in-house team." },
  { icon: MousePointerClick, title: "Conversion Tracking Setup", desc: "Google Tag Manager, Meta Pixel, and conversion event configuration so every action is accurately attributed." },
  { icon: RefreshCw, title: "Weekly Optimisation Cycles", desc: "Bid adjustments, negative keyword additions, audience exclusions, and A/B test launches — every single week." },
  { icon: Layers, title: "Retargeting Campaign Build", desc: "Multi-stage retargeting sequences that re-engage website visitors, video viewers, and cart abandoners." },
  { icon: PieChart, title: "Custom Performance Dashboard", desc: "A live dashboard you can access anytime showing spend, ROAS, leads, cost per conversion, and trend data." },
  { icon: FileText, title: "Monthly Strategy Report", desc: "A detailed written report covering wins, areas for improvement, budget recommendations, and next-month plan." },
];

const AD_PLATFORMS = [
  { name: "Google Search Ads", desc: "High-intent keyword targeting, exact & phrase match, shopping campaigns, and Local Services Ads." },
  { name: "Google Display & YouTube", desc: "Brand awareness, retargeting, video pre-roll, and responsive display ads across the Google network." },
  { name: "Meta (Facebook & Instagram)", desc: "Lead generation, conversion campaigns, Reels Ads, catalogue ads, and audience-based retargeting." },
  { name: "LinkedIn Ads", desc: "B2B lead generation through Sponsored Content, InMail campaigns, and company follower ads." },
];

const SCALE_POINTS = [
  "Omnichannel Strategy", "AI-Driven Bidding",
  "Real-Time Attribution", "Custom Dashboarding",
];

const ROAS_BARS = [
  { label: "Search Campaigns", value: 78 },
  { label: "Retargeting Ads", value: 95 },
  { label: "Display Network", value: 52 },
  { label: "Meta Lead Ads", value: 88 },
];

const TESTIMONIALS = [
  { name: "Deepak Sharma", role: "Founder, HomeFix Services", text: "We were spending ₹80,000/month on ads with zero clarity on results. They restructured everything — within 60 days our lead volume tripled and our cost per lead dropped by 58%. Remarkable.", stars: 5 },
  { name: "Pooja Mehta", role: "Director, Elara Jewellery", text: "Our Meta ads were barely breaking even. They redesigned our entire funnel with new creative and retargeting sequences. ROAS went from 1.8× to 5.4× in under 90 days. Absolutely exceptional.", stars: 5 },
  { name: "Sameer Gupta", role: "CEO, EduPro Institute", text: "Google Ads always felt like a black box to us. Their team demystified everything, built a proper structure, and now we get 120+ quality leads per month at a fraction of our old cost.", stars: 5 },
];

const FAQS = [
  { q: "What's the minimum ad budget you recommend?", a: "For Google Ads, we recommend a minimum of ₹30,000/month to generate statistically significant data. For Meta Ads, ₹20,000/month is a workable starting point. Budgets below these thresholds limit optimisation speed significantly." },
  { q: "How long before we see results from paid ads?", a: "Unlike SEO, paid ads can show results from day one. However, meaningful optimisation data typically emerges after 30–45 days. Most clients see strong, consistent ROAS by month 2–3 once we've identified winning audiences and creatives." },
  { q: "Do you manage both Google and Meta ads together?", a: "Yes. We offer combined management and recommend running both for a full-funnel approach — Google captures high-intent search traffic while Meta builds awareness and retargets across the purchase journey." },
  { q: "Who owns the ad accounts — us or you?", a: "You always own your ad accounts. We work inside your accounts as managers. If you ever part ways with us, you keep full ownership of all campaigns, audiences, and historical data — no lock-in whatsoever." },
  { q: "How do you prevent ad spend wastage?", a: "Through a combination of tight audience segmentation, negative keyword lists, frequency caps, placement exclusions, and weekly optimisation cycles — we systematically eliminate wasted spend from every campaign." },
  { q: "Do you create the ad visuals and copy?", a: "Yes. Our in-house designers and copywriters produce all ad creative. We handle everything from static images and carousel ads to short video scripts and Reels ad production." },
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
      style={{ ...glass, borderColor: hov ? C.goldBorder2 : C.goldBorder, boxShadow: hov ? "0 0 40px rgba(16,185,129,0.07)" : "none", transition: "border-color 0.35s, box-shadow 0.35s", ...style }}>
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
export default function GoogleFacebookAds() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
      .gfa-root * { box-sizing: border-box; }
      .gfa-root { font-family: 'Outfit', sans-serif !important; }
      .gfa-reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1); }
      .gfa-reveal.visible { opacity: 1; transform: translateY(0); }
      .gfa-marquee { display: flex; animation: gfa-scroll 32s linear infinite; width: max-content; }
      .gfa-marquee:hover { animation-play-state: paused; }
      @keyframes gfa-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      .gfa-cta-main:hover { background: #22d3ee !important; transform: scale(1.04) translateY(-2px) !important; box-shadow: 0 20px 50px rgba(16,185,129,0.45) !important; }
      .gfa-cta-ghost:hover { border-color: rgba(16,185,129,0.4) !important; color: #fff !important; }
      .gfa-back:hover { color: #10b981 !important; }
      .gfa-platform:hover { border-color: rgba(16,185,129,0.45) !important; background: rgba(16,185,129,0.06) !important; transform: translateY(-4px); }
      .gfa-bar-fill { transition: width 1.4s cubic-bezier(0.16,1,0.3,1); }
    `;
    document.head.appendChild(style);
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".gfa-reveal").forEach((el) => obs.observe(el));
    return () => { obs.disconnect(); document.head.removeChild(style); };
  }, []);

  const wrap = { maxWidth: 1200, margin: "0 auto", padding: "0 28px" };

  return (
    <div ref={sectionRef} className="gfa-root" style={{ background: C.bg, minHeight: "100vh", color: C.text }}>
      <Helmet>
        <title>Paid Advertising | High ROAS Meta & Google Ads | PAYIVVA Technologies</title>
        <meta
          name="description"
          content="Stop guessing, start growing. We manage your ad spend with surgical precision, delivering high-quality leads and measurable ROI."
        />
      </Helmet>
      {/* ── HERO ── */}
      <section style={{ position: "relative", paddingTop: 128, paddingBottom: 96, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(16,185,129,0.06), transparent)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 40, right: -60, width: 520, height: 520, background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 68%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: -80, width: 400, height: 400, background: "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={wrap}>
          <Link to="/services" className="gfa-back" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(16,185,129,0.6)", textDecoration: "none", marginBottom: 48, fontSize: 14, fontWeight: 500, transition: "color 0.2s" }}>
            <ArrowLeft size={15} /> Back to Services
          </Link>
          <div className="gfa-reveal">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={iconBox(48)}><Megaphone size={22} /></div>
              <span style={{ color: C.gold, fontWeight: 700, letterSpacing: "0.22em", fontSize: 11, textTransform: "uppercase" }}>Service Detail</span>
            </div>
            <h1 style={{ fontSize: "clamp(2.8rem,7vw,5.5rem)", fontWeight: 900, lineHeight: 1.05, margin: "0 0 24px", letterSpacing: "-0.02em" }}>
              Paid <span style={{ color: C.gold, textShadow: "0 0 30px rgba(16,185,129,0.3)" }}>Advertising</span>
            </h1>
            <p style={{ fontSize: 18, color: C.muted, maxWidth: 640, lineHeight: 1.8, margin: "0 0 36px" }}>
              Stop guessing. Start growing. We manage your Google and Facebook ad spend with surgical precision — delivering high-quality leads, measurable ROAS, and a scaling engine that compounds over time.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link to="/contact" className="gfa-cta-main" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 32px", background: C.gold, color: "#0f172a", fontWeight: 800, borderRadius: 14, textDecoration: "none", fontSize: 15, transition: "all 0.3s", letterSpacing: "0.02em" }}>
                Start Scaling Today <ArrowRight size={18} />
              </Link>
              <a href="#process" className="gfa-cta-ghost" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 32px", ...glass, color: C.muted, textDecoration: "none", fontSize: 15, fontWeight: 600, transition: "all 0.3s" }}>
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
              <div key={i} className="gfa-reveal" style={{ transitionDelay: `${i * 80}ms`, ...glass, padding: "28px 20px" }}>
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
          <div className="gfa-reveal">
            <SectionHead badge="What We Do" title="Core" goldWord="Capabilities" sub="Six pillars that turn your ad budget into a predictable, scalable growth engine." />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {CAPABILITIES.map((cap, i) => (
              <div key={i} className="gfa-reveal" style={{ transitionDelay: `${i * 70}ms` }}>
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
      <div style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, background: "#0f172a", padding: "18px 0", overflow: "hidden" }}>
        <div className="gfa-marquee">
          {[...["Google Search Ads", "Meta Lead Ads", "Retargeting Funnels", "A/B Testing", "ROAS Optimisation", "Lookalike Audiences", "Conversion Tracking", "Shopping Campaigns", "YouTube Ads", "LinkedIn Ads", "Dynamic Ads", "Budget Scaling"],
            ...["Google Search Ads", "Meta Lead Ads", "Retargeting Funnels", "A/B Testing", "ROAS Optimisation", "Lookalike Audiences", "Conversion Tracking", "Shopping Campaigns", "YouTube Ads", "LinkedIn Ads", "Dynamic Ads", "Budget Scaling"]
          ].map((t, i) => (
            <span key={i} style={{ padding: "0 36px", fontSize: 28, fontWeight: 900, fontStyle: "italic", textTransform: "uppercase", color: "rgba(255,255,255,0.1)", whiteSpace: "nowrap", letterSpacing: "0.04em" }}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── SCALE AT VELOCITY (original feature block, enhanced) ── */}
      <section style={{ padding: "96px 0" }}>
        <div style={wrap}>
          <div className="gfa-reveal">
            <div style={{ ...glass, borderRadius: 32, padding: "60px 56px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 65%)", borderRadius: "50%", pointerEvents: "none" }} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 1 }}>
                {/* Left */}
                <div>
                  <span style={tag}>Why Paid Ads Work</span>
                  <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 900, color: "#fff", margin: "0 0 16px", lineHeight: 1.15 }}>
                    Scale at <span style={{ color: C.gold }}>Velocity</span>
                  </h2>
                  <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.8, margin: "0 0 28px" }}>
                    Paid media is the fastest path to growth — but only when executed with a data-first mindset. We don't "run ads." We build precise scaling engines that generate compounding returns.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {SCALE_POINTS.map((pt, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.gold, boxShadow: `0 0 8px ${C.gold}`, flexShrink: 0 }} />
                        <span style={{ fontSize: 15, fontWeight: 600, color: C.text }}>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Right — ROAS visual */}
                <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 20, padding: "32px", border: `1px solid ${C.border}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28 }}>
                    <span style={{ fontSize: 13, color: C.muted, fontWeight: 500 }}>Average ROAS</span>
                    <span style={{ fontSize: 36, fontWeight: 900, color: C.gold, lineHeight: 1 }}>4.8×</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {ROAS_BARS.map((bar, i) => (
                      <div key={i}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                          <span style={{ fontSize: 12, color: C.muted, fontWeight: 500 }}>{bar.label}</span>
                          <span style={{ fontSize: 12, color: C.gold, fontWeight: 700 }}>{bar.value}%</span>
                        </div>
                        <div style={{ height: 7, background: "rgba(255,255,255,0.06)", borderRadius: 100, overflow: "hidden" }}>
                          <div className="gfa-bar-fill" style={{ height: "100%", width: `${bar.value}%`, background: `linear-gradient(90deg, ${C.gold}, ${C.goldLight})`, borderRadius: 100 }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AD PLATFORMS ── */}
      <section style={{ background: C.bg2, padding: "96px 0" }}>
        <div style={wrap}>
          <div className="gfa-reveal">
            <SectionHead badge="Where We Advertise" title="Ad Platforms We" goldWord="Master" sub="Every platform demands a different strategy. We build native campaigns for each one." />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {AD_PLATFORMS.map((p, i) => (
              <div key={i} className="gfa-reveal gfa-platform" style={{ transitionDelay: `${i * 70}ms`, ...glass, padding: "28px 24px", cursor: "default", transition: "border-color 0.3s, background 0.3s, transform 0.3s" }}>
                <div style={{ fontSize: 17, fontWeight: 800, color: "#fff", marginBottom: 8 }}>{p.name}</div>
                <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.65 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section style={{ padding: "96px 0" }}>
        <div style={wrap}>
          <div className="gfa-reveal">
            <SectionHead badge="Deliverables" title="What's" goldWord="Included" sub="Every ads management engagement comes with a full suite of deliverables — transparent, comprehensive, results-focused." />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 16 }}>
            {INCLUDED.map((item, i) => (
              <div key={i} className="gfa-reveal" style={{ transitionDelay: `${i * 55}ms` }}>
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
      <section id="process" style={{ background: C.bg2, padding: "96px 0" }}>
        <div style={wrap}>
          <div className="gfa-reveal">
            <SectionHead badge="How We Work" title="Our" goldWord="Process" sub="A proven 5-step paid advertising methodology — from zero to scaling in under 45 days." />
          </div>
          <div>
            {PROCESS.map((item, i) => (
              <div key={i} className="gfa-reveal" style={{ transitionDelay: `${i * 80}ms`, display: "flex", gap: 28, alignItems: "flex-start", paddingBottom: i < PROCESS.length - 1 ? 48 : 0, borderBottom: i < PROCESS.length - 1 ? `1px solid ${C.border}` : "none", marginBottom: i < PROCESS.length - 1 ? 48 : 0 }}>
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
      <section style={{ padding: "96px 0" }}>
        <div style={wrap}>
          <div className="gfa-reveal">
            <SectionHead badge="Client Results" title="What Clients" goldWord="Say" sub="Real budgets. Real campaigns. Real ROAS that changed how these businesses scale." />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="gfa-reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <HoverCard style={{ padding: "32px", display: "flex", flexDirection: "column", gap: 20, height: "100%" }}>
                  <div style={{ display: "flex", gap: 4 }}>
                    {Array.from({ length: t.stars }).map((_, j) => <Star key={j} size={14} style={{ color: C.gold, fill: C.gold }} />)}
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.8, flex: 1, margin: 0 }}>"{t.text}"</p>
                  <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 20 }}>
                    <div style={{ fontWeight: 700, color: "#fff", fontSize: 15 }}>{t.name}</div>
                    <div style={{ color: "rgba(16,185,129,0.65)", fontSize: 12, marginTop: 4 }}>{t.role}</div>
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
          <div className="gfa-reveal">
            <SectionHead badge="Common Questions" title="Frequently Asked" goldWord="Questions" sub="Everything you need to know before we take over your ad accounts." />
          </div>
          {FAQS.map((faq, i) => <FaqItem key={i} faq={faq} />)}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, padding: "72px 0" }}>
        <div style={wrap}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24, textAlign: "center" }}>
            {[
              { icon: DollarSign, title: "You Own the Accounts", desc: "All ad accounts stay 100% yours. Full transparency, no lock-in, no hidden ownership structures." },
              { icon: Clock, title: "Daily Campaign Watch", desc: "Our specialists review your campaigns every day — not weekly, not monthly. Daily bid and budget management." },
              { icon: Shield, title: "Zero Wasted Spend", desc: "Aggressive negative keyword lists, audience exclusions, and placement controls to eliminate budget leakage." },
              { icon: Award, title: "Certified Specialists", desc: "Google Ads and Meta Blueprint certified team managing your accounts — not junior staff, not outsourced." },
            ].map((w, i) => (
              <div key={i} className="gfa-reveal" style={{ transitionDelay: `${i * 70}ms`, display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "24px 16px" }}>
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
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(16,185,129,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.35), transparent)" }} />
        <div style={{ ...wrap, textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="gfa-reveal">
            <TrendingUp style={{ color: C.gold, margin: "0 auto 24px", display: "block" }} size={52} />
            <h2 style={{ fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 900, color: "#fff", margin: "0 0 24px", lineHeight: 1.1 }}>
              Turn your ad spend into{" "}
              <span style={{ color: C.gold, textShadow: "0 0 30px rgba(16,185,129,0.35)" }}>revenue.</span>
            </h2>
            <p style={{ fontSize: 17, color: C.muted, margin: "0 auto 48px", maxWidth: 560, lineHeight: 1.8 }}>
              Most businesses waste 40% of their ad budget on poor targeting. We eliminate the noise — and build a campaign system that generates predictable, scalable returns month after month.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
              <Link to="/contact" className="gfa-cta-main" style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "16px 40px", background: C.gold, color: "#0f172a", fontWeight: 800, borderRadius: 16, textDecoration: "none", fontSize: 16, transition: "all 0.35s", letterSpacing: "0.03em" }}>
                Start Scaling Today <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="gfa-cta-ghost" style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "16px 40px", ...glass, color: C.muted, textDecoration: "none", fontSize: 16, fontWeight: 600, transition: "all 0.35s" }}>
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}