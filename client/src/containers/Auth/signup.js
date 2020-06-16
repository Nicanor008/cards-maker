'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../store/actions/auth'
import { InputComponent } from '../../components/common/input'
import { NavLink } from 'react-router-dom'
import './Auth.css'
import Wedding from '../../images/Wedding.svg'

class SignupPage extends Component {
    state = {
        email: '',
        password: '',
        name: '',
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onClickSignup = () => {
        const { signupUser } = this.props
        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }
        return signupUser(data)
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
                        <div className="column">
                            <InputComponent
                                labelName="Name"
                                placeholderText="John Doe"
                                inputName="name"
                                textInputType="text"
                                onchange={this.onInputChange}
                                error={this.state.name === ''}
                                class="authInput"
                            />
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
                                <NavLink to="/terms-and-conditions" className="authLink">
                                    Agree to the terms and Conditions
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
