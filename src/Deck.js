import React, { useState, useEffect } from "react"; 
import axios from "axios";
import "./Deck.css"; 


function Deck(props){
    const [card, setCard] = useState([]); 
    const [deckId, setDeck_id] = useState(''); 
    const url = "https://deckofcardsapi.com/api/deck/"; 
    const [count, setCount] = useState(0); 
    const [gameStatus, setGameStatus] = useState('');


    useEffect(function(){
        async function deckUser(){
            console.log('running useEffect******')
            const deckResult = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"); 
            setDeck_id(deckResult.data.deck_id); 
        }
        deckUser()
    }, []); 

    useEffect(function() {
        if( count > 21){
          props.setPlayerScore(0);
          setGameStatus('busted');
        } else if (count === 21) {
          props.setPlayerScore(21);
          setGameStatus('blackjack');
        } 
      }, [count]);

    function convertToNumber(numStr) {
        if(numStr === "JACK" || numStr === "QUEEN" || numStr === "KING" ){
            return 10; 
        } else if (numStr === "ACE"){
            return (count + 11 <=21 ? 11 : 1)
        } else {
      return Number(numStr);
    }
}
   

// if player 1 hits stay, the next turn goes to player 2  
// if player 2 hits stay, return the name of the winner
// A player wins if they hit exactly 21 points or if the other
// player gets more than 21 points in trying to outscore the player. 


    async function drawCard() {
        console.log('deckId...', deckId)
        const resultCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`);
        console.log('count...', resultCard.data.cards[0].value); 
        const resultCardValueString = resultCard.data.cards[0].value;
        setCount(count => count + convertToNumber(resultCardValueString)); 
        // setCard(resultCard.data); 
        setCard(card => [...card, resultCard.data.cards[0]]); 
        console.log('cards array before update...', card)
        console.log('resultCard.data...', resultCard.data.cards[0])
        }
    
    const handleClickHit = async () => {
            await drawCard();
          }
    function displayCards(){
        // console.log('this is the current card...', card)
        // if(card.remaining === 0){
        //     return alert("No more cards!"); 
        // } 
        // const cardD = card.cards[0];

        // let x = Math.random() * 40-20; 
        // let y = Math.random() * 40-10; 
        // let transform = `translate(${x}px, ${y}px)`
        return (
          <div>
              {/* <img src={cardD.image} />
              <p>Count: {cardD.value}</p> */}
                {card.map((c, idx) => {  // what's idx?
                    const cardPosition = {'left': (idx * 50) + 'px'} //what's 50? 
                    return (
                    <li
                        style={cardPosition} 
                        className={'card-display'}>
                        <img src={c.image}/> 
                    </li>
                    )
                })}
          </div>
        )
    }

    function handleClickStay() {
        setGameStatus('stay');
        props.setPlayerScore(count);
      }

    function playerStatus(){
        if(gameStatus === 'busted') {
            return <h1>Busted!</h1>
        } else if (gameStatus === 'blackjack') {
            return <h1>BlackJack!!</h1>
        } else if(gameStatus === 'stay') {
            return <h1>Player stayed</h1>
        }
    }
  
    function displayButtons() {
        if(gameStatus === '') {
            return (
                <div>
                    <button className='button' onClick={handleClickHit}>HIT</button>
                    <button className='button' onClick={handleClickStay}>STAY</button>
                </div>
            )
        } else {
            return null; 
        }
    }
    return (
        <div>
            {playerStatus()}
            <div className ='getCard'>{card.length !== 0 && displayCards()} </div>
            <div className ='display'>
            <h1> Player: {props.player} </h1>

            <p> Count: {count}</p>
            {displayButtons()}
     
            </div>
            <button>Reset Game</button>
        </div>
    )
}
export default Deck;