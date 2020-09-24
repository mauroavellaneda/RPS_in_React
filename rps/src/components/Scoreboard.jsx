
import React from 'react'
import { Header, } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const Scoreboard = ({ playerScore, computerScore }) => {
    return (
        <div className='scoreboard'>
            <Button id='rock-btn'>rock</Button>
            <Button id='ppr-btn'>paper</Button>
            <Button id='scr-btn'>scissor</Button>
            

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