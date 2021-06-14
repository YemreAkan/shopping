import React, { Component } from 'react';
import * as cartActions from "../../redux/actions/cartActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Table, Button } from "reactstrap";
import alertify from "alertifyjs";

class CartDetail extends Component {

  removeFromCartFunc = (product) => {
    this.props.actions.removeFromCart(product);
    alertify.notify(product.productName + " sepetten silindi..");
  };

    render() {
        return (
            <div>
                  <Table>
          <thead>
            <tr>
              <th key="id">#</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr>
                <th key={cartItem.product.id} scope="row">
                  {cartItem.product.id}
                </th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.quantityPerUnit}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button color="danger" onClick={()=>this.removeFromCartFunc(cartItem.product)}>Sepetten Sil</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
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