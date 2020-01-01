import React from 'react';
import './folderCard.css'

function FolderCard(props){
  console.log(props)
  
    return ( 
      <li className="folderCard">
        <h2>{props.name}</h2>
      </li>
   )
  }

export default FolderCard; 

