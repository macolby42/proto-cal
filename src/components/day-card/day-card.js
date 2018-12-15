import React, { Component } from 'react';

function Title(props) {
  return (
    <h2>{props.value}</h2>
  );
}
class DayCard extends Component {
  constructor(props) {
    super(props);
    this.day = props.value;
  }


  render() {
    return (
        <Title value={this.day}/>
    );
  }
}

export default DayCard;
