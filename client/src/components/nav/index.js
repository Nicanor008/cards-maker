import React from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../images/logo.svg'

// logout onClick Handler
function logoutClickHandler(e) {
    e.preventDefault()
    localStorage.removeItem('token')
    return window.location.replace('/')
}

const NavBar = () => {
    return (
        <div className="navBarWrapper">
            <nav
                className="navbar container contentWrapper"
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <Link
                        to="/"
                        className="title is-3  NavBarBrand"
                        style={{ display: 'flex' }}
                    >
                    <img src={Logo} alt="logo" style={{maxHeight: '70px'}} />
                        <span className="textColor">Cards Maker</span>
                    </Link>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <NavLink
                            to="/events"
                            activeClassName="selected"
                            className="navbar-item textDarkColor"
                        >
                            Events
                        </NavLink>
                        {localStorage.getItem('token') && (
                            <NavLink
                                to="/dashboard"
                                activeClassName="selected"
                                className="navbar-item textDarkColor"
                            >
                                Dashboard
                            </NavLink>
                        )}
                        <NavLink
                            to="/create"
                            activeClassName="selected"
                            className="navbar-item textDarkColor"
                        >
                            Create
                        </NavLink>
                        {localStorage.getItem('token') !== null ? (
                            <button
                                className="navbar-item logoutBtn"
                                onClick={logoutClickHandler}
                            >
                                Logout
                            </button>
                        ) : (
                            <NavLink
                                to="/login"
                                className="navbar-item textDarkColor"
                            >
                                Join
                            </NavLink>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
