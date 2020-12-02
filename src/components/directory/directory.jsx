import React from 'react';
import MenuItem from "../menu-item/menu-item"
import './directory.scss'

class Directory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: [
                {
                    title: 'HATS',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'JACKETS',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'SNEAKERS',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'WOMENS',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'MENS',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        };
    }  
    
    
    render() {

        let menuItem = this.state.sections.map((section) => (
            <MenuItem key={section.id} title={section.title} 
            imageUrl={section.imageUrl} size={section.size}/>
        ))

        return (
            <div className="directory-menu">
                {menuItem}
            </div>
        )
    }
}

export default Directory;