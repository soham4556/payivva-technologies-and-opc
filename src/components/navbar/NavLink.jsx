import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink = ({ to, label, mobile, onClick }) => {
  if (mobile) {
    return (
      <RouterNavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `flex items-center justify-between px-6 py-3.5 text-[15px] font-medium transition-all duration-250 ${
            isActive ? "active-mobile-link" : ""
          }`
        }
        style={({ isActive }) => ({
          color: isActive ? "#D4AF37" : "#0A0A0A",
          background: isActive ? "rgba(0,0,0,0.02)" : "transparent",
          borderLeft: isActive ? "2px solid #D4AF37" : "2px solid transparent",
          letterSpacing: "0.05em",
        })}
      >
        <span
          className="logo-font text-xs tracking-widest uppercase"
          style={{ fontFamily: "inherit" }}
        >
          {label}
        </span>
        {({ isActive }) =>
          isActive && (
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#D4AF37" }}
            />
          )
        }
      </RouterNavLink>
    );
  }

  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `relative flex items-center px-4 py-2 text-[16px] font-medium rounded-[9px] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(0,0,0,0.1)] ${
          isActive ? "active-desktop-link" : ""
        }`
      }
      style={{ color: "#1A1A1A" }}
    >
      {({ isActive }) => (
        <span
          className={`nav-link-text ${isActive ? "is-active" : ""}`}
          data-text={label}
          style={{
            color: "#1A1A1A",
            background: "none",
            WebkitBackgroundClip: "unset",
            WebkitTextFillColor: "unset",
            backgroundClip: "unset",
          }}
        >
          {label}
        </span>
      )}
    </RouterNavLink>
  );
};

export default NavLink;
