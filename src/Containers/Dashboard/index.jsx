import React, { Component } from 'react'
import { summaryCards } from '../../Utils/Constants';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import './styles.scss';
import CustomMapBox from '../../Components/CustomMapBox';
import Papa from 'papaparse';
import { fecthDashboard } from '../../Actions/dashboardActions'

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

    handleTableRowClick = (guid) => {
        localStorage.setItem('selected_user', guid)
        this.props.history.push('/app/layout/profile')
    }

    handleBackButton = () => {
        this.props.history.push('/app/layout/upload')
    }

    exportDashboardData = () => {
        let csv = Papa.unparse(this.props.dashboardData);
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

    componentDidMount() {
        this.props.fecthDashboard({document_id:localStorage.getItem('selected_dashboard_document')})
    }
    render() {
        const { portfolio_value, secured_corporate, secured_retail, total_loan, unsecured_corporate, unsecured_retail, good_loan, bad_loan } = this.props.dashboardData;
        const summaryCards = [
            { title: "Total Portfolio Value", key: 1, value: `€ ${portfolio_value || 0}`, class : "" },
            { title: "Number of Loans", key: 2, value: total_loan || 0, class : "" },
            { title: "Retail Loans", key: 3, value: secured_retail + unsecured_retail || 0, class : "" },
            { title: "Corporate Loans", key: 4, value: secured_corporate + unsecured_corporate || 0, class : "" },
            { title: "Good Loans", key: 5, value: good_loan || 0, class : "green-loan" },
            { title: "At risk Loans", key: 6, value: bad_loan || 0, class : "red-loan" }
        ];
        
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
                                this.props.dashboardData && this.props.dashboardData.dashboard && this.props.dashboardData.dashboard.length && this.props.dashboardData.dashboard.map((value, index) => {
                                    return (
                                        <tr key={index} style={{ borderBottom: '1px solid #c5bfbf' }} onClick={() => this.handleTableRowClick(value.guid)}>
                                            <td>{value.ndg}</td>
                                            <td>€{value.gbv}</td>
                                            <td>{value.type_of_customer}</td>
                                            <td>€{value.garanzia ? value.garanzia : 'No'}</td>
                                    <td>{value.prediction ? <span className='fa fa-check' style={{ color: 'green', border: '2px solid green', padding: 2 }}></span>: <span className='fa fa-times' style={{ color: 'red', border: '2px solid red', padding: '2px 4px' }}></span>}</td>
                                        </tr>
                                    )
                                })
                                ||
                                <tr></tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    dashboardData : state.dashboardData
});
const mapDispatchToProps = dispatch => ({
    fecthDashboard: bindActionCreators(fecthDashboard, dispatch),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))