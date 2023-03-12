import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA1a4zeA6mGhFAF32gGG1riguT8mVKMGNo",
    authDomain: "line-app-cbf42.firebaseapp.com",
    projectId: "line-app-cbf42",
    storageBucket: "line-app-cbf42.appspot.com",
    messagingSenderId: "338504469700",
    appId: "1:338504469700:web:37ce1de9bfae244dff4d91",
    measurementId: "G-2MDQ7Y4LT4"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db,auth };