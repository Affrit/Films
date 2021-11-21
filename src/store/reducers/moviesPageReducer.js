import { MOVIES_PAGE_TYPES } from "../actions/types";

const initialState = {
  moviesPageData: {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  filtrationOptions: {
    sort_by: 'popularity.desc',
    with_genres: '',
    'release_date.gte': '',
    'release_date.lte': '',
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
        moviesPageData: action.payload,
        //results: [...state.moviesPageData.results, ...action.payload.results]
      }

    case MOVIES_PAGE_TYPES.SET_SORT_PARAM:
      return {
        ...state,
        filtrationOptions: {
          ...state.filtrationOptions,
          sort_by: action.payload
        }
      }

    case MOVIES_PAGE_TYPES.SET_MOVIES_PAGE:
      return {
        ...state,
        moviesPageData: {
          ...state.moviesPageData,
          page: action.payload
        }
      }

    case MOVIES_PAGE_TYPES.SET_GENRE_LIST:
      return {
        ...state,
        filtrationOptions: {
          ...state.filtrationOptions,
          with_genres: action.payload
        }
      }

    case MOVIES_PAGE_TYPES.SET_RELEASE_DATE_GTE:
      return {
        ...state,
        filtrationOptions: {
          ...state.filtrationOptions,
          'release_date.gte': action.payload
        }
      }

    case MOVIES_PAGE_TYPES.SET_RELEASE_DATE_LTE:
      return {
        ...state,
        filtrationOptions: {
          ...state.filtrationOptions,
          'release_date.lte': action.payload
        }
      }

    case MOVIES_PAGE_TYPES.SET_CLEAR_FILTERS:
      return {
        ...state,
        filtrationOptions: {
          ...initialState.filtrationOptions
        }
      }

    default:
      return state
  }
}
