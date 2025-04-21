import React from "react";
function Header(props) {
    return (
        <>
            <header>
                <h1>{props.title}</h1>
            </header>
        </>
    );
}
function Main() {
    let arr = [
        "Why don’t skeletons fight each other? They don’t have the guts.",
        "Why did the scarecrow win an award? He was outstanding in his field!",
        "Why did the math book look sad? Because it had too many problems.",
        "Why don't eggs tell jokes? They'd crack each other up!",
        "Why did the bicycle fall over? It was two-tired!",
    ];

    return (
        <>
            <button
                onClick={() => {
                    var random = Math.floor(Math.random() * arr.length);
                    document.getElementById("joke").innerHTML = arr[random];
                }}
            >
                Tell me a joke!
            </button>
            <p id="joke"></p>
        </>
    );
}
function Footer() {
    return (
        <footer>
            <h3>This is the Footer</h3>
        </footer>
    );
}
function Q1() {
    return (
        <>
            <h1>Question 1:</h1>
            <div style={{ textAlign: "center" }}>
                <Header title="Joke Teller" />
                <Main />
                <Footer />
            </div>
        </>
    );
}
export default Q1;
