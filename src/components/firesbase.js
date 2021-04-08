import  firebase from "firebase/app";

var firebaseConfig = {};
  // Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
export default db.database().ref('football');