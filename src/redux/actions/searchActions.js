import * as actionTypes from './actionTypes'

export function getSearch(search) {
    return {
    type: actionTypes.GET_SEARCH,
    payload: search
    }
}