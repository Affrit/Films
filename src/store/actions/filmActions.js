import { FILM_DETALIS_PAGE_TYPES } from "./types"
import { API_KEY } from "../../constants/constants"
import { BASE_URL } from "../../constants/constants"

export const setFilmData = (newData) => {
  return {
      type: FILM_DETALIS_PAGE_TYPES.SET_FILM_DATA,
      payload: newData
  }
}

export const setFetchingFilm = (newData) => {
  return {
      type: FILM_DETALIS_PAGE_TYPES.SET_FETCHING,
      payload: newData
  }
}

export const setErrorFilm = (newData) => {
  return {
      type: FILM_DETALIS_PAGE_TYPES.SET_ERROR,
      payload: newData
  }
}

export const getFilmDetalis = (filmId, type) => async (dispatch) => {
  try {
    dispatch(setFetchingFilm(true))
    const dataFromServer = await fetch(`${BASE_URL}/${type}/${filmId}?${API_KEY}`)
    const data = await dataFromServer.json()
    if (data.errors) {
      throw new Error(data.errors[0])
    }
    dispatch(setFilmData(data))
  } catch (error) {
    console.warn(error)
    dispatch(setErrorFilm(error.message))
  } finally {
    dispatch(setFetchingFilm(false))
  }
}
