import React from 'react';
import './noteCard.css'


function NoteCard(props){
  
    return ( 
      <li className="noteCard">
        <h2>{props.name}</h2>
        <footer>{props.modified}</footer>
      </li>
   )
  }

export default NoteCard; 

