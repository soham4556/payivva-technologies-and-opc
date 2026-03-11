import React from "react";
import NavLink from "./NavLink";
import NavCTA from "./NavCTA";

const MobileDrawer = ({ mobileOpen, handleNavClick, navLinks }) => {
  return (
    <div
      id="mobile-menu"
      className="lg:hidden overflow-hidden transition-all duration-500 ease-in-out"
      style={{
        maxHeight: mobileOpen ? "520px" : "0px",
        opacity: mobileOpen ? 1 : 0,
        marginTop: mobileOpen ? "8px" : "0px",
      }}
    >
      <div className="mobile-drawer rounded-2xl mb-4 overflow-hidden">
        {/* top gold line */}
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.1) 70%, transparent)",
          }}
        />

        <ul className="py-2" role="list">
          {navLinks.map((link, i) => (
            <li
              key={link.to}
              className="mobile-link"
              style={{
                animationDelay: mobileOpen ? `${i * 55}ms` : "0ms",
              }}
            >
              <NavLink {...link} onClick={handleNavClick} mobile />
            </li>
          ))}
        </ul>

        <div className="px-5 pb-5 pt-1">
          <NavCTA onClick={handleNavClick} mobile />
        </div>
      </div>
    </div>
  );
};

export default MobileDrawer;
