import React, { Component } from 'react'
import './style.scss';

export default class Register extends Component {

    constructor(){
        super();
        this.state = {
            organization : '',
            first_name : '',
            last_name : '',
            phone: '',
            email: '',
            password: ''
        }
    }

    handleInputs = (event, field) => {
        this.setState({
            [field] : event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleRegistrationSubmit(this.state)
    }
    render() {
        return (
            <div className='signup_container'>
                <h1 className='sign_up'>Sign up</h1>
                <form>
                    <div className='input_borders'>
                        <span className='fa fa-university custom_icon'></span>
                        <input placeholder='Organization' onChange = {(event) => {this.handleInputs(event, 'organization')}}/>
                    </div>
                    <div className='input_borders'>
                        <span className='fa fa-user custom_icon'></span>
                        <input placeholder='First Name' onChange = {(event) => {this.handleInputs(event, 'first_name')}}/>
                    </div>
                    <div className='input_borders'>
                        <span className='fa fa-user custom_icon'></span>
                        <input placeholder='Last Name' onChange = {(event) => {this.handleInputs(event, 'last_name')}}/>
                    </div>
                    <div className='input_borders'>
                        <span className='fa fa-phone custom_icon'></span>
                        <input placeholder='Phone No.' onChange = {(event) => {this.handleInputs(event, 'phone')}}/>
                    </div>
                    <div className='input_borders'>
                        <span className='fa fa-envelope-o custom_icon'></span>
                        <input placeholder='Email' onChange = {(event) => {this.handleInputs(event, 'email')}}/>
                    </div>
                    <div className='input_borders'>
                        <span className='fa fa-lock custom_icon'></span>
                        <input type='password' placeholder='Password' onChange = {(event) => {this.handleInputs(event, 'password')}}/>
                    </div>
                    <div className='signup_submit'>
                        <input type='submit' onClick = {this.handleSubmit}/>
                    </div>
                    <div>
                        <p className='sign_in'>
                            Already have an account? 
                            <u className='clickable-item' onClick = {this.props.handleSigninClicked}>Sign in</u>
                        </p>
                    </div>
                </form>     
            </div>
        )
    }
}
