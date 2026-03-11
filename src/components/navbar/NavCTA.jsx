import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const NavCTA = ({ onClick, mobile }) => {
  const className = mobile
    ? "cta-btn flex items-center justify-center gap-2 w-full py-3.5 text-black font-bold text-sm rounded-xl shadow-xl"
    : "cta-btn hidden lg:inline-flex items-center gap-2 px-6 py-2.5 text-black font-bold text-[15px] tracking-wider rounded-[10px] shadow-lg";

  return (
    <Link to="/contact" onClick={onClick} className={className}>
      Get Started
      <ArrowUpRight size={mobile ? 16 : 15} strokeWidth={2.5} />
    </Link>
  );
};

export default NavCTA;
