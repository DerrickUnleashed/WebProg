import React from "react";
import srcImage from "../Images/src-image.jpeg"; // Importing from src

const DisplayImages = () => {
    return (
        <div>
            <h1>Question 1</h1>
            <h2>A) Image from Public Folder</h2>
            {/* Better way to reference public images */}
            <img
                src="Images/public-image.jpeg"
                alt="Public Image"
                width="300"
            />

            <h2>B) Image from Src Folder</h2>
            {/* Src image - Imported directly */}
            <img src={srcImage} alt="Src Image" width="300" />
        </div>
    );
};

export default DisplayImages;
