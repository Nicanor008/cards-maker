'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import toastr from 'toastr'
import * as Actions from '../../store/actions/auth'
import { InputComponent } from '../../components/common/input'
import { NavLink } from 'react-router-dom'
import './Auth.css'
import Wedding from '../../images/Wedding.svg'

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

class SignupPage extends Component {
    state = {
        email: '',
        password: '',
        name: '',
        required: true,
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onClickSignup = () => {
        const { signupUser } = this.props
        const { name, email, password } = this.state
        if (name === '') {
            return toastr.warning('Name is required')
        } else if (email === '') {
            return toastr.warning('Email is required')
        } else if (password === '') {
            return toastr.warning('Password is required')
        } else if(!validateEmail(email)) {
            return toastr.warning('Invalid Email Format')
        } else {
            const data = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
            }
            return signupUser(data)
        }
    }

    render() {
        const { signup } = this.props
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
                                    style={{ marginBottom: '1.5rem' }}
                                >
                                    Sign Up Via Google
                                </button>
                            </a>

                            <button
                                className={`button oauthButton`}
                                type="button"
                            >
                                OR
                            </button>

                            <InputComponent
                                labelName="Name"
                                placeholderText="John Doe"
                                inputName="name"
                                textInputType="text"
                                onchange={this.onInputChange}
                                class="authInput"
                                required={this.state.required}
                            />
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
                                    to="/terms-and-conditions"
                                    className="authLink"
                                >
                                    By continuing, you Agree to the terms and
                                    Conditions
                                </NavLink>
                                <NavLink to="/login" className="authLink">
                                    Got Account, Login
                                </NavLink>
                            </div>

                            {/* submit button */}
                            <button
                                className={`button is-info authInput ${
                                    signup.loading && `is-loading`
                                }`}
                                type="button"
                                style={{ marginTop: '0.5rem' }}
                                onClick={this.onClickSignup}
                            >
                                Create Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ signup: state.signup })

const mapDispatchToProps = {
    signupUser: Actions.signupRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)
