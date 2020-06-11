import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { PrivateRoute } from './privateRoute';

export class WrappedRoute extends Component {
    render() {
        const { component, useAppFrame } = this.props;
        if (useAppFrame) {
            return (
                <React.Fragment>
                    <PrivateRoute {...this.props}>{component}</PrivateRoute>
                </React.Fragment>
            );
        } else {
            return <Route {...this.props} component={component} />;
        }
    }
}

export default WrappedRoute;
