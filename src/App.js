import React from 'react';
import {Card, Title} from './components/day-card/day-card';

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
  constructor(props) {
    super(props);
    this.days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var d = new Date();
    var today = d.getDay();
    this.today = this.days[today];
  }

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
        <div className="title-div">
          <Title value={"Workout Calendar"} />
        </div>
        <Card today={this.today} value={"Monday"} list={[{"workout": "pushups", "reps": 10 }, {"workout": "situps", "reps": 10}, {"workout": "bumbbells", "reps": 10}]} />
        <Card today={this.today} value={"Tuesday"} list={[{"workout": "2 rep"}]} />
        <Card today={this.today} value={"Wednesday"} list={[{"workout": "3 rep"}]} />
        <Card today={this.today} value={"Thursday"} list={[{"workout": "4 rep"}]} />
        <Card today={this.today} value={"Friday"} list={[{"workout": "5 rep"}]} />
      </div>
    );
  };
}

export default App;
