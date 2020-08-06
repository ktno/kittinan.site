import * as types from './constants'

export const initialState = {
  population: 0
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_POPULATION:
      return { population: action.population }
    default:
      return state
  }
}
