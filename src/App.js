import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Calendar from "./components/Calendar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="display-4 m-2">Calendar App</h1>
        <Calendar />
      </div>
    );
  }
}

export default App;
