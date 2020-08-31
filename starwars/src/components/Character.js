// Write your Character component here
import React from 'react';
    const Character = (props) => {
        return(
            <div>
               <h3>Character Name: {props.name} </h3>
               <img src = {props.image} alt = "Ricky Morty"/>
                <p>Speices: {props.speices}</p>
                <p>Gender: {props.gender}</p>
                <p>Status: {props.status}</p>
            </div>
        );
    };
export default Character;