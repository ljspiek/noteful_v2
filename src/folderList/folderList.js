import React from 'react';
import FolderCard from '../folderListCard/folderCard'
import FolderButton from '../folderButton/folderButton'
import {Link} from 'react-router-dom'

// function FolderList(props){
     
//     const folderNames=props.folders;
//     console.log(props.folders); 
    
//     return ( 
//       <div>
//       <section className="folderList">
//         <h2>Folders</h2>
//         <ul className="folderList">
//           {folderNames.map(folders => 
//            <FolderCard 
//            key={folders.id}
//            id={folders.id}
//            name={folders.name}/> )}
//         </ul>
//       </section>
//       <FolderButton />
//       </div>
//    )
//   }

class FolderList extends React.Component {
  render() {
    return (
      <div className="folderList">
        <h2>Folders</h2>
        <ul>
          {this.props.folders.map((folder) => {
            const classes = this.props.selected === folder.id
              ? 'folder selected'
              : 'folder'
            
            return (
              <li key={folder.id}>
                <Link className={classes} to={`/folders/${folder.id}`}>{folder.name}</Link>
              </li>
            )
          })}
        </ul>
        <FolderButton />
      </div>
    );
  }
}

FolderList.defaultProps = {
  folders: []
}

export default FolderList; 
