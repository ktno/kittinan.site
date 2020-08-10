import { contactConstant } from '../constants'

export const setState = state => ({
  type: contactConstant.SET_STATE,
  state
})
