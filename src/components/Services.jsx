import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Search,
  Share2,
  Megaphone,
  Star,
  Users,
  ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: Globe,
    number: "01",
    title: "Website Development",
    slug: "web-development",
    tagline: "Digital Experiences That Convert",
    description:
      "Blazing-fast, visually stunning websites engineered for impact. From landing pages to full-stack platforms — every pixel purposeful.",
    features: ["Custom Design", "Mobile-First", "SEO-Ready", "CMS Integration"],
    stat: "150+",
    statLabel: "Sites Launched",
  },
  {
    icon: Search,
    number: "02",
    title: "SEO Optimization",
    slug: "seo-optimization",
    tagline: "Rank Higher. Grow Faster.",
    description:
      "Data-driven SEO that dominates rankings. Technical precision, on-page mastery, and off-page authority — all working in harmony.",
    features: ["Keyword Research", "On-Page SEO", "Link Building", "Analytics"],
    stat: "3x",
    statLabel: "Avg. Traffic Lift",
  },
  {
    icon: Share2,
    number: "03",
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    tagline: "Build a Brand. Grow a Community.",
    description:
      "Powerful social presence across every platform. Content that engages, campaigns that convert, communities that last.",
    features: [
      "Content Strategy",
      "Community Mgmt",
      "Growth Hacking",
      "Monthly Reports",
    ],
    stat: "2M+",
    statLabel: "Reach Generated",
  },
  {
    icon: Megaphone,
    number: "04",
    title: "Google & Facebook Ads",
    slug: "google-facebook-ads",
    tagline: "Every Rupee. Maximum Return.",
    description:
      "Precision-targeted paid campaigns that fill your pipeline. We manage your spend to deliver qualified leads and measurable ROI.",
    features: [
      "Campaign Setup",
      "A/B Testing",
      "Retargeting",
      "Conversion Tracking",
    ],
    stat: "4.8x",
    statLabel: "Average ROAS",
  },
  {
    icon: Star,
    number: "05",
    title: "Brand Promotion",
    slug: "brand-promotion",
    tagline: "Iconic Brands Are Built Here.",
    description:
      "Comprehensive strategies that make you unforgettable. Identity, PR, influencer marketing — amplified across every channel.",
    features: [
      "Brand Identity",
      "PR Campaigns",
      "Influencer Mktg",
      "Reputation Mgmt",
    ],
    stat: "98%",
    statLabel: "Client Retention",
  },
  {
    icon: Users,
    number: "06",
    title: "Lead Generation",
    slug: "lead-generation",
    tagline: "Your Pipeline. Always Full.",
    description:
      "High-quality leads delivered at scale. AI-driven targeting and multi-channel funnels connect you with your ideal customers.",
    features: [
      "Funnel Strategy",
      "CRM Integration",
      "Email Campaigns",
      "Performance Reports",
    ],
    stat: "10k+",
    statLabel: "Leads Delivered",
  },
];

function Particles() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);
    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.4 + 0.3,
      a: Math.random() * 0.7 + 0.1,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,175,55,${p.a * 0.35})`;
        ctx.fill();
      });
      pts.forEach((a, i) =>
        pts.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(212,175,55,${(1 - d / 120) * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }),
      );
      raf = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

function AnimatedStat({ value }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        const num = parseFloat(value.replace(/[^0-9.]/g, ""));
        const suffix = value.replace(/[0-9.]/g, "");
        const dur = 1400;
        const t0 = performance.now();
        const step = (t) => {
          const p = Math.min((t - t0) / dur, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setDisplay((num * ease).toFixed(num % 1 !== 0 ? 1 : 0) + suffix);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.disconnect();
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);
  return <span ref={ref}>{display}</span>;
}

function ServiceCard({ s, index }) {
  const cardRef = useRef(null);
  const Icon = s.icon;

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x * 11}deg) rotateX(${-y * 11}deg) translateZ(8px)`;
      el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
      el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
    };
    const handleLeave = () => {
      el.style.transform =
        "perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
    };
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="sc-wrap reveal" style={{ "--delay": `${index * 100}ms` }}>
      <div ref={cardRef} className="sc">
        <div className="sc-shimmer" />
        <div className="sc-glow" />
        <div className="sc-fold" />

        <div className="sc-top">
          <span className="sc-num">{s.number}</span>
          <div className="sc-icon-ring">
            <Icon size={19} />
          </div>
        </div>

        <p className="sc-tagline">{s.tagline}</p>
        <h3 className="sc-title">{s.title}</h3>
        <div className="sc-divider" />
        <p className="sc-desc">{s.description}</p>

        <div className="sc-chips">
          {s.features.map((f, i) => (
            <span key={i} className="sc-chip">
              {f}
            </span>
          ))}
        </div>

        <div className="sc-foot">
          <div className="sc-stat">
            <span className="sc-statnum">
              <AnimatedStat value={s.stat} />
            </span>
            <span className="sc-statlabel">{s.statLabel}</span>
          </div>
          <Link className="sc-btn" to={`/services/${s.slug}`}>
            <span>Explore</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}

const MARQUEE_ITEMS = [
  "Web Development",
  "SEO Mastery",
  "Social Media",
  "Paid Ads",
  "Brand Strategy",
  "Lead Generation",
  "Digital Growth",
  "ROI Focus",
  "Creative Vision",
  "Data-Driven",
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible"),
        ),
      { threshold: 0.1 },
    );
    sectionRef.current
      ?.querySelectorAll(".reveal")
      .forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Outfit:wght@300;400;500;600;700&display=swap');

        :root {
          --g:#D4AF37; --g2:#F0D060; --g3:#B8962A;
          --ink:#080808; --ink2:#0f0f0f; --ink3:#161616;
          --text:rgba(255,255,255,0.88); --sub:rgba(255,255,255,0.4);
          --border:rgba(212,175,55,0.15);
        }

        /* SECTION */
        .svc-section {
          font-family:'Outfit',sans-serif;
          background:var(--ink);
          position:relative; padding:80px 0 100px; overflow:hidden;
        }
        @media(max-width:768px){
          .svc-section { padding:60px 0 80px; }
          .svc-h1 { font-size:clamp(2.2rem,8vw,3.5rem); }
          .svc-header { margin-bottom:50px; }
        }
        .svc-edge { position:absolute; left:0; right:0; height:1px;
          background:linear-gradient(90deg,transparent,rgba(212,175,55,0.5) 30%,rgba(212,175,55,0.7) 50%,rgba(212,175,55,0.5) 70%,transparent); }
        .svc-edge-top { top:0; } .svc-edge-bot { bottom:0; }

        /* BG */
        .svc-mesh {
          position:absolute; inset:0; pointer-events:none; z-index:0;
          background:
            radial-gradient(ellipse 55% 50% at 85% 15%, rgba(212,175,55,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 50% 55% at 8% 80%, rgba(212,175,55,0.05) 0%, transparent 70%);
        }
        .svc-grid-bg {
          position:absolute; inset:0; pointer-events:none; z-index:0;
          background-image:
            linear-gradient(rgba(212,175,55,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.035) 1px, transparent 1px);
          background-size:72px 72px;
          mask-image:radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%);
        }

        /* WRAPPER */
        .svc-wrap { max-width:1220px; margin:0 auto; padding:0 28px; position:relative; z-index:2; }

        /* HEADER */
        .svc-header { text-align:center; margin-bottom:80px; }
        .svc-eyebrow {
          display:inline-flex; align-items:center; gap:10px;
          padding:7px 22px;
          border:1px solid var(--border);
          background:linear-gradient(135deg, rgba(212,175,55,0.1), rgba(212,175,55,0.02));
          border-radius:100px; color:var(--g);
          font-size:9.5px; font-weight:600; letter-spacing:0.26em; text-transform:uppercase;
          margin-bottom:28px; position:relative; overflow:hidden;
        }
        .svc-eyebrow-sweep {
          position:absolute; inset:0;
          background:linear-gradient(90deg, transparent, rgba(212,175,55,0.18), transparent);
          animation:sweep 3s infinite;
        }
        @keyframes sweep { 0%{transform:translateX(-100%)} 100%{transform:translateX(100%)} }
        .svc-eyebrow-dot {
          width:6px; height:6px; border-radius:50%;
          background:var(--g); box-shadow:0 0 10px var(--g), 0 0 20px rgba(212,175,55,0.5);
          animation:dot-pulse 2s ease-in-out infinite; flex-shrink:0;
        }
        @keyframes dot-pulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.5);opacity:0.6} }

        .svc-h1 {
          font-family:'Playfair Display',Georgia,serif;
          font-size:clamp(2.8rem,6vw,5rem); font-weight:900;
          color:#fff; line-height:1.06; margin-bottom:22px; letter-spacing:-0.025em;
        }
        .svc-h1 .gold-italic {
          font-style:italic;
          background:linear-gradient(135deg,#D4AF37 0%,#F0D060 45%,#B8962A 75%,#D4AF37 100%);
          background-size:200% 200%;
          background-clip:text; -webkit-background-clip:text; color:transparent;
          animation:gold-anim 4s ease infinite;
        }
        @keyframes gold-anim { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }

        .svc-sub { color:var(--sub); font-size:1rem; font-weight:300; line-height:1.8; max-width:540px; margin:0 auto; }

        .svc-rule {
          display:flex; align-items:center; justify-content:center; gap:14px; margin-top:30px;
        }
        .svc-rule-line { height:1px; width:70px; background:linear-gradient(90deg,transparent,rgba(212,175,55,0.4)); }
        .svc-rule-diamond {
          width:8px; height:8px; background:var(--g); transform:rotate(45deg);
          box-shadow:0 0 14px rgba(212,175,55,0.7), 0 0 28px rgba(212,175,55,0.3);
          animation:diamond-glow 2s ease-in-out infinite;
        }
        @keyframes diamond-glow { 0%,100%{box-shadow:0 0 14px rgba(212,175,55,0.7), 0 0 28px rgba(212,175,55,0.3)} 50%{box-shadow:0 0 20px rgba(212,175,55,1), 0 0 40px rgba(212,175,55,0.5)} }

        /* GRID */
        .svc-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }
        @media(max-width:960px){ .svc-grid{grid-template-columns:repeat(2,1fr);} }
        @media(max-width:580px){ .svc-grid{grid-template-columns:1fr;} }

        /* CARD WRAP */
        .sc-wrap { opacity:0; transform:translateY(40px) scale(0.97); }
        .sc-wrap.visible {
          animation:card-in 0.65s cubic-bezier(0.16,1,0.3,1) forwards;
          animation-delay:var(--delay,0ms);
        }
        @keyframes card-in { to{opacity:1;transform:translateY(0) scale(1);} }

        /* CARD */
        .sc {
          background:linear-gradient(150deg,#131313 0%,#0d0d0d 100%);
          border:1px solid rgba(212,175,55,0.13);
          border-radius:22px; padding:32px 28px 28px;
          height:100%; display:flex; flex-direction:column;
          position:relative; overflow:hidden;
          cursor:default;
          transition:border-color 0.4s, box-shadow 0.4s;
          transform-style:preserve-3d; will-change:transform;
          --mx:50%; --my:50%;
        }
        .sc:hover {
          border-color:rgba(212,175,55,0.5);
          box-shadow:0 0 0 1px rgba(212,175,55,0.08), 0 24px 64px rgba(0,0,0,0.65), 0 0 50px rgba(212,175,55,0.1);
        }

        .sc-shimmer {
          position:absolute; inset:0; border-radius:22px;
          background:radial-gradient(circle at var(--mx) var(--my), rgba(212,175,55,0.11) 0%, transparent 55%);
          opacity:0; transition:opacity 0.3s; pointer-events:none; z-index:0;
        }
        .sc:hover .sc-shimmer { opacity:1; }

        .sc-glow {
          position:absolute; bottom:-55px; right:-55px;
          width:170px; height:170px; border-radius:50%;
          background:radial-gradient(circle,rgba(212,175,55,0.2) 0%,transparent 70%);
          opacity:0; transition:opacity 0.5s; pointer-events:none;
        }
        .sc:hover .sc-glow { opacity:1; }

        .sc-fold {
          position:absolute; top:0; right:0; width:0; height:0;
          border-style:solid; border-width:0 38px 38px 0;
          border-color:transparent rgba(212,175,55,0.08) transparent transparent;
          transition:border-color 0.35s;
        }
        .sc:hover .sc-fold { border-color:transparent rgba(212,175,55,0.5) transparent transparent; }

        /* card contents */
        .sc-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:20px; position:relative; z-index:1; }
        .sc-num {
          font-family:'Playfair Display',serif; font-style:italic;
          font-size:0.75rem; color:rgba(212,175,55,0.3); letter-spacing:0.1em;
          transition:color 0.3s;
        }
        .sc:hover .sc-num { color:var(--g); }

        .sc-icon-ring {
          width:46px; height:46px; border-radius:14px;
          background:linear-gradient(135deg,rgba(212,175,55,0.14),rgba(212,175,55,0.04));
          border:1px solid rgba(212,175,55,0.18);
          display:flex; align-items:center; justify-content:center; color:var(--g);
          transition:all 0.4s cubic-bezier(0.34,1.56,0.64,1);
          position:relative; overflow:hidden;
        }
        .sc-icon-ring::after {
          content:''; position:absolute; inset:0;
          background:linear-gradient(135deg,rgba(255,255,255,0.15),transparent);
          opacity:0; transition:opacity 0.3s;
        }
        .sc:hover .sc-icon-ring {
          background:linear-gradient(135deg,#D4AF37,#B8962A);
          color:#000; border-color:transparent;
          transform:rotate(-10deg) scale(1.15);
          box-shadow:0 8px 28px rgba(212,175,55,0.45);
        }
        .sc:hover .sc-icon-ring::after { opacity:1; }

        .sc-tagline {
          font-size:0.7rem; font-weight:600; letter-spacing:0.12em; text-transform:uppercase;
          color:rgba(212,175,55,0.5); margin-bottom:7px; position:relative; z-index:1;
          transition:color 0.3s;
        }
        .sc:hover .sc-tagline { color:var(--g); }

        .sc-title {
          font-family:'Playfair Display',serif;
          font-size:1.55rem; font-weight:700;
          color:#fff; margin-bottom:14px; line-height:1.2;
          position:relative; z-index:1; transition:color 0.3s;
        }
        .sc:hover .sc-title { color:var(--g2); }

        .sc-divider {
          height:1px; margin-bottom:14px;
          background:linear-gradient(90deg,rgba(212,175,55,0.28),transparent);
          position:relative; z-index:1; transition:background 0.4s;
        }
        .sc:hover .sc-divider { background:linear-gradient(90deg,var(--g),rgba(212,175,55,0.15),transparent); }

        .sc-desc {
          font-size:0.84rem; line-height:1.8; color:var(--sub);
          font-weight:300; margin-bottom:20px; flex:1; position:relative; z-index:1;
        }

        .sc-chips { display:flex; flex-wrap:wrap; gap:7px; margin-bottom:24px; position:relative; z-index:1; }
        .sc-chip {
          padding:4px 12px; font-size:0.68rem; font-weight:500;
          color:rgba(212,175,55,0.5); border:1px solid rgba(212,175,55,0.11);
          border-radius:5px; background:rgba(212,175,55,0.04);
          letter-spacing:0.04em; transition:all 0.25s;
        }
        .sc:hover .sc-chip { color:var(--g); border-color:rgba(212,175,55,0.3); background:rgba(212,175,55,0.1); }

        .sc-foot {
          display:flex; align-items:center; justify-content:space-between;
          padding-top:18px; border-top:1px solid rgba(212,175,55,0.1);
          position:relative; z-index:1;
        }
        .sc-stat { display:flex; flex-direction:column; }
        .sc-statnum {
          font-family:'Playfair Display',serif; font-size:2rem; font-weight:900;
          background:linear-gradient(135deg,#D4AF37,#F0D060);
          background-clip:text; -webkit-background-clip:text; color:transparent; line-height:1;
        }
        .sc-statlabel { font-size:0.62rem; font-weight:500; color:var(--sub); text-transform:uppercase; letter-spacing:0.1em; margin-top:3px; }

        .sc-btn {
          display:inline-flex; align-items:center; gap:6px;
          padding:9px 18px;
          background:transparent; border:1px solid rgba(212,175,55,0.22);
          border-radius:9px; color:rgba(212,175,55,0.65);
          font-size:0.76rem; font-weight:500; cursor:pointer;
          font-family:'Outfit',sans-serif;
          transition:all 0.35s cubic-bezier(0.34,1.56,0.64,1);
          position:relative; overflow:hidden;
        }
        .sc-btn::before {
          content:''; position:absolute; inset:0;
          background:linear-gradient(135deg,#D4AF37,#B8962A);
          opacity:0; transition:opacity 0.3s;
        }
        .sc-btn:hover { color:#000; border-color:transparent; transform:translateY(-3px) scale(1.05); box-shadow:0 10px 30px rgba(212,175,55,0.4); }
        .sc-btn:hover::before { opacity:1; }
        .sc-btn span, .sc-btn svg { position:relative; z-index:1; }

        /* MARQUEE */
        .svc-marquee-wrap {
          overflow:hidden; margin:58px 0;
          border-top:1px solid rgba(212,175,55,0.1);
          border-bottom:1px solid rgba(212,175,55,0.1);
          padding:15px 0;
          background:linear-gradient(90deg,transparent,rgba(212,175,55,0.025),transparent);
          position:relative; z-index:2;
        }
        .svc-marquee { display:flex; animation:marquee 30s linear infinite; width:max-content; }
        .svc-marquee:hover { animation-play-state:paused; }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .svc-mq-item {
          display:inline-flex; align-items:center; gap:14px; padding:0 30px;
          font-size:0.72rem; font-weight:600; letter-spacing:0.2em; text-transform:uppercase;
          color:rgba(212,175,55,0.32); white-space:nowrap;
          transition:color 0.2s;
        }
        .svc-mq-item:hover { color:rgba(212,175,55,0.65); }
        .svc-mq-dot { width:4px; height:4px; border-radius:50%; background:rgba(212,175,55,0.35); }

        /* BOTTOM CTA */
        .svc-cta { text-align:center; margin-top:68px; position:relative; z-index:2; }
        .svc-cta-label {
          font-size:0.82rem; color:var(--sub); letter-spacing:0.08em; margin-bottom:24px;
          display:flex; align-items:center; justify-content:center; gap:16px;
        }
        .svc-cta-label::before,.svc-cta-label::after {
          content:''; flex:1; max-width:80px; height:1px;
          background:linear-gradient(90deg,transparent,rgba(212,175,55,0.35));
        }
        .svc-cta-label::after { transform:scaleX(-1); }

        .svc-main-btn {
          display:inline-flex; align-items:center; gap:14px;
          padding:18px 46px;
          font-family:'Outfit',sans-serif; font-weight:700; font-size:0.92rem;
          letter-spacing:0.06em; text-transform:uppercase;
          color:#000; border:none; cursor:pointer; border-radius:12px;
          background:linear-gradient(135deg,#D4AF37 0%,#F0D060 45%,#D4AF37 100%);
          background-size:200% 200%;
          animation:btn-shift 3.5s ease infinite;
          transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s;
          position:relative; overflow:hidden;
        }
        .svc-main-btn::before {
          content:''; position:absolute; inset:0;
          background:linear-gradient(135deg,rgba(255,255,255,0.22) 0%,transparent 55%);
          opacity:0; transition:opacity 0.3s;
        }
        .svc-main-btn:hover::before { opacity:1; }
        .svc-main-btn:hover { transform:translateY(-5px) scale(1.04); box-shadow:0 22px 55px rgba(212,175,55,0.52), 0 0 90px rgba(212,175,55,0.18); }
        @keyframes btn-shift { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }

        /* REVEAL */
        .reveal { opacity:0; transform:translateY(28px); transition:opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity:1; transform:none; }
        .reveal.visible.delay-1 { transition-delay:0.1s; }
        .reveal.visible.delay-2 { transition-delay:0.2s; }
      `}</style>

      <section
        id="services"
        ref={sectionRef}
        className="svc-section"
        aria-labelledby="svc-heading"
      >
        <div className="svc-edge svc-edge-top" />
        <div className="svc-mesh" />
        <div className="svc-grid-bg" />
        <Particles />

        <div className="svc-wrap">
          {/* HEADER */}
          <header className="svc-header reveal">
            <div className="svc-eyebrow">
              <span className="svc-eyebrow-sweep" />
              <span className="svc-eyebrow-dot" />
              What We Do
            </div>
            <h2 id="svc-heading" className="svc-h1">
              Services That Drive
              <br />
              <span className="gold-italic">Extraordinary Results</span>
            </h2>
            <p className="svc-sub">
              From bold strategy to flawless execution — end-to-end digital
              solutions engineered to accelerate your growth and dominate your
              market.
            </p>
            <div className="svc-rule">
              <div className="svc-rule-line" />
              <div className="svc-rule-diamond" />
              <div
                className="svc-rule-line"
                style={{ transform: "scaleX(-1)" }}
              />
            </div>
          </header>

          {/* CARDS */}
          <div className="svc-grid">
            {SERVICES.map((s, i) => (
              <ServiceCard key={i} s={s} index={i} />
            ))}
          </div>
        </div>

        {/* MARQUEE */}
        <div className="svc-marquee-wrap">
          <div className="svc-marquee">
            {[...Array(2)].map((_, k) =>
              MARQUEE_ITEMS.map((t, i) => (
                <span key={`${k}-${i}`} className="svc-mq-item">
                  {t}
                  <span className="svc-mq-dot" />
                </span>
              )),
            )}
          </div>
        </div>

        <div className="svc-wrap">
          {/* BOTTOM CTA */}
          <div className="svc-cta reveal">
            <p className="svc-cta-label">
              Ready to transform your digital presence?
            </p>
            <button
              className="svc-main-btn"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start Your Project
              <ArrowUpRight size={20} />
            </button>
          </div>
        </div>

        <div className="svc-edge svc-edge-bot" />
      </section>
    </>
  );
}
