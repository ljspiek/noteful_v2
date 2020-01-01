import React from 'react';
import NoteCard from '../noteCard/noteCard'

function NoteList(props){
  
    const notes=props.files.notes;
    console.log(notes); 
    
    return ( 
      <div className="noteList">
       <NoteCard name={props.files.notes[0].name} modified={props.files.notes[0].modified}/>
      </div>
   )
  }

export default NoteList; 
