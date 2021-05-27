import  firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyB9-ICTO9i-QiybqA190v9BOJsyX-W3-5A",
    authDomain: "gifted-chat-267f7.firebaseapp.com",
    projectId: "gifted-chat-267f7",
    storageBucket: "gifted-chat-267f7.appspot.com",
    messagingSenderId: "649856253656",
    appId: "1:649856253656:web:110e8b6775e9579230a1ad"
};


var app = firebase.initializeApp(firebaseConfig);


const db = app.firestore();
const auth = firebase.auth();
export { db, auth };

