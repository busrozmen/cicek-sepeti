import * as actionTypes from './actionTypes'

export function getProductsSuccess(products) {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: products
  }
}

export function getProducts() {
  return async function (dispatch) {
    let url = 'http://localhost:8000/products';
    const res = await fetch(url);
    const data = await res.json();
    return dispatch(getProductsSuccess(data));
  }
}
