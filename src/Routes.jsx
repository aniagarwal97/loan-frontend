import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Layout from './Containers/Layout';
import Login from './Containers/Login';
import Register from './Containers/Register';


export default class Routes extends Component {
    render() {
        return (
            <div>
                <Route path="/register" exact = {true} component={Register} />
                <Route path="/login" exact = {true} component={Login} />
                <Route path="/layout" component = {Layout} />
            </div>
        )
    }
}
