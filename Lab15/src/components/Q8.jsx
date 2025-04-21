import React, { useRef } from "react";
function Q8() {
    const inputRef = useRef(0);
    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Question-8</h1>
            <input type="text" ref={inputRef} placeholder="Input" />
            <br />
            <br />
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    );
}
export default Q8;
