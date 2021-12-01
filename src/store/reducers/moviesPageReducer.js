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
    'primary_release_date.gte': '',
    'primary_release_date.lte': '',
    'vote_average.gte': '',
    'vote_average.lte': '',
  },
  genreList: [],
  isGenreFetching: false,
  isMoviesFetching: false,
  errors: [],
}

export default function moviesPageReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIES_PAGE_TYPES.SET_CLEAR_MOVIES_PAGE_DATA:
      return {
        ...initialState
      }

    case MOVIES_PAGE_TYPES.SET_MOVIES_FETCHING:
      return {
        ...state,
        isMoviesFetching: action.payload
      }

    case MOVIES_PAGE_TYPES.SET_GENRES_FETCHING:
      return {
        ...state,
        isGenreFetching: action.payload
      }

    case MOVIES_PAGE_TYPES.SET_MOVIES_PAGE_ERROR:
      return {
        ...state,
        errors: [...state.errors, action.payload]
      }

    case MOVIES_PAGE_TYPES.SET_CLEAR_MOVIES_PAGE_ERRORS:
      return {
        ...state,
        errors: []
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

    case MOVIES_PAGE_TYPES.SET_GENRE:
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
          'primary_release_date.gte': action.payload
        }
      }

    case MOVIES_PAGE_TYPES.SET_RELEASE_DATE_LTE:
      return {
        ...state,
        filtrationOptions: {
          ...state.filtrationOptions,
          'primary_release_date.lte': action.payload
        }
      }

    case MOVIES_PAGE_TYPES.SET_RATING_GTE:
      return {
        ...state,
        filtrationOptions: {
          ...state.filtrationOptions,
          'vote_average.gte': action.payload
        }
      }

    case MOVIES_PAGE_TYPES.SET_RATING_LTE:
      return {
        ...state,
        filtrationOptions: {
          ...state.filtrationOptions,
          'vote_average.lte': action.payload
        }
      }

    case MOVIES_PAGE_TYPES.SET_CLEAR_FILTERS:
      return {
        ...state,
        filtrationOptions: {
          ...initialState.filtrationOptions
        }
      }

    case MOVIES_PAGE_TYPES.SET_GENRE_LIST:
      return {
        ...state,
        genreList: action.payload
      }

    default:
      return state
  }
}
