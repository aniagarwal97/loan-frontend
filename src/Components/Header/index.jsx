import React, { Component } from 'react'
import { withRouter,Link } from 'react-router-dom';
import './styles.scss';

class Header extends Component {
    
    handleLogout = () => {
        localStorage.removeItem('access_token')
        this.props.history.push('/app/login')
    }
   
    render() {
        return (
            <div className='header'>
                <div className='logo'><img src={require('../../Assets/logo_ZT.svg')} alt='logo' width='180' height='100' /></div>
                <div className='opt1'><span><Link style={{color:'black', textDecoration:'none'}} to="/layout/user-approval">User Approval</Link></span></div>
                <div className='opt2'><span><Link style={{color:'black', textDecoration:'none'}} to="/layout/document-list">Document List</Link></span></div>
                <div className='opt3'><span><Link style={{color:'black', textDecoration:'none'}} to="/layout/user-list">User List</Link></span></div>
                <div className='logout clickable-item' onClick={this.handleLogout}><span>Logout</span></div>
            </div>
        )
    }
}

export default withRouter(Header)