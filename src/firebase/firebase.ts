import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

// const rrfConfig = {
//   userProfile: 'users',
//   // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
//   // enableClaims: true // Get custom claims along with the profile
// }
// console.log(app.auth());
// interface Auth {
//   email: string;
//   password: string;
// }
//
// class Firebase {
//   auth: any;
//   constructor() {
//     app.initializeApp(config);
//
//     this.auth = app.auth();
//   }
//   // *** Auth API ***
//   doCreateUserWithEmailAndPassword = (...args: string[]) =>
//     this.auth.createUserWithEmailAndPassword(...args);
//
//   doSignInWithEmailAndPassword = (...args: string[]) =>
//     this.auth.signInWithEmailAndPassword(...args);
//
//   doSignOut = () => this.auth.signOut();
//
//   doPasswordReset = (email: string) => this.auth.sendPasswordResetEmail(email);
//   doPasswordUpdate = (password: string) =>
//     this.auth.currentUser.updatePassword(password);
// }
firebase.initializeApp(config);
export default firebase;
