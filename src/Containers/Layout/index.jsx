import React, { Component } from 'react'
import Header from '../../Components/Header'
import { Route } from "react-router-dom";
import Upload from '../Upload';
import UserApproval from '../UserApproval';
import DashboardUpload from '../DashboardUpload';
import DocumentList from '../DocumentList';
import Dashboard from '../Dashboard';
import UserProfile from '../UserProfile';
import UserList from '../UserList';


export default class Layout extends Component {

    componentDidMount(){
        if (!localStorage.getItem('access_token')){
            this.props.history.push('/app/app/login')
        }
    }
    render() {
        return (
            <div style= {{width: '75%', margin:"auto"}}>
                <Header/>
                <Route path = "/app/layout/upload" exact = {true} component = {Upload} />
                <Route path = "/app/layout/user-approval" exact = {true} component = {UserApproval} />
                <Route path = "/app/layout/dashboard-upload" exact = {true} component = {DashboardUpload} />
                <Route path = "/app/layout/document-list" exact = {true} component = {DocumentList} />
                <Route path = "/app/layout/dashboard" exact = {true} component = {Dashboard} />
                <Route path = "/app/layout/profile" exact = {true} component = {UserProfile} />
                {/* <Route path = "/app/layout/user-list" exact = {true} component = {UserList} /> */}
            </div>
        )
    }
}
