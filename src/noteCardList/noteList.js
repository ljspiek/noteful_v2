import React from 'react';
import NoteCard from '../noteCard/noteCard'


import data from '../dummy-store';

function NoteList(props){
  
    return ( 
      <div className="noteList">
       <NoteCard name="Note1" modified="01012020"/>
      </div>
   )
  }

export default NoteList; 
