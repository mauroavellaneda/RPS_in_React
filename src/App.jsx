import React, { Component } from "react";
import Title from "./components/Header";
import { Container } from "semantic-ui-react";
import ResetButton from "./components/ResetButton";

const moves = ["rock", "paper", "scissor"];

class App extends Component {
  state = {
    playerMoves: [],
    computerMoves: [],
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
      winner: "Your time to move!",
    });
  };

  render() {
    return (
      <Container textAlign='center'
      >
        {this.state.Header ? (
          <Title onClickHandler={() => this.setState({ Header: false })} />
        ) : (
          <Container>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.RFXBEPg4Id7JqVHql68mGwHaHH&pid=Api&P=0&w=165&h=160"
              alt="rock"
              id="rock"
              data-cy="rock"
              onClick={this.timeToPlay}
            />
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.dcE8dnULs2C6_wjBABvd4QHaEk&pid=Api&P=0&w=264&h=163"
              alt="scissor"
              id="scissor"
              data-cy="scissor"
              onClick={this.timeToPlay}
            />
            <img
              src="http://1.bp.blogspot.com/-ODQB7WXnICo/Tp4P1bvHm1I/AAAAAAAAADY/740gEcpkXBw/s1600/writing-paper.jpg"
              alt="paper"
              id="paper"
              data-cy="paper"
              onClick={this.timeToPlay}
            />

            <p>
              <strong>Your time to move!</strong> <br />
            </p>

            <h2 data-cy="score-message">{this.state.winner}</h2>
            <p id="player-score">Player: {this.state.playerWins} </p>
            <p data-cy='computer-score'> Computer: {this.state.computerWins}</p>
            <ResetButton onClick={() => this.resetScore} />
          </Container>
        )}
      </Container>
    );
  }
}

export default App;
