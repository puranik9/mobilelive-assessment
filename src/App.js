import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from "./Title";
import Question from "./Question";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title/>
        <Question/>
      </div>
    );
  }
}

export default App;
