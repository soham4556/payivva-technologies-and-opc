import React from "react";
import { Link } from "react-router-dom";

const NavLogo = ({ logo }) => {
  return (
    <Link
      to="/"
      className="flex items-center gap-4 group flex-shrink-0"
      aria-label="PAYIVVA Technologies — Home"
    >
      <div className="relative flex-shrink-0 -ml-2">
        <img
          src={logo}
          alt="PAYIVVA Technologies logo"
          className="w-[100px] sm:w-[100px] lg:w-[100px] h-auto object-contain transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(0,0,0,0.1)]"
        />
      </div>

      <div className="flex flex-col leading-tight">
        <span className="logo-font shimmer-logo text-lg sm:text-xl lg:text-2xl font-bold tracking-widest uppercase">
          PAYIVVA
        </span>
        <div className="flex flex-col">
          <span
            className="text-[10px] lg:text-[11px] font-medium tracking-[0.45em] uppercase mt-0.5"
            style={{ color: "rgba(0,0,0,0.5)" }}
          >
            Technologies
          </span>
          <span className="text-[9px] lg:text-[10px] font-semibold tracking-[0.2em] mt-1 text-[#D4AF37] uppercase">
            Inspiring Innovations
          </span>
        </div>
      </div>
    </Link>
  );
};

export default NavLogo;
