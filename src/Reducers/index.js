
import { combineReducers } from 'redux';
import authReducer from './loginReducer';

const appReducer =  combineReducers({
  user: authReducer
});

const rootReducer = (state, action) => {
//   if (action.type === LOGOUT) {
//     state = undefined
//   }
  return appReducer(state, action)
}

export default rootReducer