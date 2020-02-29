import React from "react";
import "./navbar.css";

const Footer = () => {
  return (
    <div className="navBarWrapper">
      <nav
        className="navbar container"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand footerContent">
          <a
            className="navbar-item title is-6"
            href="https://cards-maker.netlify.com"
          >
            <h1 style={{ color: "white", fontWeight: "bold" }}>
              &copy; 2020 - Cards Maker
            </h1>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
