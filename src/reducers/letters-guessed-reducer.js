

const reducer = (state = [], action) => {

  switch (action.type){
    case 'ADD_LETTER' :
      return state.concat(action.payload);
    };
  return state;
};

export default reducer;