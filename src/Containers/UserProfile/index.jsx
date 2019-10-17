import React, { Component } from 'react'
import './styles.scss';

export default class UserProfile extends Component {
    render() {
        return (
            <div>                
               <div className='user_container'> 
                    <span className='fa fa-arrow-left fa-2x custom_icon'></span>
                    <h1 className='uname'>User Name</h1>
               </div>
                
                <div className='profile'>
                    <div className='map'>m</div>
                    <div className='chart'>c</div>
                </div>
                <div>
                    <table className='table'>
                        <tr>
                            <th>NRG CODE</th>
                            <th>NUM EVENTS</th>
                            <th>ALLOCATED CREDIT</th>
                            <th>UTILIZED CREDIT</th>
                            <th>ALLOC/UTIL RATE</th>
                            <th>3 MON PREDICTION</th>
                        </tr>

                        <tr>
                            <td>14253645</td>
                            <td>12</td>
                            <td>5000</td>
                            <td>1944</td>
                            <td>39%</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
