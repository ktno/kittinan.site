import * as types from './constants'

export const setState = state => ({
  type: types.SET_STATE,
  state
})
