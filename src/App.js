import React from 'react';
import DayCard from './components/day-card/day-card';

// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }

// class Board extends React.Component {
//   renderSquare(i) {
//     return (
//       <Square
//         value={this.props.squares[i]}
//         onClick={() => this.props.onClick(i)}
//       />
//     );
//   }

//   render() {
//     return (
//       <div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // handleClick(i) {
  //   const history = this.state.history.slice(0, this.state.stepNumber + 1);
  //   const current = history[history.length - 1];
  //   const squares = current.squares.slice();
  //   if (calculateWinner(squares) || squares[i]) {
  //     return;
  //   }
  //   squares[i] = this.state.xIsNext ? "X" : "O";
  //   this.setState({
  //     history: history.concat([
  //       {
  //         squares: squares
  //       }
  //     ]),
  //     stepNumber: history.length,
  //     xIsNext: !this.state.xIsNext
  //   });
  // }

  // jumpTo(step) {
  //   this.setState({
  //     stepNumber: step,
  //     xIsNext: (step % 2) === 0
  //   });
  // }

  render() {
    return (
      <div className="container">
        <DayCard value={"Monday"} />
        <DayCard value={"Tuesday"} />
        <DayCard value={"Wednesday"} />
        <DayCard value={"Thursday"} />
        <DayCard value={"Friday"} />
      </div>
    );
  };
}

export default App;
