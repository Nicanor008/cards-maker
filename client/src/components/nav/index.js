import React from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../images/logo.svg'
import UserIcon from '../../images/user.svg'

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
                        <img
                            src={Logo}
                            alt="logo"
                            style={{ maxHeight: '70px' }}
                        />
                        <span className="textColor">Cards Maker</span>
                    </Link>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="dropdown">
                            <NavLink
                                to={!localStorage.getItem('token') && '/events'}
                                activeClassName="selected"
                                className="navbar-item textDarkColor dropdown-button"
                            >
                                Events
                            </NavLink>
                            <div className="dropdown-content">
                                {localStorage.getItem('token') && (
                                    <>
                                        <NavLink
                                            to="/dashboard"
                                            activeClassName="selected"
                                            className="navbar-item textDarkColor"
                                        >
                                            My Events
                                        </NavLink>
                                        <NavLink
                                            to="/events"
                                            activeClassName="selected"
                                            className="navbar-item textDarkColor"
                                        >
                                            All Events
                                        </NavLink>
                                    </>
                                )}
                            </div>
                        </div>
                        <NavLink
                            to="/create"
                            activeClassName="selected"
                            className="navbar-item textDarkColor"
                        >
                            Create
                        </NavLink>
                        {localStorage.getItem('token') !== null ? (
                            <div className="dropdown">
                                <img
                                    src={UserIcon}
                                    alt="user logo"
                                    className="dropdown-button"
                                    width="40"
                                    height="40"
                                />
                                <div className="dropdown-content">
                                    <NavLink
                                        to="/settings"
                                        className="navbar-item textDarkColor"
                                    >
                                        Settings
                                    </NavLink>
                                    <button
                                        className="navbar-item logoutBtn"
                                        onClick={logoutClickHandler}
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
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
