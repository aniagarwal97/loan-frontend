import { DOCUMENT } from '../Utils/actionTypes';

const initialState = {
    documents: {}
}

const adminDocumentReducer = (state = initialState, action) => {
    switch (action.type) {
        case DOCUMENT.SUCCESS_FETCH_ALL_DOCUMENTS:
            return [...action.payload];
        default:
            return state;
    }

}

export default adminDocumentReducer;