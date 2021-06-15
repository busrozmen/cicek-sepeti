import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'

export default function searchReducer ( state=initialState.search, action ) {
  switch (action.type) {
    case actionTypes.GET_SEARCH:
      return action.payload
    default:
      return state;
  }
}