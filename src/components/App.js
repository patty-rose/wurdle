import React from "react";
import Navbar from "./Navbar";
import GameControl from "./GameControl.js";
import { WORDS } from "./WORDS.js";

// import { connect } from 'react-redux';
// import PropTypes from "prop-types";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentWord: null,
      currentDisplayedAnswer: ['_', '_', '_', '_', '_'],
      lettersGuessed: [],
      winOrLose: null,
      alert: null
    };
  }
  
  handleAddLetterSubmit = (newLetter) => {
    if(!this.state.lettersGuessed.includes(newLetter)){
      const newLettersGuessed = this.state.lettersGuessed.concat(newLetter);
      this.setState({
        lettersGuessed: newLettersGuessed
      })
      this.hideOrDisplayLetters(newLetter);
      this.checkWinOrLose();
    } else {
      this.setState({
        alert: 'repeat-letter'
      })
    }
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

  checkWinOrLose(){
    if(!this.state.currentDisplayedAnswer.includes('_')){
      this.setState({
        winOrLose: 'win'
      })
    } else if(this.state.lettersGuessed.length >= 9){// BUG this should be 10, but somewhere the order of events is not right
      this.setState({
        winOrLose:'lose'
      })
    }
  }

  selectNewWord(){
    const newWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    this.setState({
      currentWord: newWord
    })
  }

  handleNewGameClick = () => {
    this.selectNewWord();
    this.setState({
      currentDisplayedAnswer: ['_', '_', '_', '_', '_'],
      lettersGuessed: [],
      winOrLose: null,
      alert: null
    })
  }

  resetAlertHandler = () => {
    this.setState({
      alert: null
    })
  }

  render(){
    console.log(this.state);
    return (
      <React.Fragment>
        <Navbar />
        <GameControl word = {this.state.currentWord} displayedAnswer = {this.state.currentDisplayedAnswer} guessesByPlayer = {this.state.lettersGuessed} onAddLetterSubmit = {this.handleAddLetterSubmit} winOrLoseStatus = {this.state.winOrLose} gameAlert = {this.state.alert} onResetAlert = {this.resetAlertHandler} />
        <button type='button' onClick={ this.handleNewGameClick }>NEW GAME!</button>
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