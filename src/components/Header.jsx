import React from "react";
import { Button } from "semantic-ui-react";

const Header = ({ onClickHandler }) => {
  return (
    <div>
      <div id="title" data-cy="title">
        Welcome to the Rock Paper Scissor game!
      </div>
      <Button
        id="srt-btn"
        onClick={onClickHandler}
        style={{
          font: "inherit",
          cursor: "pointer",
          border: "1px, solid blue",
          background: "blue",
          color: "white",
          padding: "1 rem 2 rem",
        }}
      >
        Get started
      </Button>
    </div>
  );
};

export default Header;
