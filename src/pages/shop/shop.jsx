import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';
import WithSpinner from '../../components/with-spinner/with-spinner';

// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';
import { fetchCollectionsStartAsync } from '../../action/shop_action';
import { selectIsCollectionsLoaded } from '../../selectors/shop_selector';
// import collection from '../collection/collection';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {


    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync()
    }

    
    render() {

        const { match, isCollectionsLoaded } = this.props;
        // have to inverse value because of the isCollections Loaded value
        return (
            <div className='shop-page'>
                {/* render takes in function -- paramaters and functions that component needs*/}
                <Route exact path={`${match.path}`} render={(props) => 
                    <CollectionsOverviewWithSpinner 
                        isLoading={!isCollectionsLoaded} 
                        {...props}/>
                }/>
                <Route path={`${match.path}/:collectionId`} render={(props) =>
                    <CollectionsPageWithSpinner 
                        isLoading={!isCollectionsLoaded} 
                        {...props} /> 
                }/>
            </div>
        )

    }
}


const mapStateToProps = createStructuredSelector({
    // isCollectionFetching: selectIsCollectionFetching, // would need to reimport this
    isCollectionsLoaded: selectIsCollectionsLoaded

})

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);