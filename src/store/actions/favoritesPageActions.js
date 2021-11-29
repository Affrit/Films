import { FAVORITES_PAGE_TYPES } from "../actions/types";

export const setFavoritesError = (newData) => {
  return {
      type: FAVORITES_PAGE_TYPES.SET_FAVORITES_ERROR,
      payload: newData
  }
}

export const setFavorites = (newData) => {
  return {
      type: FAVORITES_PAGE_TYPES.SET_FAVORITES,
      payload: newData
  }
}

const isInFavorites = (film, favorites) => {
  return favorites.some(item => item.id === film.id)
}

export const favoritesToggle = (film) => async (dispatch, getState) => {
  try {
    const { favoritesPage: { favoritesData } } = getState()
    if (isInFavorites(film, favoritesData)) {
      const newfavoritesData = favoritesData.filter(item => item.id !== film.id)
      dispatch(setFavorites(newfavoritesData))
    } else {
      const newfavoritesData = [...favoritesData, film]
      dispatch(setFavorites(newfavoritesData))
    }
  } catch (error) {
    console.warn(error)
    dispatch(setFavoritesError(error.message))
  } 
}
