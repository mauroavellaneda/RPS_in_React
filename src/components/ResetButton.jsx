import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class ResetButton extends Component {
  state = {
    playerWins: [],
    computerWins: [],
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
        <Button id="rst-btn" onClick={() => this.resetScore()}>
          Reset Score
        </Button>
      </div>
    );
  }
}
export default ResetButton;
