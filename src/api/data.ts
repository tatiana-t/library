// // import firebase from 'firebase/app';
// // import 'firebase/database';
// import { store } from 'index';
// import { setBookList } from 'actions/index';
//
// // export const getList = () => {
// //   const db = firebase.database().ref('/items');
// //   let list: any;
// //   db.on('value', (snapshot: any) => {
// //     list = snapshot.val();
// //     const listToState = Object.keys(list).map((item) => ({
// //       id: item,
// //       ...list[item],
// //     }));
// //
// //     // console.log('on value');
// //     store.dispatch(setBookList(listToState));
// //   });
// //   //
// //   // list = db.once('value').then((snapshot) => snapshot.val());
// //   // const listToState = Object.keys(list).map((item) => ({
// //   //   id: item,
// //   //   ...list[item],
// //   // }));
// //
// //   // console.log('common');
// //   // store.dispatch(setBookList(listToState));
// // };
// export const updateItem = (id: any, item: any) => {
//   return firebase
//     .database()
//     .ref('items/' + id)
//     .set(item);
// };
//
// export const addItem = (item: any) => {
//   const ref = firebase.database().ref('items/');
//   let newRef;
//   try {
//     newRef = ref.push();
//     // console.log(newRef);
//   } finally {
//     const newItem = {
//       ...item,
//       id: newRef && newRef.key,
//     };
//     newRef.set(newItem);
//   }
// };
// // export const deleteItem = id => {
// //   firebase
// //     .database()
// //     .ref('book/')
// //     .delete(id);
// // };
export {}
