import { SEARCH_PAGE_TYPES } from "./types";
import { API_KEY } from "../../constants/constants";
import { API } from "../../API/API";

export const setSearchData = (newData) => {
  return {
      type: SEARCH_PAGE_TYPES.SET_SEARCH_DATA,
      payload: newData
  }
}

export const setSearchPage = (newData) => {
  return {
      type: SEARCH_PAGE_TYPES.SET_SEARCH_PAGE,
      payload: newData
  }
}

export const setSearchWord = (newData) => {
  return {
      type: SEARCH_PAGE_TYPES.SET_SEARCH_WORD,
      payload: newData
  }
}

export const setError = (newData) => {
  return {
      type: SEARCH_PAGE_TYPES.SET_SEARCH_PAGE_ERROR,
      payload: newData
  }
}

export const setFetching = (newData) => {
  return {
      type: SEARCH_PAGE_TYPES.SET_FETCHING,
      payload: newData
  }
}

export const setClearSerchErrors = () => {
  return {
      type: SEARCH_PAGE_TYPES.SET_CLEAR_SEARCH_PAGE_ERRORS
  }
}

export const getSearchedData = (page = 1, contentType = 'movie') => async (dispatch, getState) => {
  try {
    dispatch(setFetching(true))
    const { searchPage: { searchWord } } = getState()
    const response = await API.get(`/search/${contentType}?${API_KEY}&query=${searchWord}&page=${page}`)
    dispatch(setSearchData(response.data))
    dispatch(setClearSerchErrors())
  } catch (error) {
    console.warn(error)
    dispatch(setError(error.message))
  } finally {
    dispatch(setFetching(false))
  }
}
