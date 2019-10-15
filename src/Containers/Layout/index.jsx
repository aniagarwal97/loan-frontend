import React, { Component } from 'react'
import Header from '../../Components/Header'
import { Route } from "react-router-dom";
import Upload from '../Upload';
import Dashboard from '../Dashboard';
import UserProfile from '../UserProfile';


export default class Layout extends Component {
    render() {
        return (
            <div style= {{width: '75%', margin:"auto"}}>
                <Header />
                <Route path = "/layout/upload" exact = {true} component = {Upload} />
                <Route path = "/layout/dashboard" exact = {true} component = {Dashboard} />
                <Route path = "/layout/profile" exact = {true} component = {UserProfile} />
            </div>
        )
    }
}
