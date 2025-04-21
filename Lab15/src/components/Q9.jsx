import React, { useState, createContext, useContext, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () =>
        setTheme((prev) => (prev === "light" ? "dark" : "light"));

    useEffect(() => {
        document.body.style.backgroundColor =
            theme === "light" ? "#fff" : "#121212";
        document.body.style.color = theme === "light" ? "#000" : "#fff";
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const ThemedApp = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Question 9</h1>
            <h1>{theme.toUpperCase()} MODE</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export { ThemeProvider, ThemedApp };
