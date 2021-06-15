import * as actionTypes from './actionTypes'

export function getCategoriesSuccess(categories) {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    payload: categories
  }
}


export function getCategories() {
  return async function (dispatch) {
    let url = 'http://localhost:8000/categories';
    const res = await fetch(url);
    const data = await res.json();
    return dispatch(getCategoriesSuccess(data));
  }
}