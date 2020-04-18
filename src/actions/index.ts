export const setBookList = (list) => {
  return {
    type: 'SET_BOOK_LIST',
    payload: list,
  };
};

export const setCurrentItem = (item) => {
  return {
    type: 'SET_CURRENT_ITEM',
    payload: item,
  };
};

export const setTagList = (tagList) => {
  return {
    type: 'SET_TAG_LIST',
    payload: tagList,
  };
};
export { setAvailableFields } from './availableFields';
export { updateFilterFields } from './filters';
