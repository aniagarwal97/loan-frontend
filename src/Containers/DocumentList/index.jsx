import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDocuments, uploadDocument } from '../../Actions/documentActions';
import './style.scss'

export default class DocumentList extends Component {

    
    render() {
        return (
            <div className='background'>
                <div className='upload_files_head'>
                    <div className='upload_doc'>UPLOADED DOCUMENTS</div>
                    <div className='upload_time'>CREATION DATE</div>
                </div>
                <div className='uploaded_files'>
                            <div className='extension'>png</div>
                            <div className='uploaded_doc'>Passport</div>
                            <div className='uploaded_time'>30-10-2019</div>
                </div>
                <div className='uploaded_files'>
                            <div className='extension'>png</div>
                            <div className='uploaded_doc'>Green Card</div>
                            <div className='uploaded_time'>01-11-2019</div>
                </div>
                <div className='uploaded_files'>
                            <div className='extension'>png</div>
                            <div className='uploaded_doc'>Report Card</div>
                            <div className='uploaded_time'>10-12-2019</div>
                </div>
            </div>
            
        )
    }
}
