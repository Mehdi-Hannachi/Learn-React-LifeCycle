import "./App.css";
import React from "react";
import Counter from "./Counter/Counter";
import ShowCounter from "./ShowCounter/ShowCounter";

class App extends React.Component {
  componentDidUpdate() {
    console.log("Hello");
  }
  render() {
    return (
      <div className="App">
        <ShowCounter />
      </div>
    );
  }
}

export default App;
