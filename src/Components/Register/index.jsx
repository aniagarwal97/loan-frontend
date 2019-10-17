import React, { Component } from 'react'
import './style.scss';

export default class Register extends Component {



    
    render() {
        return (
            <div className='signup_container'>
                <h1 className='sign_up'>Sign up</h1>
                <form>
                    <div className='input_borders'><span className='fa fa-university custom_icon'></span><input placeholder='Organization'/></div>
                    <div className='input_borders'><span className='fa fa-user custom_icon'></span><input placeholder='First Name'/></div>
                    <div className='input_borders'><span className='fa fa-user custom_icon'></span><input placeholder='Last Name'/></div>
                    <div className='input_borders'><span className='fa fa-phone custom_icon'></span><input placeholder='Phone No.'/></div>
                    <div className='input_borders'><span className='fa fa-envelope-o custom_icon'></span><input placeholder='Email'/></div>
                    <div className='input_borders'><span className='fa fa-lock custom_icon'></span><input type='password' placeholder='Password'/></div>
                    <div className='signup_submit'><input type='submit'/></div>
                    <div><p className='sign_in'>Already have an account? <u className='clickable-item' onClick = {this.props.handleSigninClicked}>Sign in</u></p></div>
                </form>     
            </div>
        )
    }
}
