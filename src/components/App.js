import React from "react";
import Navbar from "./Navbar";
import GameControl from "./GameControl.js";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class App extends React.Component{

  constructor(props) {
    super(props);
    console.log(props);
    this.state={
    };
  }

  render(){
    return (
      <React.Fragment>
        <Navbar />
        <GameControl />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  wordDictionary : PropTypes.object,
  playerGuesses : PropTypes.bool
};

const mapStateToProps = state => {
  return{
    wordDictionary : state.wordDictionary,
    playerGuesses : state.playerGuesses
  }
}

App = connect(mapStateToProps)(App)


export default App;