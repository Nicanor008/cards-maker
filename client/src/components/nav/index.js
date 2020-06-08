import React from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'
// import NavLink from './navLink'

const NavBar = () => {
    return (
        <div className="navBarWrapper">
            <nav
                className="navbar container contentWrapper"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item title is-3  NavBarBrand">
                        <span className="textColor">Cards Maker</span>
                    </Link>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <NavLink
                            to="/create"
                            activeClassName="selected"
                            className="navbar-item textDarkColor"
                        >
                            Create
                        </NavLink>
                        <NavLink
                            to="/me"
                            activeClassName="selected"
                            className="navbar-item textDarkColor"
                        >
                            me
                        </NavLink>
                        <NavLink
                            to="/login"
                            activeClassName="selected"
                            className="navbar-item textDarkColor"
                        >
                            Login
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
