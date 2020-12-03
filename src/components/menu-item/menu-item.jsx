import React from 'react';
import './menu-item.scss'

// higher order function... takes any component and renders it with it
import { withRouter } from 'react-router-dom'

// can destructure props ({ title })
const MenuItem = (props) => {
    return (
        <div 
            className={`${props.size} menu-item`} 
            onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}>
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

export default withRouter(MenuItem);