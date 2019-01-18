const reducer = (state = {
  say: 'Hey I am first',
  counter: 0
}, action) => {

  switch (action.type) {
    case 'HELLO_REACT':
      return { ...state,
        say: 'Hello World Redux'
      };
    case 'INCREMENT_COUNT':
      let x = { ...state
      };
      console.log(x);
      return { ...state,
        counter: state.counter + 1
      };
    case 'DECREMENT_COUNT':
      let y = { ...state
      };
      console.log(y);
      return { ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }

};

export default reducer;