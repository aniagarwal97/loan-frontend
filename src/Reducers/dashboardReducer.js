import { DASHBORD_ACTIONS } from '../Utils/actionTypes';

const initialState = {
    users: {}
}

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case DASHBORD_ACTIONS.SUCCESS_FETCH_DASHBOARD:
            return {...action.payload};
        default:
            return state;
    }

}

export default dashboardReducer;