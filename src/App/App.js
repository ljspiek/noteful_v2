import React,{Component} from 'react';
import {Route, Link} from 'react-router-dom';
import data from '../dummy-store';
import NotefullHome from '../notefullHome/notefullHome';
import NoteList from '../noteCardList/noteList';
import FolderList from '../folderList/folderList';
import '../App/App.css';

// console.log(data);



class App extends Component{
  state= {
    notes: [],
    folders: [],
  }



  render(){

    //STATE
    // state ={};
    
    //CREATE ROUTES

   
    //MAIN RENDER
    return ( <div>
              <NotefullHome name="Noteful Home"/>
                <section className="grid-container">
                  <FolderList className="folder-area" files={data} />
                  <NoteList className="note-area"files={data}/>
                </section>
             </div>)

    // return (<div>
    // {/* FOLDER NAVIGATION */}  
    // {/* HEADER FOR NOTEFUL HOME  */}
    // {/* MAIN CARDS */}
    // </div>)
  

}
}

export default App;
