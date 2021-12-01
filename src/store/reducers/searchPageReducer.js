import { SEARCH_PAGE_TYPES } from "../actions/types";

const initialState = {
  searchData: {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  searchWord: '',
  isFetching: false,
  errors: [],
}

export default function searchPageReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_PAGE_TYPES.SET_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }

    case SEARCH_PAGE_TYPES.SET_SEARCH_PAGE_ERROR:
      return {
        ...state,
        errors: [...state.errors, action.payload]
      }

    case SEARCH_PAGE_TYPES.SET_CLEAR_SEARCH_PAGE_ERRORS:
      return {
        ...state,
        errors: []
      }

    case SEARCH_PAGE_TYPES.SET_SEARCH_DATA:
      return {
        ...state,
        searchData: {
          ...action.payload
        }
      }

    case SEARCH_PAGE_TYPES.SET_SEARCH_WORD:
      return {
        ...state,
        searchWord: action.payload
      }

    case SEARCH_PAGE_TYPES.SET_SEARCH_PAGE:
      return {
        ...state,
        searchData: {
          ...state.searchData,
          page: action.payload,
        }
      }

    default:
      return state
  }
}
