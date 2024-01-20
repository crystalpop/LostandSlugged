import firebase from "firebase/compat/app"
import "firebase/compat/auth"

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
  export default app