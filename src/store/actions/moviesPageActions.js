import { MOVIES_PAGE_TYPES } from "./types"
import { BASE_URL } from "../../constants/constants"
import { API_KEY } from "../../constants/constants"
import { getUrl } from "../../helpers/getUrl"

export const setMoviesData = (newData) => {
  return {
    type: MOVIES_PAGE_TYPES.SET_MOVIES_DATA,
    payload: newData
  }
}

export const setMoviesPage = (newData) => {
  return {
    type: MOVIES_PAGE_TYPES.SET_MOVIES_PAGE,
    payload: newData
  }
}

export const setGenreList = (newData) => {
  return {
    type: MOVIES_PAGE_TYPES.SET_GENRE_LIST,
    payload: newData
  }
}

export const setSelectedGenres = (newData) => {
  return {
    type: MOVIES_PAGE_TYPES.SET_GENRE,
    payload: newData
  }
}

export const setMoviesFetching = (newData) => {
  return {
    type: MOVIES_PAGE_TYPES.SET_MOVIES_FETCHING,
    payload: newData
  }
}

export const setGenreFetching = (newData) => {
  return {
    type: MOVIES_PAGE_TYPES.SET_GENRES_FETCHING,
    payload: newData
  }
}

export const setError = (newData) => {
  return {
    type: MOVIES_PAGE_TYPES.SET_MOVIES_PAGE_ERROR,
    payload: newData
  }
}

export const setSortParam = (newData) => {
  return {
    type: MOVIES_PAGE_TYPES.SET_SORT_PARAM,
    payload: newData
  }
}

export const setReleaseDateGte = (newData) => {
  return {
    type: MOVIES_PAGE_TYPES.SET_RELEASE_DATE_GTE,
    payload: newData
  }
}

export const setReleaseDateLte = (newData) => {
  return {
    type: MOVIES_PAGE_TYPES.SET_RELEASE_DATE_LTE,
    payload: newData
  }
}

export const setRatingGte = (newData) => {
  return {
    type: MOVIES_PAGE_TYPES.SET_RATING_GTE,
    payload: newData
  }
}

export const setRatingLte = (newData) => {
  return {
    type: MOVIES_PAGE_TYPES.SET_RATING_LTE,
    payload: newData
  }
}

export const setClearFilters = () => {
  return {
    type: MOVIES_PAGE_TYPES.SET_CLEAR_FILTERS
  }
}

export const setClearData = () => {
  return {
    type: MOVIES_PAGE_TYPES.SET_CLEAR_MOVIES_PAGE_DATA
  }
}

export const setClearMoviesErrors = () => {
  return {
    type: MOVIES_PAGE_TYPES.SET_CLEAR_MOVIES_PAGE_ERRORS
  }
}

export const getGenreList = (contentType = 'movie') => async (dispatch) => {
  try {
    dispatch(setGenreFetching(true))
    const response = await fetch(`${BASE_URL}/genre/${contentType}/list?${API_KEY}`)
    const genreData = await response.json()
    if (!response.ok) {
      const { status_message } = genreData
      throw new Error(status_message || "can't get genres")
    }
    dispatch(setGenreList(genreData.genres))
  } catch (error) {
    console.warn(error)
    dispatch(setError(error.message))
  } finally {
    dispatch(setGenreFetching(false))
  }
}

export const getMoviesPageData = (page = 1, contentType = 'movie') => async (dispatch, getState) => {
  try {
    dispatch(setMoviesFetching(true))
    const { moviesPage: { filtrationOptions } } = getState()
    const url = getUrl(page, filtrationOptions, contentType)
    const response = await fetch(url)
    const moviesData = await response.json()
    if (!response.ok) {
      const { status_message } = moviesData
      throw new Error(status_message || 'bad response')
    }
    dispatch(setMoviesData(moviesData))
    dispatch(setClearMoviesErrors())
  } catch (error) {
    console.warn(error)
    dispatch(setError(error.message))
  } finally {
    dispatch(setMoviesFetching(false))
  }
}
