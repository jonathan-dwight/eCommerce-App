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

//storing user for google to create

export const createUserProfileDocument = async (userAuth, ...addtionalData) => {
    if (!userAuth) return;

    // have to use documentRef object to perform CRUD methods
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    debugger
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...addtionalData
            })
        } catch (err) {
            console.log('error creating user', err.message)
        }
    }
    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//new auth class for google sign in
const provider = new firebase.auth.GoogleAuthProvider();

//allows user to select account
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


// how to query into database
//firestone.collection('users').doc('/id').collection('cart-items).doc('id')
//firestone.doc('/users/id/cartItems/id')
//firestone.collection('/users/id/cartItems/')

