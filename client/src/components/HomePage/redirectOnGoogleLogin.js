import React, { Component } from 'react'
import Version from '../../images/unboxing.svg'
import { Loader } from '../common/loader'

class RedirectOnGoogleLogin extends Component {
    state = {
        loading: true,
    }
    componentDidMount() {
        const { token, id } = this.props.match.params
        localStorage.setItem('token', token)
        localStorage.setItem('anonyId', id)
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
