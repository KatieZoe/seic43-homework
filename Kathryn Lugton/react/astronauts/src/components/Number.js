import React, { Component } from 'react';
import axios from 'axios';

class Number extends Component {
  constructor() {
    super();
    this.state = {
      number: '',
      people: []
    }
    this.getNumber = this.getNumber.bind(this);
    this.getNumber();
  }
 getNumber(){
  axios(`http://api.open-notify.org/astros.json`).then(res => {
    const number = res.data.number;
    const people = res.data.people[0].name;
    console.log(people);
    /// how do I push each of these into the people array? - ASK MAI ABOUT ERROR MESSAGE RE Number state.
    this.setState({number: number})
  });
 }
  render(){
    return (
      <h1>
      There are currently { this.state.number } astronauts in space right now!
      </h1>
    )
  }
};
export default Number;
