import React from "react";
import { Button } from "semantic-ui-react";

const ResetButton = props => {
  return (
    <div>
      <Button
        
        id="rst-btn"
        onClick={props.onClick()}
      >
        Reset Score
      </Button>
    </div>
  );
};
export default ResetButton;