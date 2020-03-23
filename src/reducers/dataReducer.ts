// import ADD_ITEM from 'src/actions/types';

export const list = (state = {}, action: any) => {
  switch (action.type) {
    case 'SET_BOOK_LIST':
      console.log(action.payload);
      return { ...state, ...action.payload };
    // case 'SET_CURRENT_ITEM':
    //   return action.payload;
    default:
      return state;
  }
};

export const currentItem = (state = {}, action: any) => {
  switch (action.type) {
    case 'SET_CURRENT_ITEM':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
