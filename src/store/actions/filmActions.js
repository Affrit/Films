import { CURRENT_FILM_PAGE_TYPES } from "./types"
import { API_KEY } from "../../constants/constants"
import { BASE_URL } from "../../constants/constants"

export const fetchingFilmAC = (newData) => {
  return {
      type: CURRENT_FILM_PAGE_TYPES.SET_FETCHING,
      payload: newData
  }
}

export const setErrorFilmAC = (newData) => {
  return {
      type: CURRENT_FILM_PAGE_TYPES.SET_ERROR,
      payload: newData
  }
}

export const setFilmDataAC = (newData) => {
  return {
      type: CURRENT_FILM_PAGE_TYPES.SET_FILM_DATA,
      payload: newData
  }
}

export const getFilmDetalis = (filmId, type) => async (dispatch) => {
  try {
    dispatch(fetchingFilmAC(true))
    const dataFromServer = await fetch(`${BASE_URL}/${type}/${filmId}?${API_KEY}`)
    const data = await dataFromServer.json()
    if (data.errors) {
      throw new Error(data.errors[0])
    }
    dispatch(setFilmDataAC(data))
  } catch (error) {
    console.warn(error)
    dispatch(setErrorFilmAC(error.message))
  } finally {
    dispatch(fetchingFilmAC(false))
  }
}
