import * as actionTypes from './actionTypes'

export function addToBasket(product) {
  return {
    type: actionTypes.ADD_TO_BASKET,
    payload: product
  }
}