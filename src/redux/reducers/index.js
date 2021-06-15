import {combineReducers} from 'redux'
import productsReducer from './productsReducer'
import searchReducer from './searchReducer'
import filterReducer from './filterReducer'
import categoriesReducer from './categoriesReducer'
import basketReducer from './basketReducer'

const rootReducer = combineReducers({
  productsReducer,
  categoriesReducer,
  searchReducer,
  filterReducer,
  basketReducer
})

export default rootReducer;