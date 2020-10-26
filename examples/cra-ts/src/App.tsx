import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Basic from "./components/Basic";
import User from "./components/User";
import CounterJS from "./components/Counter";
import CounterTS from "./components/CounterTS";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Wrapper>
          <Basic name="string">
            <p> Children</p>
          </Basic>
          <User name="joe" />
          {/* <CounterTS value={3} caption="Value = " /> */}
          <CounterTS value={3} />
          <CounterJS />
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
