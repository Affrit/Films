import { CURRENT_FILM_PAGE_TYPES } from "./types"
import { API_KEY } from "../../constants/constants"
import { BASE_URL } from "../../constants/constants"

export const fetchingCurrentAC = (newData) => {
  return {
      type: CURRENT_FILM_PAGE_TYPES.SET_FETCHING,
      payload: newData
  }
}

export const setErrorCurrentAC = (newData) => {
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

export const getCurrentFilm = (filmId) => async (dispatch) => {
  try {
    dispatch(fetchingCurrentAC(true))
    const dataFromServer = await fetch(`${BASE_URL}/movie/${filmId}?${API_KEY}`)
    const data = await dataFromServer.json()
    if (data.errors) {
      throw new Error(data.errors[0])
    }
    dispatch(setFilmDataAC(data))
  } catch (error) {
    console.warn(error)
    dispatch(setErrorCurrentAC(error.message))
  } finally {
    dispatch(fetchingCurrentAC(false))
  }
}
