import { aboutConstant } from '../constants'

export const setState = state => ({
  type: aboutConstant.SET_STATE,
  state
})
