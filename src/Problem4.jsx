import React, { Component } from 'react'

export default class Problem4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNumbers: [],
      countDictionary: {},
    };
  }
  handleChange = (event) => {
    const inputNumbers = event.target.value.split(",").map(Number);
    this.setState({
      inputNumbers,
    });
  };

  generateCount = () => {
    const { inputNumbers } = this.state;
    const countDictionary = {};

    [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((num) => {
      countDictionary[num] = inputNumbers.filter(
        (inputNum) => inputNum % num === 0
      ).length;
    });

    this.setState({
      countDictionary,
    });
  };
  render() {
    const { inputNumbers, countDictionary } = this.state;
    return (
      <>
        <div>
          <h2>Problem - 4</h2>
          <label>
            Enter numbers (comma-separated):
            <input
              type="text"
              value={inputNumbers}
              onChange={this.handleChange}
            />
          </label>
          <button onClick={this.generateCount}>Generate Count</button>
          <h4>Output: {JSON.stringify(countDictionary)}</h4>
        </div>
      </>
    );
  }
}
