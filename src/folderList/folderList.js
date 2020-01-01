import React from 'react';
import FolderCard from '../folderListCard/folderCard'

function FolderList(props){
     
    const folderNames=props.files.folders;
    console.log(folderNames[0].name); 
    
    return ( 
      <div className="folderList">
       <FolderCard name={props.files.folders[0].name}/>
      </div>
   )
  }

export default FolderList; 
