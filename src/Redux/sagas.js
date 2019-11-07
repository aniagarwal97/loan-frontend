import { all, takeLatest, call, put, select } from 'redux-saga/effects';
//import { select } from 'redux-saga';
import * as types from '../Utils/actionTypes';
import {
  login, registrationApi, fetchDocumentApi, uploadDocumentApi, fetchInactiveUsersAPI, 
  approveUserApi, rejectUserApi, fetchAllDocumentsApi, uploadAnalysisReport, fetchDashboardData, fetchProfileData
}
  from './apiCalls';
import { successUserAuthentication } from '../Actions/authenticationActions';
import { successFetchDocuments, fetchDocuments, successFetchAllDocuments } from '../Actions/documentActions';
import { successFetchInactiveUsers, fetchInactiveUsers } from '../Actions/UserApproval';
import { toast } from 'react-toastify';
import { successFetchDashboard } from '../Actions/dashboardActions';
import { successFetchProfile } from '../Actions/profileActions';

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
      toast.success('User Registered successfully')
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

function* approveUserSaga(action){
  try {
    var token = localStorage.getItem('access_token')
    const apiResponse = yield call(approveUserApi, token, action.payload);
    if (apiResponse.data.success) {
      toast.success(apiResponse.data.message)
      yield put(fetchInactiveUsers())
    }
    else{
      toast.error(apiResponse.data.message)
    }
  } catch (e) {
    console.log(e)
  }
}

function* rejectUserSaga(action){
  try {
    var token = localStorage.getItem('access_token')
    const apiResponse = yield call(rejectUserApi, token, action.payload);
    if (apiResponse.data.success) {
      toast.success(apiResponse.data.message)
      yield put(fetchInactiveUsers())
    }
    else{
      toast.error(apiResponse.data.message)
    }
  } catch (e) {
    console.log(e)
  }
}

function* fetchAllDocumentsSaga(){
  try {
    var token = localStorage.getItem('access_token')
    const apiResponse = yield call(fetchAllDocumentsApi, token);
    if (apiResponse.data.success) {
      yield put(successFetchAllDocuments(apiResponse.data.documents))
    }
  } catch (e) {
    console.log(e)
  }
}

function* uploadAnalysisSaga(action){
  try {
    var token = localStorage.getItem('access_token')
    var document_id = localStorage.getItem('adminCurrentDocument')
    var finalPayload = Object.assign(action.payload, {document_id : document_id})
    const apiResponse = yield call(uploadAnalysisReport, token, finalPayload);
    if (apiResponse.data.success) {
      toast.success('Report Uploaded successfully')
      yield put(successFetchAllDocuments(apiResponse.data.documents))
    }
  } catch (e) {
    console.log(e)
  }
}

function* fecthDashboardSaga(action){
  try {
    var token = localStorage.getItem('access_token')
    const apiResponse = yield call(fetchDashboardData, token, action.payload);
    if (apiResponse.data.success) {
      console.log(apiResponse.data)
      yield put(successFetchDashboard(apiResponse.data.dashboard))
    }
  } catch (e) {
    console.log(e)
  }
}

function* fetchProfileSaga(action){
  try {
    var token = localStorage.getItem('access_token')
    const apiResponse = yield call(fetchProfileData, token, action.payload);
    if (apiResponse.data.success) {
      yield put(successFetchProfile(apiResponse.data.profile))
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
    yield takeLatest(types.USER_APPROVAL.FETCH_INACTIVE_USERS, fetchInactiveUsersSaga),
    yield takeLatest(types.USER_APPROVAL.APPROVE_USER, approveUserSaga),
    yield takeLatest(types.USER_APPROVAL.REJECT_USER, rejectUserSaga),
    yield takeLatest(types.DOCUMENT.FETCH_ALL_DOCUMENTS, fetchAllDocumentsSaga),
    yield takeLatest(types.ANALYSIS_REPORT.UPLOAD_ANALYSIS, uploadAnalysisSaga),
    yield takeLatest(types.DASHBORD_ACTIONS.FETCH_DASHBOARD, fecthDashboardSaga),
    yield takeLatest(types.PROFILE_ACTIONS.FETCH_PROFILE, fetchProfileSaga)
    // add other watchers to the array
  ])
}