import { useEffect, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Code2,
  Search,
  Share2,
  Megaphone,
  Sparkles,
  Users,
  ArrowUpRight,
} from "lucide-react";
import fullBrandLogo from "../assets/Logo/4efec8ca-3e32-4ce3-8ac8-c606c96c2d8e (2).png";

// Logo sizing config (px) — tweak these values to increase/decrease sizes and gap
const LOGO_SIZE_MOBILE = 80; // mobile topbar (increased)
const LOGO_SIZE_DESKTOP = 128; // desktop header (increased)
const LOGO_SIZE_MENU = 104; // mobile menu header (increased)
const LOGO_GAP = 1; // vertical gap between stacked logos in px

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

// services removed per request

function DesktopLink({ item, onHover }) {
  return (
    <li onMouseEnter={() => onHover(item.mega ? "services" : null)}>
      <NavLink
        to={item.to}
        className={({ isActive }) =>
          `px-3 py-2 rounded-xl text-sm tracking-[0.05em] transition-colors ${
            isActive
              ? "text-cyan-300 bg-cyan-400/10"
              : "text-[var(--text-main)]/80 hover:text-cyan-300 hover:bg-white/8"
          }`
        }
      >
        {item.label}
      </NavLink>
    </li>
  );
}

function LogoSingle({ size = LOGO_SIZE_DESKTOP, shift = 0 }) {
  const resolvedSize = typeof size === "number" ? size : LOGO_SIZE_DESKTOP;
  const style = {
    width: `${resolvedSize}px`,
    height: `${resolvedSize}px`,
    objectFit: "contain",
    transform: `translateY(${shift}px)`,
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img src={fullBrandLogo} alt="PAYIVVA" style={style} />
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Open mobile menu when user taps an image logo on small screens
  useEffect(() => {
    const onDocClick = (e) => {
      if (!isMobile) return;
      const target = e.target;
      const img = target.tagName === "IMG" ? target : target.closest?.("img");
      if (!img) return;
      const src = img.getAttribute("src") || "";
      const alt = (img.getAttribute("alt") || "").toLowerCase();
      if (src.includes("logo") || alt.includes("payivva")) {
        e.preventDefault();
        setMobileOpen(true);
      }
    };

    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [isMobile]);

  const shellStyle = useMemo(
    () => ({
      background: scrolled || isMobile ? "var(--bg-panel)" : "transparent",
      borderBottom:
        scrolled || isMobile
          ? "1px solid var(--border-soft)"
          : "1px solid transparent",
      backdropFilter: scrolled || isMobile ? "blur(14px)" : "blur(0px)",
    }),
    [scrolled, isMobile],
  );

  return (
    <>
      {/* Mobile-only top bar: logo (opens drawer) + hamburger */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-[var(--bg-panel)]/92 backdrop-blur-md border-b border-[var(--border-soft)]">
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="flex items-center gap-3"
        >
          <LogoSingle size={LOGO_SIZE_MOBILE} shift={2} />
          <span className="text-sm font-semibold text-[v1ar(--text-main)] hidden">
            PAYIVVA
          </span>
        </button>

        <button
          onClick={() => setMobileOpen((p) => !p)}
          aria-label="Toggle menu"
          className="w-10 h-10 rounded-xl border border-[var(--border-soft)] bg-white/5 grid place-items-center text-[var(--text-main)]"
        >
          {mobileOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {/* Desktop header */}
      <header
        className="hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={shellStyle}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <LogoSingle size={LOGO_SIZE_DESKTOP} shift={2} />
          </Link>

          <ul className="hidden lg:flex items-center gap-6">
            {links.map((item) => (
              <DesktopLink
                key={item.to}
                item={item}
                onHover={(value) => setMegaOpen(value === "services")}
              />
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold tracking-[0.06em] text-white bg-gradient-to-r from-[#071b64] to-[#00d9ff] hover:brightness-110"
            >
              Let's Talk <ArrowUpRight size={16} />
            </Link>
          </div>
        </nav>

        {/* Services mega-menu removed */}
      </header>

      {/* Mobile menu (outside header) */}
      <div
        className={`lg:hidden fixed inset-0 top-14 z-[60] transition-all duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMobileOpen(false)}
        />

        <div className="absolute inset-0 flex items-start justify-center p-6">
          <div className="w-full max-w-md bg-[var(--bg-surface)]/96 backdrop-blur-xl rounded-2xl border border-[var(--border-soft)] p-6 shadow-lg overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                <LogoSingle size={LOGO_SIZE_MENU} shift={2} />
                <span className="text-lg font-bold">PAYIVVA</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="w-10 h-10 rounded-xl grid place-items-center border border-[var(--border-soft)] bg-white/5"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="mb-6">
              <ul className="flex flex-col gap-4">
                {links.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className="block text-lg font-semibold py-3 px-4 rounded-lg hover:bg-white/5"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mb-6">{/* Services list removed */}</div>

            <div className="mt-4">
              <NavLink
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#071b64] to-[#00d9ff] rounded-xl text-white font-semibold"
              >
                Let's Talk
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
