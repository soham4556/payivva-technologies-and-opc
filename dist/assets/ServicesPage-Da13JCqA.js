import{r as l,j as e,G as u,S as v,a as h,M as y,U as w,b,L as k,H as j}from"./index-CAQrDLnw.js";import{S as N}from"./star-DV36MhhV.js";const z=[{icon:u,number:"01",title:"Website Development",slug:"web-development",tagline:"Digital Experiences That Convert",description:"Blazing-fast, visually stunning websites engineered for impact. From landing pages to full-stack platforms — every pixel purposeful.",features:["Custom Design","Mobile-First","SEO-Ready","CMS Integration"],stat:"150+",statLabel:"Sites Launched"},{icon:v,number:"02",title:"SEO Optimization",slug:"seo-optimization",tagline:"Rank Higher. Grow Faster.",description:"Data-driven SEO that dominates rankings. Technical precision, on-page mastery, and off-page authority — all working in harmony.",features:["Keyword Research","On-Page SEO","Link Building","Analytics"],stat:"3x",statLabel:"Avg. Traffic Lift"},{icon:h,number:"03",title:"Social Media Marketing",slug:"social-media-marketing",tagline:"Build a Brand. Grow a Community.",description:"Powerful social presence across every platform. Content that engages, campaigns that convert, communities that last.",features:["Content Strategy","Community Mgmt","Growth Hacking","Monthly Reports"],stat:"2M+",statLabel:"Reach Generated"},{icon:y,number:"04",title:"Google & Facebook Ads",slug:"google-facebook-ads",tagline:"Every Rupee. Maximum Return.",description:"Precision-targeted paid campaigns that fill your pipeline. We manage your spend to deliver qualified leads and measurable ROI.",features:["Campaign Setup","A/B Testing","Retargeting","Conversion Tracking"],stat:"4.8x",statLabel:"Average ROAS"},{icon:N,number:"05",title:"Brand Promotion",slug:"brand-promotion",tagline:"Iconic Brands Are Built Here.",description:"Comprehensive strategies that make you unforgettable. Identity, PR, influencer marketing — amplified across every channel.",features:["Brand Identity","PR Campaigns","Influencer Mktg","Reputation Mgmt"],stat:"98%",statLabel:"Client Retention"},{icon:w,number:"06",title:"Lead Generation",slug:"lead-generation",tagline:"Your Pipeline. Always Full.",description:"High-quality leads delivered at scale. AI-driven targeting and multi-channel funnels connect you with your ideal customers.",features:["Funnel Strategy","CRM Integration","Email Campaigns","Performance Reports"],stat:"10k+",statLabel:"Leads Delivered"}];function E(){const i=l.useRef(null);return l.useEffect(()=>{const s=i.current;if(!s)return;const a=s.getContext("2d");let n=s.width=s.offsetWidth,r=s.height=s.offsetHeight;const o=Array.from({length:55},()=>({x:Math.random()*n,y:Math.random()*r,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*1.4+.3,a:Math.random()*.7+.1}));let d;const p=()=>{a.clearRect(0,0,n,r),o.forEach(t=>{t.x+=t.vx,t.y+=t.vy,(t.x<0||t.x>n)&&(t.vx*=-1),(t.y<0||t.y>r)&&(t.vy*=-1),a.beginPath(),a.arc(t.x,t.y,t.r,0,Math.PI*2),a.fillStyle=`rgba(16,185,129,${t.a*.35})`,a.fill()}),o.forEach((t,g)=>o.slice(g+1).forEach(m=>{const x=Math.hypot(t.x-m.x,t.y-m.y);x<120&&(a.beginPath(),a.moveTo(t.x,t.y),a.lineTo(m.x,m.y),a.strokeStyle=`rgba(16,185,129,${(1-x/120)*.1})`,a.lineWidth=.5,a.stroke())})),d=requestAnimationFrame(p)};p();const c=()=>{n=s.width=s.offsetWidth,r=s.height=s.offsetHeight};return window.addEventListener("resize",c),()=>{cancelAnimationFrame(d),window.removeEventListener("resize",c)}},[]),e.jsx("canvas",{ref:i,style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}})}function R({value:i}){const[s,a]=l.useState("0"),n=l.useRef(null);return l.useEffect(()=>{const r=new IntersectionObserver(([o])=>{if(!o.isIntersecting)return;const d=parseFloat(i.replace(/[^0-9.]/g,"")),p=i.replace(/[0-9.]/g,""),c=1400,t=performance.now(),g=m=>{const x=Math.min((m-t)/c,1),f=1-Math.pow(1-x,3);a((d*f).toFixed(d%1!==0?1:0)+p),x<1&&requestAnimationFrame(g)};requestAnimationFrame(g),r.disconnect()},{threshold:.5});return n.current&&r.observe(n.current),()=>r.disconnect()},[i]),e.jsx("span",{ref:n,children:s})}function S({s:i,index:s}){const a=l.useRef(null),n=i.icon;return l.useEffect(()=>{const r=a.current;if(!r)return;const o=p=>{const c=r.getBoundingClientRect(),t=(p.clientX-c.left)/c.width-.5,g=(p.clientY-c.top)/c.height-.5;r.style.transform=`perspective(900px) rotateY(${t*11}deg) rotateX(${-g*11}deg) translateZ(8px)`,r.style.setProperty("--mx",`${(t+.5)*100}%`),r.style.setProperty("--my",`${(g+.5)*100}%`)},d=()=>{r.style.transform="perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0px)"};return r.addEventListener("mousemove",o),r.addEventListener("mouseleave",d),()=>{r.removeEventListener("mousemove",o),r.removeEventListener("mouseleave",d)}},[]),e.jsx("div",{className:"sc-wrap reveal",style:{"--delay":`${s*100}ms`},children:e.jsxs("div",{ref:a,className:"sc",children:[e.jsx("div",{className:"sc-shimmer"}),e.jsx("div",{className:"sc-glow"}),e.jsx("div",{className:"sc-fold"}),e.jsxs("div",{className:"sc-top",children:[e.jsx("span",{className:"sc-num",children:i.number}),e.jsx("div",{className:"sc-icon-ring",children:e.jsx(n,{size:19})})]}),e.jsx("p",{className:"sc-tagline",children:i.tagline}),e.jsx("h3",{className:"sc-title",children:i.title}),e.jsx("div",{className:"sc-divider"}),e.jsx("p",{className:"sc-desc",children:i.description}),e.jsx("div",{className:"sc-chips",children:i.features.map((r,o)=>e.jsx("span",{className:"sc-chip",children:r},o))}),e.jsxs("div",{className:"sc-foot",children:[e.jsxs("div",{className:"sc-stat",children:[e.jsx("span",{className:"sc-statnum",children:e.jsx(R,{value:i.stat})}),e.jsx("span",{className:"sc-statlabel",children:i.statLabel})]}),e.jsxs(k,{className:"sc-btn",to:`/services/${i.slug}`,children:[e.jsx("span",{children:"Explore"}),e.jsx(b,{size:13})]})]})]})})}const M=["Web Development","SEO Mastery","Social Media","Paid Ads","Brand Strategy","Lead Generation","Digital Growth","ROI Focus","Creative Vision","Data-Driven"];function A(){const i=l.useRef(null);return l.useEffect(()=>{const s=new IntersectionObserver(a=>a.forEach(n=>n.isIntersecting&&n.target.classList.add("visible")),{threshold:.1});return i.current?.querySelectorAll(".reveal").forEach(a=>s.observe(a)),()=>s.disconnect()},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Outfit:wght@300;400;500;600;700&display=swap');

        :root {
          --g:#10b981; --g2:#22d3ee; --g3:#047857;
          --ink:#0f172a; --ink2:#1e293b827; --ink3:#1a2744;
          --text:rgba(255,255,255,0.88); --sub:rgba(255,255,255,0.4);
          --border:rgba(16,185,129,0.15);
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
          background:linear-gradient(90deg,transparent,rgba(16,185,129,0.5) 30%,rgba(16,185,129,0.7) 50%,rgba(16,185,129,0.5) 70%,transparent); }
        .svc-edge-top { top:0; } .svc-edge-bot { bottom:0; }

        /* BG */
        .svc-mesh {
          position:absolute; inset:0; pointer-events:none; z-index:0;
          background:
            radial-gradient(ellipse 55% 50% at 85% 15%, rgba(16,185,129,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 50% 55% at 8% 80%, rgba(16,185,129,0.05) 0%, transparent 70%);
        }
        .svc-grid-bg {
          position:absolute; inset:0; pointer-events:none; z-index:0;
          background-image:
            linear-gradient(rgba(16,185,129,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16,185,129,0.035) 1px, transparent 1px);
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
          background:linear-gradient(135deg, rgba(16,185,129,0.1), rgba(16,185,129,0.02));
          border-radius:100px; color:var(--g);
          font-size:9.5px; font-weight:600; letter-spacing:0.26em; text-transform:uppercase;
          margin-bottom:28px; position:relative; overflow:hidden;
        }
        .svc-eyebrow-sweep {
          position:absolute; inset:0;
          background:linear-gradient(90deg, transparent, rgba(16,185,129,0.18), transparent);
          animation:sweep 3s infinite;
        }
        @keyframes sweep { 0%{transform:translateX(-100%)} 100%{transform:translateX(100%)} }
        .svc-eyebrow-dot {
          width:6px; height:6px; border-radius:50%;
          background:var(--g); box-shadow:0 0 10px var(--g), 0 0 20px rgba(16,185,129,0.5);
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
          background:linear-gradient(135deg,#10b981 0%,#22d3ee 45%,#047857 75%,#10b981 100%);
          background-size:200% 200%;
          background-clip:text; -webkit-background-clip:text; color:transparent;
          animation:gold-anim 4s ease infinite;
        }
        @keyframes gold-anim { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }

        .svc-sub { color:var(--sub); font-size:1rem; font-weight:300; line-height:1.8; max-width:540px; margin:0 auto; }

        .svc-rule {
          display:flex; align-items:center; justify-content:center; gap:14px; margin-top:30px;
        }
        .svc-rule-line { height:1px; width:70px; background:linear-gradient(90deg,transparent,rgba(16,185,129,0.4)); }
        .svc-rule-diamond {
          width:8px; height:8px; background:var(--g); transform:rotate(45deg);
          box-shadow:0 0 14px rgba(16,185,129,0.7), 0 0 28px rgba(16,185,129,0.3);
          animation:diamond-glow 2s ease-in-out infinite;
        }
        @keyframes diamond-glow { 0%,100%{box-shadow:0 0 14px rgba(16,185,129,0.7), 0 0 28px rgba(16,185,129,0.3)} 50%{box-shadow:0 0 20px rgba(16,185,129,1), 0 0 40px rgba(16,185,129,0.5)} }

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
          background:linear-gradient(150deg,#162032 0%,#0f172a 100%);
          border:1px solid rgba(16,185,129,0.13);
          border-radius:22px; padding:32px 28px 28px;
          height:100%; display:flex; flex-direction:column;
          position:relative; overflow:hidden;
          cursor:default;
          transition:border-color 0.4s, box-shadow 0.4s;
          transform-style:preserve-3d; will-change:transform;
          --mx:50%; --my:50%;
        }
        .sc:hover {
          border-color:rgba(16,185,129,0.5);
          box-shadow:0 0 0 1px rgba(16,185,129,0.08), 0 24px 64px rgba(0,0,0,0.65), 0 0 50px rgba(16,185,129,0.1);
        }

        .sc-shimmer {
          position:absolute; inset:0; border-radius:22px;
          background:radial-gradient(circle at var(--mx) var(--my), rgba(16,185,129,0.11) 0%, transparent 55%);
          opacity:0; transition:opacity 0.3s; pointer-events:none; z-index:0;
        }
        .sc:hover .sc-shimmer { opacity:1; }

        .sc-glow {
          position:absolute; bottom:-55px; right:-55px;
          width:170px; height:170px; border-radius:50%;
          background:radial-gradient(circle,rgba(16,185,129,0.2) 0%,transparent 70%);
          opacity:0; transition:opacity 0.5s; pointer-events:none;
        }
        .sc:hover .sc-glow { opacity:1; }

        .sc-fold {
          position:absolute; top:0; right:0; width:0; height:0;
          border-style:solid; border-width:0 38px 38px 0;
          border-color:transparent rgba(16,185,129,0.08) transparent transparent;
          transition:border-color 0.35s;
        }
        .sc:hover .sc-fold { border-color:transparent rgba(16,185,129,0.5) transparent transparent; }

        /* card contents */
        .sc-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:20px; position:relative; z-index:1; }
        .sc-num {
          font-family:'Playfair Display',serif; font-style:italic;
          font-size:0.75rem; color:rgba(16,185,129,0.3); letter-spacing:0.1em;
          transition:color 0.3s;
        }
        .sc:hover .sc-num { color:var(--g); }

        .sc-icon-ring {
          width:46px; height:46px; border-radius:14px;
          background:linear-gradient(135deg,rgba(16,185,129,0.14),rgba(16,185,129,0.04));
          border:1px solid rgba(16,185,129,0.18);
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
          background:linear-gradient(135deg,#10b981,#047857);
          color:#000; border-color:transparent;
          transform:rotate(-10deg) scale(1.15);
          box-shadow:0 8px 28px rgba(16,185,129,0.45);
        }
        .sc:hover .sc-icon-ring::after { opacity:1; }

        .sc-tagline {
          font-size:0.7rem; font-weight:600; letter-spacing:0.12em; text-transform:uppercase;
          color:rgba(16,185,129,0.5); margin-bottom:7px; position:relative; z-index:1;
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
          background:linear-gradient(90deg,rgba(16,185,129,0.28),transparent);
          position:relative; z-index:1; transition:background 0.4s;
        }
        .sc:hover .sc-divider { background:linear-gradient(90deg,var(--g),rgba(16,185,129,0.15),transparent); }

        .sc-desc {
          font-size:0.84rem; line-height:1.8; color:var(--sub);
          font-weight:300; margin-bottom:20px; flex:1; position:relative; z-index:1;
        }

        .sc-chips { display:flex; flex-wrap:wrap; gap:7px; margin-bottom:24px; position:relative; z-index:1; }
        .sc-chip {
          padding:4px 12px; font-size:0.68rem; font-weight:500;
          color:rgba(16,185,129,0.5); border:1px solid rgba(16,185,129,0.11);
          border-radius:5px; background:rgba(16,185,129,0.04);
          letter-spacing:0.04em; transition:all 0.25s;
        }
        .sc:hover .sc-chip { color:var(--g); border-color:rgba(16,185,129,0.3); background:rgba(16,185,129,0.1); }

        .sc-foot {
          display:flex; align-items:center; justify-content:space-between;
          padding-top:18px; border-top:1px solid rgba(16,185,129,0.1);
          position:relative; z-index:1;
        }
        .sc-stat { display:flex; flex-direction:column; }
        .sc-statnum {
          font-family:'Playfair Display',serif; font-size:2rem; font-weight:900;
          background:linear-gradient(135deg,#10b981,#22d3ee);
          background-clip:text; -webkit-background-clip:text; color:transparent; line-height:1;
        }
        .sc-statlabel { font-size:0.62rem; font-weight:500; color:var(--sub); text-transform:uppercase; letter-spacing:0.1em; margin-top:3px; }

        .sc-btn {
          display:inline-flex; align-items:center; gap:6px;
          padding:9px 18px;
          background:transparent; border:1px solid rgba(16,185,129,0.22);
          border-radius:9px; color:rgba(16,185,129,0.65);
          font-size:0.76rem; font-weight:500; cursor:pointer;
          font-family:'Outfit',sans-serif;
          transition:all 0.35s cubic-bezier(0.34,1.56,0.64,1);
          position:relative; overflow:hidden;
        }
        .sc-btn::before {
          content:''; position:absolute; inset:0;
          background:linear-gradient(135deg,#10b981,#047857);
          opacity:0; transition:opacity 0.3s;
        }
        .sc-btn:hover { color:#000; border-color:transparent; transform:translateY(-3px) scale(1.05); box-shadow:0 10px 30px rgba(16,185,129,0.4); }
        .sc-btn:hover::before { opacity:1; }
        .sc-btn span, .sc-btn svg { position:relative; z-index:1; }

        /* MARQUEE */
        .svc-marquee-wrap {
          overflow:hidden; margin:58px 0;
          border-top:1px solid rgba(16,185,129,0.1);
          border-bottom:1px solid rgba(16,185,129,0.1);
          padding:15px 0;
          background:linear-gradient(90deg,transparent,rgba(16,185,129,0.025),transparent);
          position:relative; z-index:2;
        }
        .svc-marquee { display:flex; animation:marquee 30s linear infinite; width:max-content; }
        .svc-marquee:hover { animation-play-state:paused; }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .svc-mq-item {
          display:inline-flex; align-items:center; gap:14px; padding:0 30px;
          font-size:0.72rem; font-weight:600; letter-spacing:0.2em; text-transform:uppercase;
          color:rgba(16,185,129,0.32); white-space:nowrap;
          transition:color 0.2s;
        }
        .svc-mq-item:hover { color:rgba(16,185,129,0.65); }
        .svc-mq-dot { width:4px; height:4px; border-radius:50%; background:rgba(16,185,129,0.35); }

        /* BOTTOM CTA */
        .svc-cta { text-align:center; margin-top:68px; position:relative; z-index:2; }
        .svc-cta-label {
          font-size:0.82rem; color:var(--sub); letter-spacing:0.08em; margin-bottom:24px;
          display:flex; align-items:center; justify-content:center; gap:16px;
        }
        .svc-cta-label::before,.svc-cta-label::after {
          content:''; flex:1; max-width:80px; height:1px;
          background:linear-gradient(90deg,transparent,rgba(16,185,129,0.35));
        }
        .svc-cta-label::after { transform:scaleX(-1); }

        .svc-main-btn {
          display:inline-flex; align-items:center; gap:14px;
          padding:18px 46px;
          font-family:'Outfit',sans-serif; font-weight:700; font-size:0.92rem;
          letter-spacing:0.06em; text-transform:uppercase;
          color:#000; border:none; cursor:pointer; border-radius:12px;
          background:linear-gradient(135deg,#10b981 0%,#22d3ee 45%,#10b981 100%);
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
        .svc-main-btn:hover { transform:translateY(-5px) scale(1.04); box-shadow:0 22px 55px rgba(16,185,129,0.52), 0 0 90px rgba(16,185,129,0.18); }
        @keyframes btn-shift { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }

        /* REVEAL */
        .reveal { opacity:0; transform:translateY(28px); transition:opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity:1; transform:none; }
        .reveal.visible.delay-1 { transition-delay:0.1s; }
        .reveal.visible.delay-2 { transition-delay:0.2s; }
      `}),e.jsxs("section",{id:"services",ref:i,className:"svc-section","aria-labelledby":"svc-heading",children:[e.jsx("div",{className:"svc-edge svc-edge-top"}),e.jsx("div",{className:"svc-mesh"}),e.jsx("div",{className:"svc-grid-bg"}),e.jsx(E,{}),e.jsxs("div",{className:"svc-wrap",children:[e.jsxs("header",{className:"svc-header reveal",children:[e.jsxs("div",{className:"svc-eyebrow",children:[e.jsx("span",{className:"svc-eyebrow-sweep"}),e.jsx("span",{className:"svc-eyebrow-dot"}),"What We Do"]}),e.jsxs("h2",{id:"svc-heading",className:"svc-h1",children:["Services That Drive",e.jsx("br",{}),e.jsx("span",{className:"gold-italic",children:"Extraordinary Results"})]}),e.jsx("p",{className:"svc-sub",children:"From bold strategy to flawless execution — end-to-end digital solutions engineered to accelerate your growth and dominate your market."}),e.jsxs("div",{className:"svc-rule",children:[e.jsx("div",{className:"svc-rule-line"}),e.jsx("div",{className:"svc-rule-diamond"}),e.jsx("div",{className:"svc-rule-line",style:{transform:"scaleX(-1)"}})]})]}),e.jsx("div",{className:"svc-grid",children:z.map((s,a)=>e.jsx(S,{s,index:a},a))})]}),e.jsx("div",{className:"svc-marquee-wrap",children:e.jsx("div",{className:"svc-marquee",children:[...Array(2)].map((s,a)=>M.map((n,r)=>e.jsxs("span",{className:"svc-mq-item",children:[n,e.jsx("span",{className:"svc-mq-dot"})]},`${a}-${r}`)))})}),e.jsx("div",{className:"svc-wrap",children:e.jsxs("div",{className:"svc-cta reveal",children:[e.jsx("p",{className:"svc-cta-label",children:"Ready to transform your digital presence?"}),e.jsxs("button",{className:"svc-main-btn",onClick:()=>document.querySelector("#contact")?.scrollIntoView({behavior:"smooth"}),children:["Start Your Project",e.jsx(b,{size:20})]})]})}),e.jsx("div",{className:"svc-edge svc-edge-bot"})]})]})}const C=()=>e.jsxs("div",{className:"pt-20 animate-fade-in",children:[e.jsxs(j,{children:[e.jsx("title",{children:"Our Services | PAYIVVA Technologies Digital Solutions"}),e.jsx("meta",{name:"description",content:"Explore our wide range of services including Web Development, SEO, Social Media Marketing, and Lead Generation."})]}),e.jsx(A,{})]});export{C as default};
