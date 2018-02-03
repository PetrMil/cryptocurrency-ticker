import React, { Component } from 'react';
import {Tickers} from './components/tickers.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
        <h2>Cryptocurrency Ticker</h2>
        </div>
        <Tickers />
      </div>
    );
  }
}

export default App;
