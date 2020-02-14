import { combineReducers } from 'redux';
import data from './dataReducer';
import { firebaseReducer } from 'react-redux-firebase';

export default combineReducers({
  firebase: firebaseReducer,
  data
});
