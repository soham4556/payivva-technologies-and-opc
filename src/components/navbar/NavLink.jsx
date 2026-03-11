import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink = ({ to, label, mobile, onClick }) => {
  if (mobile) {
    return (
      <RouterNavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `group flex items-center justify-between py-3 text-xl font-medium transition-all duration-300 ${
            isActive ? "text-[#D4AF37]" : "text-gray-900"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <div className="flex flex-col">
              <span className="logo-font tracking-[0.05em]">
                {label}
              </span>
              <div 
                className={`h-px bg-[#D4AF37] transition-all duration-500 ${
                  isActive ? "w-12 mt-2" : "w-0 mt-2 opacity-0 group-hover:w-8 group-hover:opacity-50"
                }`}
              />
            </div>
            
            <div 
              className={`w-1.5 h-1.5 rounded-full bg-[#D4AF37] transition-all duration-500 transform ${
                isActive ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-30"
              }`}
            />
          </>
        )}
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
