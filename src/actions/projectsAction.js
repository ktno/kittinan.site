import { projectsConstant } from '../constants'

export const setState = state => ({
  type: projectsConstant.SET_STATE,
  state
})
