import React, { useState, useRef } from "react";

export default function Q12() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const nameRef = useRef();
    const emailRef = useRef();
    const [submittedData, setSubmittedData] = useState({ name: "", email: "" });

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Question 12</h1>
            <h2>Form with useState (Live Update)</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Form Submitted (useState)");
                    console.log("Name:", name);
                    console.log("Email:", email);
                }}
            >
                <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <br />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            <p>Name: {name}</p>
            <p>Email: {email}</p>

            <hr style={{ margin: "40px 0" }} />

            <h2>Form with useRef (Values on Submit)</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const nameVal = nameRef.current.value;
                    const emailVal = emailRef.current.value;
                    setSubmittedData({ name: nameVal, email: emailVal });
                    console.log("Form Submitted (useRef)");
                    console.log("Name:", nameVal);
                    console.log("Email:", emailVal);
                }}
            >
                <input type="text" placeholder="Name" ref={nameRef} />
                <br />
                <br />
                <input type="email" placeholder="Email" ref={emailRef} />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            <p>Name: {submittedData.name}</p>
            <p>Email: {submittedData.email}</p>
        </div>
    );
}
