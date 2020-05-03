import { LOADER_ACTIONS } from '../Utils/actionTypes';

const initialState = {
    isLoading: false
}

const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADER_ACTIONS.SHOW_LOADER:
            return {
                isLoading : true
            }
        
        case LOADER_ACTIONS.HIDE_LOADER:
            return {
                isLoading : false
            }
        default:
            return state;
    }

}

export default loaderReducer;