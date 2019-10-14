import React, { Component } from 'react'
import './styles.scss';
import Login from '../../Components/Login';
import Register from '../../Components/Register';

export default class UserAuthentication extends Component {
    render() {
        return (
            <div className='user-authentication-container'>
                
                {/* <Register /> */}
                <Login />
            </div>
        )
    }
}
