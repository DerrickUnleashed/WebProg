import React from "react";

const Q7 = ({ number }) => {
    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    return (
        <p>
            7) &nbsp;
            {number} is{" "}
            {isPrime(number) ? "a prime number" : "not a prime number"}.
        </p>
    );
};

export default Q7;
