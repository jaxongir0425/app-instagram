import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyDdHT0Gh4sMEsnH3CmaAsILVwTrhbZU4nw",
    authDomain: "app-instagram-914ab.firebaseapp.com",
    projectId: "app-instagram-914ab",
    storageBucket: "app-instagram-914ab.appspot.com",
    messagingSenderId: "1032304066267",
    appId: "1:1032304066267:web:3d8164eff5f577dac216fe"
});

const auth = firebase.auth();
const storage = firebase.storage();

export {storage, auth};