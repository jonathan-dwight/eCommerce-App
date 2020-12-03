import React from 'react';
import './collection-preview.scss';


const CollectionPreview = (props) => {

    //filter items less than 4 
    //can be slow in production

    let items = props.items.filter((item,idx) => idx < 4).map((item) => {
        return (
            <div key={item.id}>{item.name}</div>
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