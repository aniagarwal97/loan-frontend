import { all, takeLatest, call, put, select } from 'redux-saga/effects';
//import { select } from 'redux-saga';
import * as types from '../Utils/actionTypes';
import {
  login
}
  from './apiCalls';
import { successUserAuthentication } from '../Actions/loginActions';

function* loginSaga(action) {
  try {
    const apiResponse = yield call(login, action.payload);
    console.log(apiResponse)
    if (apiResponse.data) {
      localStorage.setItem('access_token', apiResponse.data.access_token)
      yield put(successUserAuthentication(apiResponse.data));
    }
  } catch (e) {
    console.log(e)
  }
}

export default function* rootSaga() {
  yield all([
    yield takeLatest(types.AUTHENTICATION.LOGIN_REQUEST, loginSaga),
    // add other watchers to the array
  ])
}