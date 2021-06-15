import * as actionTypes from '../actions/actionTypes'
export default function basketReducer ( state = { basket: [] }, action ) {

  switch (action.type) {
    case actionTypes.ADD_TO_BASKET:
      return {
        basket : [...state.basket, action.payload],
      }
    default:
      return state;
  }
}