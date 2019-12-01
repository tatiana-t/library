// import Firebase from 'firebase';
import Firebase from 'config/firebase/firebaseSettings.ts';
// import getFireData from "./firebase";

// Firebase.initializeApp(firebaseConfig);

export const setBookItem = (data: any) => {
  console.log(data);
  const addItem = Firebase.database()
    .ref('books/')
    .push();
  return addItem.set(data);
};

export const getBooks = () => {
  const data: any = firebase.database();
  console.log(data);
};
// export default setBookItem;
