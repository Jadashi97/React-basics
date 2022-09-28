import React from "react";
import ReactDOM  from "react-dom/client";
import "./index.css";


// this is the alternative for a function component
class Square extends React.Component {

  // below i'm  passing a state to keep memory of things ** same as use states in functional components

  constructor(props){
    super(props); //in classes you must always call this
    this.state = {
      value : null,
    };
  }
  render(){
    return(
      <button 
        className="square" 
        onClick={()=> this.setState({value: "X"})} //this lets us put an X on the box when it is clicked
      >
        {/* passing props from parent to child component */}
        {/* {this.props.value}  */}
        {this.state.value} 
      </button>
    )
  }
}

class Board extends React.Component {
  renderSquare(i){
    return <Square value={i}/>
  }

  render(){
    const status = "Next Player: x";

    return(
      <div>
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
      </div>
    );
  }
}

class Game extends React.Component {
  render(){
    return(
      <div className="game">
        <div className="game-board">
          <Board/>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game/>);


