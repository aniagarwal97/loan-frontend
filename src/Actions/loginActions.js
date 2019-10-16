import {AUTHENTICATION} from '../Utils/actionTypes';

export const successUserAuthentication = (user: any) => ({
    type: AUTHENTICATION.SUCCESS_LOGIN_REQUEST,
    payload: user,
});

export const requestUserAuthentication = (payload: any) => ({
    type: AUTHENTICATION.LOGIN_REQUEST,
    payload
})