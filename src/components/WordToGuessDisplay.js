import React from "react";
import PropTypes from "prop-types";

function WordToGuessDisplay(props){


  return (
    <React.Fragment>
      <h1>WORD TO GUESS</h1>
      <h4>{props.currentWordDisplayed.join(" ")}</h4>
    </React.Fragment>
  );
}

WordToGuessDisplay.propTypes = {
  currentWordDisplayed: PropTypes.array
}

export default WordToGuessDisplay;