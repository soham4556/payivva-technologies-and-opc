import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  ArrowRight,
  Heart,
  Send,
  ChevronRight,
  Sparkles,
  Globe,
  Award,
  Users,
  TrendingUp,
  Clock,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

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
const footerServices = [
  { name: "Website Development", icon: Globe, highlight: true },
  { name: "SEO Optimization", icon: TrendingUp },
  { name: "Social Media Marketing", icon: Users },
  { name: "Google & Facebook Ads", icon: Award },
  { name: "Brand Promotion", icon: Sparkles },
  { name: "Lead Generation", icon: Users },
];

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "#0A66C2" },
  { icon: Instagram, href: "#", label: "Instagram", color: "#E1306C" },
  { icon: Twitter, href: "#", label: "Twitter", color: "#1DA1F2" },
  { icon: Facebook, href: "#", label: "Facebook", color: "#1877F2" },
  { icon: Youtube, href: "#", label: "YouTube", color: "#FF0000" },
];

const stats = [
  { number: "50+", label: "Projects Delivered", icon: Award },
  { number: "98%", label: "Client Satisfaction", icon: Heart },
  { number: "24/7", label: "Support Available", icon: Clock },
];

/* ─── Social Button ───────────────────────────────────────────── */
function SocialBtn({ icon: Icon, href, label, color }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Follow PAYIVVA on ${label}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "36px",
        height: "36px",
        borderRadius: "10px",
        background: hov ? `${color}22` : "rgba(255,255,255,.05)",
        border: `1px solid ${hov ? color + "55" : "rgba(255,255,255,.08)"}`,
        color: hov ? color : "rgba(255,255,255,.5)",
        transition: "all .3s cubic-bezier(.23,1,.32,1)",
        transform: hov ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hov ? `0 8px 20px ${color}33` : "none",
        textDecoration: "none",
        flexShrink: 0,
      }}
    >
      <Icon size={16} />
    </a>
  );
}

/* ─── Link Item ───────────────────────────────────────────────── */
function FooterLink({ to, children, chevron }) {
  const [hov, setHov] = useState(false);
  return (
    <li style={{ listStyle: "none" }}>
      <Link
        to={to}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          color: hov ? "#D4AF37" : "rgba(255,255,255,.45)",
          fontSize: "13px",
          textDecoration: "none",
          transition: "all .25s ease",
          transform: hov ? "translateX(4px)" : "translateX(0)",
        }}
      >
        {chevron ? (
          <ChevronRight
            size={13}
            style={{ flexShrink: 0, opacity: hov ? 1 : 0.4 }}
          />
        ) : null}
        {children}
      </Link>
    </li>
  );
}

/* ─── Section title ───────────────────────────────────────────── */
function SectionTitle({ children }) {
  return (
    <h3
      style={{
        color: "#fff",
        fontWeight: 800,
        fontSize: "12px",
        letterSpacing: "2.5px",
        textTransform: "uppercase",
        margin: "0 0 18px 0",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <span
        style={{
          display: "inline-block",
          width: "24px",
          height: "2px",
          background: "linear-gradient(90deg,#D4AF37,#F0D060)",
          borderRadius: "2px",
          flexShrink: 0,
        }}
      />
      {children}
    </h3>
  );
}

/* ─── Contact Card ────────────────────────────────────────────── */
function ContactCard({ href, icon: Icon, label, value, sub }) {
  const [hov, setHov] = useState(false);
  const Tag = href ? "a" : "div";
  return (
    <Tag
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        padding: "14px 16px",
        borderRadius: "14px",
        background: hov ? "rgba(212,175,55,.07)" : "rgba(255,255,255,.03)",
        border: `1px solid ${hov ? "rgba(212,175,55,.3)" : "rgba(255,255,255,.06)"}`,
        textDecoration: "none",
        transition: "all .3s cubic-bezier(.23,1,.32,1)",
        transform: hov ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hov ? "0 8px 24px rgba(212,175,55,.08)" : "none",
        cursor: href ? "pointer" : "default",
      }}
    >
      <div
        style={{
          width: "36px",
          height: "36px",
          flexShrink: 0,
          borderRadius: "10px",
          background: hov ? "rgba(212,175,55,.15)" : "rgba(212,175,55,.08)",
          border: "1px solid rgba(212,175,55,.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all .3s ease",
          boxShadow: hov ? "0 0 12px rgba(212,175,55,.2)" : "none",
        }}
      >
        <Icon color="#D4AF37" size={16} />
      </div>
      <div style={{ minWidth: 0 }}>
        <p
          style={{
            color: "rgba(255,255,255,.35)",
            fontSize: "10px",
            margin: "0 0 2px 0",
          }}
        >
          {label}
        </p>
        <p
          style={{
            color: hov ? "#D4AF37" : "rgba(255,255,255,.8)",
            fontSize: "13px",
            fontWeight: 600,
            margin: "0",
            transition: "color .25s",
            wordBreak: "break-all",
          }}
        >
          {value}
        </p>
        {sub && (
          <p
            style={{
              color: "rgba(255,255,255,.3)",
              fontSize: "11px",
              margin: "2px 0 0",
            }}
          >
            {sub}
          </p>
        )}
      </div>
    </Tag>
  );
}

/* ─── Main Footer ─────────────────────────────────────────────── */
export default function Footer() {
  const w = useWindowWidth();
  const isMobile = w < 480;
  const isTablet = w >= 480 && w < 900;
  const isDesktop = w >= 900;

  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [ctaHov, setCtaHov] = useState(false);
  const [inputFoc, setInputFoc] = useState(false);
  const [sendHov, setSendHov] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const handleScroll = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const hPad = isMobile ? "16px" : isTablet ? "24px" : "40px";

  return (
    <footer
      style={{
        background: "#000",
        fontFamily: "'Segoe UI',-apple-system,BlinkMacSystemFont,sans-serif",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        @keyframes pulse{0%,100%{opacity:.6}50%{opacity:1}}
        * { box-sizing: border-box; }
      `}</style>

      {/* ── CTA BANNER ── */}
      <div
        style={{
          background:
            "linear-gradient(135deg,rgba(212,175,55,.08) 0%,rgba(212,175,55,.03) 50%,rgba(0,0,0,.6) 100%)",
          borderBottom: "1px solid rgba(212,175,55,.15)",
          padding: isMobile
            ? "36px 16px"
            : isTablet
              ? "48px 24px"
              : "56px 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* glow */}
        <div
          style={{
            position: "absolute",
            top: "-40%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "300px",
            background:
              "radial-gradient(ellipse,rgba(212,175,55,.06) 0%,transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            justifyContent: "space-between",
            gap: isMobile ? "28px" : "40px",
          }}
        >
          <div style={{ flex: 1 }}>
            {/* badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "5px 12px",
                borderRadius: "20px",
                background: "rgba(212,175,55,.1)",
                border: "1px solid rgba(212,175,55,.3)",
                color: "#D4AF37",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              <Sparkles size={11} /> Limited Time Offer
            </div>

            <h2
              style={{
                color: "#fff",
                fontWeight: 900,
                fontSize: isMobile ? "22px" : isTablet ? "28px" : "34px",
                margin: "0 0 10px 0",
                lineHeight: 1.2,
                letterSpacing: "-0.8px",
              }}
            >
              Ready to{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg,#D4AF37,#F0D060,#D4AF37,#BF9520)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 4s linear infinite",
                }}
              >
                Scale Your Business?
              </span>
            </h2>

            <p
              style={{
                color: "rgba(255,255,255,.45)",
                fontSize: isMobile ? "13px" : "14px",
                lineHeight: 1.7,
                margin: "0 0 24px 0",
                maxWidth: "480px",
              }}
            >
              Join 500+ businesses that have transformed their digital presence
              with PAYIVVA. Get a free strategy call and detailed audit worth
              ₹15,000.
            </p>

            {/* Stats row */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: isMobile ? "12px" : "20px",
              }}
            >
              {stats.map(({ number, label, icon: Icon }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "9px",
                      background: "rgba(212,175,55,.1)",
                      border: "1px solid rgba(212,175,55,.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={15} color="#D4AF37" />
                  </div>
                  <div>
                    <div
                      style={{
                        color: "#D4AF37",
                        fontWeight: 900,
                        fontSize: "16px",
                        lineHeight: 1,
                      }}
                    >
                      {number}
                    </div>
                    <div
                      style={{
                        color: "rgba(255,255,255,.4)",
                        fontSize: "11px",
                        marginTop: "2px",
                      }}
                    >
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button
            onMouseEnter={() => setCtaHov(true)}
            onMouseLeave={() => setCtaHov(false)}
            onClick={() => handleScroll("#contact")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: isMobile ? "14px 24px" : "16px 32px",
              background: ctaHov
                ? "linear-gradient(135deg,#F0D060,#D4AF37)"
                : "linear-gradient(135deg,#D4AF37,#BF9520)",
              color: "#000",
              fontWeight: 900,
              fontSize: isMobile ? "13px" : "14px",
              borderRadius: "14px",
              border: "none",
              cursor: "pointer",
              transition: "all .35s cubic-bezier(.23,1,.32,1)",
              boxShadow: ctaHov
                ? "0 0 36px rgba(212,175,55,.6),0 16px 40px rgba(0,0,0,.4)"
                : "0 8px 24px rgba(0,0,0,.3)",
              transform: ctaHov ? "scale(1.04) translateY(-2px)" : "scale(1)",
              letterSpacing: ".4px",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              flexShrink: 0,
              width: isMobile ? "100%" : "auto",
              justifyContent: "center",
            }}
          >
            Get Free Consultation
            <ArrowRight
              size={16}
              style={{
                transition: "transform .3s",
                transform: ctaHov ? "translateX(3px)" : "translateX(0)",
              }}
            />
          </button>
        </div>
      </div>

      {/* ── MAIN FOOTER BODY ── */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: isMobile
            ? "40px 16px 32px"
            : isTablet
              ? "52px 24px 36px"
              : "64px 40px 48px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isDesktop ? "280px 1fr" : "1fr",
            gap: isMobile ? "40px" : isTablet ? "48px" : "64px",
          }}
        >
          {/* ── BRAND COLUMN ── */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            {/* Logo */}
            <button
              onClick={() => handleScroll("#home")}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                width: "fit-content",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "48px",
                  height: "48px",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "-4px",
                    background:
                      "radial-gradient(circle,rgba(212,175,55,.25),transparent 70%)",
                    borderRadius: "50%",
                  }}
                />
                <img
                  src={logo}
                  alt="PAYIVVA Technologies logo"
                  style={{
                    width: "48px",
                    height: "48px",
                    objectFit: "contain",
                    position: "relative",
                  }}
                />
              </div>
              <div style={{ textAlign: "left" }}>
                <p
                  style={{
                    color: "#fff",
                    fontWeight: 900,
                    fontSize: "18px",
                    margin: 0,
                    letterSpacing: "1px",
                  }}
                >
                  PAYIVVA
                </p>
                <p
                  style={{
                    color: "rgba(212,175,55,.7)",
                    fontSize: "10px",
                    margin: 0,
                    letterSpacing: "2px",
                  }}
                >
                  TECHNOLOGIES
                </p>
              </div>
            </button>

            <p
              style={{
                color: "rgba(255,255,255,.4)",
                fontSize: "13px",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              PAYIVVA Technologies (OPC) Pvt Ltd — helping businesses scale
              digitally through innovation, strategy, and technology since 2020.
            </p>

            {/* Newsletter */}
            <div>
              <p
                style={{
                  color: "rgba(255,255,255,.6)",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: ".5px",
                  margin: "0 0 10px 0",
                  textTransform: "uppercase",
                }}
              >
                Subscribe to our newsletter
              </p>
              <form
                onSubmit={handleSubscribe}
                style={{
                  display: "flex",
                  gap: "8px",
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setInputFoc(true)}
                  onBlur={() => setInputFoc(false)}
                  placeholder="Enter your email"
                  required
                  style={{
                    flex: 1,
                    background: "rgba(255,255,255,.04)",
                    border: `1px solid ${inputFoc ? "rgba(212,175,55,.5)" : "rgba(255,255,255,.08)"}`,
                    borderRadius: "10px",
                    padding: "10px 14px",
                    color: "#fff",
                    fontSize: "13px",
                    outline: "none",
                    transition: "border-color .2s, box-shadow .2s",
                    boxShadow: inputFoc
                      ? "0 0 0 3px rgba(212,175,55,.08)"
                      : "none",
                    fontFamily: "inherit",
                    minWidth: 0,
                  }}
                />
                <button
                  type="submit"
                  onMouseEnter={() => setSendHov(true)}
                  onMouseLeave={() => setSendHov(false)}
                  aria-label="Subscribe"
                  style={{
                    width: "42px",
                    height: "42px",
                    flexShrink: 0,
                    background: sendHov
                      ? "linear-gradient(135deg,#F0D060,#D4AF37)"
                      : "linear-gradient(135deg,#D4AF37,#BF9520)",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all .3s ease",
                    boxShadow: sendHov
                      ? "0 0 16px rgba(212,175,55,.5)"
                      : "none",
                    transform: sendHov ? "scale(1.08)" : "scale(1)",
                  }}
                >
                  <Send size={15} color="#000" />
                </button>
              </form>
              {isSubscribed && (
                <p
                  style={{
                    color: "#4ade80",
                    fontSize: "12px",
                    margin: "8px 0 0 0",
                    fontWeight: 600,
                  }}
                >
                  ✓ Successfully subscribed!
                </p>
              )}
            </div>

            {/* Social links */}
            <div>
              <p
                style={{
                  color: "rgba(255,255,255,.6)",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: ".5px",
                  margin: "0 0 10px 0",
                  textTransform: "uppercase",
                }}
              >
                Follow Us
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {socials.map((s) => (
                  <SocialBtn key={s.label} {...s} />
                ))}
              </div>
            </div>
          </div>

          {/* ── LINKS + CONTACT ── */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "36px" }}
          >
            {/* Services + Navigation row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr",
                gap: isMobile ? "28px" : "40px",
              }}
            >
              {/* Services */}
              <div>
                <SectionTitle>Services</SectionTitle>
                <ul style={{ margin: 0, padding: 0 }}>
                  {footerServices.map(({ name, icon: Icon, highlight }) => (
                    <ServiceLink
                      key={name}
                      to="/services"
                      icon={Icon}
                      highlight={highlight}
                    >
                      {name}
                    </ServiceLink>
                  ))}
                </ul>
              </div>

              {/* Navigation */}
              <div>
                <SectionTitle>Navigation</SectionTitle>
                <ul
                  style={{
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  {footerNav.map(({ label, href }) => (
                    <FooterLink key={label} to={href} chevron>
                      {label}
                    </FooterLink>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact cards */}
            <div>
              <SectionTitle>Contact</SectionTitle>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)",
                  gap: "10px",
                }}
              >
                <ContactCard
                  href="mailto:info@payivva.com"
                  icon={Mail}
                  label="Email Us"
                  value="info@payivva.com"
                />
                <ContactCard
                  href="tel:+919876543210"
                  icon={Phone}
                  label="Call Us"
                  value="+91 98765 43210"
                />
                <ContactCard
                  icon={MapPin}
                  label="Location"
                  value="India (Remote-first)"
                  sub="Serving worldwide"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,.06)",
          padding: isMobile ? "16px" : "20px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,.25)",
              fontSize: "12px",
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} PAYIVVA Technologies (OPC) Pvt Ltd. All
            rights reserved.
          </p>
          <p
            style={{
              color: "rgba(255,255,255,.2)",
              fontSize: "12px",
              margin: 0,
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Made with{" "}
            <Heart size={11} color="#D4AF37" style={{ display: "inline" }} /> in
            India
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Service Link ────────────────────────────────────────────── */
function ServiceLink({ to, icon: Icon, highlight, children }) {
  const [hov, setHov] = useState(false);
  return (
    <li style={{ listStyle: "none", marginBottom: "2px" }}>
      <Link
        to={to}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "7px 8px",
          borderRadius: "8px",
          color: hov ? "#D4AF37" : "rgba(255,255,255,.45)",
          fontSize: "13px",
          textDecoration: "none",
          transition: "all .25s ease",
          background: hov ? "rgba(212,175,55,.06)" : "transparent",
          transform: hov ? "translateX(3px)" : "translateX(0)",
        }}
      >
        <Icon size={13} style={{ flexShrink: 0, opacity: hov ? 1 : 0.55 }} />
        <span style={{ flex: 1, minWidth: 0 }}>{children}</span>
        {highlight && (
          <span
            style={{
              padding: "2px 7px",
              borderRadius: "20px",
              background: "linear-gradient(135deg,#D4AF37,#F0D060)",
              color: "#000",
              fontSize: "9px",
              fontWeight: 800,
              letterSpacing: ".3px",
              textTransform: "uppercase",
              flexShrink: 0,
            }}
          >
            Popular
          </span>
        )}
      </Link>
    </li>
  );
}
