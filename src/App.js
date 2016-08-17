import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import State from './state'

class App extends Component {
  render() {
    return (
      <div className="App">
        <State onValue={(value) => console.log(`such value ${value}`)} />
      </div>
    );
  }
}

export default App;
