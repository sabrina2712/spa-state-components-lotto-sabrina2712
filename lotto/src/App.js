import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LuckyNumbers from "./component/luckynumbers";

function App() {
  return (
    <div className="App">
      <h1>Lotto 6/49</h1>
      <h2>Generating Lucky Numbers</h2>
      <p>
        <LuckyNumbers />
        <LuckyNumbers />
      </p>
    </div>
  );
}

export default App;
