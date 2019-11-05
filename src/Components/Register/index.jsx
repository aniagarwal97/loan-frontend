import React, { Component } from 'react'
import { withRouter } from 'react-router';
import './style.scss';

export default class Register extends Component {

    constructor(){
        super();
        this.state = {
            org : '',
            name : '',
            sname : '',
            phone: '',
            email: '',
            password: '',
            username: ''
        }
    }

    handleInputs = (event, field) => {
        this.setState({
            [field] : event.target.value
        })
        if(field === 'email'){
            this.setState({
                username: event.target.value
            })
        }
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
                        <input placeholder='Organization' onChange = {(event) => {this.handleInputs(event, 'org')}}/>
                    </div>
                    <div className='input_borders'>
                        <span className='fa fa-user custom_icon'></span>
                        <input placeholder='First Name' onChange = {(event) => {this.handleInputs(event, 'name')}}/>
                    </div>
                    <div className='input_borders'>
                        <span className='fa fa-user custom_icon'></span>
                        <input placeholder='Last Name' onChange = {(event) => {this.handleInputs(event, 'sname')}}/>
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
                            <span className='clickable-item' onClick = {this.props.handleSigninClicked}> Sign in</span>
                        </p>
                    </div>
                </form>     
            </div>
        )
    }
}

