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

const getUrl = (page, sort) => {
  let url = `${BASE_URL}/discover/movie?${API_KEY}&page=${page}`
  if (sort) {
    console.log('HERE')
    url = url + `&sort_by=${sort}`
  }

  return url
}

export const getMoviesPageData = (page = 1) => async (dispatch, getState) => {
  try {
    dispatch(setMoviesFetchingAC(true))
    const { moviesPage: { filtrationOptions: { sort_by } } } = getState()
    const url = getUrl(page, sort_by)
    console.log(url)
    const dataFromServer = await fetch(url)
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