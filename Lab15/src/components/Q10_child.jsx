import React from "react";
export default function Q10_Child({ msg }) {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Question-10</h1>
            <p>Message from Parent: {msg}</p>
        </div>
    );
}
