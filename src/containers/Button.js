import React from 'react'
import { connect } from 'react-redux'
import { sayHello } from '../actions'
import { increment } from '../actions/increment'

let Button = ({ whatsUp, stateObject, saySomething,incrementCount }) => (

  <div >
    <button onClick={saySomething}>PRESS TO DISPATCH FIRST ACTION</button>
    <h2>Counter: {stateObject.counter}</h2>
    <button onClick={() => console.log('Redux State:',stateObject)} >Press to inspect STATE in console panel</button>
  <button onClick ={incrementCount}>INCREMENT COUNT</button>
  
  
  
  </div>

)

const mapStateToProps = (state) => ({
  whatsUp: state.say,

  stateObject: state
})

const mapDispatchToProps = (dispatch) => ({
  saySomething: () => { dispatch(sayHello())},
  incrementCount:() =>{dispatch(increment())}
  
})

Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default Button;
