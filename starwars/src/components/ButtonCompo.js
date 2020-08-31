import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const StyledBtn = styled.button`
    width: 150px;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: lightblue;
    font-size: 20px;
    color: red;
`;

const ButtonCompo = (props) => {
    return (
        <div>
            <StyledBtn onClick= {props.actorDetails} target='_blank'>{props.name}</StyledBtn>
        </div>
    );
};

export default ButtonCompo;
