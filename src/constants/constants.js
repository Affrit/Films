export const BASE_URL = 'https://api.themoviedb.org/3'
export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500'
export const API_KEY = 'api_key=d213a0b8d4c80c1b639c6fe4b9cb34ac'

export const SORT_PARAMS = [
  { id: 'popularity.desc', name: 'Popularity(descending)' },
  { id: 'popularity.asc', name: 'Popularity(ascending)' },
  { id: 'vote_average.desc', name: 'Rating(descending)' },
  { id: 'vote_average.asc', name: 'Rating(ascending)' },
  { id: 'release_date.desc', name: 'Release(descending)' },
  { id: 'release_date.asc', name: 'Release(ascending)' },
  { id: 'original_title.desc', name: 'Name(descending)' },
  { id: 'original_title.asc', name: 'Name(ascending)' },
  { id: 'revenue.desc', name: 'revenue(descending)' },
  { id: 'revenue.asc', name: 'revenue(ascending)' },
]
