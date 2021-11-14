import { FILMS_PAGE_TYPES } from "../actions/types";

const initialState = {
  filmsData: {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  isFetching: false,
  error: '',
}

export default function filmsPageReducer(state = initialState, action) {
  switch (action.type) {
    case FILMS_PAGE_TYPES.SET_FILMS_DATA:
      return {
        ...state,
        filmsData: {
          ...action.payload
        }
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

    case FILMS_PAGE_TYPES.SET_PAGE:
      return {
        ...state,
        filmsData: {
          ...state.filmsData,
          page: action.payload,
        }
      }

    default:
      return state
  }
}
