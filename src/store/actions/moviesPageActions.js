import { MOVIES_PAGE_TYPES } from "./types"
import { API_KEY } from "../../constants/constants"
import { BASE_URL } from "../../constants/constants"

export const setMoviesFetchingAC = (newData) => {
  return {
      type: MOVIES_PAGE_TYPES.SET_MOVIES_FETCHING,
      payload: newData
  }
}

export const setErrorAC = (newData) => {
  return {
      type: MOVIES_PAGE_TYPES.SET_ERROR,
      payload: newData
  }
}

export const setMoviesAC = (newData) => {
  return {
      type: MOVIES_PAGE_TYPES.SET_MOVIES_DATA,
      payload: newData
  }
}

export const getMoviesPageData = (page = 1) => async (dispatch, getState) => {
  try {
    dispatch(setMoviesFetchingAC(true))
    const dataFromServer = await fetch(`${BASE_URL}/discover/movie?${API_KEY}&page=${page}&include_adult=true`)
    const moviesData = await dataFromServer.json()
    if (moviesData.errors) {
      throw new Error(moviesData.errors[0])
    }
    dispatch(setMoviesAC(moviesData))
  } catch (error) {
    console.warn(error)
    dispatch(setErrorAC(error.message))
  } finally {
    dispatch(setMoviesFetchingAC(false))
  }
}