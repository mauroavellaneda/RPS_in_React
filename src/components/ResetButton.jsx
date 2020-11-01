import React from "react";
import { Button, Icon } from "semantic-ui-react";

const ResetButton = (props) => {
  return (
    <div>
      <Button
        color="black"
        animated
        id="rst-btn"
        data-cy="rst-btn"
        onClick={props.onClick()}
      >
        <Button.Content visible> Reset Scoreboard</Button.Content>
        <Button.Content hidden>
          {" "}
          <Icon name="repeat"></Icon>
        </Button.Content>
      </Button>
    </div>
  );
};

export default ResetButton;
