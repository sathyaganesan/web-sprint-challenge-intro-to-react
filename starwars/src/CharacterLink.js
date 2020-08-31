import React from 'react';
import styled from 'styled-components';

const StyledA = styled.a`
    text-decoration: none;
    color: indianred;
`;

    const CharacterLink = (props) => {
        return(
            <div>
                <p><StyledA href = {props.actorDetails} target='_blank'>Character Details</StyledA></p>
            </div> 
        );  
    };

export default CharacterLink;