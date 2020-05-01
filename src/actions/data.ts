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
