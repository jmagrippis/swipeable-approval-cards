// Constants
export const SET_VISIBILITY = 'SET_VISIBILITY'

// Action Creators
export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY,
    filter
  }
}

// Reducer
export const defaultState = 'SHOW_NOT_ASSESSED'

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_VISIBILITY:
      return action.filter
    default:
      return state
  }
}
