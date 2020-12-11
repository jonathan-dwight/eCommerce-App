import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../selectors/shop_selector';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/collection-preview/collection-preview';

const ShopPage = ({ collections }) => {
    
    let collectionItems = collections.map(({ id, ...otherCollectionProps}) => {
        return <CollectionPreview key={id} {...otherCollectionProps}/>
    })

    return (
        <div className='shop-page'>
            {collectionItems}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollection
});

export default connect(mapStateToProps)(ShopPage);