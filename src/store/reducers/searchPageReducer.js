import { SEARCH_PAGE_TYPES } from "../actions/types";

const initialState = {
  moviesData: {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  showsData: {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  searchWord: '',
  isFetching: false,
  error: '',
}

export default function searchPageReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_PAGE_TYPES.SET_SEARCH_MOVIES:
      return {
        ...state,
        moviesData: {
          ...action.payload
        }
      }

    case SEARCH_PAGE_TYPES.SET_SEARCH_SHOWS:
      return {
        ...state,
        showsData: {
          ...action.payload
        }
      }

    case SEARCH_PAGE_TYPES.SET_SEARCH_WORD:
      return {
        ...state,
        searchWord: action.payload
      }

    case SEARCH_PAGE_TYPES.SET_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }

    case SEARCH_PAGE_TYPES.SET_ERROR:
      return {
        ...state,
        error: action.payload
      }

    case SEARCH_PAGE_TYPES.SET_MOVIES_PAGE:
      return {
        ...state,
        moviesData: {
          ...state.moviesData,
          page: action.payload,
        }
      }

    case SEARCH_PAGE_TYPES.SET_SHOWS_PAGE:
      return {
        ...state,
        showsData: {
          ...state.showsData,
          page: action.payload,
        }
      }

    default:
      return state
  }
}
