const fields = [
  { id: 'author', text: 'Автор' },
  { id: 'name', text: 'Название' },
  { id: 'year', text: 'Год' },
  { id: 'comment', text: 'Комментарий' },
];

export const setAvailableFields = () => {
  return {
    type: 'SET_AVAILABLE_FIELDS',
    payload: fields,
  };
};
