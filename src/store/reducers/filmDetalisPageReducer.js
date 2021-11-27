import { CURRENT_FILM_PAGE_TYPES } from "../actions/types";

const initialState = {
  filmData: {},
  isFetching: false,
  errors: [],
}

export default function filmDetalisPageReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_FILM_PAGE_TYPES.SET_FILM_DATA:
      return {
        ...state,
        filmData: {
          ...action.payload
        }
      }

    case CURRENT_FILM_PAGE_TYPES.SET_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }

    case CURRENT_FILM_PAGE_TYPES.SET_ERROR:
      return {
        ...state,
        errors: [...state.errors, action.payload]
      }

    default:
      return state
  }
}
