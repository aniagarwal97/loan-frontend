
import { combineReducers } from 'redux';
import authReducer from './loginReducer';
import documentReducer from './documentReducer';
import userApprovalReducer from './userApprovalReducer';
import adminDocumentReducer from './adminDocumentReducer';
import adminCurrentDocument from './adminCurrentDocument';
import dashboardReducer from './dashboardReducer';
import profileReducer from './profileReducer';

const appReducer = combineReducers({
  user: authReducer,
  documents: documentReducer,
  inactiveUsers: userApprovalReducer,
  adminDocuments: adminDocumentReducer,
  adminCurrentDocument: adminCurrentDocument,
  dashboardData: dashboardReducer,
  profileData: profileReducer
});

const rootReducer = (state, action) => {
  //   if (action.type === LOGOUT) {
  //     state = undefined
  //   }
  return appReducer(state, action)
}

export default rootReducer