import React from 'react';
import NoteCardDetails from '../noteCardDetails/noteCardDetails'
import './noteCard.css'
import {Link} from 'react-router-dom'

function formatDate(date) {
  var monthNames =[
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return monthNames[monthIndex] + ' ' + day + ',' + year;
}


function NoteCard(props){
  const modified = formatDate(new Date(props.modified));
  // console.log(modified);
  
    return ( 
      <div>
      <li className="noteCard">
        <Link to={`/notes/${props.id}`}><h3>{props.name}</h3></Link>
        
        <p>Modified: {modified}</p>
        <button>Delete Note</button>
      </li>
      {/* <NoteCardDetails content={props.content}/> */}
      </div>
      
   )
  }

export default NoteCard; 

