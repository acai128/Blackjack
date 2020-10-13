import React, { useState } from 'react'; 
import Deck from './Deck'; 
import LoginForm from './LoginForm'; 

function Game() {
    const [player1IsReady, setPlayer1IsReady] = useState(false); 
    const [player2IsReady, setPlayer2IsReady] = useState(false); 
    const [player1, setPlayer1] = useState(''); 
    const [player2, setPlayer2] = useState(''); 
    const [player1Score, setPlayer1Score] = useState(0); 
    const [player2Score, setPlayer2Score] = useState(0); 
    const [player1IsDone, setPlayer1IsDone] = useState(true); 
    const [player2IsDone, setPlayer2IsDone] = useState(true); 

    function player1View(){
        if(player1IsReady === false){
            return (
                <div>
                    <LoginForm 
                        setPlayer={setPlayer1}
                        setPlayerIsReady={setPlayer1IsReady}
                        player1={player1}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <Deck 
                        player={player1}
                        setPlayerScore={setPlayer1Score}                 
                    />
                </div>
            )
        }
    }

    function player2View(){
        if(player2IsReady === false){
            return (
                <div>
                    <LoginForm 
                        setPlayer={setPlayer2}
                        setPlayerIsReady={setPlayer2IsReady}
                        player={player2}
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <Deck 
                    player={player2}
                    setPlayerScore={setPlayer2Score}
                    />
                </div>
            )
        }
    }
    
    return ( 
        <div>
          {player1Score && 
            <h1>Player1: {player1Score}</h1>}
          {player2Score && 
            <h1>Player2: {player2Score}</h1>}
          {player1View()}
          {player2View()}
        </div>
      );
    }
    

export default Game; 
