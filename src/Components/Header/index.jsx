import React, { Component } from 'react'
import './styles.scss';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className='header'>
                    <div className='logo'>LOGO</div>                
                    <div className='logout'><u>Logout</u></div>
                </div>
            </div>
        )
    }
}
