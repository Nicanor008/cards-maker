'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../store/actions/auth'
import { InputComponent } from '../../components/common/input'
import { NavLink } from 'react-router-dom'
import './Auth.css'
import Wedding from '../../images/Wedding.svg'

class Login extends Component {
    state = {
        email: '',
        password: '',
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
        const data = {
            email: this.state.email,
            password: this.state.password,
        }
        return loginUser(data)
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
                        <div
                            className="column"
                        >
                            <InputComponent
                                labelName="Email"
                                placeholderText="johndoe@example.com"
                                textInputType="email"
                                inputName="email"
                                onchange={this.onInputChange}
                                error={this.state.email === ''}
                                class="authInput"
                            />
                            <InputComponent
                                labelName="Password"
                                placeholderText="*************"
                                inputName="password"
                                textInputType="password"
                                onchange={this.onInputChange}
                                error={this.state.password === ''}
                                class="authInput"
                            />

                            {/* forgot password & sign up account */}
                            <div className="AdditionalLoginLinks authInput">
                                <NavLink to="/forgot-password">
                                    Forgot Password
                                </NavLink>
                                <NavLink to="/create-account">
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

const mapStateToProps = (state) => ({ login: state.loginReducer })

const mapDispatchToProps = {
    loginUser: Actions.LoginRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
