import React from 'react';

const Player = () => {
    return (
        <div class='player'>
            <div id="rps-you-move"></div>
            <select id="rps-player-sel" disabled>
                <option value="rock">Rock</option>;
                <option value="paper">Paper</option>;
                <option value="scissors">Scissors</option>;
             </select>
            <input id="rps-player-go" type="button" value="Go!" disabled/>
                
            
        </div>
    )
}

export default Player;