import React from 'react';

import './noteCardDetails.css'


function NoteCardDetails(props){
  
  const cards = props;
  console.log(cards)
//   const card = props.find(c =>
//     c.id === props.match.params.props.id)
  
    return ( 
      <div className="cardContents">
          <p>{props.content}</p>
      </div>
   )
  }

export default NoteCardDetails; 

