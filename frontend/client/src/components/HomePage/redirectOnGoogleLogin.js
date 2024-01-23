import React, { Component } from 'react'
import { Loader } from '../common/loader'

class RedirectOnGoogleLogin extends Component {
    state = {
        loading: true,
    }
    componentDidMount() {
        const { token, id } = this.props.match.params
        localStorage.setItem('token', JSON.stringify(`Bearer ${token}`))
        localStorage.setItem('anonyId', JSON.stringify(id))
        location.href = '/dashboard'
    }
    render() {
        return (
            <div>
                {this.state.loading && <Loader />}
            </div>
        )
    }
}

export default RedirectOnGoogleLogin
