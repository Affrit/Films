import { FILMS_PAGE_TYPES } from "../actions/types";

const initialState = {
  films: [],
  isFetching: false,
  error: '',
}

export default function filmsPageReducer(state = initialState, action) {
  switch (action.type) {
    case FILMS_PAGE_TYPES.SET_FILMS:
      return {
        ...state,
        films: action.payload
      }

    case FILMS_PAGE_TYPES.SET_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }

    case FILMS_PAGE_TYPES.SET_ERROR:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state
  }
}
