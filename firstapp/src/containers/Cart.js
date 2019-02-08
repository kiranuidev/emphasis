import React from 'react';
import { connect } from 'react-redux';

let Cart = ({latestCart})=>(
   <div> <h1>{latestCart.counter}</h1></div>
)
let mapStateToProps = (state) => ({
    latestCart: state
})
Cart =connect(
    mapStateToProps
)(Cart)
export default Cart;