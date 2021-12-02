import { FAVORITES_PAGE_TYPES } from "../actions/types";
import { isInFavorites } from "../../helpers/favoriteHelpers";
import { setFavoriteList } from "../../helpers/favoriteHelpers";

export const setFavoritesError = (newData) => {
  return {
      type: FAVORITES_PAGE_TYPES.SET_FAVORITES_ERROR,
      payload: newData
  }
}

export const setClearFavorites = () => {
  return {
      type: FAVORITES_PAGE_TYPES.SET_CLEAR_FAVORITES
  }
}

export const setFavorites = (newData) => {
  return {
      type: FAVORITES_PAGE_TYPES.SET_FAVORITES,
      payload: newData
  }
}

export const favoritesToggle = (film) => async (dispatch, getState) => {
  try {
    const { favoritesPage: { favoritesData } } = getState()
    const { login: { userData: { username } } } = getState()
    if (isInFavorites(film, favoritesData)) {
      const newfavoritesData = favoritesData.filter(item => item.id !== film.id)
      dispatch(setFavorites(newfavoritesData))
      setFavoriteList(newfavoritesData, username)
    } else {
      const newfavoritesData = [...favoritesData, film]
      dispatch(setFavorites(newfavoritesData))
      setFavoriteList(newfavoritesData, username)
    }
  } catch (error) {
    console.warn(error)
    dispatch(setFavoritesError(error.message))
  } 
}
