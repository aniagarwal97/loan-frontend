import React, { Component } from 'react'
import { withRouter,Link } from 'react-router-dom';
import './styles.scss';
import logo from '../../Assets/logo_ZT.svg';

class Header extends Component {
    
    handleLogout = () => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('adminCurrentDocument')
        localStorage.removeItem('selected_dashboard_document')
        localStorage.removeItem('is_admin')
        this.props.history.push('/app/login')
    }
   
    render() {
        const isUserAdmin = localStorage.getItem('is_admin')
        return (
            <div className='header'>
                <div className='logo clickable-item'><img onClick={()=>{this.props.history.push('/app/login')}} src={logo} alt='logo' width='180' height='100' /></div>
                {isUserAdmin && <div className='opt1'><span><Link style={{color:'black', textDecoration:'none'}} to="/app/layout/user-approval">User Approval</Link></span></div>}
                {isUserAdmin && <div className='opt2'><span><Link style={{color:'black', textDecoration:'none'}} to="/app/layout/document-list">Document List</Link></span></div>}
                {/* <div className='opt3'><span><Link style={{color:'black', textDecoration:'none'}} to="/app/layout/user-list">User List</Link></span></div> */}
                <div className='logout clickable-item' onClick={this.handleLogout}><span>Logout</span></div>
            </div>
        )
    }
}


export default withRouter(Header);