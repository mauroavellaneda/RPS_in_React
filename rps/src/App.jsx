import React, { Component } from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";

class App extends Component {
  state = {
    player: null,
    computer: null,
    playerScore: 0,
    computerScore: 0,
    winner: "",
    Header: true,
  };

  theWinnerIs = () => {
    const election = ["rock", "paper", "scissors"];
    const computer = election[Math.floor(Math.random() * election.length)];
    const player = "";

    if (player === computer) {
      return "Even steven, Try again!";
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "scissors" && computer === "paper") ||
      (player === "paper" && computer === "rock")
    ) {
      this.setState({ playerScore: this.state.playerScore + 1 });
      return "You Won!";
    } else {
      this.setState({ computerScore: this.state.computerScore + 1 });
      return "You loose!";
    }
  };

  render() {
    return (
      <div>
        {this.state.Header ? (
          <Header onClickHandler={() => this.setState({ Header: false })} />
        ) : (
          <Scoreboard
            onClickHandler={() => this.setState({ welcomePage: true })}
          />
        )}
      </div>
    );
  }
}

export default App;
