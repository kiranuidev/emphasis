const reducer = (state = {
  message: 'Hey I am the Initial State',
  counter: 0
}, action) => {

  switch (action.type) {
    case 'HELLO_REACT':
      return { ...state,
        message: 'Hello am the changed state',
      };
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        counter: state.counter + 1
      };
    case 'DECREMENT_COUNTER':
      if (state.counter >0) {
        return {
          ...state,
          counter: state.counter - 1
        };
      }
      else{
       return state;
      }
    default:
      return state;
  }

};

export default reducer;