import React from 'react';
import NoteCard from '../noteCard/noteCard'

function NoteList(props){
    const notes=props.files.notes;
    console.log(notes[0].name); 
    return (
      <section className="noteList"> 
        <ul> 
        <NoteCard name={props.files.notes[0].name} modified={props.files.notes[0].modified} />
        <NoteCard name={props.files.notes[0].name} modified={props.files.notes[0].modified} />
        </ul>
      </section>
   )
  }

export default NoteList; 
