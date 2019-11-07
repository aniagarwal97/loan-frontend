import { DOCUMENT } from '../Utils/actionTypes';

const initialState = {
    currentDocument: ""
}

const adminCurrentDocument = (state = initialState, action) => {
    switch (action.type) {
        case DOCUMENT.SET_PARSING_DOCUMENT:
            return Object.assign(state, {currentDocument : action.payload});
        default:
            return state;
    }

}

export default adminCurrentDocument;