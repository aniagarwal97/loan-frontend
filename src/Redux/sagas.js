import { all, takeLatest, call, put, select } from 'redux-saga/effects';
//import { select } from 'redux-saga';
import * as types from '../Utils/actionTypes';
import {
  login, registrationApi
}
  from './apiCalls';
import { successUserAuthentication, successRequestUserRegistration } from '../Actions/authenticationActions';

function* loginSaga(action) {
  try {
    const apiResponse = yield call(login, action.payload);
    console.log(apiResponse)
    if (apiResponse.data) {
      apiResponse.data.access_token && localStorage.setItem('access_token', apiResponse.data.access_token)
      yield put(successUserAuthentication(apiResponse.data));
    }
  } catch (e) {
    console.log(e)
  }
}

function* registrationSaga(action){
  try {
    const apiResponse = yield call(registrationApi, action.payload);
    if (apiResponse.data) {
      apiResponse.data.access_token && localStorage.setItem('access_token', apiResponse.data.access_token)
      yield put(successUserAuthentication(apiResponse.data));
    }
  } catch (e) {
    console.log(e)
  }
}
export default function* rootSaga() {
  yield all([
    yield takeLatest(types.AUTHENTICATION.LOGIN_REQUEST, loginSaga),
    yield takeLatest(types.AUTHENTICATION.REGISTRATION_REQUEST, registrationSaga)
    // add other watchers to the array
  ])
}