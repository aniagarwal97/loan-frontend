import React, { Component } from 'react'
import './style.scss'
export default class Upload extends Component {
    render() {
        return (
            <div>
                <div className='upload_container'>
                    <label>
                        <div className='uploader'>
                            <span className="fa fa-upload custom_upload_icon"></span>
                            <input className='upload_files' type="file" name="file" />
                        <div className='upload_doc'><u>Upload Documents</u></div>
                        </div>
                    </label>
                         
                </div>
                <div className='upload_files'>
                    <div className='upload_doc'>UPLOADED DOCUMENTS</div>
                    <div className='upload_time'>CREATION DATE</div>
                </div>
                   
            </div>
            
                

        )
    }
}
