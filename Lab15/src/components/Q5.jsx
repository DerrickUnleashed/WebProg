import React, { Component } from "react";

class LifeCycleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        console.log("Constructor Logged");
    }

    componentDidMount() {
        console.log("ComponentDidMount Logged");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("ComponentDidUpdate Logged");
        console.log("Previous state:", prevState.count);
        console.log("Current state:", this.state.count);
    }

    componentWillUnmount() {
        console.log("ComponentWillUnmount Logged");
    }

    incrementCount = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <h1>LifecycleDemo</h1>
                <p>Check the console for logs</p>
                <p>Count: {this.state.count}</p>
                <button onClick={this.incrementCount}>Update state</button>
            </div>
        );
    }
}

export default LifeCycleDemo;
