import { USER_APPROVAL } from '../Utils/actionTypes';

const initialState = {
    users: []
}

const userApprovalReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_APPROVAL.SUCCESS_FETCH_INACTIVE_USERS:
            return [...action.payload];
        default:
            return state;
    }

}

export default userApprovalReducer;