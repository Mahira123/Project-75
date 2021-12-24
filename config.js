import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDO3tz5dlb5I9zhSkUDxsG_JeIcug1vJGA",
  authDomain: "e-rider-ef0ad.firebaseapp.com",
  projectId: "e-rider-ef0ad",
  storageBucket: "e-rider-ef0ad.appspot.com",
  messagingSenderId: "639839340919",
  appId: "1:639839340919:web:64037a9e453b2565c97972"
};

/**var firebaseConfig = {
  apiKey: "AIzaSyCZrG0BF6LrnRpWZjsPQxNGyMCLByo8HrM",
  authDomain: "e-ride-549e4.firebaseapp.com",
  projectId: "e-ride-549e4",
  storageBucket: "e-ride-549e4.appspot.com",
  messagingSenderId: "588298110700",
  appId: "1:588298110700:web:34e3df331c6b1fc95047c9",
  measurementId: "G-G3K7BWL5LH"
};*/

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
