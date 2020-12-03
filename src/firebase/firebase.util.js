import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAStLiyG30K1xtPdQZnWaGQkppbUZ0dqfo",
    authDomain: "ecommerce-db-209a4.firebaseapp.com",
    projectId: "ecommerce-db-209a4",
    storageBucket: "ecommerce-db-209a4.appspot.com",
    messagingSenderId: "877244403186",
    appId: "1:877244403186:web:d66d2a5d9ecf6626a96f6b",
    measurementId: "G-YXDSSLGK4T"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//new auth class for google sign in
const provider = new firebase.auth.GoogleAuthProvider();

//allows user to select account
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);



