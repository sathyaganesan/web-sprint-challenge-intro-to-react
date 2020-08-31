import React from 'react';

    const CharacterLink = (props) => {
        return(
            <div>
                <p><a href = {props.url}></a></p>
            </div> 
        );  
    };

export default CharacterLink;