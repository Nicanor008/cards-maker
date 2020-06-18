import { Route, withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class PrivateRoute extends Component {
    componentDidMount() {
        const token = localStorage.getItem('token')
        const { requiresAuth } = this.props
        if (token === null || !requiresAuth) {
            return (location.href = '/')
            // this.props.history.push('/')
        }
    }

    render() {
        return <Route {...this.props} />
    }
}

export default withRouter(connect(null, null)(PrivateRoute))
