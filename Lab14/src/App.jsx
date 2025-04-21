import React from "react";
import "./App.css";
import NovellLoginForm from "./components/NovellLoginForm";
import DisplayImages from "./components/DisplayImages";
function App() {
    return (
        <div>
            <DisplayImages />
            <NovellLoginForm />
        </div>
    );
}

export default App;
