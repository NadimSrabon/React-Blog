import { useEffect } from "react";
import { useState } from "react";
import Blog from "../../Blog/Blog";

import PropTypes from 'prop-types'

const Blogs = ({handleBookmark ,handleReading}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        fetch('Info.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])
    return (
        <div className="w-2/3">
        <h2 className="text-4xl">Blogs : {blogs.length}</h2>
        {
            blogs.map(blog => <Blog blog={blog} handleBookmark={handleBookmark} handleReading={handleReading}></Blog>)
        }
            
        </div>
    );
};

Blog.prototypes = {
    handleBookmark: PropTypes.func,
    handleReading: PropTypes.func
}

export default Blogs;