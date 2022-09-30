import React from "react";
import ReactDOM  from "react-dom/client";
import "./index.css";


////////////////////this is a class component /////////////////////////////////////
// class Square extends React.Component {
//   render(){
//     return(
//       <button 
//         className="square" 
//         onClick={()=> this.props.onClick()} //this lets us put an X on the box when it is clicked
//       >
//         {/* passing props from parent to child component */}
//         {this.props.value} 
//       </button>
//     )
//   }
// }

// same as the above component but way easier
function Square(props){
  return(
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Board extends React.Component {
 

  renderSquare(i){
    return (

      <Square
          // this below passes props from the Game component
           value={this.props.squares[i]}
           onClick={() => this.props.onClick(i)}
        />
      );
  }

  render(){

    return(
      <div>
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
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
    };
  }

  // add an event handler to handle when the square is clicked
  handleClick(i){
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    // this is to let the handle click to return early 
    if(calculateWinner(squares) || squares[i]){
      return;
    }
    
    squares[i] = this.state.xIsNext ? "X" : "O"; //use conditional rendering to determine which player is next
    
    // this concatenates new history entries onto history
    this.setState(
      {
        history: history.concat([{
          squares: squares,
        }]),
        xIsNext: !this.state.xIsNext,
    });
  }

  render(){
    //use the most recent history entry
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    let status;

    // this is to declare who the winner is
    if(winner){
      status = "Winner" + winner;
    }else{
      status = "Next Player:" + (this.state.xIsNext ? "X" : "O");
    }

    return(
      <div className="game">
        <div className="game-board">
          <Board/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// this is a function to help declare who the winner is and stop the next play
function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for(let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}



// ========================================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game/>);


