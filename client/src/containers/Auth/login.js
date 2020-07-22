'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import toastr from 'toastr'
import * as Actions from '../../store/actions/auth'
import { InputComponent } from '../../components/common/input'
import { NavLink } from 'react-router-dom'
import './Auth.css'
import Wedding from '../../images/Wedding.svg'
const dotenv = require('dotenv').config()

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class Login extends Component {
    state = {
        email: '',
        password: '',
        required: true,
    }

    componentDidUpdate() {
        const { login } = this.props
        if (login && login.message === 'Login successful') {
            setTimeout(() => {
                window.location.assign('/dashboard')
            }, 1000)
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onClickLogin = () => {
        const { loginUser } = this.props
        const { email, password } = this.state
        if (email === '') {
            return toastr.warning('Email is required')
        } else if (password === '') {
            return toastr.warning('Password is required')
        } else if(!validateEmail(email)) {
            return toastr.warning('Invalid Email Format')
        } else {
            const data = {
                email: this.state.email,
                password: this.state.password,
            }
            return loginUser(data)
        }
    }

    render() {
        const { login } = this.props
        return (
            <div className="authWrapper">
                <div className="container columnDescriptionWrapper">
                    <div className="columns authColumnsWrapper">
                        {/* cover image */}
                        <div className="column coverImage">
                            <img src={Wedding} alt="Auth Image" />
                        </div>

                        {/* login inputs */}
                        <div className="column authInputWrapper">
                            {/* google sign up */}
                            <a href="https://cardsmaker.herokuapp.com/auth/google">
                                <button
                                    className={`button is-info authInput`}
                                    type="button"
                                    style={{
                                        marginTop: '1.5rem',
                                        marginBottom: '0.8rem',
                                    }}
                                >
                                    Login Via Google
                                </button>
                            </a>

                            <button
                                className={`button oauthButton`}
                                type="button"
                            >
                                OR
                            </button>

                            <InputComponent
                                labelName="Email"
                                placeholderText="johndoe@example.com"
                                textInputType="email"
                                inputName="email"
                                onchange={this.onInputChange}
                                class="authInput"
                            />
                            <InputComponent
                                labelName="Password"
                                placeholderText="*************"
                                inputName="password"
                                textInputType="password"
                                onchange={this.onInputChange}
                                class="authInput"
                            />

                            {/* forgot password & sign up account */}
                            <div className="AdditionalLoginLinks authInput">
                                <NavLink
                                    to="/forgot-password"
                                    className="authLink"
                                >
                                    Forgot Password
                                </NavLink>
                                <NavLink to="/signup" className="authLink">
                                    Create Account
                                </NavLink>
                            </div>

                            {/* submit button */}
                            <button
                                className={`button is-info authInput ${
                                    login.loading && `is-loading`
                                }`}
                                type="button"
                                style={{ marginTop: '0.5rem' }}
                                onClick={this.onClickLogin}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    login: state.loginReducer,
    google: state.google,
})

const mapDispatchToProps = {
    loginUser: Actions.LoginRequest,
    googleLogin: Actions.GoogleLoginRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
