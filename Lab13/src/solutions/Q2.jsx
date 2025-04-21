import React from "react";
const Q2 = () => {
    const fruits = ["Apple", "Banana", "Orange"];
    return (
        <>
            <p>Q2</p>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </>
    );
};

export default Q2;
