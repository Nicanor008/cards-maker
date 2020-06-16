'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../store/actions/auth'
import { InputComponent } from '../../components/common/input'
import toastr from 'toastr'
import { NavLink } from 'react-router-dom'
import './Auth.css'
import Wedding from '../../images/Wedding.svg'

class ResetPassword extends Component {
    state = {
        password: '',
        passwordConfirm: ''
    }

    componentDidUpdate() {
        const { resetPassword } = this.props
        if (resetPassword && resetPassword.message === 'Password has been reset') {
            setTimeout(() => {
                window.location.assign('/login')
            }, 1000)
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    ResetPassword = () => {
        const { password, passwordConfirm } = this.state
        if(password !== passwordConfirm) {
            return toastr.warning("Oops! Passwords must be the same")
        }
        if(password.length < 6) {
            return toastr.warning("Password length is short, atleast 5 characters is cool")
        }
        const { resetPasswordAction } = this.props
        const email = this.props.match.params.email
        return resetPasswordAction({ password }, email)
    }

    render() {
        const { resetPassword } = this.props
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
                                textInputType="password"
                                inputName="password"
                                labelName="Password"
                                placeholderText="***************"
                                onchange={this.onInputChange}
                                error={this.state.password === ''}
                                class="authInput"
                            />
                            <InputComponent
                                textInputType="password"
                                inputName="passwordConfirm"
                                labelName="Confirm Password"
                                placeholderText="***************"
                                onchange={this.onInputChange}
                                error={this.state.passwordConfirm === ''}
                                class="authInput"
                            />

                            {/* forgot password & sign up account */}
                            <div className="AdditionalLoginLinks authInput">
                                <NavLink to="/login" className="authLink">
                                    If not you, let's us know
                                </NavLink>
                            </div>

                            {/* submit button */}
                            <button
                                className={`button is-info authInput ${
                                    resetPassword.loading && `is-loading`
                                }`}
                                type="button"
                                style={{ marginTop: '0.5rem' }}
                                onClick={this.ResetPassword}
                            >
                                Reset Password
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ resetPassword: state.resetPassword })

const mapDispatchToProps = {
    resetPasswordAction: Actions.ResetPasswordRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
