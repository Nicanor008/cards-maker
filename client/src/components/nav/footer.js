import React from "react";
import "./navbar.css";

const Footer = () => {
  return (
    <div className="navBarWrapper">
      <nav
        className="navbar container"
      >
        <div className="navbar-brand footerContent">
          <a
            className="navbar-item title is-6"
            href="https://cards-maker.netlify.com"
          >
            <p style={{ color: "white", fontWeight: "bold" }}>
              &copy; 2020 - Cards Maker
            </p>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Footer;
