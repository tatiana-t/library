import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
// import thunk from 'redux-thunk';

// import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from 'firebase/app'; //?
import 'firebase/database'; //?
// import firebaseConfig from 'firebase';

import reducers from './reducers';

import * as serviceWorker from './serviceWorker';

import App from './App';
import './index.css';

import 'styles/common/layout.scss';
import 'styles/common/global.scss';
import { BrowserRouter as Router } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
//
// const history = createBrowserHistory();
// const rrfConfig = {
//   userProfile: 'users'
//   // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
//   // enableClaims: true // Get custom claims along with the profile
// };

const fbConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  }
}
// window.__REDUX_DEVTOOLS_EXTENSION__ =
// window.__REDUX_DEVTOOLS_EXTENSION__ || null;
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware()
//   // other store enhancers if any
// );
// const store = createStore(
//    reducer,
//    /* preloadedState, */
//     reduxDevtools && reduxDevtools(),
//  );

export const store = createStore(reducers, composeEnhancers());

firebase.initializeApp(fbConfig);

// console.log(firebase.ref);
// const rrfProps = {
//   firebase,
//   config: rrfConfig,
//   dispatch: store.dispatch
// };
// console.log(store.getState());
// store.subscribe(() => console.log(store.getState()));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
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
