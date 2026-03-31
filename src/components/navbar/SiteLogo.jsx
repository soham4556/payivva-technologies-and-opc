import React from "react";
import { Link } from "react-router-dom";

const defaultIcon = "/logo/IMG_7976.PNG";
const defaultWordmark = "/logo/IMG_7977.PNG";

const SiteLogo = ({
  logoIcon = defaultIcon,
  logoWordmark = defaultWordmark,
  to = "/",
  link = true,
  className = "",
}) => {
  const content = (
    <div
      className={`nav-logo-wrap ${className}`}
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
          style={{ color: "#D4AF37", fontWeight: "bold", fontSize: "1.4rem" }}
        >
          P
        </div>
      )}
    </div>
  );

  if (link)
    return (
      <Link to={to} style={{ textDecoration: "none" }}>
        {content}
      </Link>
    );
  return content;
};

export default SiteLogo;
