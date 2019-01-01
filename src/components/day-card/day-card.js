import React, { Component } from 'react';
import '../../App.scss';

function Title(props) {
  return (
      <h2 className="card-title">{props.value}</h2>
  );
}

function List(props) {
  const workouts = props.value.map((d) => d.reps != null ? <li key={d.workout}>{d.workout} x{d.reps}</li> : <li key={d.workout}>{d.workout}</li>);
  return (
    <ul>
      {workouts}
    </ul>
  );
}

class Card extends Component {
  constructor(props) {
    super(props);
    this.day = props.value;
    this.workouts = props.list;
    this.today = props.today;
  }

  render() {
    var whichCard = this.today === this.day ? "card-today" : "card";
    return (
      <div className={whichCard}>
        <div className="card-header">
          <Title value={this.day} today={this.day === this.today ? true : false}/>
        </div>
        <div className="card-info">
          <List value={this.workouts}/>
        </div>
      </div>
    );
  }
}

export {Card};
export {Title};
