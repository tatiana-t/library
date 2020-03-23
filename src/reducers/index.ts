import { combineReducers } from 'redux';
import { list, currentItem } from './dataReducer';
// import { firebaseReducer } from 'react-redux-firebase';

export default combineReducers({
  // firebase: firebaseReducer,
  list,
  currentItem
});
