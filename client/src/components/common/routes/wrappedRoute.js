import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute } from './privateRoute';

export class WrappedRoute extends Component {
    componentDidMount() {
        const token = localStorage.getItem('token')
        const { requiresAuth } = this.props
        if (token === null || !requiresAuth) {
            return (location.href = '/')
            // this.props.history.push('/')
        }
    }
    
    render() {
        const { component, useAppFrame } = this.props;
        if (useAppFrame) {
            return (
                <React.Fragment>
                    <PrivateRoute {...this.props} />
                </React.Fragment>
            );
        } else {
            return <Route {...this.props} component={component} />;
        }
    }
}

export default WrappedRoute;
