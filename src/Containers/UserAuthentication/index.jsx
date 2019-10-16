import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../../Components/Login';
import Register from '../../Components/Register';
import { requestUserAuthentication } from '../../Actions/loginActions';
import './styles.scss';


class UserAuthentication extends Component {
    
    
    componentDidMount() {
        this.props.requestUserAuthentication()
    }
    
    render() {
        
        return (
            <div className='user-authentication-container'>
                <Login />
                <Register />
            </div>
        )
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
	requestUserAuthentication: bindActionCreators(requestUserAuthentication, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAuthentication);