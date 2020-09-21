import React, { Component } from 'react'
import { Header, Grid } from 'semantic-ui-react'

const Scoreboard = ({ playerScore, computerScore }) => {
    return (
        <div class='scoreboard'>
            

                <Header>
                    <i>Player:</i> {playerScore}
                </Header>
            

            <Header>
                <i>Computer:</i>{computerScore}
            </Header>
        </div>

    )
}

export default Scoreboard; 