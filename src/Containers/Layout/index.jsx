import React, { Component } from 'react'
import Header from '../../Components/Header'
import { Route } from "react-router-dom";
import Upload from '../Upload';
import UserApproval from '../UserApproval';
import DashboardUpload from '../DashboardUpload';
import DocumentList from '../DocumentList';
import Dashboard from '../Dashboard';
import UserProfile from '../UserProfile';


export default class Layout extends Component {

    componentDidMount(){
        if (!localStorage.getItem('access_token')){
            this.props.history.push('/login')
        }
    }
    render() {
        return (
            <div style= {{width: '75%', margin:"auto"}}>
                <Header />
                <Route path = "/layout/upload" exact = {true} component = {Upload} />
                <Route path = "/layout/user-approval" exact = {true} component = {UserApproval} />
                <Route path = "/layout/dashboard-upload" exact = {true} component = {DashboardUpload} />
                <Route path = "/layout/document-list" exact = {true} component = {DocumentList} />
                <Route path = "/layout/dashboard" exact = {true} component = {Dashboard} />
                <Route path = "/layout/profile" exact = {true} component = {UserProfile} />
            </div>
        )
    }
}
