import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

export default class ProtectedRoute extends Component {
    render() {
        const { component: Component, token, ...rest} = this.props;

        return (
            <Route 
                {...rest}
                render={props =>
                    token ? <Component {...props} /> : <Redirect to="/login" />
                }
            />
        )
    }
}
