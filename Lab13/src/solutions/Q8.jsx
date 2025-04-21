import React, { Component } from "react";

class Q8 extends Component {
    constructor(props) {
        super(props);
        this.state = { celsius: "", fahrenheit: "" };
    }

    convertToCelsius = (f) => ((f - 32) * 5) / 9;
    convertToFahrenheit = (c) => (c * 9) / 5 + 32;

    handleCelsiusChange = (e) => {
        this.setState({
            celsius: e.target.value,
            fahrenheit: this.convertToFahrenheit(e.target.value),
        });
    };

    handleFahrenheitChange = (e) => {
        this.setState({
            fahrenheit: e.target.value,
            celsius: this.convertToCelsius(e.target.value),
        });
    };

    render() {
        return (
            <div>
                <p>8)</p>
                <input
                    type="number"
                    value={this.state.celsius}
                    onChange={this.handleCelsiusChange}
                    placeholder="Celsius"
                />
                <input
                    type="number"
                    value={this.state.fahrenheit}
                    onChange={this.handleFahrenheitChange}
                    placeholder="Fahrenheit"
                />
            </div>
        );
    }
}

export default Q8;
