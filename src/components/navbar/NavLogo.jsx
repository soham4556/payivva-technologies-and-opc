import React from "react";
import { Link } from "react-router-dom";

const NavLogo = ({ logoIcon, logoWordmark, compact = false }) => {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 group"
      style={{ textDecoration: "none" }}
    >
      <div
        className="nav-logo-wrap"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "visible",
          transition: "all 0.3s ease",
        }}
      >
        {logoIcon ? (
          <>
            <img
              src={logoIcon}
              alt="Payivva monogram"
              className="nav-logo-icon"
            />
            {logoWordmark ? (
              <div className="nav-logo-wordmark-shell" aria-hidden="true">
                <img
                  src={logoWordmark}
                  alt="Payivva Technologies"
                  className="nav-logo-wordmark"
                />
              </div>
            ) : null}
          </>
        ) : (
          <div
            style={{
              color: "#D4AF37",
              fontWeight: "bold",
              fontSize: "1.4rem",
            }}
          >
            P
          </div>
        )}
      </div>
    </Link>
  );
};

export default NavLogo;
