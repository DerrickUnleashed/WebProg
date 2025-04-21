import React from "react";

const Q9 = ({ text }) => {
    const reversed = text.split("").reverse().join("");
    const isPalindrome = text.toLowerCase() === reversed.toLowerCase();

    return (
        <div>
            <p>9) Reversed: {reversed}</p>
            <p>
                {isPalindrome ? "It is a palindrome" : "It is not a palindrome"}
            </p>
        </div>
    );
};

export default Q9;
