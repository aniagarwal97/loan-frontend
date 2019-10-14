import React, { Component } from 'react'
import './style.scss';

export default class Register extends Component {
    render() {
        return (
            <div className='signup_container'>
                <h1 className='sign_up'>Sign up</h1>
                <form>
                    <div className='input_borders'><input placeholder='Organization'/></div>
                    <div className='input_borders'><input placeholder='First Name'/></div>
                    <div className='input_borders'><input placeholder='Last Name'/></div>
                    <div className='input_borders'><input placeholder='Phone No.'/></div>
                    <div className='input_borders'><input placeholder='Email'/></div>
                    <div className='input_borders'><input type='password' placeholder='Password'/></div>
                    <div className='signup_submit'><input type='submit'/></div>
                </form>     
            </div>
        )
    }
}
