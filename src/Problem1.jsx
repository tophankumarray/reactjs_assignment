import React, { Component } from 'react'

export default class Problem1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: "",
      num2: "",
      result: "",
    };
  }
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleAddition = () => {
    const { num1, num2 } = this.state;
    const result = Number(num1) + Number(num2);
    this.setState({
      result,
    });
  };

  handleSubtraction = () => {
    const { num1, num2 } = this.state;
    const result = Number(num1) - Number(num2);
    this.setState({
      result,
    });
  };

  handleMultiplication = () => {
    const { num1, num2 } = this.state;
    const result = Number(num1) * Number(num2);
    this.setState({
      result,
    });
  };

  handleDivision = () => {
    const { num1, num2 } = this.state;
    const result = Number(num1) / Number(num2);
    this.setState({
      result,
    });
  };
  render() {
      const { num1, num2, result } = this.state;
    return (
      <>
        <div>
          <h2>Problem - 1</h2>
          <input
            type="number"
            name="num1"
            value={num1}
            onChange={this.handleInputChange}
          />
          <br />
          <br />
          <input
            type="number"
            name="num2"
            value={num2}
            onChange={this.handleInputChange}
          />
          <br />
          <br />
          <button onClick={this.handleAddition}>Add</button>
          <button onClick={this.handleSubtraction}>Subtract</button>
          <button onClick={this.handleMultiplication}>Multiply</button>
          <button onClick={this.handleDivision}>Divide</button>
          <h4>Result: {result}</h4>
        </div>
      </>
    );
  }
}
