import React, { Component } from "react";
import Header from "./components/Header";
import { Button } from "semantic-ui-react";
import ResetButton from "./components/ResetButton";

const moves = ["rock", "paper", "scissor"];

class App extends Component {
  state = {
    playerMoves: [],
    computerMoves: [],
    result: [],
    playerWins: 0,
    computerWins: 0,
    Header: true,
  };

  timeToPlay = (e) => {
    const playerMoves = e.target.id;
    const computerMoves = moves[Math.floor(Math.random() * moves.length)];
    const winner = this.winner(playerMoves, computerMoves);
    this.setState({
      playerMoves: playerMoves,
      computerMoves: computerMoves,
      winner: winner,
    });
  };

  winner = (playerMoves, computerMoves) => {
    if (playerMoves === computerMoves) {
      return "you are even!";
    }

    if (
      (playerMoves === "rock" && computerMoves === "scissor") ||
      (playerMoves === "paper" && computerMoves === "rock") ||
      (playerMoves === "scissor" && computerMoves === "paper")
    ) {
      this.setState({ playerWins: this.state.playerWins + 1 });
      return "You win!";
    } else {
      this.setState({ computerWins: this.state.computerWins + 1 });
      return "You loose";
    }
  };
  resetScore = () => {
    this.setState({
      playerWins: 0,
      computerWins: 0,
    });
  };

  render() {
    return (
      <div>
        {this.state.Header ? (
          <Header onClickHandler={() => this.setState({ Header: false })} />
        ) : (
          <div class="buttons">
            <Button id="rock" onClick={this.timeToPlay.bind(this)}>
              Rock
            </Button>
            <Button id="scissor" onClick={this.timeToPlay.bind(this)}>
              Scissor
            </Button>
            <Button id="paper" onClick={this.timeToPlay.bind(this)}>
              Paper
            </Button>

            <p>
              <strong>Your time to move!</strong> <br /> <br />
            </p>

            <h2 id="winner">{this.state.winner}</h2>
            <p id="score">Player: {this.state.playerWins} </p>
            <p id="score"> Computer: {this.state.computerWins}</p>
            <ResetButton onClick={() => this.resetScore} />
          </div>
        )}
      </div>
    );
  }
}

export default App;