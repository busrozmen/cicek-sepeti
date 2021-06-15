import * as actionTypes from './actionTypes'

export function getFilter(id) {
  return {
    type: actionTypes.GET_FILTER,
    payload: id
  }
}