import React from "react";
import Navbar from "./Navbar";
import GameControl from "./GameControl.js";

// import { connect } from 'react-redux';
// import PropTypes from "prop-types";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentWord: 'birth',
      lettersGuessed: []
    };
  }
  
  handleAddLetterSubmit = (newLetter) => {
    console.log(newLetter);
    const newLettersGuessed = this.state.lettersGuessed.concat(newLetter);
    this.setState({
      lettersGuessed: newLettersGuessed
    })
  }

  render(){
    console.log(this.state);
    return (
      <React.Fragment>
        <Navbar />
        <GameControl word = {this.state.currentWord} guessesByPlayer = {this.state.lettersGuessed} onAddLetterSubmit = {this.handleAddLetterSubmit} />
      </React.Fragment>
    );
  }
}

export default App;

// // App.propTypes = {
// //   wordDictionary : PropTypes.object,
// //   lettersGuessed : PropTypes.bool
// // };

// // const mapStateToProps = state => {
// //   return{
// //     wordDictionary : state.wordDictionary,
// //     lettersGuessed : state.lettersGuessed
// //   }
// // }

// // App = connect(mapStateToProps)(App)


// export default App;