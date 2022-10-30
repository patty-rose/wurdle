import React from "react";
import PropTypes from "prop-types";

function WordToGuessDisplay(props){
  // function hideOrShowLetters(guessWord, playerMadeGuesses){
  //   //check which letters have been guessed
  //   //create string that matchs showing letters or hidden letters in an undersscore
  //   //return string for html
  // }

  return (
    <React.Fragment>
      <h1>WORD TO GUESS</h1>
      <h2>_ _ _ _ _</h2>
      {props.guessWord}
      {props.playerMadeGuesses}
    </React.Fragment>
  );
}

WordToGuessDisplay.propTypes = {
  guessWord : PropTypes.string,
  playerMadeGuesses : PropTypes.array
}

export default WordToGuessDisplay;