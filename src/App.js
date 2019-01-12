import React, { Component } from 'react';
import './App.css';
import Board from './components/BoardComponent/BoardComponent';

class App extends Component {

  render() {

    return (
      <div className="app__container">
        <div className="app__board">
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
