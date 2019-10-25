import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Chart from '../../Components/Chart';

import './styles.scss';

class UserProfile extends Component {

    handleBackButton = () => {
        this.props.history.push('/layout/dashboard')
    }
    render() {
        return (
            <div>
                <div className='user_container'>
                    <span className='fa fa-arrow-left fa-2x custom_icon clickable-item' title = 'Go back to Dashboard' onClick = {this.handleBackButton}></span>
                    <h1 className='uname'>Charlotte Walker</h1>
                </div>

                <div className='profile'>
                    {/* <div className='map'>
                    </div> */}
                        
                    <div className='cha'>
                        <div className='item1'>
                                <h6><span>4000</span> out of 5000</h6>
                                <h6>By 1st of January</h6>
                        </div>
                        <div className='chart'>
                            <Chart />
                        </div>
                    </div>
                </div>
            
                <div>
                    <table className='table' style={{boxShadow: '6px 6px 6px grey'}}>
                        <tr>
                            <th>NDG</th>
                            <th>GBV</th>
                            <th>TIPO PRESTITO</th>
                            <th>GRANZIA</th>
                            <th>3 MON PREDICTION</th>
                        </tr>

                        <tr style={{borderBottom: '1px solid #cec9c9'}}>
                            <td>0001</td>
                            <td>€1500</td>
                            <td>Retail Secured</td>
                            <td>S1, €1500</td>
                            <td><span className='fa fa-check' style={{color: 'green'}}></span></td>
                        </tr>
                        <tr style={{borderBottom: '1px solid #cec9c9'}}>
                            <td>0002</td>
                            <td>€3500</td>
                            <td>Retail Unsecured</td>
                            <td>No</td>
                            <td><span className='fa fa-times' style={{color: 'red'}}></span></td>
                        </tr>
                        <tr>
                            <td>0003</td>
                            <td>€2000</td>
                            <td>Corporate Secured</td>
                            <td>€1500</td>
                            <td><span className='fa fa-check' style={{color: 'green'}}></span></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}


export default withRouter(UserProfile)