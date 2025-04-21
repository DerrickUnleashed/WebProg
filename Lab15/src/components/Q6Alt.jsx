import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        default:
            return state;
    }
};

function Counter2() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Use Reducer</h2>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>
                Increase
            </button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>
                Decrease
            </button>
        </div>
    );
}

export default Counter2;
