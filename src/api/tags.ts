import firebase from 'firebase/app';
import 'firebase/database';

export const getTagList = () => {
  return firebase
    .database()
    .ref('/tags')
    .once('value')
    .then(snapshot => snapshot.val());
};

export const addTag = tag => {
  return firebase
    .database()
    .ref('/tags')
    .push(tag);
};
