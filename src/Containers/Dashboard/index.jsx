import React, { Component } from 'react'
import { summaryCards } from '../../Utils/Constants';
import { withRouter } from 'react-router';
import './styles.scss';
import CustomMapBox from '../../Components/CustomMapBox';

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            currentTab: 1
        }
    }

    handleTabClick = (tab) => {
        this.setState({
            currentTab: tab.key
        })
    }

    handleTableRowClick = () => {
        this.props.history.push('/layout/profile')
    }
    render() {
        return (
            <div>
                <div className='dashboard'>
                    <div className='map'>
                        <CustomMapBox />
                    </div>
                    <div className='flex-container'>
                        {summaryCards.map((value, index) => {
                            return (<div key = {index} className={`item clickable-item ${this.state.currentTab === value.key ? 'active' : ''}`} onClick={() => this.handleTabClick(value)}>
                                <div>{value.title}</div>
                                <div style={{ marginTop: 10, fontWeight: 800 }}>{value.value}</div>
                            </div>)
                        })}
                    </div>
                </div>
                <div className='export_to_excel'>
                    <div className='search_bar'><input type="text" placeholder="Search.." size='55'/></div>
                    <div>Export to excel page<span className='fa fa-file-excel-o custom_icon'></span></div>
                </div>
                <div>
                    <table className='table clickable-item'>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #cec9c9' }}>
                                <th>NDG</th>
                                <th>GBV</th>
                                <th>TIPO PRESTITO</th>
                                <th>GRANZIA</th>
                                <th>3 MON PREDICTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid #cec9c9' }} onClick={this.handleTableRowClick}>
                                <td>0001</td>
                                <td>€1500</td>
                                <td>Retail Secured</td>
                                <td>S1, €1500</td>
                                <td><span className='fa fa-check' style={{ color: 'green' }}></span></td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #cec9c9' }} onClick={this.handleTableRowClick}>
                                <td>0002</td>
                                <td>€3500</td>
                                <td>Retail Unsecured</td>
                                <td>No</td>
                                <td><span className='fa fa-times' style={{ color: 'red' }}></span></td>
                            </tr>
                            <tr onClick={this.handleTableRowClick}>
                                <td>0003</td>
                                <td>€2000</td>
                                <td>Corporate Secured</td>
                                <td>€1500</td>
                                <td><span className='fa fa-check' style={{ color: 'green' }}></span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default withRouter(Dashboard)