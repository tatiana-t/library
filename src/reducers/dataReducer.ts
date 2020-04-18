// import ADD_ITEM from 'src/actions/types';

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
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const setTagList = (state = [], action: any) => {
  switch (action.type) {
    case 'SET_TAG_LIST':
      return action.payload;
    default:
      return state;
  }
};

export const setAvailableFields = (state = [], action: any) => {
  switch (action.type) {
    case 'SET_AVAILABLE_FIELDS':
      return action.payload;
    default:
      return state;
  }
};

export const updateFilterFields = (state = [], action: any) => {
  switch (action.type) {
    case 'UPDATE_FILTER_FIELDS':
      return action.payload;
    default:
      return state;
  }
};
