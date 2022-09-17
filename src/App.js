import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./components/Clock.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Clock timeZone="Asia/Singapore" />
          <Clock timeZone="Europe/London" />
          <Clock timeZone="America/Phoenix" />
        </header>
      </div>
    );
  }
}

export default App;
