import React, { Component } from 'react';
import * as cartActions from "../../redux/actions/cartActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class CartDetail extends Component {
    render() {
        return (
            <div>
               <h1>Sepetiniz</h1> 
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
      actions: {
        removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
      },
    };
  }
  function mapStateToProps(state) {
    return {
      cart: state.cartReducer,
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);