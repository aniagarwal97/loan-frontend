import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../../Components/Login';
import Register from '../../Components/Register';
import { requestUserAuthentication, requestUserRegistration } from '../../Actions/authenticationActions';
import './styles.scss';


class UserAuthentication extends Component {
    constructor() {
        super();
        this.state = {
            isLogin: true,
            access_token: ''
        }
    }
    handleSignupClicked = () => {
        this.setState({
            isLogin: !this.state.isLogin
        })
    }

    onLoginSubmit = (data) => {
        this.props.requestUserAuthentication(data)
    }

    static getDerivedStateFromProps(newProps, State) {
        if (localStorage.getItem('access_token')) {
            newProps.history.push('layout/upload')
        }
        return State
    }

    onRegistration = (data) => {
        this.props.requestUserRegistration(data)
    }
    render() {
        return (
            <div className='user-authentication-container'>
                {
                    this.state.isLogin
                        ?
                        <Login onSubmit={this.onLoginSubmit} handleSignupClicked={this.handleSignupClicked} />
                        :
                        <Register handleSigninClicked={this.handleSignupClicked} handleRegistrationSubmit = {this.onRegistration}/>
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(UserAuthentication);