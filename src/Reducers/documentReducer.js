import { DOCUMENT } from '../Utils/actionTypes';

const initialState = {
    documents: {}
}

const documentReducer = (state = initialState, action) => {
    switch (action.type) {
        case DOCUMENT.SUCCESS_FETCH_DOCUMENTS:
            return {state, ...action.payload};
        default:
            return state;
    }

}

export default documentReducer;