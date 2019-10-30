import React, { Component } from 'react'
import './style.scss';

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleFieldChange = (field, event) => {
        event.preventDefault();
        this.setState({
            [field]: event.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state)
    }
    render() {
        return (
            <div className='login_container'>
                <h1 className='sign_in'>Sign in</h1>
                <form>
                    <div className='input_borders'>
                        <span className='fa fa-envelope-o custom_icon'></span>
                        <input placeholder='Email' onChange={(event) => { this.handleFieldChange('username', event) }} />
                    </div>
                    <div className='input_borders'>
                        <span className="fa fa-lock custom_icon" aria-hidden="true"></span>
                        <input type='password' placeholder='Password' onChange={(event) => { this.handleFieldChange('password', event) }} />
                    </div>
                    <div className='signin_submit'>
                        <input type='submit' onClick={this.onSubmit} />
                    </div>
                    <div>
                        <p className='sign_up'>Don't have an account? <span className='clickable-item' onClick={this.props.handleSignupClicked}>Sign up</span></p>
                    </div>
                </form>
            </div>
        )
    }
}
