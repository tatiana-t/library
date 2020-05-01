import firebase from 'firebase/app';
import 'firebase/database';
import { setTagList } from '../actions';
import { store } from '../index';

export const getTagList = () => {
  // return firebase
  //   .database()
  //   .ref('/tags')
  //   .once('value')
  //   .then((snapshot) => snapshot.val());

  const db = firebase.database().ref('/tags');

  db.on('value', (snapshot) => {
    const tagList = snapshot.val();
    const tagsToStore = Object.keys(tagList).map((tag) => tagList[tag]);
    store.dispatch(setTagList(tagsToStore));
  });

  // const tagsToStore = Object.keys(tagList).map((tag) => tagList[tag]);
  // dispatch(setTagList(tagsToStore));
};

export const addTag = (tag) => {
  return firebase.database().ref('/tags').push(tag);
};
