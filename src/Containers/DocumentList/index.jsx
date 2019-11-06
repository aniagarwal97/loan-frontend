import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllDocuments, setParsingDocument } from '../../Actions/documentActions';
import './style.scss'

class DocumentList extends Component {

    componentDidMount(){
        this.props.fetchAllDocuments()
    }

    handleDocumentSelect = (guid) => {
        this.props.setParsingDocument(guid);
        this.props.history.push('/app/layout/dashboard-upload')
        localStorage.setItem('adminCurrentDocument', guid)
    }
    render() {
        return (
            <div className='background'>
                <div className='upload_files_head'>
                    <div className='upload_doc'>UPLOADED DOCUMENTS</div>
                    <div className='upload_time'>CREATION DATE</div>
                </div>
                {this.props.documents && this.props.documents.length && this.props.documents.map((value, index) => {
                    return (<div className='uploaded_files' key={index} onClick={()=>{this.handleDocumentSelect(value.guid)}}>
                            <div className='extension'>{value.document_name.split(".")[value.document_name.split(".").length - 1]}</div>
                            <div className='uploaded_doc'>{value.document_name}</div>
                            <div className='uploaded_time'>{value.created_at.split(" ")[0]}</div>
                </div>)
                })}
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    documents: state.adminDocuments
});
const mapDispatchToProps = dispatch => ({
    fetchAllDocuments: bindActionCreators(fetchAllDocuments, dispatch),
    setParsingDocument: bindActionCreators(setParsingDocument, dispatch)
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DocumentList));