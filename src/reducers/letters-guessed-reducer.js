

const reducer = (state = [], action) => {
  switch (action.type){
    case 'ADD_LETTER' :
      return state.concat(action.payload);

    case 'NEW_GAME' :
      let newState = [];
      return newState;
    
    default :
    return state;
  };
}

export default reducer;