import currentWordReducer from '../../reducers/current-word-reducer';

describe('currentWordReducer', () => {

  test('should return default state if there is no action type passed into the reducer', () => {
    expect(currentWordReducer(null, {type : null})).toEqual(null);
  });
  
});