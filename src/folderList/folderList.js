import React from 'react';
import FolderCard from '../folderListCard/folderCard'

function FolderList(props){
     
    const folderNames=props.files.folders;
    console.log(folderNames); 
    
    return ( 
      <section className="folderList">
        <ul className="folderList">
          {folderNames.map(folders =>
           <FolderCard 
           key={folders.id}
           name={folders.name}/> )}
        </ul>
       
      </section>
   )
  }

export default FolderList; 
