import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    timer: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  componentDidMount() {
    setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}> Click me </button>
        <span>{this.state.count}</span>
        <br />
        <span>{this.state.timer}</span>
      </div>
    );
  }
}

export default Counter;
