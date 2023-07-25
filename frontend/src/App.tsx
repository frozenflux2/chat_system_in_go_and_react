import React from "react";
import "./App.css";
import { sendMsg } from "./api";

const App = () => {
  const send = () => {
    console.log("hello world");
    sendMsg("hello world");
  };

  return (
    <div className="App">
      <button onClick={send}>Hit</button>
    </div>
  );
};

export default App;
