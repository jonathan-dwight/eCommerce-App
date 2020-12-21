import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../action/cart_action'
import CustomButton from "../custom-button/custom-button"
import './collection-item.scss';


const CollectionItem = (props) => {

    const { name, price, imageUrl } = props.item

    return (
    <div className="collection-item">
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <CustomButton className='custom-button'
            inverted 
            onClick={() => props.addItem(props.item)}>
            Add to Cart</CustomButton>
    </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CollectionItem);