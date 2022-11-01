import lettersGuessedReducer from '../../reducers/letters-guessed-reducer.js';

describe('lettersGuessedReducer', () => {
  let action;

  const currentState = ['a', 'b', 'c'] //for NEW_GAME test

  test('should return default state if there is no action type passed into the reducer', () => {
    expect(lettersGuessedReducer([], {type : null})).toEqual([]);
  });

  test('should return state returned to default', () => {
    expect(lettersGuessedReducer(currentState, {type : 'NEW_GAME'})).toEqual([]);
  });

});