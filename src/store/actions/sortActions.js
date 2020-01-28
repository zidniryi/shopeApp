import { SORT_BY } from '../types'

export const sortActions = (sortingData) => ({
  type: SORT_BY,
  payload: sortingData
})