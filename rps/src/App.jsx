import { render } from 'enzyme';
import React, { Component } from "react";
import Scoreboard from './components/Scoreboard';






class App extends Component {
  state = {
    player: null,
    computer: null,
    playerScore: 0,
    computerScore: 0,
    winner: ''

  }


  theWinnerIs = () => {

    const { player, computer } = this.state;

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

    


  render() {
    return (
      <div>
        <h1>Rock,Paper, Scissor</h1>
        
        <div><button id='rock-btn'>rock</button></div>
        <div><button id='ppr-btn'>Paper</button></div>
        <div><button id='scr-btn'>Scissor</button></div>
        <Scoreboard playerScore={this.state.playerScore} computerScore={this.state.computerScore}/>
        <button type='button'>Play</button>
      </div>

    )
  }



}

export default App;
