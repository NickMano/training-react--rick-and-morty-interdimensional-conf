import React from "react";
import Badge from "../components/Badge";
import logo from "../logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        Learn React
      </header>
      <Badge />
    </div>
  );
};

export default App;
