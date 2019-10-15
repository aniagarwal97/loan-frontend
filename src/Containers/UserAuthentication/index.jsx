import React, { Component } from 'react'
import './styles.scss';
import Login from '../../Components/Login';
import Register from '../../Components/Register';
import Header from '../../Components/Header';
import Upload from '../../Containers/Upload';



export default class UserAuthentication extends Component {
    render() {
        return (
            <div className='user-authentication-container'>
                
                {/* <Register /> */}
                {/* <Login /> */}
                {/* <Header />    */}
                <Upload />
            </div>
        )
    }
}
