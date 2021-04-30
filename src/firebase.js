import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "instacard-7eb11.firebaseapp.com",
  projectId: "instacard-7eb11",
  storageBucket: "instacard-7eb11.appspot.com",
  messagingSenderId: "852117304207",
  appId: "1:852117304207:web:5a6f00c599aa85f2b111fa",
  measurementId: "G-HVR9K4BQNB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
