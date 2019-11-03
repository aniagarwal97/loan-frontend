import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.scss'
import { fetchInactiveUsers, approveUser, rejectUser } from '../../Actions/UserApproval';

class UserApproval extends Component {

    componentDidMount(){
        this.props.fetchInactiveUsers()
    }

    handleAcceptUser = (user_id) => {
        this.props.approveUser({user_id : user_id})
    }

    handleRejectUser = (user_id) => {
        this.props.rejectUser({user_id : user_id})
    }
    render() {
        return (
            <div className="user_approval_page">
                <table className='user_approval_table'>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Organization</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.inactiveUsers && this.props.inactiveUsers.length && this.props.inactiveUsers.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{value.first_name}</td>
                                        <td>{value.second_name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.org}</td>
                                        <td className='clickable-item'><span className="accept" onClick = {() => {this.handleAcceptUser(value.guid)}}>Accept</span> / <span onClick = {() => {this.handleRejectUser(value.guid)}} className="reject">Reject</span></td>
                                    </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    inactiveUsers: state.inactiveUsers
});
const mapDispatchToProps = dispatch => ({
    fetchInactiveUsers: bindActionCreators(fetchInactiveUsers, dispatch),
    approveUser: bindActionCreators(approveUser, dispatch),
    rejectUser: bindActionCreators(rejectUser, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserApproval);
