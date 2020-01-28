import { combineReducers } from 'redux'
import sortReducers from './sortReducers'

export default combineReducers({
  filterBy: sortReducers,
})