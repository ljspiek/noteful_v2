import React from 'react';
import './folderCard.css'

function FolderCard(props){
  
    return ( 
      <div className="folderCard">
        <h1>{props.name}</h1>
      </div>
   )
  }

export default FolderCard; 

