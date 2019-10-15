import React, { Component } from 'react'
import { Route } from "react-router-dom";
import UserAuthentication from './Containers/UserAuthentication';
import Layout from './Containers/Layout';


export default class Routes extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact = {true} component={UserAuthentication} />
                <Route path = "/layout" component = {Layout} />
            </div>
        )
    }
}
