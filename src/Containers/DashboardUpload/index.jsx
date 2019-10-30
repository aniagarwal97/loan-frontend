import React, { Component } from 'react'
import { withRouter } from 'react-router';
import './style.scss'

export default class DashboardUpload extends Component {
    render() {
        return (
            <div>
                <div className='upload_container'>
                    <label>
                        <div className='uploader'>
                            <span className="fa fa-upload custom_upload_icon"></span>
                                <input className='upload_files' type="file" name="file" onChange={this.handleFile}/>
                            <div className='upload_doc'><u>Upload Documents</u></div>
                        </div>
                    </label>
                </div>
            </div>

        )
    }
}
