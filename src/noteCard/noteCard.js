import React from 'react';
import './noteCard.css'


function NoteCard(props){
  
    return ( 
      <div className="noteCard">
        <h1>{props.name}</h1>
        <footer>{props.modified}</footer>
      </div>
   )
  }

export default NoteCard; 

