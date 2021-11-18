import { MOVIES_PAGE_TYPES } from "../actions/types";

const initialState = {
  moviesPageData: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  isMoviesFetching: true,
  error: '',
}

export default function moviesPageReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIES_PAGE_TYPES.SET_MOVIES_FETCHING:
      return {
        ...state,
        isMoviesFetching: action.payload
      }

    case MOVIES_PAGE_TYPES.SET_ERROR:
      return {
        ...state,
        error: action.payload
      }

    case MOVIES_PAGE_TYPES.SET_MOVIES_DATA:
      return {
        ...state,
        moviesPageData: {
          ...action.payload,
          results: [...state.moviesPageData.results, ...action.payload.results]
        }
      }

    default:
      return state
  }
}
