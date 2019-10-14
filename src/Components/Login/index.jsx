import React, { Component } from 'react'
import './style.scss';

// import './style.css'
export default class Login extends Component {
    render() {
        return (
            <div className='login_container'>
                <h1 className='sign_in'>Sign in</h1>
                <form>
                         <div className='input_borders'><span className='fa fa-envelope-o custom_icon'></span><input placeholder='Email'/></div>                      
                         <div className='input_borders'><span className="fa fa-lock custom_icon" aria-hidden="true"></span><input type='password' placeholder='Password'/></div>
                         {/* <div><input type='submit'/></div> */}
                         <div><p className='sign_up'>Don't have an account? <u>Sign up</u></p></div>                      
                </form> 
                
            </div>
        )
    }
}
