import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../selectors/directory_selector'

import MenuItem from "../menu-item/menu-item"
import './directory.scss'

const Directory = ({ sections }) =>  {
    // can spread it out ({ id, ...sectionProps })
    let menuItem = sections.map((section) => (
        <MenuItem key={section.id} title={section.title} 
        imageUrl={section.imageUrl} size={section.size}
        linkUrl={section.linkUrl}/>
    ))

    return (
        <div className="directory-menu">
            {menuItem}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);