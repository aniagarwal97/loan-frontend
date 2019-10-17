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
                            return (<div className={`item clickable-item ${this.state.currentTab == value.key ? 'active' : ''}`} onClick={() => this.handleTabClick(value)}>
                                <div>{value.title}</div>
                                <div style={{marginTop: 10, fontWeight: 800}}>{value.value}</div>
                            </div>)
                        })}                     
                    </div>
                </div>                
               
                <div>
                     <table className='table'>
                        <tr style={{borderBottom: '1px solid #cec9c9'}}>
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
