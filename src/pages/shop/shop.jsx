import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';
import WithSpinner from '../../components/with-spinner/with-spinner';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';
import { updateCollections } from '../../action/shop_action';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {

    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props; 
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapShot);
            updateCollections(collectionMap);
            this.setState({ loading: false });
        }) 
    }

    
    render() {

        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
                {/* render takes in function -- paramaters and functions that component needs*/}
                <Route exact path={`${match.path}`} render={(props) => 
                    <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>
                }/>
                <Route path={`${match.path}/:collectionId`} render={(props) =>
                    <CollectionsPageWithSpinner isLoading={loading} {...props} /> 
                }/>
            </div>
        )

    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});


export default connect(null, mapDispatchToProps)(ShopPage);