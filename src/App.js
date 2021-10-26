import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    count: 2,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.increment}> Click me </button>
        <span>{this.state.count}</span>
      </div>
    );
  }
}

export default App;
