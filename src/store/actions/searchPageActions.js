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

export const setSearchDataAC = (newData) => {
  return {
      type: SEARCH_PAGE_TYPES.SET_SEARCH_DATA,
      payload: newData
  }
}

export const setErrorAC = (newData) => {
  return {
      type: SEARCH_PAGE_TYPES.SET_ERROR,
      payload: newData
  }
}

export const setSearchPageAC = (newData) => {
  return {
      type: SEARCH_PAGE_TYPES.SET_SEARCH_PAGE,
      payload: newData
  }
}

export const getSearchedData = (page = 1, type = 'movie') => async (dispatch, getState) => {
  try {
    dispatch(fetchingAC(true))
    const { searchPage: { searchWord } } = getState()
    const response = await fetch(`${BASE_URL}/search/${type}?${API_KEY}&query=${searchWord}&page=${page}&include_adult=true`)
    const searchData = await response.json()
    if (!response.ok) {
      const { status_message, errors } = searchData
      throw new Error(errors ?? status_message ?? 'unknown error')
    }
    dispatch(setSearchDataAC(searchData))
  } catch (error) {
    console.warn(error)
    dispatch(setErrorAC(error.message))
  } finally {
    dispatch(fetchingAC(false))
  }
}
