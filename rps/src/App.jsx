import React, { Component } from 'react';
import Header from './components/Header'
import Scoreboard from './components/Scoreboard';

class App extends Component {

  state = {
    player: null,
    computer: null,
    playerScore: 0,
    computerScore: 0,
    winner: '',

  }


  theWinnerIs = () => {

    const election = ["rock", "paper", "scissors"];
    const computer = election[Math.floor(Math.random() * election.length)];
    const player = '';

    if (player === computer) {
      return "Even steven, Try again!";

    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "scissors" && computer === "paper") ||
      (player === "paper" && computer === "rock")
    ) {
      this.setState({ playerScore: this.state.playerScore + 1 })
      return "You Won!";
    } else {
      this.setState({ computerScore: this.state.computerScore + 1 })
      return "You loose!";
    }

  };

  render () {
    return (
      <div>
      <Header />
      
      <Scoreboard />
      </div>
    )
  }

};

  
    
  






export default App;