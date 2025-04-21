import React, { useState } from "react";

const Q10 = () => {
    const [number, setNumber] = useState(null);

    const generateNumber = () => {
        setNumber(Math.floor(Math.random() * 100) + 1);
    };

    return (
        <div>
            <button onClick={generateNumber}>10) Generate Number</button>
            {number && <p>Random Number: {number}</p>}
        </div>
    );
};

export default Q10;
