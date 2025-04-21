import React, { Component } from "react";
import LifeCycleDemo from "./Q5";

class Q5 extends Component {
    state = { isMounted: true };

    toggleMount = () => {
        this.setState((prevState) => ({ isMounted: !prevState.isMounted }));
    };

    render() {
        return (
            <>
                <h1>Question 5</h1>
                <div style={{ textAlign: "center" }}>
                    {this.state.isMounted && <LifeCycleDemo />}
                    <button onClick={this.toggleMount}>
                        {this.state.isMounted
                            ? "Unmount Component"
                            : "Mount Component"}
                    </button>
                </div>
            </>
        );
    }
}

export default Q5;
