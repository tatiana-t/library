// import ADD_ITEM from 'src/actions/types';

export default (state = { state: 'initialState' }, action: any) => {
  switch (action.type) {
    case 'REGISTER':
      return action.payload;
    default:
      return state;
  }
};
