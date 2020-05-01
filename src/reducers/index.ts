import { combineReducers } from 'redux';
import { list, currentItem } from './data';
import { setAvailableFields, updateFilterFields } from './fields';
import { setTagList } from './tags';

export default combineReducers({
  list,
  tags: setTagList,
  currentItem,
  fields: setAvailableFields,
  filters: updateFilterFields,
});
