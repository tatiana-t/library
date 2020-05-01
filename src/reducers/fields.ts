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
