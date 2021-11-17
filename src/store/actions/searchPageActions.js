import { SEARCH_PAGE_TYPES } from "./types"
import { API_KEY } from "../../constants/constants"
import { BASE_URL } from "../../constants/constants"

export const fetchingAC = (newData) => {
  return {
      type: SEARCH_PAGE_TYPES.SET_FETCHING,
      payload: newData
  }
}

export const setSearchWordAC = (newData) => {
  return {
      type: SEARCH_PAGE_TYPES.SET_SEARCH_WORD,
      payload: newData
  }
}

export const setSearchMoviesAC = (newData) => {
  return {
      type: SEARCH_PAGE_TYPES.SET_SEARCH_MOVIES,
      payload: newData
  }
}

export const setSearchShowsAC = (newData) => {
  return {
      type: SEARCH_PAGE_TYPES.SET_SEARCH_SHOWS,
      payload: newData
  }
}

export const setErrorAC = (newData) => {
  return {
      type: SEARCH_PAGE_TYPES.SET_ERROR,
      payload: newData
  }
}

export const setMoviesPageAC = (newData) => {
  return {
      type: SEARCH_PAGE_TYPES.SET_MOVIES_PAGE,
      payload: newData
  }
}

export const setShowsPageAC = (newData) => {
  return {
      type: SEARCH_PAGE_TYPES.SET_SHOWS_PAGE,
      payload: newData
  }
}

export const getSearchedMoviesData = (page = 1) => async (dispatch, getState) => {
  try {
    dispatch(fetchingAC(true))
    const { searchPage: { searchWord } } = getState()
    const moviesFromServer = await fetch(`${BASE_URL}/search/movie?${API_KEY}&query=${searchWord}&page=${page}&include_adult=true`)
    const moviesData = await moviesFromServer.json()
    if (moviesData.errors) {
      throw new Error(moviesData.errors[0])
    }
    dispatch(setSearchMoviesAC(moviesData))
  } catch (error) {
    console.warn(error)
    dispatch(setErrorAC(error.message))
  } finally {
    dispatch(fetchingAC(false))
  }
}

export const getSearchedShowsData = (page = 1) => async (dispatch, getState) => {
  try {
    dispatch(fetchingAC(true))
    const { searchPage: { searchWord } } = getState()
    const tvShowsFromServer = await fetch(`${BASE_URL}/search/tv?${API_KEY}&query=${searchWord}&page=${page}&include_adult=true`)
    const showsData = await tvShowsFromServer.json()
    if (showsData.errors) {
      throw new Error(showsData.errors[0])
    }
    dispatch(setSearchShowsAC(showsData))
  } catch (error) {
    console.warn(error)
    dispatch(setErrorAC(error.message))
  } finally {
    dispatch(fetchingAC(false))
  }
}

