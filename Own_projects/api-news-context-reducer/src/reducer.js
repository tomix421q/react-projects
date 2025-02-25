import { REMOVE_STORY, SET_LOADING, SET_NEWS, SET_SEARCH } from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true }
    case SET_NEWS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      }
    case REMOVE_STORY:
      return {
        ...state,
        data: state.data.filter((item) => item.author !== action.payload),
      }
    default:
      throw new Error(`no matching '${action.type}' action type`)
  }
}
export default reducer
