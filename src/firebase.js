import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC187J24e2b21ZWaZJj1yxBvTqdRczRdac",
  authDomain: "tiktok-clone-7b49d.firebaseapp.com",
  databaseURL: "https://tiktok-clone-7b49d.firebaseio.com",
  projectId: "tiktok-clone-7b49d",
  storageBucket: "tiktok-clone-7b49d.appspot.com",
  messagingSenderId: "584387648200",
  appId: "1:584387648200:web:14cd490fbc262e7f1fe3fd",
  measurementId: "G-GXWVX0WTLR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
