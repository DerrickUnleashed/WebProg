import React from "react";

const Q6 = () => {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const today = new Date().getDay();
    return <h1>6) Today is {days[today]}</h1>;
};

export default Q6;
