import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDocuments, uploadDocument } from '../../Actions/documentActions';
import ProcessImage from '../../Assets/processes.png'
import './style.scss';

class Upload extends Component {

    constructor(){
        super();
        this.state = {
            fileValue : 'FileName'
        }
        this.fileInput = {}
    }
    handleDocumentClick = (guid, is_Analysed) => {
        if(is_Analysed){
            this.props.history.push('/app/layout/dashboard')
            sessionStorage.setItem('selected_dashboard_document', guid)
        }
    }

    componentDidMount = () => {
        this.props.fetchDocuments()
    }

    handleFile = (event) => {
        const data = new FormData()
        data.append('document', event.target.files[0])
        this.props.uploadDocument(data)
        this.fileInput.value = "";
    }
    render() {
        return (
            <div style={{ margin: '34px 0' }}>
                <img src={ProcessImage}  style={{width: '100%', marginBottom: 30, height: '10%'}}/>
                <div className='upload_container' style={{marginBottom: 80}}>
                    <label>
                        <div className='uploader'>
                            <span className="fa fa-upload custom_upload_icon"></span>
                            <input className='upload_files' type="file" name="file" onChange={this.handleFile} ref={ref=> this.fileInput = ref}/>
                            <div className='upload_doc'><u>Upload Documents</u></div>
                        </div>
                    </label>
                </div>
                <table >
                    <thead>
                        <tr >
                            <th>UPLOADED DOCUMENTS</th>
                            <th>CREATION DATE</th>
                            <th>ANALYSIS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (this.props.documents && this.props.documents.documents && this.props.documents.documents.length) ? this.props.documents.documents.map((value, index) => {
                                return (
                                    <tr className={`uploaded_files ${value.is_Analysed ? 'clickable-item' : ''}`} key={index} onClick={() => this.handleDocumentClick(value.guid, value.is_Analysed)}>
                                        <td><span className='extension'>{value.document_name.split(".")[value.document_name.split(".").length - 1]}</span><div style={{marginTop: 11}}>{value.document_name}</div></td>
                                        <td>{value.created_at.split(" ")[0]}</td>
                                        <td>{value.is_Analysed ? <div>Done</div> : <div title='Analysis might take upto 72 hours'>In Progress</div>}</td>
                                    </tr>
                                )
                            })
                                :
                                <tr><td>You have not uploaded any document. Please upload some from the top</td></tr>
                        }
                    </tbody>
                </table>
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