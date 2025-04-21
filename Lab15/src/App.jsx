import { useState } from "react";
import "./App.css";
import Q1 from "./components/Q1";
import Q2 from "./components/Q2";
import Q3 from "./components/Q3";
import Q4 from "./components/Q4";
import Q5 from "./components/Q5Render";
import Counter from "./components/Q6";
import Counter2 from "./components/Q6Alt";
import JokeGen from "./components/Q7";
import Q8 from "./components/Q8";
import { ThemeProvider, ThemedApp } from "./components/Q9";
import Q10 from "./components/Q10_parent";
import Q11 from "./components/Q11_parent";
import Q12 from "./components/Q12";

function App() {
    return (
        <>
            <Q1></Q1>
            <Q2></Q2>
            <Q3></Q3>
            <Q4></Q4>
            <Q5></Q5>
            <Counter></Counter>
            <Counter2></Counter2>
            <JokeGen></JokeGen>
            <Q8></Q8>
            <ThemeProvider>
                <ThemedApp />
            </ThemeProvider>
            <Q10></Q10>
            <Q11></Q11>
            <Q12></Q12>
        </>
    );
}

export default App;
