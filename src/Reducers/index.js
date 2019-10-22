
import { combineReducers } from 'redux';
import authReducer from './loginReducer';
import documentReducer from './documentReducer';

const appReducer = combineReducers({
  user: authReducer,
  documents: documentReducer
});

const rootReducer = (state, action) => {
  //   if (action.type === LOGOUT) {
  //     state = undefined
  //   }
  return appReducer(state, action)
}

export default rootReducer