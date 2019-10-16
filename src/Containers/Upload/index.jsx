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
                <div className='upload_files_head'>
                    <div className='upload_doc'>UPLOADED DOCUMENTS</div>
                    <div className='upload_time'>CREATION DATE</div>
                </div>
                <div className='uploaded_files'>
                    <div className='extension'>BOX</div>
                    <div className='uploaded_doc'>DOC NAME</div>
                    <div className='uploaded_time'>12/12/12</div>
                </div>
                <div className='uploaded_files'>
                    <div className='extension'>BOX</div>
                    <div className='uploaded_doc'>DOC NAME</div>
                    <div className='uploaded_time'>13/12/11</div>
                </div>
                <div className='uploaded_files'>
                    <div className='extension'>BOX</div>
                    <div className='uploaded_doc'>DOC NAME</div>
                    <div className='uploaded_time'>08/09/10</div>
                </div>
                   
            </div>
            
                

        )
    }
}
