import React, { Component } from 'react'
import './styles.scss';
import { summaryCards } from '../../Utils/Constants';

export default class Dashboard extends Component {

    constructor(){
        super();
        this.state = {
            currentTab : 1
        }
    }

    handleTabClick = (tab) => {
        this.setState({
            currentTab: tab.key
        })
    }
    render() {
        return (
            <div>
                <div className='dashboard'>
                    <div className='map'>
                    </div>
                    <div className='flex-container'>
                        {summaryCards.map((value, index) => {
                            return (<div className={`item ${this.state.currentTab == value.key ? 'active' : ''}`} onClick={() => this.handleTabClick(value)}>
                                <div>{value.title}</div>
                                <div style={{marginTop: 10}}>{value.value}</div>
                            </div>)
                        })}                     
                    </div>
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
                            <td>14253654</td>
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
