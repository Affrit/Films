import { LOGIN_TYPES } from "./types"
import { FILMS_PAGE_TYPES } from "./types"
import { CURRENT_FILM_PAGE_TYPES } from "./types"

export const authToggle = (newData) => {
  return {
      type: LOGIN_TYPES.SET_AUTH,
      payload: newData
  }
}

//////////////////// FILMS PAGE  //////////////////////////

export const fetchingAC = (newData) => {
  return {
      type: FILMS_PAGE_TYPES.SET_FETCHING,
      payload: newData
  }
}

export const setFilmsAC = (newData) => {
  return {
      type: FILMS_PAGE_TYPES.SET_FILMS_DATA,
      payload: newData
  }
}

export const setErrorAC = (newData) => {
  return {
      type: FILMS_PAGE_TYPES.SET_ERROR,
      payload: newData
  }
}

export const setPageAC = (newData) => {
  return {
      type: FILMS_PAGE_TYPES.SET_PAGE,
      payload: newData
  }
}

export const getFilms = (page, searchWord) => async (dispatch) => {
  try {
    dispatch(fetchingAC(true))
    const dataFromServer = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d213a0b8d4c80c1b639c6fe4b9cb34ac&query=${searchWord || 'war' }&page=${page}&include_adult=true`)
    const data = await dataFromServer.json()
    if (data.errors) {
      throw new Error(data.errors[0])
    }
    console.log(data)
    dispatch(setFilmsAC(data))
  } catch (error) {
    console.warn(error)
    dispatch(setErrorAC(error.message))
  } finally {
    dispatch(fetchingAC(false))
  }
}

//////////////////// CURRENT FILM PAGE  //////////////////////////

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
    const dataFromServer = await fetch(`https://api.themoviedb.org/3/movie/${filmId}?api_key=d213a0b8d4c80c1b639c6fe4b9cb34ac`)
    const data = await dataFromServer.json()
    if (data.errors) {
      throw new Error(data.errors[0])
    }
    console.log(data)
    dispatch(setFilmDataAC(data))
  } catch (error) {
    console.warn(error)
    dispatch(setErrorCurrentAC(error.message))
  } finally {
    dispatch(fetchingCurrentAC(false))
  }
}