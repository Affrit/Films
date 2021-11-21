export const BASE_URL = 'https://api.themoviedb.org/3'
export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500'
export const API_KEY = 'api_key=d213a0b8d4c80c1b639c6fe4b9cb34ac'

export const GENRE_LIST = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
]

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
