// Write your Character component here
import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import ButtonCompo from './ButtonCompo';

const StyledH3 = styled.h3`
    color: blue;
`;

const StyledP = styled.p`
    color: indianred;
`;

const StyledA = styled.a`
    text-decoration: none;
`;

    const Character = (props) => {
        return(
            <div>
                <CardTitle>
                    <StyledH3>Character Name: {props.name} </StyledH3>
                </CardTitle>
                <CardText>
                    <img src = {props.characterImage}  alt = "Random"/>
                    <StyledP>Species: {props.species}</StyledP>
                    <StyledP>Gender: {props.gender}</StyledP>
                    <StyledP>Status: {props.status}</StyledP>
                    <StyledP>Created: {props.created}</StyledP>
                    <p><StyledA href = {props.actorDetails} target='_blank'>Character Details</StyledA> </p>
                    <ButtonCompo name = {props.name}/>
                </CardText>
            </div>
        );
    };
export default Character;