export const updateFilterFields = (fields: any) => {
  return {
    type: 'UPDATE_FILTER_FIELDS',
    payload: fields,
  };
};
