// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB72l73IoocPFesIFtvUbhA-bk9b3jq8rY",
  authDomain: "kanban-29e23.firebaseapp.com",
  databaseURL: "https://kanban-29e23.firebaseio.com",
  projectId: "kanban-29e23",
  storageBucket: "kanban-29e23.appspot.com",
  messagingSenderId: "793650733417",
  appId: "1:793650733417:web:53350a2a76f67484755df8",
  measurementId: "G-V4HNF8QW75",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
