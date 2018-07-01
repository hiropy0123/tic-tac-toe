import React, { Component } from 'react';
import './App.css';

class App extends Component {
  name = "Yamada";
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello, {this.name}!</h1>
        </header>
      </div>
    );
  }
}

export default App;
