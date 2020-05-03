import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Chart from '../../Components/Chart';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './styles.scss';
import { fetchProfile } from '../../Actions/profileActions';

class UserProfile extends Component {

    handleBackButton = () => {
        this.props.history.push('/app/layout/dashboard')
    }

    componentDidMount(){
        this.props.fetchProfile({document_id : sessionStorage.getItem('selected_dashboard_document'), profile_id : sessionStorage.getItem('selected_user')})
    }
    render() {
        var chartData = this.props.profileData && this.props.profileData.length && this.props.profileData[0];
        var finalChart = [];
        var count = 0;
        if(chartData){
            for (var key of Object.keys(chartData)) {
                if(key.startsWith('m')){
                    count = count + 1;
                    finalChart.push({'name' : `Mese ${count}`, 'amt': chartData[key]})
                }
            }
        }
        
        return (
            <div>
                <div className='user_container'>
                    <span className='fa fa-arrow-left fa-2x custom_icon clickable-item' title = 'Go back to Dashboard' onClick = {this.handleBackButton}></span>
                    <h1 className='uname'>{chartData && chartData.ndg}</h1>
                </div>

                <div className='profile'>
                    <div className='cha'>
                        <div className='chart'>
                            <Chart chartData = {finalChart}/>
                        </div>
                    </div>
                </div>
                {
                    chartData &&
                    <div style={{marginTop: 80}}>
                        <table className='table' style={{boxShadow: '6px 6px 6px grey'}}>
                            <thead>
                            <tr>
                                <th>NDG</th>
                                <th>GBV</th>
                                <th>TIPO PRESTITO</th>
                                <th>GRANZIA</th>
                                <th>3 MON PREDICTION</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr style={{borderBottom: '1px solid #c5bfbf'}}>
                                <td>{chartData.ndg}</td>
                                <td>€{chartData.gbv}</td>
                                <td>{chartData.type_of_customer}</td>
                                <td>€{chartData.garanzia ? chartData.garanzia : 'No'}</td>
                                <td>{chartData.prediction ? <span className='fa fa-check' style={{ color: 'green', border: '2px solid green', padding: 2 }}></span> : <span className='fa fa-times' style={{ color: 'red', border: '2px solid red', padding: '2px 4px' }}></span>}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    profileData : state.profileData
});
const mapDispatchToProps = dispatch => ({
    fetchProfile: bindActionCreators(fetchProfile, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile))