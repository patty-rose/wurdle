import React from "react";
import PropTypes from "prop-types";

function GuessForm(props){

  function handleFormSubmission(event) {
    event.preventDefault();
    props.whenAddLetterSubmit(event.target.letter.value);
  }

  return (
    <React.Fragment>
      <form onSubmit= {handleFormSubmission} >
        <div className="mb-3 pt-0">
          <input
            type='text'
            name='letter'
            placeholder='Letter: '
            className="px-3 py-4 placeholder-slate-500 text-slate-900 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full" 
            required/>
        </div>
        <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type='submit'>submit</button>
      </form>
    </React.Fragment>
  );
}

GuessForm.propTypes = {
  whenAddLetterSubmit : PropTypes.func,
}
export default GuessForm;