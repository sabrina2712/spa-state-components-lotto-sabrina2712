import React, { Component } from "react";
import faker from "faker";

class LuckyNumbers extends Component {
  constructor(props) {
    super(props);

    this.createNumbers = this.createNumbers.bind(this);
  }

  createNumbers() {
    let numbers = faker.random.number({
      min: 1,
      max: 6
    });
    console.log(numbers);
    // this.firstNumbers = faker.random.number({
    //   min: 1,
    //   max: 49
    // });
  }
  render() {
    return <button className="input" onClick={this.createNumbers}></button>;
  }
}
export default LuckyNumbers;
