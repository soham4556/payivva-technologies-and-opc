import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import NavLogo from "./navbar/NavLogo";
import NavLink from "./navbar/NavLink";
import NavCTA from "./navbar/NavCTA";
import MobileDrawer from "./navbar/MobileDrawer";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  /* ── Scroll effect only for background ── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Close on resize ── */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ── Cursor glow on header ── */
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');

        .nav-font { font-family: 'Outfit', sans-serif; }
        .logo-font { font-family: 'Cinzel', serif; }

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes mobileItemIn {
          from { opacity: 0; transform: translateX(-18px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes borderSpin {
          to { --angle: 360deg; }
        }

        .shimmer-logo {
          background: linear-gradient(90deg, #D4AF37 0%, #FFF0A0 40%, #D4AF37 60%, #B8921E 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3.5s linear infinite;
        }


        .cta-btn {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #D4AF37 0%, #F7E070 50%, #B8921E 100%);
          background-size: 200% 200%;
          background-position: 0% 50%;
          transition: background-position 0.5s ease, transform 0.25s ease, box-shadow 0.3s ease;
        }
        .cta-btn:hover {
          background-position: 100% 50%;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(212,175,55,0.55), 0 0 0 1px rgba(212,175,55,0.3);
        }
        .cta-btn:active { transform: translateY(0) scale(0.97); }
        .cta-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
          pointer-events: none;
        }

        .mobile-link {
          animation: mobileItemIn 0.4s ease both;
        }

        .cursor-glow {
          pointer-events: none;
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%);
          transform: translate(-50%, -50%);
          transition: width 0.3s ease, height 0.3s ease;
        }

        .header-border-active {
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }


        .mobile-drawer {
          background: white;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 20px 60px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,1);
        }

        .nav-link-text {
          position: relative;
          letter-spacing: 0.04em;
        }
        .nav-link-text::before {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          background: none; /* Removed gradient */
          -webkit-background-clip: unset;
          -webkit-text-fill-color: unset;
          background-clip: text;
          color: #D4AF37; /* Gold for subtle interactive feedback */
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .nav-link-text.is-active::before,
        a:hover .nav-link-text::before {
          opacity: 1;
        }
      `}</style>

      <header
        onMouseMove={handleMouseMove}
        className={`nav-font fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "header-border-active py-0" : "py-2"
        }`}
        style={{
          background: scrolled ? "#FFFFFF" : "rgba(255,255,255,0.85)",
          backdropFilter: "blur(20px) saturate(140%)",
          boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.05)" : "none",
        }}
        role="banner"
      >
        {/* Cursor glow */}
        <div
          className="cursor-glow"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            width: 340,
            height: 340,
          }}
        />

        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* ── Left Side: Logo ── */}
            <NavLogo logo={logo} />

            {/* ── Right Side: Links + CTA + Hamburger ── */}
            <div className="flex items-center gap-4 lg:gap-8">
              {/* Desktop Links */}
              <div className="hidden lg:block">
                <ul className="flex items-center gap-4" role="list">
                  {navLinks.map((link) => (
                    <li key={link.to}>
                      <NavLink {...link} onClick={handleNavClick} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA + Hamburger Area */}
              <div className="flex items-center gap-3">
                <NavCTA onClick={handleNavClick} />

                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="lg:hidden relative p-2.5 rounded-[10px] transition-all duration-300 focus:outline-none"
                  style={{
                    background: mobileOpen
                      ? "rgba(0,0,0,0.04)"
                      : "rgba(0,0,0,0.02)",
                    border: "1px solid rgba(0,0,0,0.08)",
                    color: mobileOpen ? "#1A1A1A" : "#0A0A0A",
                  }}
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileOpen}
                  aria-controls="mobile-menu"
                >
                  <span
                    style={{
                      display: "block",
                      transition: "transform 0.3s, opacity 0.3s",
                      transform: mobileOpen ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                  >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <MobileDrawer
            mobileOpen={mobileOpen}
            handleNavClick={handleNavClick}
            navLinks={navLinks}
          />
        </nav>
      </header>
    </>
  );
}
