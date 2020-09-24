import React from 'react'
import { Button } from 'semantic-ui-react';

const Header = ({onClickHandler}) => {
    return (
    <div>
    <div id='title'>Welcome to the Rock Paper Scissor game!</div>
    <Button id='srt-btn' onClick={onClickHandler}>Get started</Button>
    </div>
)}

export default Header;