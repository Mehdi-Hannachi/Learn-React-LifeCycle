import React, { Component } from "react";
import Counter from "../Counter/Counter";

class ShowCounter extends Component {
  state = {
    show: false,
  };

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Show
        </button>
        {this.state.show ? (
          <Counter timer={this.state.timer} setTimer={this.setTimer} />
        ) : null}
      </div>
    );
  }
}

export default ShowCounter;
