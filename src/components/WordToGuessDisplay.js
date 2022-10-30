import React from "react";
import PropTypes from "prop-types";

function WordToGuessDisplay(props){


  return (
    <React.Fragment>
      <h1>WORD TO GUESS</h1>
      <h2>hide or show</h2>
      <h4>{props.currentWordDisplayed}</h4>
      <h4>{props.playerMadeGuesses.join(" ")}</h4>
    </React.Fragment>
  );
}

WordToGuessDisplay.propTypes = {
  guessWord : PropTypes.string,
  currentWordDisplayed: PropTypes.array,
  playerMadeGuesses : PropTypes.array
}

export default WordToGuessDisplay;