import React from 'react';
import NoteCardDetails from '../noteCardDetails/noteCardDetails'
import './noteCard.css'


function NoteCard(props){
  // console.log(props)
  
    return ( 
      <div>
      <div className="noteCard">
        <h2>{props.name}</h2>
        <p>Modified: {props.modified}</p>
        <button>Delete Note</button>
      </div>
      {/* <NoteCardDetails content={props.content}/> */}
      </div>
      
   )
  }

export default NoteCard; 

