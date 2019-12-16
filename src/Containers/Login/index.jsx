import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestUserAuthentication, requestUserRegistration } from '../../Actions/authenticationActions';
import './style.scss';

class Login extends Component {

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
        this.props.requestUserAuthentication(this.state)
    }

    static getDerivedStateFromProps(newProps, State) {
        if (localStorage.getItem('access_token')) {
            newProps.history.push('/app/layout/upload')
        }
        return State
    }

    handleSignupClicked = () => {
        this.props.history.push('/app/register')
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
                        <input type='submit' onClick={this.onSubmit} value="SIGN IN"/>
                    </div>
                    <div>
                        <p className='sign_up'>Don't have an account? <span className='clickable-item' onClick={this.handleSignupClicked}>Sign up</span></p>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});
const mapDispatchToProps = dispatch => ({
    requestUserAuthentication: bindActionCreators(requestUserAuthentication, dispatch),
    requestUserRegistration: bindActionCreators(requestUserRegistration, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);