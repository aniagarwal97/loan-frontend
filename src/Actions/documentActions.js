import { DOCUMENT } from '../Utils/actionTypes';

export const fetchDocuments = (payload) => ({
    type: DOCUMENT.FETCH_DOCUMENTS,
    payload,
});


export const successFetchDocuments = (payload) => ({
    type: DOCUMENT.SUCCESS_FETCH_DOCUMENTS,
    payload
})

export const uploadDocument = (payload) => ({
    type: DOCUMENT.UPLOAD_DOCUMENT,
    payload
})