export const isInFavorites = (film, favorites) => {
  return favorites.some(item => item.id === film.id)
}