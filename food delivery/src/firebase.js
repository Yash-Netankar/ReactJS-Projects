import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyABCQiWDIKZwz-1UjTd6u9rVPBefxMfyGY",
    authDomain: "food-delivery-crud.firebaseapp.com",
    databaseURL: "https://food-delivery-crud-default-rtdb.firebaseio.com",
    projectId: "food-delivery-crud",
    storageBucket: "food-delivery-crud.appspot.com",
    messagingSenderId: "205743539808",
    appId: "1:205743539808:web:31a17f019f8eb7625a6505"
  };
  // Initialize Firebase
  const FireDb = firebase.initializeApp(firebaseConfig);
  export default FireDb.database().ref();