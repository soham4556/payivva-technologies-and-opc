import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Share2,
  MessageSquare,
  Users,
  Video,
  Camera,
  BarChart,
  Zap,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Star,
  ChevronDown,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Facebook,
  TrendingUp,
  Clock,
  Shield,
  Award,
  Target,
  Layers,
  FileText,
  Eye,
  Heart,
  Repeat2,
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
    icon: MessageSquare,
    title: "Content Strategy",
    desc: "A tailored roadmap that aligns your brand voice with the unique nuances of each platform — so every post has a purpose, a target audience, and a measurable goal.",
  },
  {
    icon: Camera,
    title: "Creative Production",
    desc: "High-end visual storytelling through professional graphics, branded templates, and scroll-stopping creative assets designed for every format and platform.",
  },
  {
    icon: Video,
    title: "Short-Form Video",
    desc: "Mastering Reels, TikToks, and YouTube Shorts to capture attention in today's fast-paced digital economy. We script, produce, and optimise for viral reach.",
  },
  {
    icon: Users,
    title: "Community Management",
    desc: "Building real relationships with your audience through daily engagement — responding to comments, DMs, and mentions in a voice that truly sounds like your brand.",
  },
  {
    icon: Zap,
    title: "Growth Hacking",
    desc: "Proven, ethical techniques to accelerate your following and organic reach — from hashtag strategy and collab outreach to algorithm-leveraged posting schedules.",
  },
  {
    icon: BarChart,
    title: "Impact Analytics",
    desc: "Detailed monthly reports measuring reach, engagement rate, follower growth, sentiment, and most importantly — actual business conversions attributable to social.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Brand & Audience Audit",
    desc: "We analyse your current social presence, benchmark against top competitors, study your audience demographics, and identify the exact content gaps we can exploit for rapid growth.",
    tags: [
      "Profile Audit",
      "Competitor Analysis",
      "Audience Research",
      "Content Gap Mapping",
    ],
  },
  {
    step: "02",
    title: "Strategy & Content Calendar",
    desc: "We build a 30-day rolling content calendar with post types, formats, copy direction, and publishing times optimised per platform and audience behaviour patterns.",
    tags: [
      "30-Day Calendar",
      "Platform Strategy",
      "Content Pillars",
      "Tone of Voice",
    ],
  },
  {
    step: "03",
    title: "Content Creation & Approval",
    desc: "Our designers, copywriters, and video editors create all content in-house. You review and approve before anything goes live — full transparency, zero surprises.",
    tags: ["Graphic Design", "Copywriting", "Video Editing", "Client Approval"],
  },
  {
    step: "04",
    title: "Publishing & Community Mgmt",
    desc: "We schedule posts at peak engagement windows, monitor all comments and DMs daily, and actively engage with your community to drive algorithm-boosting interactions.",
    tags: [
      "Scheduled Publishing",
      "Daily Engagement",
      "DM Management",
      "Hashtag Strategy",
    ],
  },
  {
    step: "05",
    title: "Reporting & Optimisation",
    desc: "Every month you receive a detailed performance report with insights, wins, and a refined strategy for the next cycle — because what worked last month may need to evolve.",
    tags: [
      "Monthly Reports",
      "Engagement Analysis",
      "Content Performance",
      "Ongoing Refinement",
    ],
  },
];

const STATS = [
  { value: "2M+", label: "Reach Generated" },
  { value: "8.4%", label: "Avg. Engagement Rate" },
  { value: "5×", label: "Follower Growth Rate" },
  { value: "98%", label: "Client Retention" },
];

const INCLUDED = [
  {
    icon: Layers,
    title: "Monthly Content Calendar",
    desc: "A fully planned 30-day calendar with post formats, copy direction, and publishing schedule for every platform.",
  },
  {
    icon: Camera,
    title: "Custom Graphic Design",
    desc: "Branded, scroll-stopping visuals designed in-house — every asset tailored to your identity and platform specs.",
  },
  {
    icon: Video,
    title: "Reels & Short-Form Video",
    desc: "Scripted, edited, and captioned short-form videos optimised for Instagram Reels, TikTok, and YouTube Shorts.",
  },
  {
    icon: MessageSquare,
    title: "Daily Community Management",
    desc: "We respond to comments, DMs, and brand mentions every day — keeping your audience engaged and algorithms happy.",
  },
  {
    icon: Target,
    title: "Hashtag & SEO Strategy",
    desc: "Research-backed hashtag sets and profile keyword optimisation to maximise organic discoverability on every platform.",
  },
  {
    icon: BarChart,
    title: "Monthly Performance Report",
    desc: "Clear, visual reporting covering reach, engagement, growth, top content, and strategic recommendations.",
  },
  {
    icon: TrendingUp,
    title: "Influencer Outreach",
    desc: "Identifying and coordinating with relevant micro and macro influencers to amplify your brand's reach authentically.",
  },
  {
    icon: Eye,
    title: "Competitor Monitoring",
    desc: "We track what your top competitors are posting so we can stay ahead and capture the moments they miss.",
  },
];

const PLATFORMS = [
  { name: "Instagram", desc: "Reels, Stories, Carousels, Feed Posts" },
  { name: "Facebook", desc: "Pages, Groups, Reels, Lead Ads" },
  { name: "LinkedIn", desc: "B2B Content, Thought Leadership, Company Pages" },
  { name: "YouTube", desc: "Shorts, Channel Management, SEO" },
  { name: "Twitter / X", desc: "Threads, Trending Engagement, Brand Voice" },
  { name: "TikTok", desc: "Viral Hooks, Trends, Short-Form Production" },
];

const TESTIMONIALS = [
  {
    name: "Meera Nair",
    role: "Founder, Aura Skincare",
    text: "We went from 800 followers to 22,000 in 5 months. Sales from Instagram grew 3× and our DMs are constantly full of warm leads. The content quality is exceptional.",
    stars: 5,
  },
  {
    name: "Rohan Desai",
    role: "Director, EduPath Academy",
    text: "Our LinkedIn presence was non-existent. Within 4 months we had a 900% increase in profile views and started getting inbound B2B partnership requests weekly.",
    stars: 5,
  },
  {
    name: "Kiran Sheth",
    role: "CEO, FreshBowl Restaurants",
    text: "Their Reels strategy transformed our brand. We went viral twice in the first month, gained 15k followers, and our restaurant bookings increased by 40%. Incredible ROI.",
    stars: 5,
  },
];

const FAQS = [
  {
    q: "How many posts per month do we get?",
    a: "It depends on your plan, but typically we deliver 20–30 posts per month across your active platforms. This includes feed posts, Stories, and Reels/short-form video content.",
  },
  {
    q: "Do you create all the content or do we need to provide assets?",
    a: "We create everything in-house — graphics, copy, and video editing. For certain content types (like product photography or location-specific footage) we may request raw assets, but all design and editing is handled by our team.",
  },
  {
    q: "Which platforms do you manage?",
    a: "We manage Instagram, Facebook, LinkedIn, YouTube, Twitter/X, and TikTok. We recommend focusing on 2–3 platforms based on where your target audience is most active.",
  },
  {
    q: "How long before we see results?",
    a: "Engagement and reach improvements are typically visible within 30–45 days. Meaningful follower growth and conversion attribution usually shows clearly at the 60–90 day mark as the algorithm rewards consistency.",
  },
  {
    q: "Can we review and approve content before it's posted?",
    a: "Absolutely. Every piece of content is submitted for your approval before it goes live. We use a shared content calendar so you always know what's coming and can request edits.",
  },
  {
    q: "Do you run paid social ads as well?",
    a: "Organic social management is a standalone service. We also offer paid social advertising (Facebook/Instagram Ads, LinkedIn Ads) as a separate service — or we can bundle both for a comprehensive social strategy.",
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
export default function SocialMediaMarketing() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
      .smm-root * { box-sizing: border-box; }
      .smm-root { font-family: 'Outfit', sans-serif !important; }
      .smm-reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1); }
      .smm-reveal.visible { opacity: 1; transform: translateY(0); }
      .smm-marquee { display: flex; animation: smm-scroll 32s linear infinite; width: max-content; }
      .smm-marquee:hover { animation-play-state: paused; }
      @keyframes smm-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      .smm-cta-main:hover { background: #F0D060 !important; transform: scale(1.04) translateY(-2px) !important; box-shadow: 0 20px 50px rgba(212,175,55,0.45) !important; }
      .smm-cta-ghost:hover { border-color: rgba(212,175,55,0.4) !important; color: #fff !important; }
      .smm-back:hover { color: #D4AF37 !important; }
      .smm-platform:hover { border-color: rgba(212,175,55,0.45) !important; background: rgba(212,175,55,0.06) !important; transform: translateY(-4px); }
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
      ?.querySelectorAll(".smm-reveal")
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
      className="smm-root"
      style={{ background: C.bg, minHeight: "100vh", color: C.text }}
    >
      <Helmet>
        <title>Social Media Marketing | Build a Movement | PAYIVVA Technologies</title>
        <meta
          name="description"
          content="Turn your social platforms into powerful community engines. High-end visual storytelling and engagement strategies that drive consistent revenue."
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
            className="smm-back"
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
          <div className="smm-reveal">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div style={iconBox(48)}>
                <Share2 size={22} />
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
              Social Media{" "}
              <span
                style={{
                  color: C.gold,
                  textShadow: "0 0 30px rgba(212,175,55,0.3)",
                }}
              >
                Marketing
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
              Don't just post — start a movement. We turn your social platforms
              into powerful community engines that drive engagement, brand
              loyalty, and consistent revenue across every channel.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <Link
                to="/contact"
                className="smm-cta-main"
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
                Start Your Campaign <ArrowRight size={18} />
              </Link>
              <a
                href="#process"
                className="smm-cta-ghost"
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
                className="smm-reveal"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  ...glass,
                  padding: "28px 20px",
                }}
              >
                <div
                  style={{
                    fontSize: 38,
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
          <div className="smm-reveal">
            <SectionHead
              badge="What We Do"
              title="Core"
              goldWord="Capabilities"
              sub="Six disciplines of social media excellence — each one designed to grow your brand and convert your audience."
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
                className="smm-reveal"
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
        <div className="smm-marquee">
          {[
            ...[
              "Instagram Reels",
              "TikTok Strategy",
              "LinkedIn Growth",
              "Community Building",
              "Brand Storytelling",
              "Content Creation",
              "Hashtag Research",
              "Influencer Collab",
              "Short-Form Video",
              "Growth Hacking",
              "Engagement Funnels",
              "Viral Campaigns",
            ],
            ...[
              "Instagram Reels",
              "TikTok Strategy",
              "LinkedIn Growth",
              "Community Building",
              "Brand Storytelling",
              "Content Creation",
              "Hashtag Research",
              "Influencer Collab",
              "Short-Form Video",
              "Growth Hacking",
              "Engagement Funnels",
              "Viral Campaigns",
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

      {/* ── PLATFORMS ── */}
      <section style={{ padding: "96px 0" }}>
        <div style={wrap}>
          <div className="smm-reveal">
            <SectionHead
              badge="Where We Work"
              title="Platforms We"
              goldWord="Master"
              sub="We build tailored strategies for each platform — because what works on LinkedIn won't work on TikTok."
              center
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {PLATFORMS.map((p, i) => (
              <div
                key={i}
                className="smm-reveal smm-platform"
                style={{
                  transitionDelay: `${i * 70}ms`,
                  ...glass,
                  padding: "28px 24px",
                  cursor: "default",
                  transition:
                    "border-color 0.3s, background 0.3s, transform 0.3s",
                }}
              >
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#fff",
                    marginBottom: 8,
                  }}
                >
                  {p.name}
                </div>
                <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>
                  {p.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section style={{ background: C.bg2, padding: "96px 0" }}>
        <div style={wrap}>
          <div className="smm-reveal">
            <SectionHead
              badge="Deliverables"
              title="What's"
              goldWord="Included"
              sub="Every social media retainer comes fully loaded — creative, strategy, management, and reporting all in one."
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
                className="smm-reveal"
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
          <div className="smm-reveal">
            <SectionHead
              badge="How We Work"
              title="Our"
              goldWord="Process"
              sub="A 5-step social media system built to grow your brand consistently, month after month."
            />
          </div>
          <div>
            {PROCESS.map((item, i) => (
              <div
                key={i}
                className="smm-reveal"
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
          <div className="smm-reveal">
            <SectionHead
              badge="Client Results"
              title="What Clients"
              goldWord="Say"
              sub="Real brands. Real growth. Real revenue from social media done right."
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
                className="smm-reveal"
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
          <div className="smm-reveal">
            <SectionHead
              badge="Common Questions"
              title="Frequently Asked"
              goldWord="Questions"
              sub="Everything you need to know before we start growing your social presence."
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
                icon: Zap,
                title: "Fast Onboarding",
                desc: "We go live with your first content calendar within 7 days of kickoff — zero delays, zero fluff.",
              },
              {
                icon: Clock,
                title: "Consistent Delivery",
                desc: "Content delivered on schedule every single month — no missed deadlines, no last-minute scrambles.",
              },
              {
                icon: Heart,
                title: "Brand-First Approach",
                desc: "Every post sounds like you, not us. We deeply embed into your brand voice before creating a single asset.",
              },
              {
                icon: Award,
                title: "Proven Results",
                desc: "Measurable growth — follower counts, engagement rates, and revenue from social that you can actually see.",
              },
            ].map((w, i) => (
              <div
                key={i}
                className="smm-reveal"
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
          <div className="smm-reveal">
            <Sparkles
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
              Ready to go{" "}
              <span
                style={{
                  color: C.gold,
                  textShadow: "0 0 30px rgba(212,175,55,0.35)",
                }}
              >
                viral?
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
              Stop shouting into the void. Let's build a social presence that
              commands attention, grows a loyal community, and drives your
              business forward — every single day.
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
                className="smm-cta-main"
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
                Start Your Campaign <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="smm-cta-ghost"
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
