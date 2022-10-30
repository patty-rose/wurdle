import React from "react";
import PropTypes from "prop-types";

function WordToGuessDisplay(props){


  return (
    <React.Fragment>
      <h2>WORD TO GUESS:</h2>
      <h1>{props.currentWordDisplayed.join(" ")}</h1>
    </React.Fragment>
  );
}

WordToGuessDisplay.propTypes = {
  currentWordDisplayed: PropTypes.array
}

export default WordToGuessDisplay;