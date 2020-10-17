// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import  firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"


 const firebaseConfig = {
  apiKey: "AIzaSyA89FvuhUSVgHq8SvX0oxY_l9tFcdXILfY",
  authDomain: "kanbanboard-3b510.firebaseapp.com",
  databaseURL: "https://kanbanboard-3b510.firebaseio.com",
  projectId: "kanbanboard-3b510",
  storageBucket: "kanbanboard-3b510.appspot.com",
  messagingSenderId: "1037907649412",
  appId: "1:1037907649412:web:4510e4083dfe6126a573d1",
  measurementId: "G-ERWR8HTCQ4"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
