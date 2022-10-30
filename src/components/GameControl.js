import React from "react";
import PropTypes from "prop-types";
import WordToGuessDisplay from "./WordToGuessDisplay.js";
import GuessForm from "./GuessForm";

function GameControl(props){
  let winOrLoseDisplay = null;
  let alertDisplay = null;
  if(props.winOrLoseStatus === "win"){
    winOrLoseDisplay = <div className="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3" role="alert"><p className="font-bold">You win!</p></div>
  } else if (props.winOrLoseStatus === "lose"){ winOrLoseDisplay = <div className="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3" role="alert"><p className="font-bold">You ran out of guesses!</p></div>
  } else {
    if (props.gameAlert === 'repeat-letter'){
      alertDisplay = <div className="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3" role="alert"><p className="font-bold">You already guessed that letter! Try a new letter!</p></div>
    }
    winOrLoseDisplay = <GuessForm whenAddLetterSubmit = {props.onAddLetterSubmit} />
  }
  
  return (
    <React.Fragment>
      <h1> Game Play Area</h1>
      <ul>
        <li>Word to guess display with an underline for each letter that changes when letters are guessed</li>
        <li>previous guesses</li>
        <li>number of guesses left</li>
        <li>letter guess form w/submit</li>
        <li>game announcements like: you win! you lose! already guessed that!</li>
      </ul>

      <WordToGuessDisplay guessWord = {props.word} currentWordDisplayed = {props.displayedAnswer} playerMadeGuesses = {props.guessesByPlayer} />
      {winOrLoseDisplay}
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
  gameAlert: PropTypes.string
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