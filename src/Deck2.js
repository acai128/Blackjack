import React, { useState, useEffect } from "react"; 
import axios from "axios";
import "./Deck.css"; 


function Deck(props){
    const [card, setCard] = useState([]); 
    const [deckId, setDeck_id] = useState(''); 


    

    const url = "https://deckofcardsapi.com/api/deck/"; 
    const [count, setCount] = useState(0); 
    useEffect(function(){
        async function deckUser(){
            console.log('running useEffect******')
            const deckResult = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"); 
            setDeck_id(deckResult.data.deck_id); 
        }
        deckUser()
        
    }, []); 

    function convertToNumber(numStr) {
        if(numStr === "JACK" || numStr === "QUEEN" || numStr === "KING" ){
            return 10; 
        } else if (numStr === "ACE"){
            return (count + 11 <=21 ? 11 : 1)
        } else {
      return Number(numStr);
    }
}
   

    const handleClick = () => {
        if(count > 21){
            return alert ("You lose ㅠ.ㅠ")
        } else if (count === 21) {
            return alert ("you win!!!!!!!")
        }


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
        drawCard()
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
                {card.map((c, idx) => {
                    const cardPosition = {'left': (idx * 50) + 'px'}
                    return (
                    <li style={cardPosition} className={'card-display'}><img src={c.image}/> 
                    </li>
                    )
                })}
          </div>
        )
    }
  
    return (
        <div>
            <div className ='getCard'>{card.length !== 0 && displayCards()} </div>
            <div className ='display'>
            <h1> Player: {props.player} </h1>

            <p> Count: {count}</p>
            <button className='button' onClick={handleClick}>New Card</button>
            <button>Stay</button>
     
            {/* <div className ='getCard'>{card.length !== 0 && displayCards()} </div> */}
            </div>
        </div>
    )
}
export default Deck;