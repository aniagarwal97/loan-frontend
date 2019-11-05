import React, { Component } from 'react'
import { withRouter } from 'react-router';
import './styles.scss';

class Header extends Component {

    handleLogout = () => {
        localStorage.removeItem('access_token')
        this.props.history.push('')
    }

    render() {
        return (
            <div className='header'>
                <div className='logo'><img src={require('../../Assets/logo_ZT.svg')} alt='logo' width='180' height='100' /></div>
                <div className='logout clickable-item' onClick={this.handleLogout}><span>Logout</span></div>
            </div>
        )
    }
}

export default withRouter(Header)