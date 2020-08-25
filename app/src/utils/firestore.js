import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAYdO1VtMERD0VuTRKpKRYTJv9zkg0HdO8",
    authDomain: "webproject-9e117.firebaseapp.com",
    databaseURL: "https://webproject-9e117.firebaseio.com",
    projectId: "webproject-9e117",
    storageBucket: "webproject-9e117.appspot.com",
    messagingSenderId: "350938837908",
    appId: "1:350938837908:web:b160bea1467a330742d581",
    measurementId: "G-VTVZFWJ4VC"
};
firebase.initializeApp(config);

export default firebase;