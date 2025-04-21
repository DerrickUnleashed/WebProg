import React from "react";

const Q11 = ({ year }) => {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    return (
        <p>
            11) {year} is {isLeapYear ? "a leap year" : "not a leap year"}.
        </p>
    );
};

export default Q11;
