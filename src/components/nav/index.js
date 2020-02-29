import React from "react";
import "./navbar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBarWrapper">
      <nav className="navbar container contentWrapper" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item title is-4">
          <h1 className="textColor">Cards Maker</h1>
          </Link>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <Link to="/create" className="navbar-item textDarkColor">Create</Link>
            {/* <a className="navbar-item textDarkColor" href="#df">
              Login
            </a> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
