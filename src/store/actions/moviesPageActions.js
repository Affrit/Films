import { MOVIES_PAGE_TYPES } from "./types"
import { API_KEY } from "../../constants/constants"
import { BASE_URL } from "../../constants/constants"

export const setFetchingAC = (newData) => {
  return {
      type: MOVIES_PAGE_TYPES.SET_FETCHING,
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

export const setPageAC = (newData) => {
  return {
      type: MOVIES_PAGE_TYPES.SET_PAGE,
      payload: newData
  }
}

export const setCleanMoviesState = () => {
  return {
      type: MOVIES_PAGE_TYPES.SET_CLEAN_MOVIES_STATE
  }
}

export const getMoviesPageData = (page = 1) => async (dispatch, getState) => {
  try {
    dispatch(setFetchingAC(true))
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
    dispatch(setFetchingAC(false))
  }
}