// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";

// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKkQgNjKpriii_rM5whlx3LWubwk4ZQZw",
  authDomain: "userauthentication-4f20a.firebaseapp.com",
  projectId: "userauthentication-4f20a",
  storageBucket: "userauthentication-4f20a.appspot.com",
  messagingSenderId: "1079290125048",
  appId: "1:1079290125048:web:62958ad7439a20d8a0b90d",
  measurementId: "G-WGQM0PLDRD"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
// let app;

// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig)
// } else {
//   app = firebase.app();
// }

// const db = app.firestore();
// const auth = firebase.auth();

// export { db, auth };