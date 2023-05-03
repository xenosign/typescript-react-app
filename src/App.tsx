import React from "react";
import "./App.css";
import ChangeColor from "./components/ChangeColor";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Input from "./components/Input";
import ParentProps from "./components/ParentProps";
import Section from "./components/Section";
import Tail from "./components/Tail";
import TestHeader from "./components/TestHeader";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <TestHeader isLogin={true} userID="Tetz" />
    </div>
  );
}

export default App;
