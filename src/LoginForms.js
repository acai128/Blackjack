import React, { useState } from "react"; 
import axios from "axios";
import "./LoginForm.css"; 


function LoginForm(props){
    // const [playerName, setPlayerName] = useState(props.player); 
    const initial_state = { player: "", name:""}
    const [formData, setFormData] = useState(initial_state);


    const handleSubmit = (evt) => {
        evt.preventDefault();
        setFormData(initial_state)
        props.setIsLoggedIn(true)
        props.setPlayer1(formData.player1)
        props.setPlayer2(formData.player2)
        // props.setPlayer(playerName)
        // props.setPlayerIsReady(true); 
    };

    const handleChange = evt => {
    //   setPlayerName(evt.target.value)
        const {name, value} = evt.target;
        setFormData(fData => ({...fData, [name]: value }))
    }

    return (
       <form onSubmit={handleSubmit}>
    
            <h1>Black Jack Game</h1>
            
            <div className='input'>
                <input
                    id="player1"
                    type="text"
                    name="player1"
                    placeholder="Enter Player 1 Name"
                    value={formData.player1}
                    onChange={handleChange}
                />
            </div>
            <div className='input'>
                <input
                    id="player2"
                    type="text"
                    name="player2"
                    placeholder="Enter Player 2 Name"
                    value={formData.player2}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className='buttons'>Start Game</button>
    </form>
    )
}

export default LoginForm;

