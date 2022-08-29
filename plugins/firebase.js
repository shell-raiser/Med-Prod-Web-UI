import "firebase/auth";
import "firebase/firestore";// Your web app's Firebase configuration
const firebase = require('firebase');
var firebaseConfig = {
    apiKey: "AIzaSyB9ahJNsL4sfy4TVlc9jGymrkJPlbbJ0-w",
    authDomain: "hospicare-app22.firebaseapp.com",
    projectId: "hospicare-app22",
    storageBucket: "hospicare-app22.appspot.com",
    messagingSenderId: "485352211339",
    appId: "1:485352211339:web:f3666f946f0d4fa38c658e",
    measurementId: "G-F8NXZ03XGP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);