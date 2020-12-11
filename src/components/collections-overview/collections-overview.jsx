import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections, selectCollectionsForPreview } from '../../selectors/shop_selector';
import  CollectionPreview from '../collection-preview/collection-preview'

import './collections_overview.scss'

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {collections.map(({ id, ...otherCollectionProps}) => {
            return <CollectionPreview key={id} {...otherCollectionProps} />
        })}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);