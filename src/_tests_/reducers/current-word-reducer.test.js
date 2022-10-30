import currentWordReducer from '../../reducers/current-word-reducer';

describe('currentWordReducer', () => {
  let action;
  
  test('should return default state if there is no action type passed into the reducer', () => {
    expect(currentWordReducer(null, {type : null})).toEqual(null);
  });
  
  test('should return a 5 letter word from WORDS list', () => {
    expect(currentWordReducer(null, { type:'NEW_GAME'})).toBeInstanceOf(String);
  })
});