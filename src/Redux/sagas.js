import { all, takeLatest, call, put } from 'redux-saga/effects';
//import { select } from 'redux-saga';
import * as types from '../Utils/actionTypes';
import {
  login, registrationApi, fetchDocumentApi, uploadDocumentApi, fetchInactiveUsersAPI
}
  from './apiCalls';
import { successUserAuthentication } from '../Actions/authenticationActions';
import { successFetchDocuments, fetchDocuments } from '../Actions/documentActions';
import { successFetchInactiveUsers } from '../Actions/UserApproval';

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

function* fetchDocumentsSaga(action){
  try {
    var token = localStorage.getItem('access_token')
    const apiResponse = yield call(fetchDocumentApi, token);
    if (apiResponse.data.success) {
      yield put(successFetchDocuments(apiResponse.data))
    }
  } catch (e) {
    console.log(e)
  }
}

function* uploadDocumentSaga(action) {
  try {
    var token = localStorage.getItem('access_token')
    const apiResponse = yield call(uploadDocumentApi, token, action.payload);
    if (apiResponse.data.success) {
      yield put(fetchDocuments())
    }
  } catch (e) {
    console.log(e)
  }
}

function* fetchInactiveUsersSaga(){
  try {
    var token = localStorage.getItem('access_token')
    const apiResponse = yield call(fetchInactiveUsersAPI, token);
    if (apiResponse.data.success) {
      yield put(successFetchInactiveUsers(apiResponse.data.users))
    }
  } catch (e) {
    console.log(e)
  }
}
export default function* rootSaga() {
  yield all([
    yield takeLatest(types.AUTHENTICATION.LOGIN_REQUEST, loginSaga),
    yield takeLatest(types.AUTHENTICATION.REGISTRATION_REQUEST, registrationSaga),
    yield takeLatest(types.DOCUMENT.FETCH_DOCUMENTS, fetchDocumentsSaga),
    yield takeLatest(types.DOCUMENT.UPLOAD_DOCUMENT, uploadDocumentSaga),
    yield takeLatest(types.USER_APPROVAL.FETCH_INACTIVE_USERS, fetchInactiveUsersSaga)
    // add other watchers to the array
  ])
}