import React from "react";

const UserPosts = ({ posts }) => {
    return (
        <div className="user-posts">
            <h3>User Posts</h3>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserPosts;
