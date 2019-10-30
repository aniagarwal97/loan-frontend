import React, { Component } from 'react'
import { summaryCards } from '../../Utils/Constants';
import { withRouter } from 'react-router';
import './styles.scss';
import CustomMapBox from '../../Components/CustomMapBox';
import Papa from 'papaparse';

const tableData = [
    {
        ndg : '0001',
        gbv: '€1500',
        tipo_prestito : 'Retail Secured',
        granzia: 'S1, €1500',
        prediction: true
    },
    {
        ndg : '0002',
        gbv: '€3500',
        tipo_prestito : 'Retail Unsecured',
        granzia: 'No',
        prediction: false
    },
    {
        ndg : '0003',
        gbv: '€2000',
        tipo_prestito : 'Corporate Secured',
        granzia: '€1500',
        prediction: true
    },
]

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

    handleBackButton = () => {
        this.props.history.push('/layout/upload')
    }

    exportDashboardData = () => {
        let csv = Papa.unparse(tableData);
        var csvData = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
        var csvURL =	null;
        if (navigator.msSaveBlob)
        {
            csvURL = navigator.msSaveBlob(csvData, 'dashboard_report.csv');
        }
        else
        {
            csvURL = window.URL.createObjectURL(csvData);
        }

        var tempLink = document.createElement('a');
        tempLink.href = csvURL;
        tempLink.setAttribute('download', 'dashboard_report.csv');
        tempLink.click();
    }
    render() {
        return (
            <div style={{marginBottom: 20}}>
                <span className='fa fa-arrow-left fa-2x custom_icon clickable-item' title = 'Go back to Uploads' onClick = {this.handleBackButton}></span>
                <div className='dashboard'>
                    <div className='map'>
                        <CustomMapBox />
                    </div>
                    <div className='flex-container'>
                        {summaryCards.map((value, index) => {
                            return (<div key = {index} className={`item clickable-item${value.class && " "+value.class} ${ this.state.currentTab === value.key ? 'active' : ''}`} onClick={() => this.handleTabClick(value)}>
                                <div>{value.title}</div>
                                <div style={{ marginTop: 10, fontWeight: 800 }}>{value.value}</div>
                            </div>)
                        })}
                    </div>
                </div>
                <div className='export_to_excel'>
                    <div className='search_bar'><input style = {{height: 33}}type="text" placeholder="Search.." size='55'/></div>
                    <div className='export-excel clickable-item' onClick = {this.exportDashboardData}>Export to excel page<span className='fa fa-file-excel-o custom_icon'></span></div>
                </div>
                <div>
                    <table className='table clickable-item' style={{boxShadow: '6px 6px 6px grey'}}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #cec9c9' }}>
                                <th>NDG</th>
                                <th>GBV</th>
                                <th>TIPO PRESTITO</th>
                                <th>GARANZIA</th>
                                <th>3 MON PREDICTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableData.map((value, index) => {
                                    return (
                                        <tr style={{ borderBottom: '1px solid #9a55ff' }} onClick={this.handleTableRowClick}>
                                            <td>{value.ndg}</td>
                                            <td>{value.gbv}</td>
                                            <td>{value.tipo_prestito}</td>
                                            <td>{value.granzia}</td>
                                    <td>{value.prediction ? <span className='fa fa-check' style={{ color: 'green', border: '2px solid green', padding: 2 }}></span>: <span className='fa fa-times' style={{ color: 'red', border: '2px solid red', padding: '2px 4px' }}></span>}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default withRouter(Dashboard)