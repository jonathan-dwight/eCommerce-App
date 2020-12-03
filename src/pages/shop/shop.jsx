import React from 'react';
import SHOP_DATA from './shopitems'
import CollectionPreview from '../../components/collection-preview/collection-preview';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render () {
        const { collections } = this.state
        
        let collectionItems = collections.map(({ id, ...otherCollectionProps}) => {
            return <CollectionPreview key={id} {...otherCollectionProps}/>
        })

        return (
            
            <div className='shop-page'>
                {collectionItems}
            </div>
        )
    }
}

export default ShopPage;