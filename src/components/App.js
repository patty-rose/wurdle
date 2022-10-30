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
      currentDisplayedAnswer: ['_', '_', '_', '_', '_'],
      lettersGuessed: []
    };
  }
  
  handleAddLetterSubmit = (newLetter) => {
    console.log(newLetter);
    const newLettersGuessed = this.state.lettersGuessed.concat(newLetter);
    this.setState({
      lettersGuessed: newLettersGuessed
    })
    this.hideOrDisplayLetters(newLetter);
  }

  hideOrDisplayLetters(letter){
    const { currentWord, currentDisplayedAnswer } = this.state;
    let newCurrentDisplayedAnswer = currentDisplayedAnswer;
    for(let i = 0; i < currentWord.length; i++){
      if(currentWord[i] === letter){
        newCurrentDisplayedAnswer[i] = letter;
      }
    }
    this.setState({
      currentDisplayedAnswer: newCurrentDisplayedAnswer
    })
  }

  render(){
    console.log(this.state);
    return (
      <React.Fragment>
        <Navbar />
        <GameControl word = {this.state.currentWord} displayedAnswer = {this.state.currentDisplayedAnswer} guessesByPlayer = {this.state.lettersGuessed} onAddLetterSubmit = {this.handleAddLetterSubmit} />
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