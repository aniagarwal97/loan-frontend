import React, { Component } from 'react';
import {withRouter} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDocuments, uploadDocument } from '../../Actions/documentActions';
import './style.scss'
class Upload extends Component {

    handleDocumentClick = () => {
        this.props.history.push('/layout/dashboard')
    }

    componentDidMount = () => {
        this.props.fetchDocuments()
    }

    handleFile = (event) => {
        const data = new FormData() 
        data.append('document', event.target.files[0])
        this.props.uploadDocument(data)
    }
    render() {
        return (
            <div style = {{margin: '34px 0'}}>
                <div className='upload_container'>
                    <label>
                        <div className='uploader'>
                            <span className="fa fa-upload custom_upload_icon"></span>
                                <input className='upload_files' type="file" name="file" onChange={this.handleFile}/>
                            <div className='upload_doc'><u>Upload Documents</u></div>
                        </div>
                    </label>
                         
                </div>
                <div className='upload_files_head'>
                    <div className='upload_doc'>UPLOADED DOCUMENTS</div>
                    <div className='upload_time'>CREATION DATE</div>
                </div>
                {
                    (this.props.documents && this.props.documents.documents && this.props.documents.documents.length) ? this.props.documents.documents.map((value, index) => {
                        return (
                        <div className='uploaded_files clickable-item' key={index} onClick = {this.handleDocumentClick}>
                            <div className='extension'>{value.document_name.split(".")[value.document_name.split(".").length - 1]}</div>
                            <div className='uploaded_doc'>{value.document_name}</div>
                            <div className='uploaded_time'>{value.created_at.split(" ")[0]}</div>
                        </div>
                        )
                    })
                    :
                    <div>You have not uploaded any document. Please upload some from the top</div>
                }
            </div>
        )
    }
}
const mapStateToProps = state => ({
    documents: state.documents
});
const mapDispatchToProps = dispatch => ({
    fetchDocuments: bindActionCreators(fetchDocuments, dispatch),
    uploadDocument: bindActionCreators(uploadDocument, dispatch),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Upload));