import React from "react";
import NavLink from "./NavLink";
import NavCTA from "./NavCTA";
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";

const MobileDrawer = ({ mobileOpen, handleNavClick, navLinks }) => {
  return (
    <>
      <div 
        className={`mobile-drawer-overlay ${mobileOpen ? "is-open" : ""}`}
        onClick={handleNavClick}
        style={{ zIndex: 90 }}
      />
      
      <div
        id="mobile-menu"
        className="lg:hidden fixed inset-y-0 right-0 w-full sm:w-[450px] z-[100] overflow-y-auto transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          background: "#FFFFFF",
          boxShadow: mobileOpen ? "-20px 0 60px rgba(0,0,0,0.15)" : "none",
        }}
      >
        <div className="flex flex-col min-h-full p-6 pt-24 sm:p-12 sm:pt-32">
          {/* Internal close button for small screens if needed, but the hamburger handles it */}
          
          <div className="flex-1">
            <h3 className="logo-font text-[12px] tracking-[0.2em] uppercase text-[#D4AF37] mb-10 mobile-link" style={{ animationDelay: '100ms' }}>
              Menu
            </h3>
            
            <ul className="space-y-6 mb-16" role="list">
              {navLinks.map((link, i) => (
                <li
                  key={link.to}
                  className="mobile-link"
                  style={{
                    animationDelay: mobileOpen ? `${(i + 2) * 80}ms` : "0ms",
                  }}
                >
                  <NavLink {...link} onClick={handleNavClick} mobile />
                </li>
              ))}
            </ul>

            <div className="mobile-link" style={{ animationDelay: mobileOpen ? `${(navLinks.length + 2) * 80}ms` : "0ms" }}>
              <NavCTA onClick={handleNavClick} mobile />
            </div>
          </div>

          <div className="mt-20 pt-12 border-t border-gray-100 mobile-link" style={{ animationDelay: mobileOpen ? `${(navLinks.length + 4) * 80}ms` : "0ms" }}>
            <h3 className="logo-font text-[10px] tracking-[0.2em] uppercase text-gray-400 mb-8">
              Connect
            </h3>
            
            <div className="space-y-5 mb-10">
              <a href="mailto:info@payivva.com" className="flex items-center gap-5 text-gray-600 hover:text-[#D4AF37] transition-colors group">
                <div className="w-11 h-11 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#D4AF37]/5 group-hover:border-[#D4AF37]/20 transition-all">
                  <Mail size={20} />
                </div>
                <span className="text-[16px] font-medium font-outfit">info@payivva.com</span>
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-5 text-gray-600 hover:text-[#D4AF37] transition-colors group">
                <div className="w-11 h-11 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#D4AF37]/5 group-hover:border-[#D4AF37]/20 transition-all">
                  <Phone size={20} />
                </div>
                <span className="text-[16px] font-medium font-outfit">+91 1234 567 890</span>
              </a>
            </div>

            <div className="flex gap-5">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#D4AF37] hover:text-white transition-all shadow-sm">
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
