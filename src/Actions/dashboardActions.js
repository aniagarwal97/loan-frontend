import {DASHBORD_ACTIONS} from '../Utils/actionTypes';

export const fecthDashboard = (payload) => ({
    type: DASHBORD_ACTIONS.FETCH_DASHBOARD,
    payload
})

export const successFetchDashboard = (payload) => ({
    type: DASHBORD_ACTIONS.SUCCESS_FETCH_DASHBOARD,
    payload
})