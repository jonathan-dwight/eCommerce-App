import { firestore, convertCollectionsSnapshotToMap } from '../firebase/firebase.util';

export const FETCH_COLLECTIONS_START = "FETCH_COLLECTIONS_START";
export const FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS";
export const FETCH_COLLECTIONS_FAIL = "FETCH_COLLECTIONS_FAIL";


export const fetchCollectionsStart = () => ({
    type: FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsErrors = (errorMessage) => ({
    type: FETCH_COLLECTIONS_FAIL,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapShot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapShot);
            dispatch(fetchCollectionsSuccess(collectionMap));
        }).catch(error => dispatch(fetchCollectionsErrors(error)))
    }
}

//NOTES 
// for fetch we would have to go through the nested stuff and we would have to fix it in the collections map
        // fetch('https://firestore.googleapis.com/v1/projects/ecommerce-db-209a4/databases/(default)/documents/collections')
        //     .then(resp => resp.json())
        //     .then(collections => console.log(collections))

        // this is promiised style


        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
        //     const collectionMap = convertCollectionsSnapshotToMap(snapShot);
        //     updateCollections(collectionMap);
        //     this.setState({ loading: false });
        // }); 
        // this allows auto updates

        //https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/
