export const LOGIN_TYPES = Object.freeze({
  SET_AUTH: 'SET_AUTH',
  SET_AUTH_ERROR: 'SET_AUTH_ERROR'
})

export const MOVIES_PAGE_TYPES = Object.freeze({
  SET_MOVIES_FETCHING: 'SET_MOVIES_FETCHING',
  SET_GENRES_FETCHING: 'SET_GENRES_FETCHING',
  SET_GENRE_LIST: 'SET_GENRE_LIST',
  SET_GENRE: 'SET_GENRE',
  SET_MOVIES_PAGE_ERROR: 'SET_MOVIES_PAGE_ERROR',
  SET_MOVIES_DATA: 'SET_MOVIES_DATA',
  SET_MOVIES_PAGE: 'SET_MOVIES_PAGE',
  SET_SORT_PARAM: 'SET_SORT_PARAM',
  SET_CLEAR_FILTERS: 'SET_CLEAR_FILTERS',
  SET_RELEASE_DATE_GTE: 'SET_RELEASE_DATE_GTE',
  SET_RELEASE_DATE_LTE: 'SET_RELEASE_DATE_LTE',
  SET_RATING_GTE: 'SET_RATING_GTE',
  SET_RATING_LTE: 'SET_RATING_LTE',
})

export const SEARCH_PAGE_TYPES = Object.freeze({
  SET_SEARCH_WORD: 'SET_SEARCH_WORD',
  SET_SEARCH_DATA: 'SET_SEARCH_DATA',
  SET_FETCHING: 'SET_FETCHING',
  SET_SEARCH_PAGE_ERROR: 'SET_SEARCH_PAGE_ERROR',
  SET_SEARCH_PAGE: 'SET_SEARCH_PAGE',
})

export const CURRENT_FILM_PAGE_TYPES = Object.freeze({
  SET_FETCHING: 'SET_FETCHING',
  SET_ERROR: 'SET_ERROR',
  SET_FILM_DATA: 'SET_FILM_DATA',
})
