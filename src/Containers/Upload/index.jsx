import React, { Component } from 'react'
import './style.scss'
export default class Upload extends Component {
    render() {
        return (
            <div className='upload_container'>
                <label>
                    <div className='uploader'>
                        <span className="fa fa-upload custom_upload_icon"></span>
                        <input className='upload_files' type="file" name="file" />
                    </div>
                </label>
            </div>
        )
    }
}
