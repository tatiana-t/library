export const setBookList = (list: any) => {
  return {
    type: 'SET_BOOK_LIST',
    payload: list,
  };
};

export const setCurrentItem = (item: any) => {
  return {
    type: 'SET_CURRENT_ITEM',
    payload: item,
  };
};
