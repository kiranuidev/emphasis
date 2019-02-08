import React from 'react'
import { connect } from 'react-redux'
import { sayHello,decrementCount,incrementCount } from '../actions'
let Button = ({stateObject, saySomething,increment,decrement}) => (

  <div >
    <button onClick={saySomething}>Click To Fetch the new State</button>
    <h1>{stateObject.message}</h1>
    <p>
      <button onClick={increment}>+</button>
      &nbsp;<span>{stateObject.counter}</span>&nbsp;
    <button onClick={decrement}>-</button>
    </p>
  </div>

)
//To Map the data to and From the store
const mapStateToProps = (state) => ({
  stateObject: state
})
//Event triggers
const mapDispatchToProps = (dispatch) => ({
  saySomething: () => { dispatch(sayHello())},
  increment:()=>{dispatch(incrementCount())},
  decrement:()=>{dispatch(decrementCount())},
})

Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default Button;
