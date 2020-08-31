// Write your Character component here
import React, {useState} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Collapse, CardBody } from 'reactstrap';
import styled from 'styled-components';
import CharacterLink from '../CharacterLink';
import ButtonCompo from './ButtonCompo';

// const Example = (props) => {
//     const [isOpen, setIsOpen] = useState(false);
  
//     const toggle = () => setIsOpen(!isOpen);
  
//     return (
//       <div>
//         <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
//         <Collapse isOpen={isOpen}>
//           <Card>
//             <CardBody>
//             Anim pariatur cliche reprehenderit,
//              enim eiusmod high life accusamus terry richardson ad squid. Nihil
//              anim keffiyeh helvetica, craft beer labore wes anderson cred
//              nesciunt sapiente ea proident.
//             </CardBody>
//           </Card>
//         </Collapse>
//       </div>
//     );
//   }
  
//   export default Example;
  

const StyledH3 = styled.h3`
    color: blue;
`;

const StyledP = styled.p`
    color: indianred;
`;

const StyledDiv = styled.div`
    border: 1px solid red;
    margin: 50px auto;
    padding: 20px;
    width: 40%;
    border-radius: 10px;
    box-sizing: border-box;
`; 

const StyledImg = styled.img`
    :hover {
        width: 300px;
        height: 300px;
    }
`;

    const Character = (props) => {
        return(
            <StyledDiv>
                <div>
                    <StyledH3>Character Name: {props.name} </StyledH3>                   
                    <StyledImg src = {props.characterImage}  alt = "Random"/>
                    <StyledP>Species: {props.species}</StyledP>
                    <StyledP>Gender: {props.gender}</StyledP>
                    <StyledP>Status: {props.status}</StyledP>
                    <StyledP>Created: {props.created}</StyledP>
                    <CharacterLink actorDetails = {props.actorDetails}/>
                    <ButtonCompo name = {props.name}/>
                </div>
            </StyledDiv>
        );
    };
export default Character;
