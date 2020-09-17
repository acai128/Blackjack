import React, { useState, useEffect } from "react"; 
import axios from "axios";
import "./LoginForms.css"; 


const LoginForms = (props) => {
    const INITIAL_STATE = { player: "", name: ""}
    const [formData, setFormData] = useState(INITIAL_STATE);


  
    // useEffect(function(){
    //     async function player1Data(){
    //         console.log('running useEffect******')
    //         const dataResult = await axios.get("https://jsonplaceholder.typicode.com/player1s"); 
    //         setFromData(dataResult.data); 
    //     }
    //     player1Data()
    // }, []); 

    const handleSubmit = (evt) => {
        // console.log(evt.target);
        // setFormData(evt.target.value);
        evt.preventDefault();
        setFormData(INITIAL_STATE)
        props.setIsLoggedIn(true)
        props.setPlayer1(formData.player1)
        props.setPlayer2(formData.player2)
    };


    const handleChange = evt => {
        const {name, value} = evt.target;
        setFormData(fData => ({...fData, [name]: value }))
    }


    return (
       <form  onSubmit={handleSubmit}>
        <div className ='display2'>

            <h1> Black Jack</h1>
            
            <div className='input'>
            {/* <label htmlFor="player1">player1:</label> */}
            <input
                id="player1"
                type="text"
                name="player1"
                placeholder=" Enter Player 1 Name"
                value={formData.player1}
                onChange={handleChange}
            />
            </div>

            <div className='input'>
            {/* <label htmlFor="player2">player2:</label> */}
                <input
                    id="player2"
                    type="text"
                    name="player2"
                    placeholder="Enter Player 2 Name"
                    value={formData.player2}
                    onChange={handleChange}
                />
            </div>
            {/* <div className='input'>
            {/* <label htmlFor="player2">player2:</label> */}
                {/* <input
                    id="player2"
                    type="text"
                    name="player2"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                /> */}
            {/* </div>  */}
        <button type="submit" className='buttons' > Start Game </button>
     </div>
    </form>
    )

}


export default LoginForms;

