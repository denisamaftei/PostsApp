// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGIZLAypnMB22_luTbFEy-jaZMu5yQX-E",
    authDomain: "myapplication-99686.firebaseapp.com",
    projectId: "myapplication-99686",
    storageBucket: "myapplication-99686.appspot.com",
    messagingSenderId: "609409898636",
    appId: "1:609409898636:android:cc8a52bd08f5cc164c43a9",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const projectAuth = firebase.auth();
const db = firebase.firestore();
// collection references
export const postsCollection = db.collection("posts");
export default { db };
