import React, {Component} from 'react';
import { connect } from 'react-redux'
import { decrement } from '../actions/decrement'


let DecrementButton = ({ stateObject, decrementCount}) => (
    <div >
      <button onClick={decrementCount}>Decrement Count</button>
    </div>
)
//Redux store propertis
const mapStateToProps = (state) => ({
    stateObject: state
})

//belong to action methods
const mapDispatchToProps = (dispatch) => ({
    decrementCount:() =>{dispatch(decrement())}
})
DecrementButton = connect(
    mapStateToProps,
    mapDispatchToProps
  )(DecrementButton)
  
  export default DecrementButton;
  