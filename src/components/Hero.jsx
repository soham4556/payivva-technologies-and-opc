import { useEffect, useRef, useState } from "react";
import { ArrowRight, Play, ChevronDown } from "lucide-react";

/* ═══════════════════════════ DATA ═══════════════════════════ */
const stats = [
  { value: "500+", label: "Projects Delivered", icon: "◈" },
  { value: "98%", label: "Client Satisfaction", icon: "◉" },
  { value: "5+", label: "Years Experience", icon: "◆" },
  { value: "50+", label: "Expert Team", icon: "◇" },
];

const services = [
  {
    icon: "⬡",
    num: "01",
    title: "Web Development",
    color: "#D4AF37",
    desc: "Scalable, lightning-fast websites and web applications engineered for performance, SEO, and conversion-rate maximization.",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    icon: "◎",
    num: "02",
    title: "Digital Marketing",
    color: "#C49B2E",
    desc: "Data-driven campaigns across all channels — SEO, PPC, social, email — that maximize your ROI and brand visibility.",
    tags: ["SEO", "Google Ads", "Meta", "Analytics"],
  },
  {
    icon: "◈",
    num: "03",
    title: "Brand Strategy",
    color: "#B8890D",
    desc: "Compelling brand identities and narratives crafted to resonate with your target audience and stand out in competitive markets.",
    tags: ["Identity", "Messaging", "Positioning", "Voice"],
  },
  {
    icon: "⬟",
    num: "04",
    title: "AI Solutions",
    color: "#D4AF37",
    desc: "Intelligent automation and machine learning solutions that transform your operations and unlock new business opportunities.",
    tags: ["GPT-4", "LangChain", "Automation", "ML"],
  },
  {
    icon: "◇",
    num: "05",
    title: "UI/UX Design",
    color: "#C49B2E",
    desc: "Beautiful, intuitive interfaces designed with user psychology and conversion science to delight users and drive business goals.",
    tags: ["Figma", "Prototyping", "Research", "Testing"],
  },
  {
    icon: "◉",
    num: "06",
    title: "Cloud Services",
    color: "#B8890D",
    desc: "Robust, secure cloud infrastructure and DevOps pipelines that give your enterprise the scalability to grow without limits.",
    tags: ["AWS", "GCP", "Docker", "CI/CD"],
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery",
    desc: "Deep-dive into your business goals, audience, and competitive landscape to build a rock-solid strategy.",
    icon: "🔍",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "We blueprint the roadmap — architecture, tech stack, campaign plan — everything aligned to your KPIs.",
    icon: "🗺",
  },
  {
    num: "03",
    title: "Execution",
    desc: "Our expert team ships fast, iterates often, and keeps you in the loop at every milestone.",
    icon: "⚡",
  },
  {
    num: "04",
    title: "Growth",
    desc: "Post-launch we optimize, scale, and continuously improve to compound your results over time.",
    icon: "📈",
  },
];

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "CEO, FinCore India",
    avatar: "AM",
    text: "PAYIVVA completely transformed our digital presence. Within 90 days of launching our new site and SEO campaign, organic leads tripled. The team is exceptional.",
  },
  {
    name: "Priya Sharma",
    role: "CMO, RetailEdge",
    avatar: "PS",
    text: "Their AI chatbot solution cut our support costs by 40% while improving customer satisfaction scores. Genuinely one of the best tech partners we've worked with.",
  },
  {
    name: "Rahul Desai",
    role: "Founder, CloudNest",
    avatar: "RD",
    text: "From brand identity to web launch in 6 weeks — flawlessly executed. PAYIVVA delivered on every promise and exceeded expectations on design quality.",
  },
  {
    name: "Sneha Kulkarni",
    role: "VP Growth, UrbanFit",
    avatar: "SK",
    text: "Our ROAS on paid channels went from 2.1x to 6.8x after PAYIVVA took over digital marketing. The results speak for themselves.",
  },
];

const tickerItems = [
  "Web Development",
  "Digital Marketing",
  "Brand Strategy",
  "AI Solutions",
  "UI/UX Design",
  "Cloud Services",
  "SEO Optimization",
  "App Development",
  "Data Analytics",
  "E-Commerce",
];

const serviceNames = services.map((s) => s.title);

/* ═══════════════════════════ COMPONENT ═══════════════════════════ */
export default function Hero() {
  const canvasRef = useRef(null);
  const particlesRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animRef = useRef(null);
  const statsRef = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [countStarted, setCountStarted] = useState(false);

  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    setTimeout(() => setLoaded(true), 80);
  }, []);

  useEffect(() => {
    const id = setInterval(
      () => setActiveService((p) => (p + 1) % serviceNames.length),
      2100,
    );
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setCountStarted(true);
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  /* DOM particles */
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    const particles = [];
    for (let i = 0; i < 30; i++) {
      const p = document.createElement("div");
      const size = Math.random() * 4 + 1;
      p.style.cssText = `
        position:absolute;width:${size}px;height:${size}px;
        background:rgba(212,175,55,${Math.random() * 0.5 + 0.1});
        border-radius:50%;left:${Math.random() * 100}%;top:${Math.random() * 100}%;
        animation:pvFloat ${Math.random() * 5 + 4}s ease-in-out infinite;
        animation-delay:${Math.random() * 4}s;pointer-events:none;`;
      container.appendChild(p);
      particles.push(p);
    }
    return () => particles.forEach((p) => p.remove());
  }, []);

  /* canvas neural net */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 35 : 70;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * (isMobile ? 0.25 : 0.38),
      vy: (Math.random() - 0.5) * (isMobile ? 0.25 : 0.38),
      r: Math.random() * 2 + 0.4,
      op: Math.random() * 0.5 + 0.15,
    }));
    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    const onMouse = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);
    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      const { x: mx, y: my } = mouseRef.current;
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        const dx = mx - n.x,
          dy = my - n.y,
          d = Math.hypot(dx, dy);
        if (d < 160) {
          n.x -= dx * 0.003;
          n.y -= dy * 0.003;
        }
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(
            nodes[i].x - nodes[j].x,
            nodes[i].y - nodes[j].y,
          );
          if (d < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(212,175,55,${(1 - d / 130) * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(nodes[i].x, nodes[i].y, nodes[i].r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,175,55,${nodes[i].op})`;
        ctx.fill();
      }
      animRef.current = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  /* ─── transition helper ─── */
  const reveal = (delay = 0, extra = {}) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(36px)",
    transition: `opacity .8s cubic-bezier(.23,1,.32,1) ${delay}s, transform .8s cubic-bezier(.23,1,.32,1) ${delay}s`,
    ...extra,
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        body{background:#000;}

        @keyframes pvFloat{0%,100%{transform:translateY(0) rotate(0deg)}40%{transform:translateY(-16px) rotate(3deg)}70%{transform:translateY(-7px) rotate(-2deg)}}
        @keyframes pvShimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        @keyframes pvRotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes pvRotateR{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}
        @keyframes pvPulse{0%,100%{box-shadow:0 0 18px rgba(212,175,55,.18),0 0 50px rgba(212,175,55,.04)}50%{box-shadow:0 0 36px rgba(212,175,55,.4),0 0 90px rgba(212,175,55,.14)}}
        @keyframes pvScan{0%{transform:translateY(-100%)}100%{transform:translateY(100vh)}}
        @keyframes pvBlink{0%,100%{opacity:1}50%{opacity:0}}
        @keyframes pvTicker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes pvScrollLine{0%{transform:translateY(-100%)}100%{transform:translateY(200%)}}
        @keyframes pvCount{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:scale(1)}}

        .pv-gold{
          background:linear-gradient(135deg,#7a5a0e 0%,#D4AF37 28%,#F5E070 50%,#D4AF37 72%,#7a5a0e 100%);
          background-size:200% auto;
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;
          background-clip:text;animation:pvShimmer 4s linear infinite;
        }
        .pv-label{
          display:inline-flex;align-items:center;gap:14px;
          font-family:'DM Sans',sans-serif;font-size:11px;font-weight:700;
          letter-spacing:.2em;text-transform:uppercase;color:rgba(212,175,55,.65);
        }
        .pv-label::before,.pv-label::after{content:'';display:block;height:1px;background:rgba(212,175,55,.3);}
        .pv-label::before{width:30px;} .pv-label::after{width:18px;}

        /* buttons */
        .pv-btn{display:inline-flex;align-items:center;gap:10px;padding:15px 34px;
          background:linear-gradient(135deg,#c9a42e,#F0D060,#c9a42e);background-size:200% auto;
          color:#000;font-family:'DM Sans',sans-serif;font-weight:700;font-size:13px;
          letter-spacing:.07em;text-transform:uppercase;border:none;border-radius:9px;cursor:pointer;
          position:relative;overflow:hidden;transition:background-position .4s,box-shadow .3s,transform .3s;}
        .pv-btn::after{content:'';position:absolute;inset:0;background:rgba(255,255,255,.2);
          transform:translateX(-110%) skewX(-18deg);transition:transform .45s;}
        .pv-btn:hover{background-position:right center;
          box-shadow:0 0 38px rgba(212,175,55,.65),0 10px 36px rgba(212,175,55,.28);transform:translateY(-2px);}
        .pv-btn:hover::after{transform:translateX(200%) skewX(-18deg);}

        .pv-btn-o{display:inline-flex;align-items:center;gap:10px;padding:14px 34px;
          background:transparent;color:rgba(255,255,255,.8);font-family:'DM Sans',sans-serif;
          font-weight:600;font-size:13px;letter-spacing:.07em;text-transform:uppercase;
          border:1px solid rgba(255,255,255,.18);border-radius:9px;cursor:pointer;
          transition:border-color .3s,color .3s,background .3s,transform .3s;}
        .pv-btn-o:hover{border-color:#D4AF37;color:#D4AF37;background:rgba(212,175,55,.06);transform:translateY(-2px);}

        /* pill */
        .pv-pill{display:inline-block;padding:5px 15px;border-radius:100px;
          font-family:'DM Sans',sans-serif;font-size:12px;font-weight:500;letter-spacing:.04em;
          border:1px solid rgba(212,175,55,.2);color:rgba(212,175,55,.42);transition:all .4s;white-space:nowrap;}
        .pv-pill.on{background:rgba(212,175,55,.12);border-color:rgba(212,175,55,.85);
          color:#D4AF37;box-shadow:0 0 18px rgba(212,175,55,.2);}

        /* stat card */
        .pv-stat{position:relative;border:1px solid rgba(212,175,55,.2);border-radius:16px;
          padding:24px 18px;background:rgba(212,175,55,.03);backdrop-filter:blur(14px);
          text-align:center;cursor:default;overflow:hidden;
          transition:transform .4s cubic-bezier(.23,1,.32,1),border-color .4s,box-shadow .4s;}
        .pv-stat::before{content:'';position:absolute;inset:0;
          background:radial-gradient(circle at 50% 0%,rgba(212,175,55,.1),transparent 68%);
          opacity:0;transition:opacity .4s;}
        .pv-stat:hover{transform:translateY(-8px);border-color:rgba(212,175,55,.55);
          box-shadow:0 24px 58px rgba(212,175,55,.14);}
        .pv-stat:hover::before{opacity:1;}

        /* svc card */
        .pv-svc{padding:42px 36px;background:rgba(212,175,55,.02);position:relative;
          cursor:default;transition:background .35s,border-color .3s;overflow:hidden;
          border-right:1px solid rgba(212,175,55,.07);border-bottom:1px solid rgba(212,175,55,.07);}
        .g3 > div:nth-child(3n){border-right:none;}
        .g3 > div:nth-child(n+4){border-bottom:none;}
        @media(max-width:768px){
          .g3 > div{border-right:none!important;border-bottom:1px solid rgba(212,175,55,.07)!important;}
          .g3 > div:last-child{border-bottom:none!important;}
          .pv-svc{padding:32px 24px;}
        }
        .pv-svc-bar{position:absolute;top:0;left:0;right:0;height:2px;
          background:linear-gradient(90deg,transparent,#D4AF37,transparent);
          transform:scaleX(0);transition:transform .5s cubic-bezier(.23,1,.32,1);}
        .pv-svc:hover .pv-svc-bar{transform:scaleX(1);}
        .pv-tag{display:inline-block;padding:3px 10px;border-radius:4px;
          background:rgba(212,175,55,.07);border:1px solid rgba(212,175,55,.14);
          font-family:'DM Sans',sans-serif;font-size:11px;font-weight:500;
          color:rgba(212,175,55,.55);letter-spacing:.05em;margin:3px 3px 0 0;}

        /* process step */
        .pv-step{position:relative;padding:36px 32px;border:1px solid rgba(212,175,55,.1);
          border-radius:20px;background:rgba(212,175,55,.02);overflow:hidden;
          transition:border-color .4s,transform .4s,box-shadow .4s;}
        .pv-step:hover{border-color:rgba(212,175,55,.4);transform:translateY(-6px);
          box-shadow:0 20px 50px rgba(212,175,55,.1);}
        .pv-step-bg-num{font-family:'Cormorant Garamond',serif;font-size:80px;font-weight:900;
          line-height:1;position:absolute;top:16px;right:20px;pointer-events:none;
          background:linear-gradient(135deg,rgba(212,175,55,.07),rgba(212,175,55,.02));
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}

        /* testimonial */
        .pv-testi{padding:36px 32px;border:1px solid rgba(212,175,55,.12);border-radius:20px;
          background:rgba(212,175,55,.02);position:relative;overflow:hidden;
          transition:border-color .4s,box-shadow .4s,transform .4s;}
        .pv-testi::before{content:'"';position:absolute;top:8px;right:22px;
          font-family:'Cormorant Garamond',serif;font-size:110px;
          color:rgba(212,175,55,.05);line-height:1;pointer-events:none;}
        .pv-testi:hover{border-color:rgba(212,175,55,.38);
          box-shadow:0 20px 50px rgba(212,175,55,.1);transform:translateY(-5px);}

        /* portfolio card */
        .pv-port{border-radius:16px;overflow:hidden;border:1px solid rgba(212,175,55,.1);
          cursor:pointer;position:relative;aspect-ratio:4/3;display:flex;
          flex-direction:column;justify-content:flex-end;
          transition:border-color .4s,box-shadow .4s,transform .4s;}
        .pv-port:hover{border-color:rgba(212,175,55,.45);
          box-shadow:0 24px 60px rgba(212,175,55,.15);transform:translateY(-6px) scale(1.01);}
        .pv-overlay{position:absolute;inset:0;
          background:linear-gradient(to top,rgba(0,0,0,.9) 0%,rgba(0,0,0,.2) 60%,transparent 100%);
          transition:opacity .4s;}
        .pv-port:hover .pv-overlay{opacity:.6;}

        /* ticker */
        .pv-ticker{overflow:hidden;white-space:nowrap;
          border-top:1px solid rgba(212,175,55,.08);border-bottom:1px solid rgba(212,175,55,.08);
          padding:11px 0;background:rgba(212,175,55,.012);}
        .pv-ticker-inner{display:inline-block;animation:pvTicker 30s linear infinite;}
        .pv-ticker-item{display:inline-flex;align-items:center;gap:12px;margin-right:56px;
          font-family:'DM Sans',sans-serif;font-size:11px;font-weight:600;
          letter-spacing:.14em;text-transform:uppercase;color:rgba(212,175,55,.38);}
        .pv-dot{width:4px;height:4px;background:#D4AF37;border-radius:50%;opacity:.5;}

        /* scroll */
        .pv-scroll{position:absolute;bottom:36px;left:50%;transform:translateX(-50%);
          display:flex;flex-direction:column;align-items:center;gap:8px;
          background:none;border:none;cursor:pointer;color:rgba(255,255,255,.28);transition:color .3s;}
        .pv-scroll:hover{color:rgba(212,175,55,.7);}
        .pv-scroll-line{width:1px;height:48px;position:relative;overflow:hidden;
          background:linear-gradient(to bottom,transparent,rgba(212,175,55,.5),transparent);}
        .pv-scroll-line::after{content:'';position:absolute;top:-100%;width:100%;height:100%;
          background:linear-gradient(to bottom,transparent,#fff,transparent);
          animation:pvScrollLine 2s ease-in-out infinite;}

        .pv-ring{position:absolute;border-radius:50%;border:1px solid rgba(212,175,55,.055);pointer-events:none;}
        .pv-divider{height:1px;background:linear-gradient(90deg,transparent,rgba(212,175,55,.18),transparent);margin:0 60px;}
        .pv-tech{display:inline-flex;align-items:center;gap:8px;padding:10px 18px;
          border:1px solid rgba(212,175,55,.15);border-radius:10px;background:rgba(212,175,55,.03);
          font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;color:rgba(255,255,255,.55);
          transition:border-color .3s,color .3s,background .3s,transform .3s;}
        .pv-tech:hover{border-color:rgba(212,175,55,.5);color:#D4AF37;background:rgba(212,175,55,.07);transform:translateY(-2px);}
        .pv-avatar{width:48px;height:48px;border-radius:50%;
          background:linear-gradient(135deg,#D4AF37,#8B6914);flex-shrink:0;
          display:flex;align-items:center;justify-content:center;
          font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;color:#000;
          border:2px solid rgba(212,175,55,.4);}

        @media(max-width:1024px){
          .g4{grid-template-columns:repeat(2,1fr)!important;}
          .pv-divider{margin:0 40px;}
        }
        @media(max-width:768px){
          .g4{grid-template-columns:1fr!important;}
          .g3{grid-template-columns:1fr!important;}
          .g2{grid-template-columns:1fr!important;}
          .g2r{grid-template-columns:1fr!important;}
          .pv-divider{margin:0 20px;}
          .hide-mobile{display:none!important;}
        }
        @media(max-width:480px){
           .pv-stat{padding:16px 12px;}
           .pv-btn, .pv-btn-o{width:100%;justify-content:center;}
        }
      `}</style>

      {/* scanline */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          zIndex: 999,
          pointerEvents: "none",
          background:
            "linear-gradient(transparent,rgba(212,175,55,.04),transparent)",
          animation: "pvScan 9s linear infinite",
        }}
      />

      {/* ════════════ HERO ════════════ */}
      <section
        id="home"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "#000",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "radial-gradient(ellipse 90% 70% at 15% 15%,#1a1200,transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "radial-gradient(ellipse 70% 90% at 85% 85%,#0d0900,transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            opacity: 0.034,
            backgroundImage: `linear-gradient(rgba(212,175,55,1) 1px,transparent 1px),linear-gradient(90deg,rgba(212,175,55,1) 1px,transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div
          ref={particlesRef}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "18%",
            width: 420,
            height: 420,
            background: "rgba(212,175,55,.05)",
            filter: "blur(110px)",
            borderRadius: "50%",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "18%",
            width: 340,
            height: 340,
            background: "rgba(212,175,55,.04)",
            filter: "blur(95px)",
            borderRadius: "50%",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        {[520, 820, 1100].map((sz, i) => (
          <div
            key={i}
            className="pv-ring"
            style={{
              width: sz,
              height: sz,
              top: "50%",
              left: "50%",
              marginTop: -sz / 2,
              marginLeft: -sz / 2,
              borderStyle: i === 1 ? "dashed" : "solid",
              zIndex: 1,
              animation: `${i % 2 === 0 ? "pvRotate" : "pvRotateR"} ${28 + i * 14}s linear infinite`,
            }}
          />
        ))}
        <svg
          style={{
            position: "absolute",
            top: "7%",
            right: "7%",
            width: 110,
            opacity: 0.07,
            animation: "pvFloat 9s ease-in-out infinite",
            zIndex: 2,
            pointerEvents: "none",
          }}
          className="hide-mobile"
          viewBox="0 0 100 100"
        >
          <polygon
            points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1.2"
          />
        </svg>
        <svg
          style={{
            position: "absolute",
            bottom: "14%",
            left: "5%",
            width: 72,
            opacity: 0.07,
            animation: "pvFloat 11s ease-in-out infinite",
            animationDelay: "3s",
            zIndex: 2,
            pointerEvents: "none",
          }}
          viewBox="0 0 100 100"
        >
          <rect
            x="18"
            y="18"
            width="64"
            height="64"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1.4"
            transform="rotate(45 50 50)"
          />
        </svg>
        <svg
          style={{
            position: "absolute",
            top: "40%",
            left: "3%",
            width: 44,
            opacity: 0.06,
            animation: "pvFloat 7s ease-in-out infinite",
            animationDelay: "1.5s",
            zIndex: 2,
            pointerEvents: "none",
          }}
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1.8"
            strokeDasharray="8 5"
          />
        </svg>

        <div
          style={{
            position: "relative",
            zIndex: 3,
            maxWidth: 1100,
            margin: "0 auto",
            width: "100%",
            padding: "140px 60px 120px",
            textAlign: "center",
          }}
        >
          {/* badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 22px",
              border: "1px solid rgba(212,175,55,.32)",
              borderRadius: 100,
              background: "rgba(212,175,55,.06)",
              backdropFilter: "blur(10px)",
              marginBottom: 38,
              animation: "pvPulse 3.2s ease-in-out infinite",
              ...reveal(0.1),
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                background: "#D4AF37",
                borderRadius: "50%",
                boxShadow: "0 0 8px #D4AF37",
                animation: "pvBlink 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 12,
                fontWeight: 600,
                color: "rgba(212,175,55,.9)",
                letterSpacing: ".12em",
                textTransform: "uppercase",
              }}
            >
              Inspiring Innovations · PAYIVVA Technologies
            </span>
            <span
              style={{
                width: 7,
                height: 7,
                background: "#D4AF37",
                borderRadius: "50%",
                boxShadow: "0 0 8px #D4AF37",
                animation: "pvBlink 2s ease-in-out infinite 1s",
              }}
            />
          </div>

          <div style={reveal(0.22, { marginBottom: 6 })}>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(50px,8.5vw,112px)",
                fontWeight: 900,
                lineHeight: 1.02,
                color: "#fff",
                letterSpacing: "-.02em",
              }}
            >
              Grow Your Business
            </h1>
          </div>
          <div style={reveal(0.36, { marginBottom: 26 })}>
            <h1
              className="pv-gold"
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(50px,8.5vw,112px)",
                fontWeight: 900,
                lineHeight: 1.02,
                letterSpacing: "-.02em",
              }}
            >
              Online with Experts
            </h1>
          </div>

          {/* pills */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 7,
              marginBottom: 28,
              ...reveal(0.48),
            }}
          >
            <span
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 12,
                color: "rgba(255,255,255,.3)",
                letterSpacing: ".08em",
                textTransform: "uppercase",
                marginRight: 4,
              }}
            >
              We excel in
            </span>
            {serviceNames.map((s, i) => (
              <span
                key={s}
                className={`pv-pill${i === activeService ? " on" : ""}`}
              >
                {s}
              </span>
            ))}
          </div>

          <p
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: "clamp(15px,1.5vw,18px)",
              color: "rgba(255,255,255,.5)",
              maxWidth: 580,
              margin: "0 auto 48px",
              lineHeight: 1.78,
              ...reveal(0.54),
            }}
          >
            PAYIVVA Technologies helps businesses scale digitally using
            innovative marketing and technology solutions — delivering
            measurable, compounding results.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              marginBottom: 68,
              ...reveal(0.64),
            }}
          >
            <button className="pv-btn" onClick={() => scrollTo("#contact")}>
              Get Started <ArrowRight size={16} />
            </button>
            <button className="pv-btn-o" onClick={() => scrollTo("#services")}>
              <Play size={14} style={{ color: "#D4AF37" }} /> Our Services
            </button>
          </div>

          <div
            ref={statsRef}
            className="g4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 14,
              maxWidth: 860,
              margin: "0 auto",
              ...reveal(0.78),
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="pv-stat"
                onMouseEnter={() => setHoveredStat(i)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 18,
                    height: 18,
                    borderTop: "1px solid rgba(212,175,55,.5)",
                    borderLeft: "1px solid rgba(212,175,55,.5)",
                    borderRadius: "12px 0 0 0",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: 18,
                    height: 18,
                    borderBottom: "1px solid rgba(212,175,55,.5)",
                    borderRight: "1px solid rgba(212,175,55,.5)",
                    borderRadius: "0 0 12px 0",
                  }}
                />
                <div
                  style={{
                    fontSize: 18,
                    color: "rgba(212,175,55,.35)",
                    marginBottom: 4,
                  }}
                >
                  {s.icon}
                </div>
                <p
                  className="pv-gold"
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "clamp(28px,3vw,40px)",
                    fontWeight: 900,
                    lineHeight: 1,
                    marginBottom: 7,
                    animation: countStarted
                      ? "pvCount .5s ease-out both"
                      : "none",
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: 11,
                    color: "rgba(255,255,255,.4)",
                    letterSpacing: ".07em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button className="pv-scroll" onClick={() => scrollTo("#services")}>
          <span
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 10,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Scroll
          </span>
          <div className="pv-scroll-line" />
        </button>
      </section>

      {/* ticker */}
      <div className="pv-ticker">
        <div className="pv-ticker-inner">
          {[0, 1].map((_, ri) => (
            <span key={ri}>
              {tickerItems.map((item, i) => (
                <span key={i} className="pv-ticker-item">
                  <span className="pv-dot" />
                  {item}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ════════════ SERVICES ════════════ */}
      <section
        id="services"
        style={{
          position: "relative",
          zIndex: 10,
          padding: "110px 0 0",
          background: "#000",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px" }}>
          <div className="pv-label" style={{ marginBottom: 20 }}>
            What We Do
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 52,
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(36px,5vw,66px)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.08,
                maxWidth: 440,
              }}
            >
              Our Core <span className="pv-gold">Services</span>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 15,
                color: "rgba(255,255,255,.4)",
                maxWidth: 320,
                lineHeight: 1.75,
              }}
            >
              End-to-end digital solutions tailored for your business growth and
              market expansion.
            </p>
          </div>
        </div>
        <div
          style={{
            border: "1px solid rgba(212,175,55,.08)",
            borderLeft: "none",
            borderRight: "none",
          }}
        >
          <div
            className="g3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              maxWidth: 1200,
              margin: "0 auto",
            }}
          >
            {services.map((svc, i) => (
              <div
                key={i}
                className="pv-svc"
                onMouseEnter={() => setHoveredService(i)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="pv-svc-bar" />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 20,
                  }}
                >
                  <span style={{ fontSize: 26, color: "rgba(212,175,55,.55)" }}>
                    {svc.icon}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: 13,
                      color: "rgba(212,175,55,.22)",
                      fontWeight: 700,
                    }}
                  >
                    {svc.num}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: 24,
                    fontWeight: 700,
                    color: hoveredService === i ? "#D4AF37" : "#fff",
                    marginBottom: 14,
                    lineHeight: 1.2,
                    transition: "color .3s",
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: 14,
                    color: "rgba(255,255,255,.44)",
                    lineHeight: 1.72,
                    marginBottom: 20,
                  }}
                >
                  {svc.desc}
                </p>
                <div>
                  {svc.tags.map((t) => (
                    <span key={t} className="pv-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    marginTop: 24,
                    display: "flex",
                    alignItems: "center",
                    gap: 7,
                    color:
                      hoveredService === i ? "#D4AF37" : "rgba(212,175,55,.5)",
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    transition: "color .3s",
                  }}
                >
                  Learn More <ArrowRight size={13} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ TECH STACK ════════════ */}
      <section
        style={{
          padding: "80px 24px",
          background: "#000",
          zIndex: 10,
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <div
            className="pv-label"
            style={{
              justifyContent: "center",
              marginBottom: 18,
              display: "flex",
            }}
          >
            Technologies
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(30px,4vw,52px)",
              fontWeight: 900,
              color: "#fff",
              marginBottom: 14,
              lineHeight: 1.1,
            }}
          >
            Powered by the <span className="pv-gold">Best Stack</span>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 15,
              color: "rgba(255,255,255,.4)",
              marginBottom: 46,
              lineHeight: 1.7,
              maxWidth: 500,
              margin: "0 auto 46px",
            }}
          >
            We use battle-tested, modern technologies to build products that
            last.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
            }}
          >
            {[
              "React",
              "Next.js",
              "Node.js",
              "TypeScript",
              "Python",
              "TailwindCSS",
              "AWS",
              "GCP",
              "Docker",
              "Kubernetes",
              "PostgreSQL",
              "MongoDB",
              "OpenAI",
              "LangChain",
              "Figma",
              "Webflow",
            ].map((tech) => (
              <span key={tech} className="pv-tech">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="pv-divider" />

      {/* ════════════ PROCESS ════════════ */}
      <section
        id="process"
        style={{
          padding: "80px 24px",
          background: "#000",
          zIndex: 10,
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="pv-label" style={{ marginBottom: 18 }}>
            How We Work
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 52,
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(34px,5vw,62px)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.08,
                maxWidth: 420,
              }}
            >
              Our Proven <span className="pv-gold">Process</span>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 15,
                color: "rgba(255,255,255,.4)",
                maxWidth: 300,
                lineHeight: 1.75,
              }}
            >
              A refined 4-step framework that turns your vision into measurable
              business growth.
            </p>
          </div>
          <div
            className="g4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 18,
            }}
          >
            {processSteps.map((step, i) => (
              <div key={i} className="pv-step">
                <div className="pv-step-bg-num">{step.num}</div>
                <div style={{ fontSize: 30, marginBottom: 18 }}>
                  {step.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: 26,
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 12,
                    lineHeight: 1.2,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: 14,
                    color: "rgba(255,255,255,.44)",
                    lineHeight: 1.7,
                  }}
                >
                  {step.desc}
                </p>
                {i < processSteps.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: -9,
                      zIndex: 3,
                      color: "rgba(212,175,55,.3)",
                      fontSize: 20,
                      transform: "translateY(-50%)",
                    }}
                  >
                    ›
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pv-divider" />

      {/* ════════════ TESTIMONIALS ════════════ */}
      <section
        id="testimonials"
        style={{
          padding: "80px 24px",
          background: "#000",
          zIndex: 10,
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div
              className="pv-label"
              style={{
                justifyContent: "center",
                display: "flex",
                marginBottom: 16,
              }}
            >
              Client Love
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(34px,5vw,62px)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.08,
                marginBottom: 12,
              }}
            >
              What Our <span className="pv-gold">Clients Say</span>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 15,
                color: "rgba(255,255,255,.4)",
                lineHeight: 1.75,
                maxWidth: 500,
                margin: "0 auto",
              }}
            >
              Don't take our word for it — hear from the businesses we've helped
              grow.
            </p>
          </div>
          <div
            className="g2"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: 20,
            }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="pv-testi">
                <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} style={{ color: "#D4AF37", fontSize: 13 }}>
                      ★
                    </span>
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: 15,
                    color: "rgba(255,255,255,.65)",
                    lineHeight: 1.78,
                    marginBottom: 24,
                    fontStyle: "italic",
                  }}
                >
                  "{t.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div className="pv-avatar">{t.avatar}</div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond',serif",
                        fontSize: 17,
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: 2,
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: 12,
                        color: "rgba(212,175,55,.6)",
                        letterSpacing: ".04em",
                      }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pv-divider" />

      {/* ════════════ WHY US ════════════ */}
      <section
        style={{
          padding: "80px 24px",
          background: "#000",
          zIndex: 10,
          position: "relative",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            className="g2r"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "min(80px, 8vw)",
              alignItems: "center",
            }}
          >
            <div>
              <div className="pv-label" style={{ marginBottom: 18 }}>
                Why PAYIVVA
              </div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "clamp(34px,4.5vw,58px)",
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1.08,
                  marginBottom: 22,
                }}
              >
                The Partner That <span className="pv-gold">Delivers</span>
              </h2>
              <p
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: 15,
                  color: "rgba(255,255,255,.46)",
                  lineHeight: 1.8,
                  marginBottom: 32,
                }}
              >
                We're not an agency that disappears after launch. We embed
                ourselves in your growth, track every KPI, and relentlessly
                optimize until your goals are crushed.
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 14 }}
              >
                {[
                  { label: "Dedicated Account Manager", icon: "👤" },
                  { label: "Weekly Performance Reports", icon: "📊" },
                  { label: "24/7 Priority Support", icon: "⚡" },
                  { label: "No Long-Term Lock-In", icon: "🔓" },
                  { label: "NDA & IP Protection", icon: "🛡" },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "13px 18px",
                      border: "1px solid rgba(212,175,55,.1)",
                      borderRadius: 12,
                      background: "rgba(212,175,55,.02)",
                      transition: "border-color .3s,background .3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(212,175,55,.38)";
                      e.currentTarget.style.background = "rgba(212,175,55,.06)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(212,175,55,.1)";
                      e.currentTarget.style.background = "rgba(212,175,55,.02)";
                    }}
                  >
                    <span style={{ fontSize: 17 }}>{item.icon}</span>
                    <span
                      style={{
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: 14,
                        fontWeight: 500,
                        color: "rgba(255,255,255,.7)",
                      }}
                    >
                      {item.label}
                    </span>
                    <span
                      style={{
                        marginLeft: "auto",
                        color: "rgba(212,175,55,.55)",
                        fontSize: 13,
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div
              style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 16,
            }}
            >
              {[
                {
                  val: "₹50Cr+",
                  label: "Revenue Generated",
                  sub: "for clients in FY24",
                },
                {
                  val: "3.2×",
                  label: "Avg. ROI Delivered",
                  sub: "across all campaigns",
                },
                {
                  val: "6 Weeks",
                  label: "Avg. Time to Launch",
                  sub: "from brief to live",
                },
                {
                  val: "#1",
                  label: "Ranked Agency",
                  sub: "Pimpri-Chinchwad 2024",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  style={{
                    padding: "28px 20px",
                    border: "1px solid rgba(212,175,55,.13)",
                    borderRadius: 16,
                    background: "rgba(212,175,55,.025)",
                    textAlign: "center",
                    transition: "border-color .3s,transform .4s,box-shadow .4s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(212,175,55,.45)";
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 18px 50px rgba(212,175,55,.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(212,175,55,.13)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <p
                    className="pv-gold"
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: 38,
                      fontWeight: 900,
                      lineHeight: 1,
                      marginBottom: 8,
                    }}
                  >
                    {c.val}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans',sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "rgba(255,255,255,.7)",
                      marginBottom: 4,
                    }}
                  >
                    {c.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans',sans-serif",
                      fontSize: 11,
                      color: "rgba(255,255,255,.3)",
                    }}
                  >
                    {c.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ CTA BANNER ════════════ */}
      <section
        style={{
          padding: "0 40px 100px",
          background: "#000",
          zIndex: 10,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "relative",
            padding: "min(90px, 12vw) 24px",
            border: "1px solid rgba(212,175,55,.18)",
            borderRadius: 28,
            background:
              "linear-gradient(135deg,rgba(212,175,55,.07) 0%,rgba(0,0,0,0) 50%,rgba(212,175,55,.04) 100%)",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 300,
              height: 300,
              background:
                "radial-gradient(circle,rgba(212,175,55,.12),transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -60,
              left: -60,
              width: 250,
              height: 250,
              background:
                "radial-gradient(circle,rgba(212,175,55,.08),transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            className="pv-label"
            style={{
              justifyContent: "center",
              display: "flex",
              marginBottom: 18,
            }}
          >
            Ready to Scale?
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(32px,5vw,64px)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.08,
              marginBottom: 16,
            }}
          >
            Let's Build Something <span className="pv-gold">Extraordinary</span>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 16,
              color: "rgba(255,255,255,.44)",
              maxWidth: 500,
              margin: "0 auto 40px",
              lineHeight: 1.75,
            }}
          >
            Partner with PAYIVVA Technologies and transform your digital
            presence into a powerful, self-compounding growth engine.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button className="pv-btn">
              Get Free Consultation <ArrowRight size={16} />
            </button>
            <button className="pv-btn-o">View Work</button>
          </div>
        </div>
      </section>
    </>
  );
}
