// import firebase from 'firebase/app';
// import 'firebase/database';
// import { store } from '../index';
// import { setAvailableFields } from '../actions';
//
// export const getFields = () => {
//   const db = firebase.database().ref('/fields');
//   let fieldList;
//   db.on('value', (snapshot) => {
//     fieldList = snapshot.val();
//     const fieldsToState = Object.keys(fieldList).map((item) => ({
//       id: item,
//       ...fieldList[item],
//     }));
//     store.dispatch(setAvailableFields(fieldsToState));
//   });
//
//   // fieldList = db.once('value').then((snapshot) => {
//   //   fieldList = snapshot.val();
//   //   const fieldsToState = Object.keys(fieldList).map((item) => ({
//   //     id: item,
//   //     ...fieldList[item],
//   //   }));
//
//   // store.dispatch(setAvailableFields(fieldsToState));
//   // });
// };
//
// export const addField = (field) => {
//   const ref = firebase.database().ref('fields/');
//   let newRef;
//   try {
//     newRef = ref.push();
//     console.log(newRef);
//   } finally {
//     const newItem = {
//       title: field,
//       id: newRef && newRef.key,
//     };
//     newRef.set(newItem);
//   }
// };
//
// export const updateField = (id, field) => {
//   return firebase
//     .database()
//     .ref('availableFields/' + id)
//     .set(field);
// };
export {}
