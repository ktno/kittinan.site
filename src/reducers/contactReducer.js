import { contactConstant } from '../constants'

export const initialState = {
  state: 0
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case contactConstant.SET_STATE:
      return { state: action.state }
    default:
      return state
  }
}
