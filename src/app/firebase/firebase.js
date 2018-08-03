import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyAaY1Wrj39WwN63Qf3DwoEO1RJ895A7xeA",
  authDomain: "marketplace-5635e.firebaseapp.com",
  databaseURL: "https://marketplace-5635e.firebaseio.com",
  projectId: "marketplace-5635e",
  storageBucket: "marketplace-5635e.appspot.com",
  messagingSenderId: "504059842173"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const firebaseAuth = firebase.auth();
export const firebaseDb = firebase.database();