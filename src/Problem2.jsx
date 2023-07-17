import React, { Component } from 'react'

export default class Problem2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNumber: 0,
      series: [],
    };
  }
  handleChange = (event) => {
    const inputNumber = parseInt(event.target.value, 10);
    this.setState({
      inputNumber,
    });
  };

  generateSeries = () => {
    const { inputNumber } = this.state;
    const series = [];
    for (let i = 1; i <= inputNumber; i += 2) {
      series.push(i);
    }
    this.setState({
      series,
    });
  };
  render() {
    const { inputNumber, series } = this.state;
    return (
      <>
        <div>
          <h2>Problem - 2</h2>
          <label>
            Enter a number (x):
            <input
              type="number"
              value={inputNumber}
              onChange={this.handleChange}
            />
          </label>
          <button onClick={this.generateSeries}>Generate Series</button>
          <h4>Output: {series.join(", ")}</h4>
        </div>
      </>
    );
  }
}
