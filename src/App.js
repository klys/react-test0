import React, { Component } from 'react';
import API from './services/dateAPI';
import DateButton from './components/DateButton';
import DateDisplay from './components/DateDisplay';

class App extends Component {
  constructor() {
    super();
    this.state= {
      'day': '',
      'month': '',
      'year': ''
    };
  }

  handleButtonClick = () => {
    console.log("button")
    API.getAPIResponse().then((res) => {
      console.log(res.data.date)
      let date = res.data.date.split("-");

      this.setState({
        day:date[0],
        month:date[1],
        year:date[2]
      })
      
    });
  }

  render() {
    return (
      <div>
        <center><h1>Date API</h1></center>
        <center><DateButton onClickButton = {() => this.handleButtonClick()}></DateButton></center>
        <DateDisplay day = {this.state.day} month = {this.state.month} year = {this.state.year}></DateDisplay>
      </div>
    );
  }
}

export default App;
