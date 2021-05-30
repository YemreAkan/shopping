import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Table } from "reactstrap";
import * as productActions from "../../redux/actions/productActions";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  selectProduct = (product) => {
    this.props.actions.changeCategory(product);
  };

  render() {
    return (
      <div>
        <h3>
          Product
          <Table>
            <thead>
              <tr>
                <th key="id">#</th>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Quantity Per Unit</th>
                <th>Unit Price</th>
                <th>Units In Stock</th>
              </tr>
            </thead>
            <tbody>
              {this.props.products.map((product) => (
                <tr>
                  <th key={product.id} scope="row">{product.id}</th>
                  <td>{product.productName}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>@{product.unitPrice}</td>
                  <td>@{product.unitsInStock}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </h3>
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
     
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
