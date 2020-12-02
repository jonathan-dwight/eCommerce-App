import React from 'react';
import './menu-item.scss'

// can destructure props ({ title })
const MenuItem = (props) => {
    return (
        <div className={`${props.size} menu-item`}>
            <div 
                className='background-image'
                style={{
                backgroundImage: `url(${props.imageUrl})`
                }} 
            />
            <div className="content">
                <h1 className="title">{props.title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;