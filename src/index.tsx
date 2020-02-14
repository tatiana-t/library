import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import thunk from 'redux-thunk';

import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebaseApp from 'firebase/app'; //?
import firebaseConfig from 'firebase';

import reducers from './reducers';

import * as serviceWorker from './serviceWorker';

import App from './App';
import './index.css';

const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
};

const store = createStore(reducers, {});

const rrfProps = {
  firebase: firebaseApp,
  config: rrfConfig,
  dispatch: store.dispatch
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
// serviceWorker.register();

// ReactDOM.render(
//   <FirebaseContext.Provider value={new Firebase()}>
//     <App />
//   </FirebaseContext.Provider>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
