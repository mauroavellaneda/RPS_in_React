import React from "react";
import { Button } from "semantic-ui-react";

const ResetButton = (props) => {
  return (
    <div>
      <Button id="rst-btn" data-cy="rst-btn" onClick={props.onClick()}>
        Reset Scoreboard
      </Button>
    </div>
  );
};

export default ResetButton;
