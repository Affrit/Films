import { MOVIES_PAGE_TYPES } from "../actions/types";

const initialState = {
  moviesPageData: {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  isFetching: false,
  error: '',
}

export default function moviesPageReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIES_PAGE_TYPES.SET_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }

    case MOVIES_PAGE_TYPES.SET_ERROR:
      return {
        ...state,
        error: action.payload
      }

    case MOVIES_PAGE_TYPES.SET_MOVIES_DATA:
      return {
        ...state,
        moviesPageData: action.payload
      }

    default:
      return state
  }
}
