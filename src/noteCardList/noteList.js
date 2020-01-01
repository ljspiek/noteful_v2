import React from 'react';
import NoteCard from '../noteCard/noteCard'

function NoteList(props){
    const notes=props.files.notes;
   
    return (
      <section className="noteList"> 
        <ul> 
          {notes.map(note=><NoteCard key={note.id} name={note.name} modified={note.modified} />)}
        </ul>
      </section>
   )
  }

export default NoteList; 
