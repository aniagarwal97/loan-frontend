import {USER_APPROVAL} from '../Utils/actionTypes';

export const fetchInactiveUsers = () => ({
    type: USER_APPROVAL.FETCH_INACTIVE_USERS,
});

export const successFetchInactiveUsers = (payload) => ({
    type: USER_APPROVAL.SUCCESS_FETCH_INACTIVE_USERS,
    payload
})

export const approveUser = (payload) => ({
    type: USER_APPROVAL.APPROVE_USER,
    payload
})
