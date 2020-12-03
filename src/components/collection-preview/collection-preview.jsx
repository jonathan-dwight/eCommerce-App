import React from 'react';
import CollectionItem from '../collection-item/collection-item'
import './collection-preview.scss';


const CollectionPreview = (props) => {

    //filter items less than 4 
    //can be slow in production

    let items = props.items
        .filter((item,idx) => idx < 4)
        .map(({ id, ...itemProp }) => {
        return (
            <CollectionItem key={id} {...itemProp} />
        )
    })
    
    return (
        <div className="collection-preview">
            <h1 className="title">{props.title.toUpperCase()}</h1>
            <div className="preview">
                {items}
            </div>
        </div>
    )
}

export default CollectionPreview;