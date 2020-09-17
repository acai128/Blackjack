import React, {useState}from 'react';
import Deck2 from "./Deck2"
import LoginForms from "./LoginForms"


  function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [player1, setPlayer1] = useState('')
    const [player2, setPlayer2] = useState('')


    const renderLoggedIn = ()=>{
      if(isLoggedIn === false ){
        return  <div>
            <LoginForms 
            setIsLoggedIn={setIsLoggedIn} 
            setPlayer1={setPlayer1}
            setPlayer2={setPlayer2}
            /> 
        </div>
      } else{
        return <div>
          <div><Deck2 player={player1} /></div>
          <div><Deck2 player={player2} /></div>
        </div>
      }
    }

    // const [items, setItems] = useState();
   
    // const createBox = item => {
    //   let logged = {...item};
    //   setItems(items => [...items, logged]);
    // };

    // const renderLoggedIn = () => {
    //   console.log('items...', items);
    //   return(
    //    <ul>
    //        {items.map(item => (
    //         <Log item={item} />
    //     ))}
    //    </ul>
    //   )
    // }
  return ( 
    <div>
      {/* {<LoginForms/> ? <LoginForms/> : <Deck2/> } */}
     {/* {createBox}  */}
     {renderLoggedIn()}
     {/* <LoginForms/>  */}
     {/* <Deck2/> */}
    </div>
  
  );
}

export default App;
