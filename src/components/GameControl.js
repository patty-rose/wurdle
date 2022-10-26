import React from "react";
import PropTypes from "prop-types";

function GameControl(props){
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
    </React.Fragment>
  );
}

GameControl.propTypes = { 

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