'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as Actions from '../../store/actions/auth'
import './Auth.css'
import Wedding from '../../images/Wedding.svg'
import { Loader } from 'react-bulma-components'

class VerifyAccount extends Component {
    componentDidMount() {
        const { verifyAccountAction } = this.props
        const email = this.props.match.params.email
        return verifyAccountAction(email)
    }

    render() {
        const { verifyAccount } = this.props
        return (
            <div className="authWrapper">
                <div className="container columnDescriptionWrapper">
                    <div className="columns authColumnsWrapper">
                        {verifyAccount.loading ? (
                            <Loader />
                        ) : (
                            <>
                                {/* cover image */}
                                <div className="column coverImage">
                                    <img src={Wedding} alt="Auth Image" />
                                </div>

                                {/* Account verification information */}
                                <div className="column">
                                    <p>
                                        <b>Your Account has been activated.</b><br /><br /> We glad
                                        to have you on board.<br /><br />To make work easier, we have
                                        compiled a list for your on how to get
                                        started on CardsMaker Platform. 
                                        
                                        <br /><br />
                                        <h4>Awesome Tutorials here</h4>
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ verifyAccount: state.verifyAccount })

const mapDispatchToProps = {
    verifyAccountAction: Actions.VerifyAccountRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyAccount)
