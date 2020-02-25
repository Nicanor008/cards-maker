import React from "react";
import "./navbar.css"

const NavBar = () => {
  return (
    <div className="navBarWrapper">
      <nav className="navbar container" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item title is-4 " href="https://cards-maker.netlify.com">
            <h1>Cards Maker</h1>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="#df">
              Pricing
            </a>
            <a className="navbar-item" href="#df">
              Login
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
