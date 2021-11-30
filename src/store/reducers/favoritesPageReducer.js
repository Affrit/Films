import { FAVORITES_PAGE_TYPES } from "../actions/types";

const initialState = {
  favoritesData: [],
  errors: [],
}

export default function favoritesPageReducer(state = initialState, action) {
  switch (action.type) {
    case FAVORITES_PAGE_TYPES.SET_FAVORITES:
      return {
        ...state,
        favoritesData: action.payload
      }

    case FAVORITES_PAGE_TYPES.SET_FAVORITES_ERROR:
      return {
        ...state,
        errors: [...state.errors, action.payload]
      }

    case FAVORITES_PAGE_TYPES.SET_CLEAR_FAVORITES:
      return {
        ...initialState
      }

    default:
      return state
  }
}
