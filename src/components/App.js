import React from "react";
import Navbar from "./Navbar";
import GameControl from "./GameControl.js";
import { connect } from 'react-redux';

class App extends React.Component{

  render(){
    return (
      <React.Fragment>
        <navbar />
        <gameControl />
      </React.Fragment>
    );
  }
}



export default App;