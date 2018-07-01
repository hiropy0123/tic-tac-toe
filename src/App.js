import React, { Component } from 'react'
import './App.css'

class Square extends Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    )
  }
}

class Board extends Component {
  renderSquare(i) {
    return <Square value={i}/>
  }

  render() {
    const status = "Next Player: X"

    return(
      <React.Fragment>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </React.Fragment>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </div>
    )
  }
}

export default App
