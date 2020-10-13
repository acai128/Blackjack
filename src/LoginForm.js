import React, { useState } from "react"; 
import axios from "axios";
import "./LoginForm.css"; 


function LoginForm(props){
    const [playerName, setPlayerName] = useState(props.player); 

    const handleSubmit = (evt) => {
        evt.preventDefault();

        props.setPlayer(playerName)
        props.setPlayerIsReady(true); 
    };

    const handleChange = evt => {
      setPlayerName(evt.target.value)
    }

    return (
       <form onSubmit={handleSubmit}>
    
            <h1> Black Jack</h1>
            
            <div className='input'>
                <input
                    id="player"
                    type="text"
                    name="player"
                    placeholder="Enter Player Name"
                    value={playerName}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className='buttons'>Start Game</button>
    </form>
    )
}

export default LoginForm;

