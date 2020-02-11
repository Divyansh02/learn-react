import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from './components/Person';
import Person from "./components/Person";
import {testFunction} from "./components/Person";
function App() {
  return (
    <div>
      <input type="text" name="myInput" />
      <button style={{color:'green'}} onClick={testFunction} >Verify</button>
      <Person />
    </div>
  );
}

export default App;
