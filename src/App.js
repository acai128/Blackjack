// import React, {useState} from 'react';
// import Deck from "./Deck"
// import LoginForm from "./LoginForm"

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); 
//   const [player1, setPlayer1] = useState(''); 
//   const [player2, setPlayer2] = useState(''); 

//   const renderLoggedIn = () => {
//     if(isLoggedIn === false){
//       return <div>
//           <LoginForm
//             setIsLoggedIn={setIsLoggedIn}
//             setPlayer1={setPlayer1}
//             setPlayer2={setPlayer2}
//           />
//         </div>
//     } else {
//       return <div>
//           <div><Deck player={player1}/></div>
//           <div><Deck player={player2}/></div>
//         </div>
//     }
//   }
//   return (
//     <div>
//     {/* {<LoginForm/> ? <LoginForm/> : <Deck /> } */}
//    {/* {createBox}  */}
//    {renderLoggedIn()}
//    {/* <LoginForm/>  */}
//    {/* <Deck/> */}
//   </div>
//   );
// }
import React from "react"; 
import Game from "./Game"; 

function App(){
  return (
    <Game /> 
  )
}

export default App;
