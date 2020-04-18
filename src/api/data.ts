import firebase from 'firebase/app';
import 'firebase/database';

export const getList = () => {
  return firebase
    .database()
    .ref('/books')
    .once('value')
    .then((snapshot) => snapshot.val());
};
export const updateItem = (id, item) => {
  return firebase
    .database()
    .ref('books/' + id)
    .set(item);
};
export const addItem = (item) => {
  console.log(item);
  firebase.database().ref('books/').push(item);
};
// export const deleteItem = id => {
//   firebase
//     .database()
//     .ref('book/')
//     .delete(id);
// };
