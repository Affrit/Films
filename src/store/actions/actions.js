import { LOGIN_TYPES } from "./types"
import { FILMS_PAGE_TYPES } from "./types"

export const authToggle = (newData) => {
  return {
      type: LOGIN_TYPES.SET_AUTH,
      payload: newData
  }
}

export const fetchingAC = (newData) => {
  return {
      type: FILMS_PAGE_TYPES.SET_FETCHING,
      payload: newData
  }
}

export const setFilmsAC = (newData) => {
  return {
      type: FILMS_PAGE_TYPES.SET_FILMS,
      payload: newData
  }
}

export const getFilms = (page) => async (dispatch) => {
  try {
    dispatch(fetchingAC(true))
    const dataFromServer = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d213a0b8d4c80c1b639c6fe4b9cb34ac&query=girls&page=${page}&include_adult=true`)
    const films = await dataFromServer.json()
    dispatch(setFilmsAC(films))
  } catch (error) {
    console.log(error)
  } finally {
    dispatch(fetchingAC(false))
  }
}
