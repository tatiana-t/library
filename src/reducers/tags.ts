export const setTagList = (state = [], action: any) => {
  switch (action.type) {
    case 'SET_TAG_LIST':
      return action.payload;
    default:
      return state;
  }
};
