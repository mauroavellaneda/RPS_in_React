import { render } from 'enzyme';
import React from 'react';



const selector = ['rock','paper','scissor'];

class App extends Component {
  state = {
    playerOne: selector[0],
    playerTwo: selector[0],
    winner: ''


  }
  render() {
    return (
      <div>
        <h1>Rock,Paper, Scissor</h1>
        <Player/>
        <div><button id='rock-btn'></button></div>
      </div>
      
    )
  }
  
  
  
}

export default App;
