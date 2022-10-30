import React from "react";
import PropTypes from "prop-types";
import WordToGuessDisplay from "./WordToGuessDisplay.js";
import GuessForm from "./GuessForm";

function GameControl(props){
  let playingFieldDisplays = null;
  let alertDisplay = null;
  if(props.winOrLoseStatus === "win"){
    playingFieldDisplays = <div className="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3" role="alert"><p className="font-bold">You win!</p></div>
  } else if (props.winOrLoseStatus === "lose"){ playingFieldDisplays = <div className="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3" role="alert"><p className="font-bold">You ran out of guesses!</p><p>correct answer was: {props.word}</p></div>
  } else {
    if (props.gameAlert === 'repeat-letter'){
      alertDisplay = <div className="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3" role="alert"><p className="font-bold">You already guessed that letter! Try a new letter!</p></div>
    }
    playingFieldDisplays = <GuessForm whenAddLetterSubmit = {props.onAddLetterSubmit} whenResetAlert = {props.onResetAlert} />
  }
  
  return (
    <React.Fragment>
      <WordToGuessDisplay guessWord = {props.word} currentWordDisplayed = {props.displayedAnswer} playerMadeGuesses = {props.guessesByPlayer} />
      {playingFieldDisplays}
      {alertDisplay}
      <h3> GUESSES USED: {props.guessesByPlayer.length}/10</h3>
      <h3>GUESSED LETTERS: {props.guessesByPlayer.join(" ")}</h3>
    </React.Fragment>
  );
}

GameControl.propTypes = { 
  word: PropTypes.string,
  displayedAnswer: PropTypes.array,
  guessesByPlayer: PropTypes.array,
  onAddLetterSubmit: PropTypes.func,
  winOrLoseStatus: PropTypes.string,
  gameAlert: PropTypes.string,
  onResetAlert: PropTypes.func
};

// //MyExampleComponent.propTypes = {
//   exampleArray: PropTypes.array,
//   exampleBoolean: PropTypes.bool,
//   exampleFunction: PropTypes.func,
//   exampleNumber: PropTypes.number,
//   exampleObject: PropTypes.object,
//   exampleString: PropTypes.string,
//   exampleSymbol: PropTypes.symbol,
//   exampleReactElement: PropTypes.element,
//   exampleArrayOfNumbers: PropTypes.arrayOf(PropTypes.number),
//   exampleArrayOfStrings: PropTypes.arrayOf(PropTypes.string),
//   exampleClassTypeProp: PropTypes.instanceOf(ExampleClassName),
// }


export default GameControl;