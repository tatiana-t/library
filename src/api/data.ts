import firebase from 'firebase/app';
import 'firebase/database';
import { store } from 'index';
import { setBookList } from 'actions/index';

export const getList = () => {
  const db = firebase.database().ref('/items');
  let list;
  db.on('value', (snapshot) => {
    list = snapshot.val();
    const listToState = Object.keys(list).map((item) => ({
      id: item,
      ...list[item],
    }));

    // console.log('on value', listToState);
    store.dispatch(setBookList(listToState));
  });
  //
  // list = db.once('value').then((snapshot) => snapshot.val());
  // const listToState = Object.keys(list).map((item) => ({
  //   id: item,
  //   ...list[item],
  // }));

  // console.log('common');
  // store.dispatch(setBookList(listToState));
};
export const updateItem = (id, item) => {
  return firebase
    .database()
    .ref('items/' + id)
    .set(item);
};

export const addItem = (item) => {
  const ref = firebase.database().ref('items/');
  let newRef;
  try {
    newRef = ref.push();
    // console.log(newRef);
  } finally {
    const newItem = {
      ...item,
      id: newRef && newRef.key,
    };
    newRef.set(newItem);
  }
};
// export const deleteItem = id => {
//   firebase
//     .database()
//     .ref('book/')
//     .delete(id);
// };
