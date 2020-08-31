import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character.js';
import { Card, CardTitle, CardBody } from 'reactstrap';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [ricky, setRicky] = useState ([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  useEffect(() => {
    axios
    .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
    .then((res) => {
      setRicky(res.data.results);
      // console.log(res.data);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  // const newStarwar = starwar.results;
  console.log(ricky);

  return (
    <div className="App">
      <h1 className="Header">Ricky and Morty Characters</h1>
      {ricky.map((item) => {
        return (
        <Character
          key = {item.id}
          name = {item.name}
          species = {item.species}
          gender = {item.gender}
          status = {item.status}
          created = {item.created}
          actorDetails = {item.url}
          characterImage = {item.image}
        />        
        );
      })}
    </div>
  );
}

export default App;
