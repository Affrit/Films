export const isInFavorites = (film, favorites) => {
  return favorites.some(item => item.id === film.id)
}

export const getFavoriteList = (listId) => {
  const favoriteList = JSON.parse(localStorage.getItem(listId))
  return favoriteList
}

export const setFavoriteList = (list, listId) => {
  const newList = JSON.stringify(list)
  localStorage.setItem(listId, newList)
}
