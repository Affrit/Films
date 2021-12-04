import { FILM_DETALIS_PAGE_TYPES } from "./types";
import { API } from "../../API/API";

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
    const response = await API.get(`/${type}/${filmId}`)
    dispatch(setFilmData(response.data))
  } catch (error) {
    console.warn(error)
    dispatch(setErrorFilm(error.message))
  } finally {
    dispatch(setFetchingFilm(false))
  }
}
