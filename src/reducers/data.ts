export const list = (state = [], action: any) => {
  switch (action.type) {
    case 'SET_BOOK_LIST':
      return action.payload;
    // case 'SET_CURRENT_ITEM':
    //   return action.payload;
    default:
      return state;
  }
};

export const currentItem = (state = {}, action: any) => {
  switch (action.type) {
    case 'SET_CURRENT_ITEM':
      return { ...action.payload };
    default:
      return state;
  }
};
