import {AUTHENTICATION} from '../Utils/actionTypes';

export const successUserAuthentication = (user) => ({
    type: AUTHENTICATION.SUCCESS_LOGIN_REQUEST,
    payload: user,
});

export const requestUserAuthentication = (payload) => ({
    type: AUTHENTICATION.LOGIN_REQUEST,
    payload
})

export const requestUserRegistration = (payload) => ({
    type: AUTHENTICATION.REGISTRATION_REQUEST,
    payload
})

export const successRequestUserRegistration = (payload) => ({
    type: AUTHENTICATION.SUCCESS_REGISTRATION_REQUEST,
    payload
})