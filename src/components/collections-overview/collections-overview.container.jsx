import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../selectors/shop_selector';
import WithSpinner from '../with-spinner/with-spinner';
import CollectionsOverview from './collections-overview';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

// equivalent to below
// connect(mapStateToProps)(WithSpinner(CollectionsOverview))

export default CollectionsOverviewContainer;