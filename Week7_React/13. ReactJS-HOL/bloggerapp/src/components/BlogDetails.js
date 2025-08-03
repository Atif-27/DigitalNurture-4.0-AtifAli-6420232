import React from 'react';

const BlogDetails = ({ blogs }) => {
    return (
        <ul>
            {blogs.length > 0 ? (
                blogs.map((blog) => (
                    <div key={blog.id}>
                        <h3>{blog.title}</h3>
                        <h5>{blog.author}</h5>
                        <p>{blog.content}</p>
                    </div>
                ))
            ) : (
                <p>No blog posts available.</p>
            )}
        </ul>
    );
};

export default BlogDetails;
