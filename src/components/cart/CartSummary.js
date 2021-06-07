import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge,
  Button
} from 'reactstrap';
import { connect } from "react-redux";
import * as cartActions from "../../redux/actions/cartActions";
import { bindActionCreators } from "redux";
import alertify from "alertifyjs";

class CartSummary extends Component {
  renderToEmpty() {
    return (
      <NavItem>
        <NavLink>Sepetiniz Boş</NavLink>
      </NavItem>
    );
  }

  removeFromCartFunc = (product) => {
    this.props.actions.removeFromCart(product);
    alertify.notify(product.productName + " sepetten silindi..")
  };
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepetiniz
        </DropdownToggle>
        <DropdownMenu right key="id">
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
               
                <Button color="danger" onClick={()=>this.removeFromCartFunc(cartItem.product)}>Sil</Button>
        
              {cartItem.product.productName}
             <Badge color="info">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderSummary()
          : this.renderToEmpty()}
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
export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
