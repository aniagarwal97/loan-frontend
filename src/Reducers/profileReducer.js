import { PROFILE_ACTIONS } from '../Utils/actionTypes';

const initialState = {
    profileData: {}
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_ACTIONS.SUCCESS_FETCH_PROFILE:
            return action.payload;
        default:
            return state;
    }

}

export default profileReducer;