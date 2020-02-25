import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://cards-maker.netlify.com">
            <h1>Cards Maker</h1>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            {/* <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="#df">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item" href="#df">About</a>
                <a className="navbar-item" href="#df">Jobs</a>
                <a className="navbar-item" href="#df">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="#df">Report an issue</a>
              </div>
            </div> */}
          </div>

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
