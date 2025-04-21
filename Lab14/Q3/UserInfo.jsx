import React from "react";

const UserInfo = ({ name, email, bio }) => {
    return (
        <div className="user-info">
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>{bio}</p>
        </div>
    );
};

export default UserInfo;
