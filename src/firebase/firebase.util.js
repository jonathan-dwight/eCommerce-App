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

//storing user for google to create

export const createUserProfileDocument = async (userAuth, addtionalData) => {
    if (!userAuth) return;

    // have to use documentRef object to perform CRUD methods
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // const collectionRef = firestore.collection('users');

    const snapShot = await userRef.get();
    // const collectionSnapshot = await collectionRef.get();
    // console.log({ collection: collectionSnapshot.docs.map(doc => doc.data()) });
    // get collection of users

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


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    // have to do individual calls because can only set once

    // have to do batch right to group all request

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    })
    // returns a promise
    return await batch.commit()
}


export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transformedCollection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection;
        return acc;
    }, {})

}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

//new auth class for google sign in
const provider = new firebase.auth.GoogleAuthProvider();

//allows user to select account
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
// how to query into database
//firestone.collection('users').doc('/id').collection('cart-items).doc('id')
//firestone.doc('/users/id/cartItems/id')
//firestone.collection('/users/id/cartItems/')

//queryReference does not have the actual data of the collection or document

//DocumentReference vs CollectionReference
// use document for CRUD methods .set(), .get(), .update(), .delete()
// can add documents to collections using collectionRed using the .add()
// get snapshotObject from the referenceObject using the .get() method

// document ref returns a documentSnapshot object -- allows us to check if docuemnt exist
// at this quesry .exists and then .data to grab the data

// collectionRef returns querySnapshot object