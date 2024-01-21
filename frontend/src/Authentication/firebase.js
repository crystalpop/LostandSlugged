import firebase from "firebase/compat/app"
import "firebase/compat/auth"

import { getFirestore, collection, addDoc, getDocs,orderBy, query  } from 'firebase/firestore';
//import { getStorage } from "firebase/storage";

//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAeXRByxs3E6Z2bChAh9d7CBztKvEcYi6M",
    authDomain: "lost-and-slugged.firebaseapp.com",
    projectId: "lost-and-slugged",
    storageBucket: "lost-and-slugged.appspot.com",
    messagingSenderId: "17320895163",
    appId: "1:17320895163:web:1491384fe5be2246b43f9e",
    measurementId: "G-LRC8RX3FB4"
  });
  

  export const auth = app.auth()
  export const db = getFirestore(app);
  // export const storage = getStorage(app);
  export {getFirestore, collection, addDoc, getDocs,orderBy, query }
  export default app