import React from 'react';
import PropTypes from 'prop-types'
// import { prototype } from 'postcss/lib/previous-map';
import Bookmark from './Bookmark/Bookmark';
import PropType from "prop-types"

const Bookmarks = ({bookmark, readingTime}) => {
    return (
        <div className='w-1/3 bg-gray-300 space-y-4'>

        <div className='text-3xl'>

        <h3>Reading Time : {readingTime}</h3>
            
        </div>

        <h2 className='text-3xl'>Bookmarks : {bookmark.length}</h2>

        {
            bookmark.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
        }
            
        </div>
    );
};

Bookmarks.prototypes = {
    bookmark: PropTypes.array,
    readingTime:  PropTypes.number
}

export default Bookmarks;