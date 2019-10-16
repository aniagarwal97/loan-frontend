import { AUTHENTICATION } from '../Utils/actionTypes';

const initialState = {
    username: '',
    password: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATION.SUCCESS_LOGIN_REQUEST:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }

}

export default authReducer;