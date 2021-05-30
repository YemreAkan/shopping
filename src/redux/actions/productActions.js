import * as actionTypes from "./actionTypes";


export function getProductsSuccess(product) {
    return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: product };
  }

export function getProducts(categoryId) {
    return function (dispatch) {
      let url = "http://localhost:3000/products";
      if(categoryId)
      url += "?categoryId="+categoryId
      return fetch(url)
        .then((response) => response.json())
        .then((result) => dispatch(getProductsSuccess(result)));
    };
  }