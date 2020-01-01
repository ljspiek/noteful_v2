import React from 'react';
import NoteCard from '../noteCard/noteCard'
import NoteCardButton from '../noteCardButton/noteCardButton'


function NoteList(props){
    const notes=props.files.notes;
    console.log(notes)
   
    return (
      <section className="noteList"> 
        <ul> 
          {notes.map(note=>
            <NoteCard 
              key={note.id}
              id={note.id} 
              name={note.name} 
              modified={note.modified}
              folderId={note.folderId}
              content={note.content} />)}
        </ul>
        <NoteCardButton />
        
      </section>
   )
  }

export default NoteList; 
