import React, { useState, useEffect } from "react";
function JokeGen() {
    const [joke, setJoke] = useState("");
    const fetchJoke = async () => {
        try {
            const response = await fetch("https://icanhazdadjoke.com/", {
                headers: { Accept: "application/json" },
            });
            const data = await response.json();
            setJoke(data.joke);
        } catch (error) {
            console.error("Error fetching joke:", error);
        }
    };
    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Question-7</h1>
            <p>Joke: {joke}</p>
            <button onClick={() => fetchJoke()}>Get a new joke</button>
        </div>
    );
}
export default JokeGen;
