import { combineReducers } from 'redux';
import {
  list,
  currentItem,
  setTagList,
  setAvailableFields,
  updateFilterFields,
} from './dataReducer';

export default combineReducers({
  list,
  tags: setTagList,
  currentItem,
  setTagList,
  availableFields: setAvailableFields,
  filters: updateFilterFields,
});
