import { projectsConstant } from '../constants'

export const initialState = {
  state: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case projectsConstant.SET_STATE:
      return { state: action.state }
    default:
      return state
  }
}
