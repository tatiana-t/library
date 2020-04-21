import firebase from 'firebase/app';
import 'firebase/database';

export const getFields = () => {
  return firebase
    .database()
    .ref('/availableFields')
    .once('value')
    .then((snapshot) => snapshot.val());
};

export const addField = (field) => {
  return firebase.database().ref('/availableFields').push(field);
};
