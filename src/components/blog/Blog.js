import React from 'react';
import './Blog.css';
const Blog = (props) => {
    return (
        <div className='blog-area'>
            <h1>Hey buddies this is Blog aree.</h1>
            <h2 style={{color:'paleturquoise'}}>Heading: {props.heading}</h2>
            <h2 style={{color:'paleturquoise'}}>Author: {props.author}</h2>
        </div>
    );
};

export default Blog;