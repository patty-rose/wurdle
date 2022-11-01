import lettersGuessedReducer from '../../reducers/letters-guessed-reducer.js';

describe('lettersGuessedReducer', () => {
  let action;

  const currentState = {

  }

  test('should return default state if there is no action type passed into the reducer', () => {
    expect(lettersGuessedReducer([], {type : null})).toEqual([]);
  });

  test('should return state as array with "a" as single entry', () => {
    expect(lettersGuessedReducer([], {type : 'ADD_LETTER'})).toEqual(['a']);
  });

});