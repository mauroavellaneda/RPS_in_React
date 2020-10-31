import React from "react";
import { Button, Header, Icon, Container, Image } from "semantic-ui-react";

const Title = ({ onClickHandler }) => {
  return (
    <Container>
      <Header
        textAlign="center"
        as="h1"
        color="orange"
        size="huge"
        data-cy="title"
        id="title"
      >
        Welcome to the Rock Paper Scissor game!
      </Header>
      <Button color="black" animated id="srt-btn" onClick={onClickHandler}>
        <Button.Content visible>Get started</Button.Content>
        <Button.Content hidden>
          <Icon name="play"></Icon>
        </Button.Content>
      </Button>
      <Image
        id="header-image"
        src="https://www.rd.com/wp-content/uploads/2016/04/rock-paper-scissor-ft.jpg"
        rounded
      ></Image>
    </Container>
  );
};

export default Title;
