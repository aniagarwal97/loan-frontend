import React, { Component } from 'react'
import {withRouter} from 'react-router';
import './styles.scss';

class Header extends Component {
    
    handleLogout = () => {
        localStorage.removeItem('access_token')
        this.props.history.push('')
    }

    render() {
        return (
            <div>
                <div className='header'>
                    <div className='logo'><img src = {require ('../../Assets/logo_ZT.png')} alt='logo' width='180' height='100'/></div>                
                    <div className='logout clickable-item' onClick = {this.handleLogout}><u>Logout</u></div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)