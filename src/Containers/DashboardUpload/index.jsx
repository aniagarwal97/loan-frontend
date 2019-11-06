import React, { Component } from 'react'
import Papa from 'papaparse';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {uploadDashboardData} from '../../Actions/dashboardUploadActions.js';

import './style.scss'


class DashboardUpload extends Component {

    handleFile = (event) => {
        event.preventDefault();
        let file = event.target.files[0];
        Papa.parse(file,
            {
                header: true,
                skipEmptyLines: true,
                escapeChar: 'null',
                complete: (results) => {
                    results.data.map((value, index) => {
                        for (var propName in value) {
                            if (
                                value[propName] === null
                            ) {
                                delete value[propName];
                            }
                            if (
                                propName === 'prediction'
                            ) {
                                if (value[propName].toLowerCase() === 'true') value[propName] = true 
                                else value[propName] = false 
                            }
                        }
                    })
                    this.props.uploadDashboardData({rows: results.data})
                }
            })
    }

    render() {
        return (
            <div>
                <div className='upload_container'>
                    <label>
                        <div className='uploader'>
                            <span className="fa fa-upload custom_upload_icon"></span>
                            <input className='upload_files' type="file" name="file" onChange={this.handleFile} />
                            <div className='upload_doc'><u>Upload Documents</u></div>
                        </div>
                    </label>
                </div>


            </div>

        )
    }
}


const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => ({
    uploadDashboardData: bindActionCreators(uploadDashboardData, dispatch),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardUpload));