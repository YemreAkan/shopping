import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Table, Button } from "reactstrap";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs"

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  selectProduct = (product) => {
    this.props.actions.changeCategory(product);
  };

  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product });
    alertify.notify(product.productName + " sepete eklendi..")
  };

  render() {
    return (
      <div>
        <h3>Product</h3>
        <Table>
          <thead>
            <tr>
              <th key="id">#</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th>Sepet İşlemi</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr>
                <th key={product.id} scope="row">
                  {product.id}
                </th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>@{product.unitPrice}</td>
                <td>@{product.unitsInStock}</td>
                <td>
                  <Button color="success" onClick={()=>this.addToCart(product)}>Sepete Ekle</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
