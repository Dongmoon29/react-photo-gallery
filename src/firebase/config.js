import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAvdvpBgCvzLvsXhz5ZBLrlfP_-wYGFTPg",
    authDomain: "kdm-photo-gallery.firebaseapp.com",
    databaseURL: "https://kdm-photo-gallery.firebaseio.com",
    projectId: "kdm-photo-gallery",
    storageBucket: "kdm-photo-gallery.appspot.com",
    messagingSenderId: "593103127524",
    appId: "1:593103127524:web:5e8277d4f14d16670bfdf1"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };