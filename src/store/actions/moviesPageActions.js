import { MOVIES_PAGE_TYPES } from "./types"
import { getUrl } from "../../helpers/getUrl"

export const setMoviesFetchingAC = (newData) => {
  return {
    type: MOVIES_PAGE_TYPES.SET_MOVIES_FETCHING,
    payload: newData
  }
}

export const setErrorAC = (newData) => {
  return {
    type: MOVIES_PAGE_TYPES.SET_MOVIES_PAGE_ERROR,
    payload: newData
  }
}

export const setMoviesAC = (newData) => {
  return {
    type: MOVIES_PAGE_TYPES.SET_MOVIES_DATA,
    payload: newData
  }
}

export const setMoviesPageAC = (newData) => {
  return {
    type: MOVIES_PAGE_TYPES.SET_MOVIES_PAGE,
    payload: newData
  }
}

export const setSortParamAC = (newData) => {
  return {
    type: MOVIES_PAGE_TYPES.SET_SORT_PARAM,
    payload: newData
  }
}

export const setGenreListAC = (newData) => {
  return {
    type: MOVIES_PAGE_TYPES.SET_GENRE_LIST,
    payload: newData
  }
}

export const setReleaseDateGteAC = (newData) => {
  return {
    type: MOVIES_PAGE_TYPES.SET_RELEASE_DATE_GTE,
    payload: newData
  }
}

export const setReleaseDateLteAC = (newData) => {
  return {
    type: MOVIES_PAGE_TYPES.SET_RELEASE_DATE_LTE,
    payload: newData
  }
}

export const setRatingGteAC = (newData) => {
  return {
    type: MOVIES_PAGE_TYPES.SET_RATING_GTE,
    payload: newData
  }
}

export const setRatingLteAC = (newData) => {
  return {
    type: MOVIES_PAGE_TYPES.SET_RATING_LTE,
    payload: newData
  }
}

export const setClearFiltersAC = () => {
  return {
    type: MOVIES_PAGE_TYPES.SET_CLEAR_FILTERS
  }
}

/*
const req = await fetch(`https://api.themoviedb.org/3/genre/movie/list?${API_KEY}`)
    const genre = await req.json()
    console.log(genre)
*/

export const getMoviesPageData = (page = 1) => async (dispatch, getState) => {
  try {
    dispatch(setMoviesFetchingAC(true))
    const { moviesPage: { filtrationOptions } } = getState()
    const url = getUrl(page, filtrationOptions)
    const response = await fetch(url)
    const moviesData = await response.json()
    console.log(moviesData)
    if (!response.ok) {
      const { status_message } = moviesData
      throw new Error(status_message || 'bad response')
    }
    dispatch(setMoviesAC(moviesData))
  } catch (error) {
    console.warn(error)
    dispatch(setErrorAC(error.message))
  } finally {
    dispatch(setMoviesFetchingAC(false))
  }
}
