import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="App">
      <h1 className="display-4 m-2">Calendar App</h1>
      <Calendar />
    </div>
  );
}

export default App;
