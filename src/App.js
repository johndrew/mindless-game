import React, { Component } from 'react';
import './App.css';
import Board from './components/BoardComponent/BoardComponent';
import RulesDisplayComponent from './components/RulesDisplayComponent/RulesDisplayComponent';

class App extends Component {

  render() {

    return (
      <div className="app__container">
        <h1>The Mindless Game</h1>
        <div className="app__content">
          <Board />
          <RulesDisplayComponent />
        </div>
      </div>
    );
  }
}

export default App;
