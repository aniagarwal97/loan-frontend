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
                <table >
                    <thead>
                        <tr >
                            <th>UPLOADED DOCUMENTS</th>
                            <th>CREATION DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.documents && this.props.documents.length && this.props.documents.map((value, index) => {
                                return (
                                    <tr className='uploaded_files clickable-item' key={index} onClick={() => this.handleDocumentSelect(value.guid)}>
                                        <td><span className='extension'>{value.document_name.split(".")[value.document_name.split(".").length - 1]}</span><div style={{marginTop: 11}}>{value.document_name}</div></td>
                                        <td>{value.created_at.split(" ")[0]}</td>
                                    </tr>
                                )
                            })
                            ||
                            <tr><td>There are no pending documents requiring approval</td></tr>
                        }
                    </tbody>
                </table>
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