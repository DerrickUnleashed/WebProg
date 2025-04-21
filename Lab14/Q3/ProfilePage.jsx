import React from "react";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";

const ProfilePage = () => {
    const user = {
        imageUrl: "../public/Images/public-image.jpeg",
        name: "Derrick",
        email: "derrick@gmail.com",
        bio: "student@scopeUni",
        posts: [
            "It's always dark till you turn on light",
            "Truth is relative",
            "Complex yet simple:)",
        ],
    };

    return (
        <div className="profile-page">
            <h3>Question 3</h3>
            <ProfileImage imageUrl={user.imageUrl} />
            <UserInfo name={user.name} email={user.email} bio={user.bio} />
            <UserPosts posts={user.posts} />
        </div>
    );
};

export default ProfilePage;
