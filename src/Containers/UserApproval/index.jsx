import React, { Component } from 'react'
import { withRouter } from 'react-router';
import './style.scss'

export default class UserApproval extends Component {
    render() {
        return (
            <div className="user_approval_page">
                <div className="user_approval">
                    <div className="username">NAME</div>
                    <div className="organization">ORGANIZATION</div>
                    <div className="request">REQUEST</div>
                </div>
                <div className="list_user">
                    <div className="user_name">Aniruddh</div>
                    <div className="org">ExternLabs</div>
                    <div className="req"><span className="accept">Accept</span> / <span className="reject">Reject</span></div>
                </div>
                <div className="list_user">
                    <div className="user_name">Zach</div>
                    <div className="org">ABC</div>
                    <div className="req"><span className="accept">Accept</span> / <span className="reject">Reject</span></div>
                </div>
                <div className="list_user">
                    <div className="user_name">Mike</div>
                    <div className="org">DEF</div>
                    <div className="req"><span className="accept">Accept</span> / <span className="reject">Reject</span></div>
                </div>
                <div className="list_user">
                    <div className="user_name">Mark</div>
                    <div className="org">GHI</div>
                    <div className="req"><span className="accept">Accept</span> / <span className="reject">Reject</span></div>
                </div>

            </div>
        )
    }
}
