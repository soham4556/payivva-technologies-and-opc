import { useEffect, useState } from "react";
import {
  Briefcase,
  Clock,
  MapPin,
  ChevronDown,
  ArrowRight,
  GraduationCap,
  Zap,
  Star,
  Users,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

/* ─── Responsive hook ─────────────────────────────────────────── */
function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return width;
}

/* ─── Data ────────────────────────────────────────────────────── */
const jobs = [
  {
    title: "Full Stack Developer",
    type: "Full-Time",
    location: "Remote / Hybrid",
    experience: "2-4 Years",
    department: "Engineering",
    description:
      "Join our engineering team to build scalable web applications and digital products for our clients. Proficiency in React, Node.js, and modern databases required.",
    skills: ["React", "Node.js", "MongoDB", "AWS", "REST APIs"],
    urgent: true,
  },
  {
    title: "SEO Specialist",
    type: "Full-Time",
    location: "Remote",
    experience: "1-3 Years",
    department: "Marketing",
    description:
      "Drive organic growth for our diverse client portfolio. Deep knowledge of technical SEO, keyword research, content strategy, and link building expected.",
    skills: [
      "Technical SEO",
      "Ahrefs/SEMrush",
      "Google Analytics",
      "Content Writing",
      "CRO",
    ],
    urgent: false,
  },
  {
    title: "Digital Marketing Manager",
    type: "Full-Time",
    location: "On-Site / Hybrid",
    experience: "3-5 Years",
    department: "Marketing",
    description:
      "Lead multi-channel digital marketing campaigns across paid, organic, and social channels. Strong analytical mindset and client management experience required.",
    skills: [
      "Google Ads",
      "Meta Ads",
      "Analytics",
      "Team Leadership",
      "Strategy",
    ],
    urgent: false,
  },
  {
    title: "UI/UX Designer",
    type: "Full-Time",
    location: "Remote",
    experience: "2-4 Years",
    department: "Design",
    description:
      "Create stunning user interfaces and seamless digital experiences for web and mobile platforms. Strong portfolio, Figma expertise, and user research skills required.",
    skills: [
      "Figma",
      "UI Design",
      "Prototyping",
      "User Research",
      "Design Systems",
    ],
    urgent: false,
  },
  {
    title: "Social Media Executive",
    type: "Full-Time",
    location: "Remote",
    experience: "1-2 Years",
    department: "Marketing",
    description:
      "Manage and grow social media accounts for our clients across Instagram, Facebook, LinkedIn and YouTube. Creative mindset and strong copywriting skills essential.",
    skills: [
      "Content Creation",
      "Canva/Photoshop",
      "Meta Business Suite",
      "Analytics",
      "Copywriting",
    ],
    urgent: false,
  },
];

const internships = [
  {
    title: "Web Development Intern",
    duration: "3-6 Months",
    stipend: "₹5,000 – ₹8,000/month",
    description:
      "Work alongside senior developers on live projects. Learn React, CSS frameworks, and deployment workflows in a real startup environment.",
    icon: "⚡",
  },
  {
    title: "Digital Marketing Intern",
    duration: "3-6 Months",
    stipend: "₹4,000 – ₹7,000/month",
    description:
      "Get hands-on experience managing real ad campaigns, SEO audits, and social media accounts under expert mentorship.",
    icon: "📈",
  },
  {
    title: "Graphic Design Intern",
    duration: "3-4 Months",
    stipend: "₹3,000 – ₹5,000/month",
    description:
      "Create visual content for brands, assist in branding projects, and develop your design portfolio in a creative studio environment.",
    icon: "🎨",
  },
];

const cultureItems = [
  {
    label: "Remote-Friendly",
    desc: "Work from anywhere",
    icon: <Star size={16} />,
  },
  {
    label: "Growth Path",
    desc: "Clear career tracks",
    icon: <TrendingUp size={16} />,
  },
  {
    label: "Learning Budget",
    desc: "Upskilling support",
    icon: <Lightbulb size={16} />,
  },
  {
    label: "Creative Freedom",
    desc: "Bring your ideas",
    icon: <Users size={16} />,
  },
];

/* ─── Small helpers ───────────────────────────────────────────── */
function IconBox({ hovered, size, iconSize }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        flexShrink: 0,
        borderRadius: "14px",
        background: hovered ? "rgba(212,175,55,.15)" : "rgba(212,175,55,.07)",
        border: "1px solid rgba(212,175,55,.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all .3s ease",
        boxShadow: hovered ? "0 0 18px rgba(212,175,55,.2)" : "none",
      }}
    >
      <Briefcase color="#D4AF37" size={iconSize} />
    </div>
  );
}

function TitleBadge({ job, fontSize }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <h3
        style={{
          color: "#fff",
          fontWeight: 800,
          fontSize,
          margin: 0,
          letterSpacing: "-.3px",
        }}
      >
        {job.title}
      </h3>
      {job.urgent && (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "3px",
            padding: "3px 9px",
            background: "linear-gradient(135deg,#D4AF37,#F0D060)",
            color: "#000",
            fontSize: "9px",
            fontWeight: 800,
            borderRadius: "20px",
            letterSpacing: ".5px",
            textTransform: "uppercase",
            boxShadow: "0 0 10px rgba(212,175,55,.5)",
            whiteSpace: "nowrap",
          }}
        >
          <Zap size={8} /> URGENT
        </span>
      )}
    </div>
  );
}

/* ─── JobCard ─────────────────────────────────────────────────── */
function JobCard({ job, index }) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [applyHov, setApplyHov] = useState(false);
  const w = useWindowWidth();
  const isMobile = w < 480;

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? "linear-gradient(135deg,rgba(212,175,55,.08),rgba(255,255,255,.03))"
          : "linear-gradient(135deg,rgba(255,255,255,.03),rgba(255,255,255,.01))",
        border: `1px solid ${hovered ? "rgba(212,175,55,.4)" : "rgba(255,255,255,.06)"}`,
        borderRadius: "20px",
        padding: isMobile ? "18px" : "26px",
        transition: "all .4s cubic-bezier(.23,1,.32,1)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 60px rgba(212,175,55,.12)"
          : "0 4px 20px rgba(0,0,0,.3)",
        backdropFilter: "blur(10px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* shimmer line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: hovered
            ? "linear-gradient(90deg,transparent,rgba(212,175,55,.8),transparent)"
            : "linear-gradient(90deg,transparent,rgba(255,255,255,.05),transparent)",
          transition: "all .4s ease",
        }}
      />

      {/* top row: icon + title (stacked differently on mobile) */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: isMobile ? "12px" : "20px",
          alignItems: "flex-start",
          marginBottom: "0",
        }}
      >
        <IconBox
          hovered={hovered}
          size={isMobile ? 42 : 50}
          iconSize={isMobile ? 18 : 21}
        />

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ marginBottom: "8px" }}>
            <TitleBadge job={job} fontSize={isMobile ? "15px" : "18px"} />
          </div>

          {/* meta badges */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              marginBottom: "14px",
            }}
          >
            {[
              { icon: <Clock size={10} />, text: job.type },
              { icon: <MapPin size={10} />, text: job.location },
              { icon: <Briefcase size={10} />, text: job.experience },
            ].map((item, i) => (
              <span
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  color: "rgba(255,255,255,.45)",
                  fontSize: "11px",
                  padding: "4px 9px",
                  background: "rgba(255,255,255,.04)",
                  border: "1px solid rgba(255,255,255,.07)",
                  borderRadius: "8px",
                }}
              >
                {item.icon} {item.text}
              </span>
            ))}
            <span
              style={{
                fontSize: "11px",
                padding: "4px 9px",
                background: "rgba(212,175,55,.08)",
                border: "1px solid rgba(212,175,55,.2)",
                borderRadius: "8px",
                color: "rgba(212,175,55,.85)",
                fontWeight: 600,
              }}
            >
              {job.department}
            </span>
          </div>

          {/* expandable */}
          <div
            style={{
              maxHeight: expanded ? "340px" : "0",
              overflow: "hidden",
              transition: "max-height .5s cubic-bezier(.23,1,.32,1)",
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,.5)",
                fontSize: "13px",
                lineHeight: 1.7,
                margin: "0 0 14px 0",
              }}
            >
              {job.description}
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "7px",
                marginBottom: "14px",
              }}
            >
              {job.skills.map((s, i) => (
                <span
                  key={i}
                  style={{
                    padding: "4px 11px",
                    fontSize: "11px",
                    borderRadius: "20px",
                    background: "rgba(212,175,55,.08)",
                    color: "#D4AF37",
                    border: "1px solid rgba(212,175,55,.25)",
                    fontWeight: 600,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* actions */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: isMobile ? "stretch" : "center",
              gap: "10px",
            }}
          >
            <button
              onClick={() => setExpanded(!expanded)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: isMobile ? "center" : "flex-start",
                gap: "5px",
                color: expanded
                  ? "rgba(212,175,55,.85)"
                  : "rgba(255,255,255,.35)",
                fontSize: "12px",
                fontWeight: 500,
                background: "none",
                border: isMobile ? "1px solid rgba(255,255,255,.08)" : "none",
                borderRadius: isMobile ? "8px" : "0",
                padding: isMobile ? "9px 12px" : "0",
                cursor: "pointer",
                transition: "color .2s",
              }}
            >
              {expanded ? "Show less" : "View details"}
              <ChevronDown
                size={13}
                style={{
                  transition: "transform .3s",
                  transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>
            <button
              onMouseEnter={() => setApplyHov(true)}
              onMouseLeave={() => setApplyHov(false)}
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                padding: "9px 18px",
                background: applyHov
                  ? "linear-gradient(135deg,#F0D060,#D4AF37)"
                  : "linear-gradient(135deg,#D4AF37,#BF9520)",
                color: "#000",
                fontSize: "11px",
                fontWeight: 800,
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                transition: "all .3s cubic-bezier(.23,1,.32,1)",
                boxShadow: applyHov
                  ? "0 0 22px rgba(212,175,55,.6)"
                  : "0 4px 12px rgba(0,0,0,.2)",
                transform: applyHov ? "scale(1.04)" : "scale(1)",
                letterSpacing: ".3px",
                textTransform: "uppercase",
                flex: isMobile ? "1" : "0 0 auto",
              }}
            >
              Apply Now <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ─── InternCard ──────────────────────────────────────────────── */
function InternCard({ intern }) {
  const [hovered, setHovered] = useState(false);
  const [btnHov, setBtnHov] = useState(false);
  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? "linear-gradient(160deg,rgba(212,175,55,.1),rgba(212,175,55,.02))"
          : "linear-gradient(160deg,rgba(255,255,255,.04),rgba(255,255,255,.01))",
        border: `1px solid ${hovered ? "rgba(212,175,55,.35)" : "rgba(255,255,255,.07)"}`,
        borderRadius: "20px",
        padding: "24px",
        transition: "all .4s cubic-bezier(.23,1,.32,1)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 24px 60px rgba(212,175,55,.1)"
          : "0 4px 20px rgba(0,0,0,.25)",
        position: "relative",
        overflow: "hidden",
        backdropFilter: "blur(8px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "60px",
          height: "60px",
          background:
            "radial-gradient(circle at top right,rgba(212,175,55,.12),transparent)",
          borderRadius: "0 20px 0 60px",
          opacity: hovered ? 1 : 0.5,
          transition: "opacity .4s",
        }}
      />
      <div
        style={{
          fontSize: "28px",
          marginBottom: "12px",
          filter: hovered
            ? "drop-shadow(0 0 10px rgba(212,175,55,.5))"
            : "none",
          transform: hovered ? "scale(1.1)" : "scale(1)",
          display: "inline-block",
          transition: "all .3s ease",
        }}
      >
        {intern.icon}
      </div>
      <h4
        style={{
          color: "#fff",
          fontWeight: 800,
          fontSize: "16px",
          margin: "0 0 10px 0",
        }}
      >
        {intern.title}
      </h4>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "7px",
          marginBottom: "12px",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "11px",
            color: "#D4AF37",
            fontWeight: 600,
            padding: "4px 9px",
            background: "rgba(212,175,55,.08)",
            border: "1px solid rgba(212,175,55,.2)",
            borderRadius: "8px",
          }}
        >
          <Clock size={10} /> {intern.duration}
        </span>
        <span
          style={{
            fontSize: "11px",
            color: "rgba(212,175,55,.75)",
            fontWeight: 600,
            padding: "4px 9px",
            background: "rgba(212,175,55,.05)",
            border: "1px solid rgba(212,175,55,.15)",
            borderRadius: "8px",
          }}
        >
          {intern.stipend}
        </span>
      </div>
      <p
        style={{
          color: "rgba(255,255,255,.45)",
          fontSize: "13px",
          lineHeight: 1.7,
          margin: "0 0 18px 0",
          flex: 1,
        }}
      >
        {intern.description}
      </p>
      <button
        onMouseEnter={() => setBtnHov(true)}
        onMouseLeave={() => setBtnHov(false)}
        onClick={() =>
          document
            .querySelector("#contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          color: btnHov ? "#D4AF37" : "rgba(212,175,55,.6)",
          fontSize: "13px",
          fontWeight: 700,
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          transition: "all .3s ease",
        }}
      >
        Apply for Internship
        <ArrowRight
          size={13}
          style={{
            transition: "transform .3s",
            transform: btnHov ? "translateX(4px)" : "translateX(0)",
          }}
        />
      </button>
    </article>
  );
}

/* ─── CultureCard ─────────────────────────────────────────────── */
function CultureCard({ item }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textAlign: "center",
        padding: "18px 12px",
        borderRadius: "16px",
        background: hovered ? "rgba(212,175,55,.08)" : "rgba(212,175,55,.04)",
        border: `1px solid ${hovered ? "rgba(212,175,55,.3)" : "rgba(212,175,55,.1)"}`,
        transition: "all .35s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 30px rgba(212,175,55,.08)" : "none",
        cursor: "default",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "34px",
          height: "34px",
          borderRadius: "10px",
          background: hovered ? "rgba(212,175,55,.15)" : "rgba(212,175,55,.08)",
          border: "1px solid rgba(212,175,55,.2)",
          margin: "0 auto 10px",
          color: "#D4AF37",
          transition: "all .3s ease",
          boxShadow: hovered ? "0 0 14px rgba(212,175,55,.25)" : "none",
        }}
      >
        {item.icon}
      </div>
      <p
        style={{
          color: "#fff",
          fontWeight: 700,
          fontSize: "12px",
          margin: "0 0 3px 0",
        }}
      >
        {item.label}
      </p>
      <p
        style={{ color: "rgba(255,255,255,.35)", fontSize: "10px", margin: 0 }}
      >
        {item.desc}
      </p>
    </div>
  );
}

/* ─── CtaButton ───────────────────────────────────────────────── */
function CtaButton({ fullWidth }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() =>
        document
          .querySelector("#contact")
          ?.scrollIntoView({ behavior: "smooth" })
      }
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "14px 30px",
        background: hovered
          ? "linear-gradient(135deg,#F0D060,#D4AF37,#BF9520)"
          : "linear-gradient(135deg,#D4AF37,#BF9520)",
        color: "#000",
        fontWeight: 900,
        fontSize: "13px",
        borderRadius: "14px",
        border: "none",
        cursor: "pointer",
        transition: "all .35s cubic-bezier(.23,1,.32,1)",
        boxShadow: hovered
          ? "0 0 36px rgba(212,175,55,.7),0 16px 40px rgba(0,0,0,.4)"
          : "0 8px 24px rgba(0,0,0,.3)",
        transform: hovered ? "scale(1.05) translateY(-2px)" : "scale(1)",
        letterSpacing: ".5px",
        textTransform: "uppercase",
        width: fullWidth ? "100%" : "auto",
      }}
    >
      Send Open Application
      <ArrowRight
        size={14}
        style={{
          transition: "transform .3s ease",
          transform: hovered ? "translateX(3px)" : "translateX(0)",
        }}
      />
    </button>
  );
}

/* ─── Main Section ────────────────────────────────────────────── */
export default function Careers() {
  const w = useWindowWidth();
  const isMobile = w < 480;
  const isTablet = w >= 480 && w < 768;
  const isDesktop = w >= 768;
  const [ctaHov, setCtaHov] = useState(false);

  // responsive grid columns
  const cultureCols = isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)";
  const internCols = isMobile
    ? "1fr"
    : isTablet
      ? "repeat(2,1fr)"
      : "repeat(3,1fr)";

  return (
    <section
      id="careers"
      style={{
        position: "relative",
        background: "#000",
        padding: isMobile ? "40px 0" : isTablet ? "80px 0" : "100px 0",
        fontFamily: "'Outfit',sans-serif",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.1);opacity:.7}}
        @keyframes fadeSlideUp{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:translateY(0)}}
        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
      `}</style>

      {/* bg orbs */}
      <div
        style={{
          position: "absolute",
          top: "8%",
          left: "-8%",
          width: isMobile ? "260px" : "480px",
          height: isMobile ? "260px" : "480px",
          background:
            "radial-gradient(circle,rgba(212,175,55,.05) 0%,transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          animation: "pulse 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "-5%",
          width: isMobile ? "180px" : "480px",
          height: isMobile ? "180px" : "480px",
          background:
            "radial-gradient(circle,rgba(212,175,55,.03) 0%,transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          animation: "pulse 12s ease-in-out infinite reverse",
        }}
      />

      {/* grid overlay — desktop only */}
      {isDesktop && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
            linear-gradient(rgba(212,175,55,.025) 1px,transparent 1px),
            linear-gradient(90deg,rgba(212,175,55,.025) 1px,transparent 1px)`,
            backgroundSize: "60px 60px",
            pointerEvents: "none",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%,black,transparent)",
          }}
        />
      )}

      {/* top/bottom gold lines */}
      {["top", "bottom"].map((pos) => (
        <div
          key={pos}
          style={{
            position: "absolute",
            [pos]: 0,
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg,transparent,rgba(212,175,55,.5),transparent)",
          }}
        />
      ))}

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: isMobile ? "0 16px" : isTablet ? "0 24px" : "0 32px",
        }}
      >
        {/* ── HEADER ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: isMobile ? "40px" : isTablet ? "52px" : "68px",
            animation: "fadeSlideUp .8s ease both",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "6px 16px",
              borderRadius: "30px",
              border: "1px solid rgba(212,175,55,.35)",
              background: "rgba(212,175,55,.07)",
              color: "#D4AF37",
              fontSize: "10px",
              fontWeight: 800,
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "20px",
              boxShadow: "0 0 18px rgba(212,175,55,.1)",
            }}
          >
            ✦ Join Our Team ✦
          </span>

          <h2
            style={{
              fontSize: isMobile ? "28px" : isTablet ? "38px" : "52px",
              fontWeight: 900,
              color: "#fff",
              margin: "0 0 16px 0",
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
            }}
          >
            Build Your Career at{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg,#D4AF37 0%,#F0D060 40%,#D4AF37 70%,#BF9520 100%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 4s linear infinite",
                display: "inline-block",
              }}
            >
              PAYIVVA
            </span>
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,.45)",
              fontSize: isMobile ? "13px" : "15px",
              lineHeight: 1.75,
              maxWidth: "540px",
              margin: "0 auto",
            }}
          >
            We're always looking for talented, passionate individuals who want
            to make an impact in the digital world. Join a team that values
            innovation, collaboration and growth.
          </p>
        </div>

        {/* ── CULTURE GRID ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: cultureCols,
            gap: isMobile ? "10px" : "14px",
            marginBottom: isMobile ? "40px" : "60px",
            animation: "fadeSlideUp .8s .15s ease both",
          }}
        >
          {cultureItems.map((item, i) => (
            <CultureCard key={i} item={item} />
          ))}
        </div>

        {/* ── OPEN POSITIONS header ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "22px",
            animation: "fadeSlideUp .8s .25s ease both",
          }}
        >
          <h3
            style={{
              color: "#fff",
              fontWeight: 800,
              fontSize: isMobile ? "17px" : "21px",
              margin: 0,
              letterSpacing: "-.5px",
              whiteSpace: "nowrap",
            }}
          >
            Open Positions
          </h3>
          <div
            style={{
              flex: 1,
              height: "1px",
              minWidth: "20px",
              background:
                "linear-gradient(90deg,rgba(212,175,55,.35),transparent)",
            }}
          />
          <span
            style={{
              padding: "4px 11px",
              background: "rgba(212,175,55,.1)",
              border: "1px solid rgba(212,175,55,.25)",
              borderRadius: "20px",
              color: "#D4AF37",
              fontSize: "11px",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            {jobs.length} Roles
          </span>
        </div>

        {/* ── JOB CARDS ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? "12px" : "14px",
            marginBottom: isMobile ? "52px" : "72px",
          }}
        >
          {jobs.map((job, i) => (
            <JobCard key={i} job={job} index={i} />
          ))}
        </div>

        {/* ── INTERNSHIPS ── */}
        <div style={{ animation: "fadeSlideUp .8s .4s ease both" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "26px",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                flexShrink: 0,
                borderRadius: "12px",
                background: "rgba(212,175,55,.1)",
                border: "1px solid rgba(212,175,55,.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 18px rgba(212,175,55,.15)",
              }}
            >
              <GraduationCap color="#D4AF37" size={19} />
            </div>
            <div>
              <h3
                style={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: isMobile ? "17px" : "21px",
                  margin: 0,
                  letterSpacing: "-.5px",
                }}
              >
                Internship Opportunities
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,.35)",
                  fontSize: "11px",
                  margin: "3px 0 0 0",
                }}
              >
                Kickstart your career with real-world experience
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: internCols,
              gap: isMobile ? "14px" : "18px",
            }}
          >
            {internships.map((intern, i) => (
              <InternCard key={i} intern={intern} />
            ))}
          </div>
        </div>

        {/* ── CTA BOX ── */}
        <div
          onMouseEnter={() => setCtaHov(true)}
          onMouseLeave={() => setCtaHov(false)}
          style={{
            marginTop: isMobile ? "48px" : "72px",
            borderRadius: isMobile ? "20px" : "28px",
            border: `1px solid ${ctaHov ? "rgba(212,175,55,.4)" : "rgba(212,175,55,.15)"}`,
            background: ctaHov
              ? "linear-gradient(135deg,rgba(212,175,55,.1),rgba(212,175,55,.04) 50%,rgba(0,0,0,.5))"
              : "linear-gradient(135deg,rgba(212,175,55,.06),rgba(0,0,0,.4))",
            padding: isMobile
              ? "36px 20px"
              : isTablet
                ? "48px 36px"
                : "60px 48px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            transition: "all .5s cubic-bezier(.23,1,.32,1)",
            boxShadow: ctaHov ? "0 30px 80px rgba(212,175,55,.08)" : "none",
          }}
        >
          {/* corner stars – desktop only */}
          {isDesktop &&
            ["top-left", "top-right", "bottom-left", "bottom-right"].map(
              (pos, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: pos.includes("top") ? "18px" : "auto",
                    bottom: pos.includes("bottom") ? "18px" : "auto",
                    left: pos.includes("left") ? "18px" : "auto",
                    right: pos.includes("right") ? "18px" : "auto",
                    color: "rgba(212,175,55,.2)",
                    fontSize: "18px",
                  }}
                >
                  ✦
                </div>
              ),
            )}

          <div
            style={{
              fontSize: isMobile ? "30px" : "38px",
              marginBottom: "14px",
              filter: "drop-shadow(0 0 18px rgba(212,175,55,.3))",
              display: "inline-block",
            }}
          >
            💼
          </div>

          <h3
            style={{
              color: "#fff",
              fontWeight: 900,
              fontSize: isMobile ? "20px" : isTablet ? "26px" : "30px",
              margin: "0 0 12px 0",
              letterSpacing: "-.8px",
            }}
          >
            Don't see a role that fits?
          </h3>

          <p
            style={{
              color: "rgba(255,255,255,.45)",
              fontSize: isMobile ? "13px" : "15px",
              lineHeight: 1.7,
              margin: "0 auto 28px",
              maxWidth: "460px",
            }}
          >
            We're always open to meeting talented people. Send us your resume
            and tell us why you'd be a great addition to the PAYIVVA team.
          </p>

          <CtaButton fullWidth={isMobile} />
        </div>
      </div>
    </section>
  );
}
