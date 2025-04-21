import React, { Component } from "react";

class Q12 extends Component {
    render() {
        const { firstName, lastName } = this.props;
        return (
            <h1>
                12) Hello, {firstName} {lastName}!
            </h1>
        );
    }
}

export default Q12;
