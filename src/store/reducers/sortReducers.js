import { SORT_BY } from '../types'

export default (state = '', action) => {
  switch (action.type) {
  case SORT_BY:
    return action.payload
  default:
    return state
  }
}