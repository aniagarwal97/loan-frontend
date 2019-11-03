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

export const fetchAllDocuments = () => ({
    type: DOCUMENT.FETCH_ALL_DOCUMENTS,
});

export const successFetchAllDocuments = (payload) => ({
    type: DOCUMENT.SUCCESS_FETCH_ALL_DOCUMENTS,
    payload,
});

export const setParsingDocument = (payload) => ({
    type: DOCUMENT.SET_PARSING_DOCUMENT,
    payload
})