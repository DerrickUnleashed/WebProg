import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>Question 6</h1>
            <h1>Counter</h1>
            <h2>Use State</h2>
            <div style={{ textAlign: "center" }}>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Increase</button>
                <button onClick={() => setCount(count - 1)}>Decrease</button>
            </div>
        </>
    );
}

export default Counter;
