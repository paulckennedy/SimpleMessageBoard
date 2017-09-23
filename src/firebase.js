  import * as firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCs5NdtcBM6QqGWmjTML_pnXiX6E86wvCQ",
    authDomain: "simple-message-board-13c34.firebaseapp.com",
    databaseURL: "https://simple-message-board-13c34.firebaseio.com",
    projectId: "simple-message-board-13c34",
    storageBucket: "simple-message-board-13c34.appspot.com",
    messagingSenderId: "79618221567"
  };
  firebase.initializeApp(config);

  export const database = firebase.database().ref('posts/');
  export const auth = firebase.auth();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
