'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../store/actions/auth'
import { InputComponent } from '../../components/common/input'
import { NavLink } from 'react-router-dom'
import './Auth.css'
import Wedding from '../../images/Wedding.svg'

class ForgotPassword extends Component {
    state = {
        email: '',
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    sendPasswordResetLink = () => {
        const { forgotPasswordAction } = this.props
        const { email } = this.state
        return forgotPasswordAction(email)
    }

    render() {
        const { forgotPassword } = this.props
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
                                textInputType="email"
                                inputName="email"
                                labelName="Email"
                                placeholderText="johndoe@example.com"
                                onchange={this.onInputChange}
                                error={this.state.email === ''}
                                class="authInput"
                            />

                            {/* forgot password & sign up account */}
                            <div className="AdditionalLoginLinks authInput">
                                <NavLink to="/login" className="authLink">
                                    Got an account, Login
                                </NavLink>
                                <NavLink to="/signup" className="authLink">
                                    Create Account
                                </NavLink>
                            </div>

                            {/* submit button */}
                            <button
                                className={`button is-info authInput ${
                                    forgotPassword.loading && `is-loading`
                                }`}
                                type="button"
                                style={{ marginTop: '0.5rem' }}
                                onClick={this.sendPasswordResetLink}
                            >
                                Send Password Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ forgotPassword: state.forgotPassword })

const mapDispatchToProps = {
    forgotPasswordAction: Actions.forgotPasswordRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
