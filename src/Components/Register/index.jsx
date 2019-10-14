import React, { Component } from 'react'
import './style.scss';

export default class Register extends Component {
    render() {
        return (
            <div>
                <h1 className='sign_up'>Sign up</h1>
                <form>
                    <div><input placeholder='Organization'/></div>
                    <div><input placeholder='Organization'/></div>
                    <div><input placeholder='Organization'/></div>
                    <div><input placeholder='Organization'/></div>
                    <div><input placeholder='Organization'/></div>
                    <div><input placeholder='Organization'/></div>
                </form>     
            </div>
        )
    }
}
