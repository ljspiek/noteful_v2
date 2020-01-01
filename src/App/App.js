import React,{Component} from 'react';

import data from '../dummy-store';
import NotefullHome from '../notefullHome/notefullHome';


console.log(data);



class App extends Component{
  render(){

    //STATE

    // state ={};
    
    //CREATE ROUTES

   
    //MAIN RENDER
    return ( <div>
      <NotefullHome name="Noteful Home"/>
    </div>)
    // return (<div>
    // {/* FOLDER NAVIGATION */}  
    // {/* HEADER FOR NOTEFUL HOME  */}
    // {/* MAIN CARDS */}
    // </div>)
  

}
}

export default App;
