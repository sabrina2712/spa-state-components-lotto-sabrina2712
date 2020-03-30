import React, { Component } from "react";

class LuckyNumbers extends Component {
  constructor(props) {
    super(props);

    this.createNumbers = this.createNumbers.bind(this);
  }

  createNumbers() {
    let numbers = Math.floor(Math.random() * 10);
    console.log(numbers);
  }
  render() {
    return <button className="input" onClick={this.createNumbers}></button>;
  }
}
export default LuckyNumbers;
