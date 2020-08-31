import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const StyledBtn = styled.button`
    width: 160px;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: lightblue;
    font-size: 20px;
    color: red;
`;


const ButtonCompo = (props) => {
    function fwdTo() {
        alert('Hello!121' );
      }
        return (
        <div>
            <StyledBtn onClick = {fwdTo}>{props.name}</StyledBtn>
        </div>
    );
};

export default ButtonCompo;
