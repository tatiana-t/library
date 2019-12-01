// import ADD_ITEM from 'src/actions/types';

export default (state = {}, action: any) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return action.payload;
    default:
      return state;
  }
};
