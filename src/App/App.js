import React,{Component} from 'react';
import {Route, Switch, Link, BrowserRouter} from 'react-router-dom';
import data from '../dummy-store';
import NoteList from '../noteCardList/noteList';
import FolderList from '../folderList/folderList';
import '../App/App.css';





class App extends Component{
  state= data

  


  render(){
    console.log(this.state)
   
    return ( 
          <BrowserRouter>
            <div>
              <header className="app-title">
                <Link to={'/'}><h1>NOTEFUL</h1></Link>
              </header>
          
              <aside>
                <Route
                  exact
                  path='/'
                  render={() =>
                    <FolderList folders={this.state.folders}/>
                  }
                />
                <Route
                  exact
                  path='/folders/:folderId'
                  render={(props) =>
                  <FolderList folders={this.state.folders} selected={props.match.params.folderId} />
                }
                />
                <Route
                  exact
                  path='/notes/:noteId'
                  render={(props) => {
                    const selectedFolderId = this.state.notes.find(
                      note => note.id === props.match.params.noteId).selectedFolderId
                    
                    const selectedFolder = this.state.folders.find(
                      folder => folder.id === selectedFolderId
                    )
                    return (
                      <FolderList id={selectedFolder.id} name={selectedFolder.name} />
                    )
                  
                  }}
                />
              </aside>

              <main>
                <Route
                  exact
                  path='/'
                  render={() =>
                    <NoteList notes={this.state.notes} />
                  }
                />

                <Route
                  exact
                  path='/folders/:folderId'
                  render={(props) => {
                    return(
                      <NoteList notes={this.state.notes.filter(
                        note => note.folderId === props.match.params.folderId
                      )}
                      />
                    )
                  }}
                />

                <Route
                  exact
                  path='/notes/:noteId'
                  render={(props) => {
                    const selectedNote = this.state.notes.find(
                      note => note.id === props.match.params.noteId
                    )
                    return (
                      <NoteList {...selectedNote}/>
                    )
                  }}
                />

              </main>
                {/* <section className="grid-container"> */}
                  {/* <FolderList className="folder-area" folders={this.state.folders}/> */}
                  {/* <NoteList className="note-area"notes={this.state.notes}/>
                </section> */}
             </div>
             
             </BrowserRouter>
             )

  
  

}
}

export default App;
