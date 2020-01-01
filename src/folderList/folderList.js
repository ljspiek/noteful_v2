import React from 'react';
import FolderCard from '../folderListCard/folderCard'
import FolderButton from '../folderButton/folderButton'

function FolderList(props){
     
    const folderNames=props.files.folders;
    console.log(folderNames); 
    
    return ( 
      <div>
      <section className="folderList">
        <ul className="folderList">
          {folderNames.map(folders =>
           <FolderCard 
           key={folders.id}
           id={folders.id}
           name={folders.name}/> )}
        </ul>
      </section>
      <FolderButton />
      </div>
   )
  }

export default FolderList; 
