import React, { Component } from "react";

class LuckyNumbers extends Component {
  constructor(props) {
    super(props);

    // this.createNumbers = this.createNumbers.bind(this);

    this.state = { numbers: this.createNumbers() };
  }

  createNumbers() {
    return [1, 2, 3, 4, 5].map(ele => {
      return Math.floor(Math.random() * 10);
    });
  }
  onResetClick = () => {
    this.setState({});
  };

  onShow = () => {
    this.setState({ numbers: this.createNumbers() });
  };

  render() {
    let numbers = this.state.numbers.map(num => {
      return <div>{num}</div>;
    });
    console.log(numbers);
    return (
      <div>
        {numbers}
        <button className="resetButton" onClick={this.onResetClick}>
          Reset
        </button>
        <button className="showButton" onClick={this.onShow}>
          SHow me Result
        </button>
      </div>
    );
  }
}
export default LuckyNumbers;
