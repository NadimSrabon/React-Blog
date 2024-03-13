import PropTypes from 'prop-types';

import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog,handleBookmark }) => {

    const { title, cover, author_img, author, posted_date, reading_time,hashtags } = blog;
    return (
        <div>

            <img className='w-[700px] h-[380px] mt-14' src={cover} alt="" />
            <div className='flex gap-[410px] mt-6'>
                <div className='flex gap-3'>
                    <div>

                    <img className='h-14 w-14 rounded-full' src={author_img} alt="" />

                    </div>

                    <div>

                    <h2>{author}</h2>
                    <p>{posted_date}</p>

                    </div>
                </div>
                <div className='flex gap-4'>
                    <p>{reading_time}<span> min read</span></p>
                    <button onClick={handleBookmark} className='mb-8'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl pt-4'>{title}</h2>

            <p>

            {
                hashtags.map(hash => <span><a href="">#{hash}</a></span>)
            }

            </p>
           

        </div>
    );
};

Blog.prototypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;