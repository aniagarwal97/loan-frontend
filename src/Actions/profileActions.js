import { PROFILE_ACTIONS } from '../Utils/actionTypes';

export const fetchProfile = (payload) => ({
    type: PROFILE_ACTIONS.FETCH_PROFILE,
    payload
})

export const successFetchProfile = (payload) => ({
    type: PROFILE_ACTIONS.SUCCESS_FETCH_PROFILE,
    payload
})