import React from 'react';
import Character from './components/Character';

const CharacterImage = (props) => {
    return(
        <div>
            <img
                src = {props.image}
                alt = 'Ricky Morty'
            />
        </div>
    );
};

export default CharacterImage;